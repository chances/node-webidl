'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// import WebIDL2JS from 'webidl2js'
// const transformer = new WebIDL2JS({ implSuffix: '-impl' })
// transformer.addSource('idl', 'impls')
// transformer.generate('wrappers').catch((err: Error) => {
//   console.error(err.stack)
//   process.exit(1)
// })
var webidl2_1 = require("webidl2");
var tree = webidl2_1.parse("[Bind=add.impl.h]\ninterface Add {\n  float add(float x, float y);\n};");
console.dir(tree);
var text = webidl2_1.write(tree);
console.log("\n" + text);
var validation = webidl2_1.validate(tree);
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
console.log("\n" + validation);
