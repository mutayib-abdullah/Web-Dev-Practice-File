const fs = require("fs")
// const fs = require("fs/promises")
// console.log(fs);

console.log("starting");

// fs.writeFileSync("mutti.txt","Mutti is a good boy")
fs.writeFile("mutti2.txt", "mutti is a bad boy" , ()=>{
    console.log("done");
    fs.readFile("mutti2.txt", (error,data)=>{
        console.log(error,data.toString());
        
    })
})
    fs.appendFile("mutti.txt","muttiabdu", (e,d)=>{
        console.log(d);
        
})
console.log("ending");
