const myPromise = new Promise ((resolve,reject)=>{
    let connect = true ;
    if (connect){
        resolve("connection estaplish");
    }else{
        reject(Error("connection is failed"));
    }
});

myPromise.then(
(resolved)=> console.log(resolve),
(rejected)=>console.log(reject)
)