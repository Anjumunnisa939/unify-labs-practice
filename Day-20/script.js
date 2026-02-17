console.log("Dashboard started");

const status = document.getElementById("status");
const clock = document.getElementById("clock");
const loadBtn = document.getElementById("loadBtn");
const userDiv = document.getElementById("user");
const eventBtn = document.getElementById("eventBtn");
const eventOutput = document.getElementById("eventOutput");


// HOISTING DEMO
hoistedFunction();
function hoistedFunction(){
console.log("Hoisting works");
}


// TDZ DEMO
let tdzVar = "TDZ example";


// setTimeout (loading)
setTimeout(()=>{
status.innerText="System Ready";
},2000);


// setInterval (clock)
setInterval(()=>{
const now = new Date();
clock.innerText = now.toLocaleTimeString();
},1000);


// CALLBACK example
function greet(name, callback){
callback(name);
}

greet("Anjum", function(name){
console.log("Hello " + name);
});


// PROMISE example
function getUserPromise(){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("Promise resolved");
},1000);
});
}

getUserPromise().then(res=>console.log(res));


// ASYNC AWAIT + FETCH
async function loadUser(){

try{

userDiv.innerText="Loading...";

const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

const user = await res.json();

userDiv.innerHTML=`
Name: ${user.name}<br>
Email: ${user.email}<br>
City: ${user.address.city}
`;

}catch(error){

userDiv.innerText="Error loading user";

}

}

loadBtn.addEventListener("click", loadUser);


// EVENT LOOP DEMO
eventBtn.addEventListener("click",()=>{

eventOutput.innerText="Start";

setTimeout(()=>{
eventOutput.innerText+=" → Timeout finished";
},0);

eventOutput.innerText+=" → End";

});


// CLOSURE example
function counter(){
let count=0;
return function(){
count++;
console.log("Count:",count);
}
}

const increment = counter();
increment();
increment();


// CALL STACK demo
function first(){
second();
}

function second(){
third();
}

function third(){
console.log("Call stack executed");
}

first();
