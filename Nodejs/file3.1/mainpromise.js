import fs from "fs/promises"
let a = await fs.readFile("mutti.txt")
let b = await fs.writeFile("mutti.txt", "\nthis is amazing promise")
console.log(a.toString(), b);
