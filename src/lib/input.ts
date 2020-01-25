import { promisify } from 'util'
import * as fs from 'fs'
import getStdin = require('get-stdin')

export async function read(args: string[]): Promise<string[]> {
  const readFile = promisify(fs.readFile)
  const fileContentPromises = args.map(async file => {
    if (!fs.existsSync(file)) {
      throw new Error(`File not found: ${file}`)
    }
    return readFile(file).then(content => content.toString())
  })

  // Read from stdin if no input files are given
  if (fileContentPromises.length === 0) {
    const content = await getStdin()
    if (content.length !== 0) {
      fileContentPromises.push(Promise.resolve(content))
    }
  }

  return Promise.all(fileContentPromises)
}
