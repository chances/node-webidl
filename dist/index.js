'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var webidl2_1 = require("webidl2");
var tree = webidl2_1.parse("[Bind=\"add.impl.h\"]\ninterface Add {\n  float add(float x, float y);\n};");
console.log(JSON.stringify(tree));
