console.log('Hello World');

function sayHello(word){
    console.log("Hello "+ word);
}

sayHello("Deanne");

// Method 1
var o = { };
o.name = "Deanne";
o.address = "123 Main Street";
o.age = 19;
o.age += 5;
o.sayHello = function(){
    console.log("Hello object method");
}

o.sayHello();

o.sayHello2 = sayHello;


// Method 2
var o2 = {
    name: "Deanne",
    address: "123 Main Street",
    age: 19 +5,
    sayHello: function(){
        console.log("Hello, object method!!");
    }
};

o2.sayHello();

o2.age +=5;

o2.name = "Mrs. " + o2.name + " Boettcher";

var myArray = ["Apples", "Oranges", "Kiwi"]


console.log(myArray[0]);





console.log(o);
console.log(o2);
