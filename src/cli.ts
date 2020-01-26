import * as program from 'commander'
import * as input from './lib/input'
import transform from './index'
import { promisify } from 'util'
import { writeFile } from 'fs'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageSpec = require('../package.json')

type OptionalString = string | undefined
interface Options {
  outFile: OptionalString
}

program.version(packageSpec.version)
  .arguments('[files]')
  .description('Bindings generator for Node Addons given a WebIDL document')
  .option('-o, --out-file <path>', 'redirect generated output to a file')

program.parse(process.argv)

function failWithHelp(): void {
  program.outputHelp()
  process.exit(1)
}

(async () => {
  const files = await input.read(program.args)
  const options = program.opts() as Options

  if (files.length === 0) {
    failWithHelp()
  }

  const output = `#include <nan.h>
${files.map(transform).join('\n\n')}
`

  const outFile = options.outFile
  if (outFile != null) {
    await promisify(writeFile)(outFile, output)
    process.exit(0)
  }

  process.stdout.write(output)
})().catch((err: Error) => {
  const errorMessage = `${err.stack ?? 'Unexpected error'}

Please report issues at https://github.com/chances/node-webidl/issues/new`
  console.error(errorMessage)
  process.exit(2)
})
