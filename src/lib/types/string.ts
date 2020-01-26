import { IDLTypeDescription } from 'webidl2'

type String = 'DOMString'
export default String

export interface StringTypeDescriptor extends IDLTypeDescription {
  type: String
}

export function isString(typeDescriptor: IDLTypeDescription): typeDescriptor is StringTypeDescriptor {
  return typeDescriptor.type === 'DOMString'
}

export function toNan(value: string): string {
  return `info.GetReturnValue().Set(Nan::New("${value}").ToLocalChecked())`
}
