// alert("Hello")
let msg = "Hello JavaScript";

const UserName = prompt("Enter your name");
alert("Hello " + UserName)

const userAge = Number(prompt("Enter your age"));
alert("Your age is " + userAge);

const nextAge = add(userAge, 1);
alert("Your nextAge should be " + nextAge);

if(userAge >= 18){
    alert("You are adult");
}else{
    alert("You are underAge");
}

function add(a,b){
    const result = a + b;
    return result;
}
