"use strict";

function getUser(){

 const name=document.getElementById("name").value;
 const age=document.getElementById("age").value;

 if(!name || !age){

  alert("Please enter name and age");
  return null;

 }

 return {
  name:name,
  age:age
 };

}

// Save LocalStorage
function saveLocal(){

 const user=getUser();

 if(!user) return;

 localStorage.setItem("user",JSON.stringify(user));

 loadAll();

}

// Save SessionStorage
function saveSession(){

 const user=getUser();

 if(!user) return;

 sessionStorage.setItem("user",JSON.stringify(user));

 loadAll();

}

// Save Cookie
function saveCookie(){

 const user=getUser();

 if(!user) return;

 document.cookie="user="+JSON.stringify(user);

 loadAll();

}

// Delete Local
function deleteLocal(){

 localStorage.removeItem("user");

 loadAll();

}

// Delete Session
function deleteSession(){

 sessionStorage.removeItem("user");

 loadAll();

}

// Delete Cookie
function deleteCookie(){

 document.cookie="user=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";

 loadAll();

}

// Load all storage
function loadAll(){

 const local=JSON.parse(localStorage.getItem("user") || "null");

 const session=JSON.parse(sessionStorage.getItem("user") || "null");

 const cookie=getCookie("user");

 document.getElementById("localData").innerText=
 local ? local.name+" ("+local.age+")" : "Empty";

 document.getElementById("sessionData").innerText=
 session ? session.name+" ("+session.age+")" : "Empty";

 document.getElementById("cookieData").innerText=
 cookie ? cookie.name+" ("+cookie.age+")" : "Empty";


 if(local || session || cookie){

  const u=local || session || cookie;

  document.getElementById("profile").innerHTML=
  "Welcome <span>"+u.name+"</span><br>Age: "+u.age;

 }
 else{

  document.getElementById("profile").innerText="No user loaded";

 }

}

// Get Cookie
function getCookie(name){

 const value=document.cookie
 .split("; ")
 .find(row => row.startsWith(name));

 return value ? JSON.parse(value.split("=")[1]) : null;

}

// Toggle Theme
function toggleTheme(){

 document.body.classList.toggle("light");

}

// Load on start
loadAll();
