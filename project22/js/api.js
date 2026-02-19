const URL =
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20";

export async function fetchCrypto(){

 try{

  const res = await fetch(URL);

  if(!res.ok)
   throw new Error("Network error");

  const data = await res.json();

  return data;

 }
 catch(error){

  throw error;

 }

}
