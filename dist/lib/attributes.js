"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("./assert");
const curry = require("lodash.curry");
function attribute(name, attributes) {
    const attribute = attributes.find(attr => attr.name === name);
    return attribute;
}
exports.attribute = attribute;
function namedString(name, attributes) {
    const _attribute = attribute(name, attributes);
    assert_1.default(_attribute !== undefined);
    assert_1.default(_attribute.name === name);
    const valueDescriptor = _attribute.rhs;
    assert_1.default(valueDescriptor.type === 'string');
    assert_1.default(typeof valueDescriptor.value === 'string');
    return valueDescriptor.value;
}
exports.namedString = namedString;
function namedStringOptional(name, attributes) {
    const _attribute = attribute(name, attributes);
    if (_attribute === undefined || _attribute.name !== name) {
        return null;
    }
    const valueDescriptor = _attribute.rhs;
    if (valueDescriptor.type === 'string' || typeof valueDescriptor.value === 'string') {
        return null;
    }
    assert_1.default(typeof valueDescriptor.value === 'string');
    return valueDescriptor.value;
}
exports.namedStringOptional = namedStringOptional;
exports.bind = curry(namedString)('Bind');
exports.name = curry(namedStringOptional)('Name');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFDQUE2QjtBQUM3QixzQ0FBc0M7QUFFdEMsU0FBZ0IsU0FBUyxDQUFDLElBQVksRUFBRSxVQUErQjtJQUNyRSxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQTtJQUM3RCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBSEQsOEJBR0M7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBWSxFQUFFLFVBQStCO0lBQ3ZFLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUMsZ0JBQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUE7SUFDaEMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFBO0lBQ2hDLE1BQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxHQUFrQyxDQUFBO0lBQ3JFLGdCQUFNLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQTtJQUN6QyxnQkFBTSxDQUFDLE9BQU8sZUFBZSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQTtJQUNqRCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUE7QUFDOUIsQ0FBQztBQVJELGtDQVFDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsSUFBWSxFQUFFLFVBQStCO0lBQy9FLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUMsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFDRCxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsR0FBa0MsQ0FBQTtJQUNyRSxJQUFJLGVBQWUsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sZUFBZSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDbEYsT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELGdCQUFNLENBQUMsT0FBTyxlQUFlLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFBO0lBQ2pELE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQTtBQUM5QixDQUFDO0FBWEQsa0RBV0M7QUFFWSxRQUFBLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFnRCxDQUFBO0FBQ2hGLFFBQUEsSUFBSSxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBdUQsQ0FBQSJ9