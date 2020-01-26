"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("../assert");
const attributes = require("../attributes");
function default_1(operation) {
    var _a, _b, _c, _d, _e;
    const overrides = {
        name: attributes.name(operation.extAttrs)
    };
    const returnTypeDescriptor = operation.idlType;
    assert_1.default(((_a = returnTypeDescriptor) === null || _a === void 0 ? void 0 : _a.type) === 'return-type');
    assert_1.default(typeof ((_b = returnTypeDescriptor) === null || _b === void 0 ? void 0 : _b.idlType) === 'string');
    const returnType = (_c = returnTypeDescriptor) === null || _c === void 0 ? void 0 : _c.idlType;
    assert_1.default(operation.name !== null, 'Interface operation members require names');
    const methodName = (_e = (_d = overrides) === null || _d === void 0 ? void 0 : _d.name, (_e !== null && _e !== void 0 ? _e : operation.name));
    return `${returnType} ${methodName}(napi_env env, napi_callback_info args) {
  napi_status status;

  // status = napi_create_string_utf8(env, "world", NAPI_AUTO_LENGTH, &greeting);
  // if (status != napi_ok) return nullptr;
  // return greeting;
}`;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3R5cGVzL2Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQThCO0FBQzlCLDRDQUEyQztBQUUzQyxtQkFBeUIsU0FBOEI7O0lBQ3JELE1BQU0sU0FBUyxHQUFHO1FBQ2hCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7S0FDMUMsQ0FBQTtJQUNELE1BQU0sb0JBQW9CLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQTtJQUM5QyxnQkFBTSxDQUFDLE9BQUEsb0JBQW9CLDBDQUFFLElBQUksTUFBSyxhQUFhLENBQUMsQ0FBQTtJQUNwRCxnQkFBTSxDQUFDLGNBQU8sb0JBQW9CLDBDQUFFLE9BQU8sQ0FBQSxLQUFLLFFBQVEsQ0FBQyxDQUFBO0lBQ3pELE1BQU0sVUFBVSxTQUFHLG9CQUFvQiwwQ0FBRSxPQUFPLENBQUE7SUFDaEQsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSwyQ0FBMkMsQ0FBQyxDQUFBO0lBQzVFLE1BQU0sVUFBVSxlQUFXLFNBQVMsMENBQUUsSUFBSSx1Q0FBSSxTQUFTLENBQUMsSUFBSSxFQUFBLENBQUE7SUFFNUQsT0FBTyxHQUFHLFVBQVUsSUFBSSxVQUFVOzs7Ozs7RUFNbEMsQ0FBQTtBQUNGLENBQUM7QUFsQkQsNEJBa0JDIn0=