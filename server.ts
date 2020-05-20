import { Application } from 'https://deno.land/x/oak/mod.ts'

const port = 5000

const app = new Application()

console.log(`Server is running on port ${port}`)

await app.listen({ port })
