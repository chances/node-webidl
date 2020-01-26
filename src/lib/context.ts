import { ExtendedAttribute } from 'webidl2'
import * as _attributes from './attributes'

export default class Context {
  readonly implReference: string;

  constructor(implementationReference: string) {
    this.implReference = implementationReference
  }

  public static fromBindAttribute(attributes: ExtendedAttribute[]): Context {
    return new Context(_attributes.bind(attributes))
  }
}
