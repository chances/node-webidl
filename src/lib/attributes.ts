import { ExtendedAttribute, ValueDescription } from 'webidl2'
import assert from './assert'
import curry = require('lodash.curry')

export function attribute(name: string, attributes: ExtendedAttribute[]): ExtendedAttribute | undefined {
  const attribute = attributes.find(attr => attr.name === name)
  return attribute
}

export function namedString(name: string, attributes: ExtendedAttribute[]): string {
  const _attribute = attribute(name, attributes)
  assert(_attribute !== undefined)
  assert(_attribute.name === name)
  const valueDescriptor = _attribute.rhs as unknown as ValueDescription
  assert(valueDescriptor.type === 'string')
  assert(typeof valueDescriptor.value === 'string')
  return valueDescriptor.value
}

export function namedStringOptional(name: string, attributes: ExtendedAttribute[]): string | null {
  const _attribute = attribute(name, attributes)
  if (_attribute === undefined || _attribute.name !== name) {
    return null
  }
  const valueDescriptor = _attribute.rhs as unknown as ValueDescription
  if (valueDescriptor.type === 'string' || typeof valueDescriptor.value === 'string') {
    return null
  }
  assert(typeof valueDescriptor.value === 'string')
  return valueDescriptor.value
}

export const bind = curry(namedString)('Bind') as (attributes: ExtendedAttribute[]) => string
export const name = curry(namedStringOptional)('Name') as (attributes: ExtendedAttribute[]) => string | null