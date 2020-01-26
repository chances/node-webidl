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
    return stripSurroundingQuotes(valueDescriptor.value);
}
exports.namedString = namedString;
function namedStringOptional(name, attributes) {
    const _attribute = attribute(name, attributes);
    if (_attribute === undefined || _attribute.name !== name) {
        return null;
    }
    const valueDescriptor = _attribute.rhs;
    if (valueDescriptor.type !== 'string') {
        return null;
    }
    assert_1.default(typeof valueDescriptor.value === 'string');
    return stripSurroundingQuotes(valueDescriptor.value);
}
exports.namedStringOptional = namedStringOptional;
exports.bind = curry(namedString)('Bind');
exports.bindOptional = curry(namedStringOptional)('Bind');
exports.name = curry(namedStringOptional)('Name');
function stripSurroundingQuotes(input) {
    let output = input.split('').join('');
    if (output.startsWith('"')) {
        output = output.substring(1);
    }
    if (output.endsWith('"')) {
        output = output.substr(0, output.length - 1);
    }
    return output;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYXR0cmlidXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFDQUE2QjtBQUM3QixzQ0FBc0M7QUFFdEMsU0FBZ0IsU0FBUyxDQUFDLElBQVksRUFBRSxVQUErQjtJQUNyRSxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQTtJQUM3RCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBSEQsOEJBR0M7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBWSxFQUFFLFVBQStCO0lBQ3ZFLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUMsZ0JBQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUE7SUFDaEMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFBO0lBQ2hDLE1BQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxHQUFrQyxDQUFBO0lBQ3JFLGdCQUFNLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQTtJQUN6QyxnQkFBTSxDQUFDLE9BQU8sZUFBZSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQTtJQUNqRCxPQUFPLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN0RCxDQUFDO0FBUkQsa0NBUUM7QUFFRCxTQUFnQixtQkFBbUIsQ0FBQyxJQUFZLEVBQUUsVUFBK0I7SUFDL0UsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUM5QyxJQUFJLFVBQVUsS0FBSyxTQUFTLElBQUksVUFBVSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDeEQsT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELE1BQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxHQUFrQyxDQUFBO0lBQ3JFLElBQUksZUFBZSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDckMsT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELGdCQUFNLENBQUMsT0FBTyxlQUFlLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFBO0lBQ2pELE9BQU8sc0JBQXNCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3RELENBQUM7QUFYRCxrREFXQztBQUVZLFFBQUEsSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQWdELENBQUE7QUFDaEYsUUFBQSxZQUFZLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUF1RCxDQUFBO0FBQ3ZHLFFBQUEsSUFBSSxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBdUQsQ0FBQTtBQUU1RyxTQUFTLHNCQUFzQixDQUFDLEtBQWE7SUFDM0MsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDckMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzdCO0lBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0tBQzdDO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDIn0=