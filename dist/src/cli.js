"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var package_json_1 = require("../package.json");
program.version(package_json_1.default.version);
program.command('* [file]')
    .description('Generate a Node Addon binding to some C impl given an annotated Web IDL input')
    .option('-o, --out-file <path>', 'redirect generated output to a file')
    .action(function (file, options) {
    var outFile = options['out-file'];
    console.log('Bind input Web IDL file to a C binding impl');
    if (outFile != null) {
        console.log("Written bindings to " + outFile);
    }
});
program.parse(process.argv);
