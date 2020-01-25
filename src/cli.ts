import * as program from 'commander'
import * as input from './lib/input'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageSpec = require('../package.json')

type OptionalString = string | undefined
interface Options {
  'out-file': OptionalString
}

program.version(packageSpec.version)
  .arguments('[files]')
  .description('Generate a Node Addon binding to some C impl given annotated Web IDL input')
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

  const outFile = options['out-file']
  console.log('Bind input Web IDL file to a C binding impl')
  if (outFile != null) {
    console.log(`Written bindings to ${outFile}`)
  }
})().catch(err => {
  console.error(err)
  failWithHelp()
})
