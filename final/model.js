class JournalModel {
    constructor(type) {
        this.type = type;
        this.journalEntryList = readFromLS(this.type) || [];
    }

    getJournalEntryList(q = null) {
        if (q === null) {
            return this.journalEntryList;
        } else {
            return this.journalEntryList.filter(el => el.date === q);
        }
    }

    addJournalEntry(title, date, entry) {
        const journalEntry = {
            title: title,
            date: date,
            entry: entry,
            createdDate: new Date()
        };
        this.journalEntryList.push(journalEntry);
        writeToLS(this.type, this.journalEntryList);
    }

    removeEntry(index) {
        console.log(index)
        var entries = readFromLS(this.type)
        // console.log(quotes)
        var load = []
        var i = 0
        entries.forEach(entry => {
            if (i != index) {
                load.push(entry)
            } 
            i += 1
        })
        writeToLS(this.type, load)
    }

}

class QuoteModel {
    constructor(type) {
        this.type = type;
        this.quoteList = readFromLS(this.type) || [];
    }

    getQuoteList(q = null) {
        if (q === null) {
            return this.quoteList;
        } else {
            return this.quoteList.filter(el => el.author === q);
        }
    }

    addQuote(quote, author) {
        const quoteEntry = {
            quote: quote,
            author: author,
        };
        this.quoteList.push(quoteEntry);
        writeToLS(this.type, this.quoteList);
    }

    removeQuote(index) {
        console.log(index)
        var quotes = readFromLS(this.type)
        // console.log(quotes)
        var load = []
        var i = 0
        quotes.forEach(quote => {
            if (i != index) {
                load.push(quote)
            } 
            i += 1
        })
        writeToLS(this.type, load)
    }
}

export {JournalModel, QuoteModel};

function writeToLS(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
    return JSON.parse(window.localStorage.getItem(key))
}

function removeFromLS(key, data) {
    localStorage.removeItem(key, data);
}

