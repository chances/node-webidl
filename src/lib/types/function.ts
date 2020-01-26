import { OperationMemberType } from 'webidl2'
import assert from '../assert'
import * as attributes from '../attributes'

export default function (operation: OperationMemberType): string {
  const overrides = {
    name: attributes.name(operation.extAttrs)
  }
  const returnTypeDescriptor = operation.idlType
  assert(returnTypeDescriptor?.type === 'return-type')
  assert(typeof returnTypeDescriptor?.idlType === 'string')
  const returnType = returnTypeDescriptor?.idlType
  assert(operation.name !== null, 'Interface operation members require names')
  const methodName: string = overrides?.name ?? operation.name

  return `${returnType} ${methodName}(napi_env env, napi_callback_info args) {
  napi_status status;

  // status = napi_create_string_utf8(env, "world", NAPI_AUTO_LENGTH, &greeting);
  // if (status != napi_ok) return nullptr;
  // return greeting;
}`
}
