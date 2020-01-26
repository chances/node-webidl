"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const input = require("./lib/input");
const index_1 = require("./index");
const util_1 = require("util");
const fs_1 = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageSpec = require('../package.json');
program.version(packageSpec.version)
    .arguments('[files]')
    .description('Bindings generator for Node Addons given a WebIDL document')
    .option('-o, --out-file <path>', 'redirect generated output to a file');
program.parse(process.argv);
function failWithHelp() {
    program.outputHelp();
    process.exit(1);
}
(async () => {
    const files = await input.read(program.args);
    const options = program.opts();
    if (files.length === 0) {
        failWithHelp();
    }
    const output = files.map(index_1.default).join('\n\n');
    const outFile = options['out-file'];
    if (outFile != null) {
        await util_1.promisify(fs_1.writeFile)(outFile, output);
        process.exit(0);
    }
    await util_1.promisify(process.stdout.write)(output);
})().catch((err) => {
    var _a;
    const errorMessage = `${_a = err.stack, (_a !== null && _a !== void 0 ? _a : 'Unexpected error')}

Please report issues at https://github.com/chances/node-webidl/issues/new`;
    console.error(errorMessage);
    process.exit(2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFvQztBQUNwQyxxQ0FBb0M7QUFDcEMsbUNBQStCO0FBQy9CLCtCQUFnQztBQUNoQywyQkFBOEI7QUFFOUIsOERBQThEO0FBQzlELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBTzlDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztLQUNqQyxTQUFTLENBQUMsU0FBUyxDQUFDO0tBQ3BCLFdBQVcsQ0FBQyw0REFBNEQsQ0FBQztLQUN6RSxNQUFNLENBQUMsdUJBQXVCLEVBQUUscUNBQXFDLENBQUMsQ0FBQTtBQUV6RSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUUzQixTQUFTLFlBQVk7SUFDbkIsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDakIsQ0FBQztBQUVELENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDVixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzVDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQWEsQ0FBQTtJQUV6QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLFlBQVksRUFBRSxDQUFBO0tBQ2Y7SUFFRCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLGVBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVoRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDbkMsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ25CLE1BQU0sZ0JBQVMsQ0FBQyxjQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNoQjtJQUVELE1BQU0sZ0JBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQy9DLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBVSxFQUFFLEVBQUU7O0lBQ3hCLE1BQU0sWUFBWSxHQUFHLEdBQUcsS0FBQSxHQUFHLENBQUMsS0FBSyx1Q0FBSSxrQkFBa0IsQ0FBQTs7MEVBRWlCLENBQUE7SUFDeEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pCLENBQUMsQ0FBQyxDQUFBIn0=