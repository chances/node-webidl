import { assert } from 'console'

export default function (condition: boolean, message?: string): asserts condition {
  assert(condition, message)
}
