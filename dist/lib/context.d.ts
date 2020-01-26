import { ExtendedAttribute } from 'webidl2';
export default class Context {
    readonly implReference: string;
    constructor(implementationReference: string);
    static fromBindAttribute(attributes: ExtendedAttribute[]): Context;
}
