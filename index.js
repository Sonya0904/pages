// setTimeout(()=>{
//   console.log("Hello!");
// }, 2000);

// setTimeout(() => {
//     console.log("Loading...");
// }, 5000)

// const name = "Alex";

// setTimeout(() => {
//     console.log("Hello, "+name);
// }, 1000);

// function sayHello() {
//     console.log("hello!");
// }

// setTimeout(sayHello, 1500);

// let timerId = setTimeout(() => alert("nothing"), 1000);
// alert(timerId);

// clearTimeout(timerId);
// alert(timerId);

// // setInterval(() => {
// //     console.log("1 second");
// // }, 1000);

// // setInterval(() => {
// //     console.log("tik");
// // }, 3000);

// const intervalId = setInterval(() => {
//     console.log("Boom");
// }, 5000);
 
// clearInterval(intervalId);

// let count = 1;

// const interval = setInterval(() => {
//     console.log(count);
    
//     if(count===5){
//        clearInterval(interval);
//     }

//     count++;
// }, 1000);

// const timeout = setTimeout(() => {
//     console.log("5 second");
// }, 5000);

// setTimeout(() => {
//     clearTimeout(timeout);
//     console.log("stop");
// }, 2000);


// const btn = document.querySelector("button");

// btn.addEventListener("click",() => {
//     setTimeout(() => {
//     alert("Ready");
//     }, 2000);
// });

// const btn1 = document.querySelector("button");

// btn.addEventListener("click",() => {
//     setTimeout(() => {
//     alert("Okey");
//     }, 1000);
// });


// let i = 5;

// const intervalId1 = setInterval(() => {
//     console.log(i);
//     i--;
//     if(i===0){
//        console.log("Start")
//        clearInterval(intervalId1);
//     }

    
// }, 1000);


// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");

// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");


let value = 42;
console.log(typeof value);


let x = 10;
let y = 20;
console.log((x+y)/2);



let firstname = "Anna";
let lastName = "Ivanova";

console.log(firstname+" "+lastName);

let text = "JavaScript";
console.log(text.length);

let city = "Minsk";
console.log(city.toUpperCase());

let x1 = "5";
let y1 = 5;

console.log(x1==y1);
console.log(x1===y1);

let number = 8;
if((number%2) == 0){
    console.log("Chetnoe");
} else{
    console.log("No");
}

let num=-3;
if(num>0){
    console.log("+");
}else{
    console.log("-");
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(array);
console.log(array[0]);
console.log(array[14]);

console.log(array.length);
array.push(16);
console.log(array);
array.unshift(0);
console.log(array);

let User = {
   name: "Anna",
   age: 13,
   city:"Minsk",
   favoriteFood: ["pizza","syshi"]
};
console.log(User.age+" "+User.favoriteFood);

User.age = 14;
console.log(User.age);

function calcDiscunt(price,percent){
    console.log(price-(price*percent/100));
}

calcDiscunt(1000,15);

let normalLogin = (login) => login.trim().toLowerCase();




function generatePassword(length){
    let str = "kgfkhotrpkdorgmriSGKOEKGDK59863$%^&*)#@";
    let password = "";
  
    for(let i=0;i<str.length;i++){
      let rand = Math.floor(Math.random()*str.length);
      password += str[rand];
    }
    
    return password;
};

generatePassword(7);




