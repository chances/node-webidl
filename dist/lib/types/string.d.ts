import { IDLTypeDescription } from 'webidl2';
declare type String = 'DOMString';
export default String;
export interface StringTypeDescriptor extends IDLTypeDescription {
    type: String;
}
export declare function isString(typeDescriptor: IDLTypeDescription): typeDescriptor is StringTypeDescriptor;
export declare function toNan(value: string): string;
