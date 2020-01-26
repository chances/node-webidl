import { parse, IDLRootType, InterfaceType, IDLInterfaceMemberType, OperationMemberType } from 'webidl2'
import Context from './lib/context'
import assert from './lib/assert'
import _function from './lib/types/function'
import { bindOptional } from './lib/attributes'

export default function (source: string): string {
  return parse(source).filter(isInterface).reduce<string>((output, interfaceDescriptor) => {
    assert(
      bindOptional(interfaceDescriptor.extAttrs) !== null,
      'Interfaces must be annotated with a Bind extended attribute'
    )
    const context = Context.fromBindAttribute(interfaceDescriptor.extAttrs)
    return `${output}

#include "${context.implReference}"

${transformMembers(interfaceDescriptor.members)}`
  }, '').trim()
}

function isInterface(fragment: IDLRootType): fragment is InterfaceType {
  return fragment.type === 'interface'
}

function transformMembers(members: IDLInterfaceMemberType[]): string {
  return members.filter(isOperation).map(op => _function(op)).join('\n\n')
}

function isOperation(member: IDLInterfaceMemberType): member is OperationMemberType {
  return member.type === 'operation'
}
