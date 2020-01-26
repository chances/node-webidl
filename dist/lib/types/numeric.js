"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNumeric(typeDescriptor) {
    const type = typeof typeDescriptor !== 'string'
        ? typeDescriptor.idlType
        : typeDescriptor;
    switch (type) {
        case 'byte':
        case 'octet':
        case 'short':
        case 'unsigned short':
        case 'long':
        case 'unsigned long':
        case 'long long':
        case 'unsigned long long':
        case 'float':
        case 'unrestricted float':
        case 'double':
        case 'unrestricted double':
            return true;
        default:
            return false;
    }
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdHlwZXMvbnVtZXJpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVNBLFNBQWdCLFNBQVMsQ0FBQyxjQUEyQztJQUNuRSxNQUFNLElBQUksR0FBRyxPQUFPLGNBQWMsS0FBSyxRQUFRO1FBQzdDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBaUI7UUFDbEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQTtJQUNsQixRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxPQUFPLENBQUM7UUFDYixLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssZ0JBQWdCLENBQUM7UUFDdEIsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLGVBQWUsQ0FBQztRQUNyQixLQUFLLFdBQVcsQ0FBQztRQUNqQixLQUFLLG9CQUFvQixDQUFDO1FBQzFCLEtBQUssT0FBTyxDQUFDO1FBQ2IsS0FBSyxvQkFBb0IsQ0FBQztRQUMxQixLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUsscUJBQXFCO1lBQ3hCLE9BQU8sSUFBSSxDQUFBO1FBQ2I7WUFDRSxPQUFPLEtBQUssQ0FBQTtLQUNmO0FBQ0gsQ0FBQztBQXJCRCw4QkFxQkMifQ==