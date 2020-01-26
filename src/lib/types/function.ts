import { OperationMemberType, IDLTypeDescription, Argument } from 'webidl2'
import assert from '../assert'
import * as attributes from '../attributes'
import { numerics, primitives, strings } from '../types'

const unsupportedTypesError = 'Unions and generic types are not supported'

export default function (operation: OperationMemberType): string {
  const overrides = {
    name: attributes.name(operation.extAttrs)
  }
  assert(operation.name !== null, 'Interface operation members require names')
  const methodName = overrides?.name ?? operation.name
  const boundMethodName = attributes.bindOptional(operation.extAttrs) ?? operation.name
  const boundParameters = operation.arguments.map((param, index) =>
    convertArgumentToBoundParameter(param, index))
  const boundMethodCall = `${boundMethodName}(${boundParameters.map(param => param.name).join(', ')})`
  const returnTypeDescriptor = operation.idlType
  assert(returnTypeDescriptor?.type === 'return-type')
  assert(typeof returnTypeDescriptor?.idlType === 'string', unsupportedTypesError)
  const convertReturnValue = returnTypeToNan(returnTypeDescriptor)

  return `NAN_METHOD(${methodName});
NAN_METHOD(${methodName}) {
  if (info.Length() < ${operation.arguments.length.toString()}) {
    info.GetIsolate()->ThrowException(Nan::New("Function ${methodName} called with unspecified arguments").ToLocalChecked());
    return;
  }
  ${operation.arguments.map(guardArgumentType).join('\n').trimLeft()}
  // Try to get parameters from the VM
  ${boundParameters.map(param => param.bind).join('\n').trimLeft()}
  // Call bound method
  ${convertReturnValue(boundMethodCall)};
}`
}

function guardArgumentType(param: Argument, index: number): string {
  let v8Type: string
  let v8IsCheck: string
  if (numerics.isNumeric(param.idlType)) {
    v8Type = 'Number'
    v8IsCheck = 'IsNumber'
  } else if (strings.isString(param.idlType)) {
    v8Type = 'String'
    v8IsCheck = 'IsString'
  } else if (param.idlType.type === 'boolean') {
    v8Type = 'Boolean'
    v8IsCheck = 'IsBoolean'
  } else {
    throw new Error(unsupportedTypesError)
  }
  return `  // Ensure ${param.name} is a ${v8Type}
  if (info[${String(index)}]->${v8IsCheck}() == false) {
    info.GetIsolate()->ThrowException(Nan::New("Function parameter ${param.name} type mismatch: Expected ${v8Type}").ToLocalChecked());
    return;
  }`
}

function convertArgumentToBoundParameter(param: Argument, index: number): { name: string, bind: string } {
  let nativeType: string
  let v8Type: string
  let v8ConvertFn: string
  if (numerics.isNumeric(param.idlType)) {
    nativeType = 'double'
    v8Type = 'Number'
    v8ConvertFn = 'Value'
  } else if (param.idlType.idlType === 'boolean') {
    nativeType = 'bool'
    v8Type = 'Boolean'
    v8ConvertFn = 'Value'
  } else {
    throw new Error(unsupportedTypesError)
  }

  return {
    name: `_${param.name}`,
    bind: `  ${nativeType} _${param.name};
  v8::MaybeLocal<v8::${v8Type}> _${param.name}Maybe = info[${String(index)}]->${v8ConvertFn}();
  if (!_${param.name}Maybe.IsEmpty()) {
    _${param.name} = _${param.name}Maybe.ToLocalChecked().Value();
  } else {
    info.GetIsolate()->ThrowException(Nan::New("Function parameter ${param.name} is empty: Expected ${v8Type}").ToLocalChecked());
    return;
  }`
  }
}

function returnTypeToNan(type: IDLTypeDescription): (value: string) => string {
  if (primitives.isPrimitive(type)) {
    return primitives.toNan
  }
  if (strings.isString(type)) {
    return strings.toNan
  }
  throw new Error(unsupportedTypesError)
}
