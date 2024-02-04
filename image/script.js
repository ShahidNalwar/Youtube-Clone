alert("Hello User!")

console.log("Hello Javascript")

var a = prompt("Enter Your Age")
var isTrue = confirm("Are You Sure")

if(isTrue){
    console.log("Your Age is "+ a)
}
else{
    console.log("Your Age is Not "+ a)
}

let d = 10;
let b = 20;
console.log(d + b)

// use let instaed of var

{
    let c = 30;
    console.log(c);
}

// let is block scope c value is 30 inside the block only
// whereas var is global scope available globally

// data types
let u = 55;
let v = "Shahid";
let w = 99.99;
let x = true;
let y = undefined;
let z = null;

console.log(u,v,w,x,y,z)
console.log(typeof u,typeof v,typeof w,typeof x,typeof y,typeof z)

// dictionary in python is object in javascript
let o = {
    "Name": "Shahid",                 //o = object
    "Age": 24
}
console.log(o)
o.profession = "Student";
console.log(o)



