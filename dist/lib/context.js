"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _attributes = require("./attributes");
class Context {
    constructor(implementationReference) {
        this.implReference = implementationReference;
    }
    static fromBindAttribute(attributes) {
        return new Context(_attributes.bind(attributes));
    }
}
exports.default = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUEyQztBQUUzQyxNQUFxQixPQUFPO0lBRzFCLFlBQVksdUJBQStCO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsdUJBQXVCLENBQUE7SUFDOUMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxVQUErQjtRQUM3RCxPQUFPLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0NBQ0Y7QUFWRCwwQkFVQyJ9