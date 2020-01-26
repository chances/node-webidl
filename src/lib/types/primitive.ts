import { IDLTypeDescription } from 'webidl2'
import Numeric, { isNumeric } from './numeric'

type Primitive = 'boolean' | Numeric
export default Primitive

export interface PrimitiveTypeDescriptor extends IDLTypeDescription {
  type: Primitive
}

export function isPrimitive(typeDescriptor: IDLTypeDescription): typeDescriptor is PrimitiveTypeDescriptor {
  return isNumeric(typeDescriptor) || typeDescriptor.type === 'boolean'
}

export function toNan(value: string): string {
  // See https://github.com/fcanas/node-native-boilerplate/blob/9d6c363ebd06e1c44c8725b196e6ac2cc557dd4d/functions.cc
  return `info.GetReturnValue().Set(${value})`
}
