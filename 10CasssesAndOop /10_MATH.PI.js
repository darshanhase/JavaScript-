// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


console.log(Object.getOwnPropertyDescriptor(Math, "PI"))

const chai  = {
 name : "tea",
 price : 250,
 isAvailable : true

}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable : false
    
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}