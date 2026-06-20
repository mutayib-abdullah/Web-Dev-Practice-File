async function getData(){
return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(455)
    },3500);
})
}

async function main(){

    console.log("Loading Module");
    console.log("Do somethig Else");
    console.log("Load Data");
    let data = await getData()
    console.log(data);
    console.log("Process Data");
    console.log("Task 2");
    
}
main()