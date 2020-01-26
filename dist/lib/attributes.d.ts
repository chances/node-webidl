import { ExtendedAttribute } from 'webidl2';
export declare function attribute(name: string, attributes: ExtendedAttribute[]): ExtendedAttribute | undefined;
export declare function namedString(name: string, attributes: ExtendedAttribute[]): string;
export declare function namedStringOptional(name: string, attributes: ExtendedAttribute[]): string | null;
export declare const bind: (attributes: ExtendedAttribute[]) => string;
export declare const name: (attributes: ExtendedAttribute[]) => string | null;
