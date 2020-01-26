"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("./assert");
var curry = require("lodash.curry");
function attribute(name, attributes) {
    var attribute = attributes.find(function (attr) { return attr.name === name; });
    return attribute;
}
exports.attribute = attribute;
function namedString(name, attributes) {
    var _attribute = attribute(name, attributes);
    assert_1.default(_attribute !== undefined);
    assert_1.default(_attribute.name === name);
    var valueDescriptor = _attribute.rhs;
    assert_1.default(valueDescriptor.type === 'string');
    assert_1.default(typeof valueDescriptor.value === 'string');
    return valueDescriptor.value;
}
exports.namedString = namedString;
function namedStringOptional(name, attributes) {
    var _attribute = attribute(name, attributes);
    if (_attribute === undefined || _attribute.name !== name) {
        return null;
    }
    var valueDescriptor = _attribute.rhs;
    if (valueDescriptor.type === 'string' || typeof valueDescriptor.value === 'string') {
        return null;
    }
    assert_1.default(typeof valueDescriptor.value === 'string');
    return valueDescriptor.value;
}
exports.namedStringOptional = namedStringOptional;
exports.bind = curry(namedString)('Bind');
exports.name = curry(namedStringOptional)('Name');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUE2QjtBQUM3QixvQ0FBc0M7QUFFdEMsU0FBZ0IsU0FBUyxDQUFDLElBQVksRUFBRSxVQUErQjtJQUNyRSxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQTtJQUM3RCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBSEQsOEJBR0M7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBWSxFQUFFLFVBQStCO0lBQ3ZFLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUMsZ0JBQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUE7SUFDaEMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFBO0lBQ2hDLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxHQUFrQyxDQUFBO0lBQ3JFLGdCQUFNLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQTtJQUN6QyxnQkFBTSxDQUFDLE9BQU8sZUFBZSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQTtJQUNqRCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUE7QUFDOUIsQ0FBQztBQVJELGtDQVFDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsSUFBWSxFQUFFLFVBQStCO0lBQy9FLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUMsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFDRCxJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsR0FBa0MsQ0FBQTtJQUNyRSxJQUFJLGVBQWUsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sZUFBZSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDbEYsT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELGdCQUFNLENBQUMsT0FBTyxlQUFlLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFBO0lBQ2pELE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQTtBQUM5QixDQUFDO0FBWEQsa0RBV0M7QUFFWSxRQUFBLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFnRCxDQUFBO0FBQ2hGLFFBQUEsSUFBSSxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBdUQsQ0FBQSJ9