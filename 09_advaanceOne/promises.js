const promiseOne = new Promise(function(resolve, reject){
    // Do async tasks 
    // DB cals , cryptography, neetwok

    setTimeout(function(){
        console.log("Task is completed");
        resolve()
    },1000)
}
)

promiseOne.then(function(){
    console.log("promise consumed");
    })
    
    
    
    new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Async Task2 is completed");
            resolve();
        }, 1000);
    }).then(function() {
        console.log("Async 2 resolved");
    });
    
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task3 is completed");
        resolve({id:1, message:"Task3 is completed", status:200, data:[], error:[]});
    }
    ,1000)
}
)


promiseThree.then(function(response){
    console.log("promise consumed", response);
    })






const promiseFour = new Promise (function(resolve,reject){

    setTimeout(function(){
        
    let error = false;
    if(!error)
        {  resolve({id:1, message:"Task3 is completed", status:200, data:[], error:[]})}
      else{
        reject("error something went wrong");
      }
    })
    
    },1000)

promiseFour.then(function(d){

    console.log(d);
    return d.status
    
}).then((status)=>{
    console.log(status);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
    
})


const promisefive = new Promise((resolve, reject)=>{
 
    setTimeout(function(){
        let error = true;
            if (!error){
        resolve({id:2, message:"Task3 is completed", status:200, data:[], error:[]});
    }
    else{
        reject("someething went wrong")
    }    
}
    ,1000)
}
)


async function consumedPromiseFive(){
    const response = await promisefive 
    try {
    console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

// ******************************************* //


async function getuser(){
   try {
    const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers")
    const data = await response.json()
    console.log(data);
    
   } catch (error) {
    console.log("error",error);
    
   }
}
// getuser()

fetch("https://api.freeapi.app/api/v1/public/randomusers")
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data);
})
.catch((error)=>console.log(error));
