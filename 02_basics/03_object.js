
//singleton
//Object.create

//object literals

const mySym = Symbol("key1")
// console.log(mySym);

const JsUser = {
    name : "Akash",
    "Full name":"Akash Singh",
    [mySym] : "mykey1",
    age : 18,
    location : "haridwar",
    email : "akashrwt07@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "akashrwt07.com"
// Object.freeze(JsUser)
JsUser.email = "akash@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());