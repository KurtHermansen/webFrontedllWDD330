// const api_url ="https://zenquotes.io/api/quotes/";

export default class Controller {
    constructor(quote, journal) {
        this.quoteElement = document.getElementById(quote);
        this.journalElement = document.getElementById(journal);
    }

    getJSON(url) {
        try {
          const response = fetch(url);
          if (!response.ok) {
            throw Error(response.statusText);
          } else {
            const fetchJson = response.json();
            return fetchJson;
          }
        } catch (error) {
          console.log(error);
        }
      }
    
    getQuote(url) {
        return getJSON(url);
      }
    
    showQuote(url) {
        const results = getQuote(url);
        console.log(results);
      }
}
