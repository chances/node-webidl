import * as numericTypes from './numeric';
import Primitive, * as primitiveTypes from './primitive';
import String, * as stringType from './string';
declare type Types = 'void' | Primitive | String | 'object';
export default Types;
export declare const numerics: {
    isNumeric(typeDescriptor: string | import("webidl2").IDLTypeDescription): typeDescriptor is numericTypes.NumericTypeDescriptor;
};
export declare const primitives: {
    isPrimitive(typeDescriptor: import("webidl2").IDLTypeDescription): typeDescriptor is primitiveTypes.PrimitiveTypeDescriptor;
    toNan(value: string): string;
};
export declare const strings: {
    isString(typeDescriptor: import("webidl2").IDLTypeDescription): typeDescriptor is stringType.StringTypeDescriptor;
    toNan(value: string): string;
};
