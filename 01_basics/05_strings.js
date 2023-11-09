const name = "Akash"
const repoCount = 10


// console.log(name + repoCount + " Value");      // this is not a modern type to print

console.log(` Hello my name is ${name} and my repo count is ${repoCount} `);


const gameName = new String('akashsingh')

console.log(gameName[0]);    //a
console.log(gameName.__proto__);  //{}
console.log(gameName.length);  //10
console.log(gameName.toUpperCase());  //AKASHSINGH

console.log(gameName.charAt(2)); //a
console.log(gameName.indexOf('s')); //3

const newString = gameName.substring(0,4)  
console.log(newString);                         //akas

const anotherString = gameName.slice(-8,4)
console.log(anotherString);                     //as


const newStringOne = "  akash     "
console.log(newStringOne);
console.log(newStringOne.trim()); //akash


const url ="https://akash.com/akash%20singh"

console.log(url.replace('%20','-'));
