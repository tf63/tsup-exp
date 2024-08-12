import { foo as foo_tsup } from '@repo/tsup'
import { foo as foo_vite } from '@repo/vite'

const main = () => {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(`tsup: ${foo_tsup}`)
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(`vite: ${foo_vite}`)
}

main()
