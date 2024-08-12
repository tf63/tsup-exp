import { foo as foo_tsup } from '@tf63/sample-package-tsup'
import { foo as foo_vite } from '@tf63/sample-package-vite'

const main = () => {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(`tsup: ${foo_tsup}`)
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(`vite: ${foo_vite}`)
}

main()
