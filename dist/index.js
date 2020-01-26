"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webidl2_1 = require("webidl2");
var context_1 = require("./lib/context");
var assert_1 = require("./lib/assert");
var function_1 = require("./lib/types/function");
function default_1(source) {
    return webidl2_1.parse(source).filter(isInterface).reduce(function (output, interfaceDescriptor) {
        assert_1.default(interfaceDescriptor.extAttrs.length > 0, 'Interfaces must be annotated with a Bind extended attribute');
        var context = context_1.default.fromBindAttribute(interfaceDescriptor.extAttrs);
        return output + "\n\n#include \"" + context.implReference + "\"\n\n" + transformMembers(interfaceDescriptor.members);
    }, '').trim();
}
exports.default = default_1;
function isInterface(fragment) {
    return fragment.type === 'interface';
}
function transformMembers(members) {
    return members.filter(isOperation).map(function (op) { return function_1.default(op); }).join('\n\n');
}
function isOperation(member) {
    return member.type === 'operation';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBd0c7QUFDeEcseUNBQW1DO0FBQ25DLHVDQUFpQztBQUNqQyxpREFBNEM7QUFFNUMsbUJBQXlCLE1BQWM7SUFDckMsT0FBTyxlQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBUyxVQUFDLE1BQU0sRUFBRSxtQkFBbUI7UUFDbEYsZ0JBQU0sQ0FDSixtQkFBbUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDdkMsNkRBQTZELENBQzlELENBQUE7UUFDRCxJQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZFLE9BQVUsTUFBTSx1QkFFUixPQUFPLENBQUMsYUFBYSxjQUUvQixnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUcsQ0FBQTtJQUMvQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7QUFDZixDQUFDO0FBYkQsNEJBYUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUFxQjtJQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFBO0FBQ3RDLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLE9BQWlDO0lBQ3pELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxrQkFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUMxRSxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsTUFBOEI7SUFDakQsT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQTtBQUNwQyxDQUFDIn0=