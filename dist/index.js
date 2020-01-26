"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webidl2_1 = require("webidl2");
const context_1 = require("./lib/context");
const assert_1 = require("./lib/assert");
const function_1 = require("./lib/types/function");
function default_1(source) {
    return webidl2_1.parse(source).filter(isInterface).reduce((output, interfaceDescriptor) => {
        assert_1.default(interfaceDescriptor.extAttrs.length > 0, 'Interfaces must be annotated with a Bind extended attribute');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBd0c7QUFDeEcsMkNBQW1DO0FBQ25DLHlDQUFpQztBQUNqQyxtREFBNEM7QUFFNUMsbUJBQXlCLE1BQWM7SUFDckMsT0FBTyxlQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBUyxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxFQUFFO1FBQ3RGLGdCQUFNLENBQ0osbUJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3ZDLDZEQUE2RCxDQUM5RCxDQUFBO1FBQ0QsTUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2RSxPQUFPLEdBQUcsTUFBTTs7WUFFUixPQUFPLENBQUMsYUFBYTs7RUFFL0IsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQTtJQUMvQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7QUFDZixDQUFDO0FBYkQsNEJBYUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUFxQjtJQUN4QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFBO0FBQ3RDLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLE9BQWlDO0lBQ3pELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzFFLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxNQUE4QjtJQUNqRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFBO0FBQ3BDLENBQUMifQ==