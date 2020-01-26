"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _attributes = require("./attributes");
var Context = /** @class */ (function () {
    function Context(implementationReference) {
        this.implReference = implementationReference;
    }
    Context.fromBindAttribute = function (attributes) {
        return new Context(_attributes.bind(attributes));
    };
    return Context;
}());
exports.default = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBDQUEyQztBQUUzQztJQUdFLGlCQUFZLHVCQUErQjtRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLHVCQUF1QixDQUFBO0lBQzlDLENBQUM7SUFFYSx5QkFBaUIsR0FBL0IsVUFBZ0MsVUFBK0I7UUFDN0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQyJ9