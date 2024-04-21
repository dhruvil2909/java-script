// primitive

// 7 types : string, number, boolen, null, undefined, symbol, bigint

// const score = 100
// const scoreValue = 100.1

// const isLoggedIn = true
const outsideTemp = null

// let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// non primitive( reference)
// array, function, objects

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

 console.log(typeof myObj);

// **********************************************************
// stack(primitive) heap(non-primitive)

let myyoutubename = "dhruvil jethava"

let anothername = myyoutubename
anothername = "prajapati"

// console.log(myyoutubename);
// console.log(anothername);

let userone = {
    email:"dhruvil@gmail.com",
    upi: "dhruvil@ybl"
}
let usertwo=userone

usertwo.email="dj@gmail.com"

  console.log(userone.email);
  console.log(usertwo.email);


