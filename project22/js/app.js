import {fetchCrypto} from "./api.js";

import {
 showLoading,
 hideLoading,
 showNotification,
 renderCards
} from "./ui.js";


// Central State
const State = {

 coins:[],

 favorites:
 JSON.parse(localStorage.getItem("favorites")) || [],

 theme:
 localStorage.getItem("theme") || "dark"

};


// Theme setup
if(State.theme==="light")
 document.body.classList.add("light");


// Fetch data
async function init(){

 showLoading();

 try{

  State.coins = await fetchCrypto();

  renderCards(State.coins, State.favorites);

 }
 catch(error){

  showNotification("Failed to load data");

 }
 finally{

  hideLoading();

 }

}

init();


// Search
document.getElementById("search")
.addEventListener("input", e=>{

 const value = e.target.value.toLowerCase();

 const filtered =
 State.coins.filter(coin=>
 coin.name.toLowerCase().includes(value)
 );

 renderCards(filtered, State.favorites);

});


// Sort
document.getElementById("sort")
.addEventListener("change", e=>{

 const type = e.target.value;

 let sorted = [...State.coins];

 if(type==="name"){

  sorted.sort((a,b)=>
   a.name.localeCompare(b.name)
  );

 }

 if(type==="price"){

  sorted.sort((a,b)=>
   b.current_price - a.current_price
  );

 }

 renderCards(sorted, State.favorites);

});


// Favorites
document.getElementById("cards")
.addEventListener("click", e=>{

 if(e.target.classList.contains("favBtn")){

  const id = e.target.dataset.id;

  if(State.favorites.includes(id)){

   State.favorites =
   State.favorites.filter(f=>f!==id);

  }
  else{

   State.favorites.push(id);

  }

  localStorage.setItem(
   "favorites",
   JSON.stringify(State.favorites)
  );

  renderCards(State.coins, State.favorites);

 }

});


// Theme toggle
document.getElementById("themeToggle")
.addEventListener("click", ()=>{

 document.body.classList.toggle("light");

 const theme =
 document.body.classList.contains("light")
 ? "light" : "dark";

 localStorage.setItem("theme", theme);

});
