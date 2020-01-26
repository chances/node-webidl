import { IDLTypeDescription } from 'webidl2'

type Numeric = 'byte' | 'octet' | 'short' | 'unsigned short' | 'long' | 'unsigned long' | 'long long' | 'unsigned long long' | 'float' | 'unrestricted float' | 'double' | 'unrestricted double'
export default Numeric

export interface NumericTypeDescriptor extends IDLTypeDescription {
  type: Numeric
}

export function isNumeric(typeDescriptor: string | IDLTypeDescription): typeDescriptor is NumericTypeDescriptor {
  const type = typeof typeDescriptor !== 'string'
    ? typeDescriptor.idlType as string
    : typeDescriptor
  switch (type) {
    case 'byte':
    case 'octet':
    case 'short':
    case 'unsigned short':
    case 'long':
    case 'unsigned long':
    case 'long long':
    case 'unsigned long long':
    case 'float':
    case 'unrestricted float':
    case 'double':
    case 'unrestricted double':
      return true
    default:
      return false
  }
}
