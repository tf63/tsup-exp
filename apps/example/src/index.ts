import { foo } from '@repo/tsup'

const main = () => {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(foo)
}

main()
