'use strict'
import { parse } from 'webidl2'
const tree = parse(`[Bind="add.impl.h"]
interface Add {
  float add(float x, float y);
};`)
console.log(JSON.stringify(tree))
