const flag = true;
const flag2 = true;

const  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(flag) resolve ("TODO OK");
        else reject ("TODO MAL");
    }, 2000)
})

promise
.then((value)=> {new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(flag2) resolve (()=> {return console.log("TODO OK flag2")});
        else reject ("TODO MAL flag2");
    }, 2000)
})})
//.then((value)=> {return value})
//.catch((error)=>  console.log("Hubo un error, no se que paso"))