const name = "Akash"
const repoCount = 10


// console.log(name + repoCount + " Value");      // this is not a modern type to print

console.log(` Hello my name is ${name} and my repo count is ${repoCount} `);


const gameName = new String('akashsingh')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "  akash     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://akash.com/akash%20singh"

console.log(url.replace('%20','-'));
