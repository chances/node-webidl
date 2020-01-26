"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeric_1 = require("./numeric");
function isPrimitive(typeDescriptor) {
    return numeric_1.isNumeric(typeDescriptor) || typeDescriptor.type === 'boolean';
}
exports.isPrimitive = isPrimitive;
function toNan(value) {
    // See https://github.com/fcanas/node-native-boilerplate/blob/9d6c363ebd06e1c44c8725b196e6ac2cc557dd4d/functions.cc
    return `info.GetReturnValue().Set(${value})`;
}
exports.toNan = toNan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90eXBlcy9wcmltaXRpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBOEM7QUFTOUMsU0FBZ0IsV0FBVyxDQUFDLGNBQWtDO0lBQzVELE9BQU8sbUJBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQTtBQUN2RSxDQUFDO0FBRkQsa0NBRUM7QUFFRCxTQUFnQixLQUFLLENBQUMsS0FBYTtJQUNqQyxtSEFBbUg7SUFDbkgsT0FBTyw2QkFBNkIsS0FBSyxHQUFHLENBQUE7QUFDOUMsQ0FBQztBQUhELHNCQUdDIn0=