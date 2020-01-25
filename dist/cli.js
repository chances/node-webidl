"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var input = require("./lib/input");
// eslint-disable-next-line @typescript-eslint/no-var-requires
var packageSpec = require('../package.json');
program.version(packageSpec.version)
    .arguments('[files]')
    .description('Bindings generator for Node Addons given a WebIDL document')
    .option('-o, --out-file <path>', 'redirect generated output to a file');
program.parse(process.argv);
function failWithHelp() {
    program.outputHelp();
    process.exit(1);
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var files, options, outFile;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, input.read(program.args)];
            case 1:
                files = _a.sent();
                options = program.opts();
                if (files.length === 0) {
                    failWithHelp();
                }
                outFile = options['out-file'];
                console.log('Bind input Web IDL file to a C binding impl');
                if (outFile != null) {
                    console.log("Written bindings to " + outFile);
                }
                return [2 /*return*/];
        }
    });
}); })().catch(function (err) {
    console.error(err);
    failWithHelp();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFvQztBQUNwQyxtQ0FBb0M7QUFFcEMsOERBQThEO0FBQzlELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBTzlDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztLQUNqQyxTQUFTLENBQUMsU0FBUyxDQUFDO0tBQ3BCLFdBQVcsQ0FBQyw0RUFBNEUsQ0FBQztLQUN6RixNQUFNLENBQUMsdUJBQXVCLEVBQUUscUNBQXFDLENBQUMsQ0FBQTtBQUV6RSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUUzQixTQUFTLFlBQVk7SUFDbkIsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDakIsQ0FBQztBQUVELENBQUM7Ozs7b0JBQ2UscUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUE7O2dCQUF0QyxLQUFLLEdBQUcsU0FBOEI7Z0JBQ3RDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFhLENBQUE7Z0JBRXpDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3RCLFlBQVksRUFBRSxDQUFBO2lCQUNmO2dCQUVLLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQTtnQkFDMUQsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixPQUFTLENBQUMsQ0FBQTtpQkFDOUM7Ozs7S0FDRixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO0lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQixZQUFZLEVBQUUsQ0FBQTtBQUNoQixDQUFDLENBQUMsQ0FBQSJ9