"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("../assert");
const attributes = require("../attributes");
const types_1 = require("../types");
const unsupportedTypesError = 'Unions and generic types are not supported';
function default_1(operation) {
    var _a, _b, _c, _d, _e;
    const overrides = {
        name: attributes.name(operation.extAttrs)
    };
    assert_1.default(operation.name !== null, 'Interface operation members require names');
    const methodName = (_b = (_a = overrides) === null || _a === void 0 ? void 0 : _a.name, (_b !== null && _b !== void 0 ? _b : operation.name));
    const boundMethodName = (_c = attributes.bindOptional(operation.extAttrs), (_c !== null && _c !== void 0 ? _c : operation.name));
    const boundParameters = operation.arguments.map((param, index) => convertArgumentToBoundParameter(param, index));
    const boundMethodCall = `${boundMethodName}(${boundParameters.map(param => param.name).join(', ')})`;
    const returnTypeDescriptor = operation.idlType;
    assert_1.default(((_d = returnTypeDescriptor) === null || _d === void 0 ? void 0 : _d.type) === 'return-type');
    assert_1.default(typeof ((_e = returnTypeDescriptor) === null || _e === void 0 ? void 0 : _e.idlType) === 'string', unsupportedTypesError);
    const convertReturnValue = returnTypeToNan(returnTypeDescriptor);
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
}`;
}
exports.default = default_1;
function guardArgumentType(param, index) {
    let v8Type;
    let v8IsCheck;
    if (types_1.numerics.isNumeric(param.idlType)) {
        v8Type = 'Number';
        v8IsCheck = 'IsNumber';
    }
    else if (types_1.strings.isString(param.idlType)) {
        v8Type = 'String';
        v8IsCheck = 'IsString';
    }
    else if (param.idlType.type === 'boolean') {
        v8Type = 'Boolean';
        v8IsCheck = 'IsBoolean';
    }
    else {
        throw new Error(unsupportedTypesError);
    }
    return `  // Ensure ${param.name} is a ${v8Type}
  if (info[${String(index)}]->${v8IsCheck}() == false) {
    info.GetIsolate()->ThrowException(Nan::New("Function parameter ${param.name} type mismatch: Expected ${v8Type}").ToLocalChecked());
    return;
  }`;
}
function convertArgumentToBoundParameter(param, index) {
    let nativeType;
    let v8Type;
    let v8ConvertFn;
    if (types_1.numerics.isNumeric(param.idlType)) {
        nativeType = 'double';
        v8Type = 'Number';
        v8ConvertFn = 'Value';
    }
    else if (param.idlType.idlType === 'boolean') {
        nativeType = 'bool';
        v8Type = 'Boolean';
        v8ConvertFn = 'Value';
    }
    else {
        throw new Error(unsupportedTypesError);
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
    };
}
function returnTypeToNan(type) {
    if (types_1.primitives.isPrimitive(type)) {
        return types_1.primitives.toNan;
    }
    if (types_1.strings.isString(type)) {
        return types_1.strings.toNan;
    }
    throw new Error(unsupportedTypesError);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3R5cGVzL2Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQThCO0FBQzlCLDRDQUEyQztBQUMzQyxvQ0FBd0Q7QUFFeEQsTUFBTSxxQkFBcUIsR0FBRyw0Q0FBNEMsQ0FBQTtBQUUxRSxtQkFBeUIsU0FBOEI7O0lBQ3JELE1BQU0sU0FBUyxHQUFHO1FBQ2hCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7S0FDMUMsQ0FBQTtJQUNELGdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsMkNBQTJDLENBQUMsQ0FBQTtJQUM1RSxNQUFNLFVBQVUsZUFBRyxTQUFTLDBDQUFFLElBQUksdUNBQUksU0FBUyxDQUFDLElBQUksRUFBQSxDQUFBO0lBQ3BELE1BQU0sZUFBZSxTQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx1Q0FBSSxTQUFTLENBQUMsSUFBSSxFQUFBLENBQUE7SUFDckYsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDL0QsK0JBQStCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDaEQsTUFBTSxlQUFlLEdBQUcsR0FBRyxlQUFlLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNwRyxNQUFNLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUE7SUFDOUMsZ0JBQU0sQ0FBQyxPQUFBLG9CQUFvQiwwQ0FBRSxJQUFJLE1BQUssYUFBYSxDQUFDLENBQUE7SUFDcEQsZ0JB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