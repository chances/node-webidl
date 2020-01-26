import * as numericTypes from './numeric'
import Primitive, * as primitiveTypes from './primitive'
import String, * as stringType from './string'

type Types = 'void' | Primitive | String | 'object'
export default Types

export const numerics = {
  ...numericTypes
}
export const primitives = {
  ...primitiveTypes
}
export const strings = {
  ...stringType
}
