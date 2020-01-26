"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webidl2_1 = require("webidl2");
const context_1 = require("./lib/context");
const assert_1 = require("./lib/assert");
const function_1 = require("./lib/types/function");
const attributes_1 = require("./lib/attributes");
function default_1(source) {
    return webidl2_1.parse(source).filter(isInterface).reduce((output, interfaceDescriptor) => {
        assert_1.default(attributes_1.bindOptional(interfaceDescriptor.extAttrs) !== null, 'Interfaces must be annotated with a Bind extended attribute');
        const context = context_1.default.fromBindAttribute(interfaceDescriptor.extAttrs);
        return `${output}

#include "${context.implReference}"

${transformMembers(interfaceDescriptor.members)}`;
    }, '').trim();
}
exports.default = default_1;
function isInterface(fragment) {
    return fragment.type === 'interface';
}
function transformMembers(members) {
    return members.filter(isOperation).map(op => function_1.default(op)).join('\n\n');
}
function isOperation(member) {
    return member.type === 'operation';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBd0c7QUFDeEcsMkNBQW1DO0FBQ25DLHlDQUFpQztBQUNqQyxtREFBNEM7QUFDNUMsaURBQStDO0FBRS9DLG1CQUF5QixNQUFjO0lBQ3JDLE9BQU8sZUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQVMsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsRUFBRTtRQUN0RixnQkFBTSxDQUNKLHlCQUFZLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUNuRCw2REFBNkQsQ0FDOUQsQ0FBQTtRQUNELE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkUsT0FBTyxHQUFHLE1BQU07O1lBRVIsT0FBTyxDQUFDLGFBQWE7O0VBRS9CLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUE7SUFDL0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0FBQ2YsQ0FBQztBQWJELDRCQWFDO0FBRUQsU0FBUyxXQUFXLENBQUMsUUFBcUI7SUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQTtBQUN0QyxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxPQUFpQztJQUN6RCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUMxRSxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsTUFBOEI7SUFDakQsT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQTtBQUNwQyxDQUFDIn0=