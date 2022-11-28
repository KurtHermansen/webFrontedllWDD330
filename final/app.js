// import Controller from "./controller.js";
// const api_url ="https://zenquotes.io/api/quotes/";

// const startApp = new Controller('quote', 'journal');
// window.addEventListener('load', () => {
//     startApp.showQuote(api_url);
// })


const api_url ="https://zenquotes.io/api/today";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);