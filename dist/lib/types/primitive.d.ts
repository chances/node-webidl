import { IDLTypeDescription } from 'webidl2';
import Numeric from './numeric';
declare type Primitive = 'boolean' | Numeric;
export default Primitive;
export interface PrimitiveTypeDescriptor extends IDLTypeDescription {
    type: Primitive;
}
export declare function isPrimitive(typeDescriptor: IDLTypeDescription): typeDescriptor is PrimitiveTypeDescriptor;
export declare function toNan(value: string): string;
