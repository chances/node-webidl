import { IDLTypeDescription } from 'webidl2';
declare type Numeric = 'byte' | 'octet' | 'short' | 'unsigned short' | 'long' | 'unsigned long' | 'long long' | 'unsigned long long' | 'float' | 'unrestricted float' | 'double' | 'unrestricted double';
export default Numeric;
export interface NumericTypeDescriptor extends IDLTypeDescription {
    type: Numeric;
}
export declare function isNumeric(typeDescriptor: string | IDLTypeDescription): typeDescriptor is NumericTypeDescriptor;
