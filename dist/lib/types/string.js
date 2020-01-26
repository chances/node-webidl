"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isString(typeDescriptor) {
    return typeDescriptor.type === 'DOMString';
}
exports.isString = isString;
function toNan(value) {
    return `info.GetReturnValue().Set(Nan::New("${value}").ToLocalChecked())`;
}
exports.toNan = toNan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90eXBlcy9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFTQSxTQUFnQixRQUFRLENBQUMsY0FBa0M7SUFDekQsT0FBTyxjQUFjLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQTtBQUM1QyxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixLQUFLLENBQUMsS0FBYTtJQUNqQyxPQUFPLHVDQUF1QyxLQUFLLHNCQUFzQixDQUFBO0FBQzNFLENBQUM7QUFGRCxzQkFFQyJ9