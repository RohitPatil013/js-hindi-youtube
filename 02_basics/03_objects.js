// singleton        // only in case of we declare our object with constructor

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Rohit",
    "full name" : "Rohit Shantaram Patil",
    [mySym] : "mykey1",
    age : 22,
    location : "Nashik",
    email : "rohit@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);

//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "rohit@datacrushanalytics.com"
//console.log(JsUser.email);

//Object.freeze(JsUser)
JsUser.email = "rohit@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
