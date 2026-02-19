export function showLoading(){

 document.getElementById("loading").classList.add("show");

}

export function hideLoading(){

 document.getElementById("loading").classList.remove("show");

}

export function showNotification(msg){

 const el = document.getElementById("notification");

 el.innerText = msg;

 setTimeout(()=>{
  el.innerText="";
 },3000);

}

export function renderCards(data, favorites){

 const container = document.getElementById("cards");

 container.innerHTML="";

 data.forEach(coin=>{

  const isFav = favorites.includes(coin.id);

  container.innerHTML += `
  
  <div class="card">

   <h3>${coin.name}</h3>

   <p>Price: $${coin.current_price}</p>

   <button data-id="${coin.id}" class="favBtn">

   ${isFav ? "★ Favorite" : "☆ Add Favorite"}

   </button>

  </div>

  `;

 });

}
