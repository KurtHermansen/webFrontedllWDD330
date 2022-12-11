import { getJSON } from "./utilities.js";
import QuoteView from "./view.js";
import { JournalModel, QuoteModel } from "./model.js";

class Controller {
	constructor(quote, journal) {
		this.parentQ = quote;
		this.parentElementQ = null;
		this.parentJ = journal;
		this.parentElementJ = null;
		// this.journalElement = document.getElementById(journal);
		// this.baseURL = "https://favqs.com/api/qotd"
		this.baseURL = "https://api.quotable.io/random";
		this.quoteView = new QuoteView();
		this.journalModel = new JournalModel("journal");
		this.quoteModel = new QuoteModel("quote");
	}
	async init() {
		this.parentElementQ = document.getElementById(this.parentQ);
		this.parentElementJ = document.getElementById(this.parentJ);
		await this.showQuote(this.parentElementQ);
		await this.showEntry(this.parentElementJ);
		this.addListeners();
	}

	async showQuote(element) {
		const results = await getJSON(this.baseURL);
		this.quoteView.renderQuote(results, element);
        this.addQuoteListeners()
	}
	async showEntry(element) {
		this.quoteView.renderJournalEntry(element);
	}
    toggleMenu() {
        document.getElementsByClassName('navOpen')[0].classList.toggle('nav-close');
    }
	showQuotes(q = null) {
		const quotes = this.quoteModel.getQuoteList();
        console.log(quotes)
		this.quoteView.renderFavoriteQuotes(
			this.parentElementJ,
			this.parentElementQ,
			quotes
		);
        this.addQuoteListListeners();
	}
	showEntries(q = null) {
		const entries = this.journalModel.getJournalEntryList();
		this.quoteView.renderJournalList(
			this.parentElementJ,
			this.parentElementQ,
			entries
		);
        this.addJournalListListeners();
	}

    openEditModel(title, date, entry, index) {
        let modal = document.getElementById("myModal");
        console.log(title)
        console.log(date)
        console.log(entry)
        this.quoteView.renderEditModal(modal, title, date, entry)
        modal.style.display = 'block';
        this.addModalListener(index);
    }
    addJournalListListeners() {
        const entryArray = Array.from(this.parentElementJ.children);
        console.log(entryArray)
        entryArray.forEach(child => {
            child.children[3].addEventListener('click', e => {
                this.journalModel.removeEntry(child.dataset.name)
                location.reload();
            })
            child.children[4].addEventListener('click', e => {
                this.openEditModel(child.children[0].innerHTML, child.children[1].innerHTML, child.children[2].innerHTML, child.dataset.name)
                // this.journalModel.editEntry(e.currentTarget, child.dataset.name);
            })
        })
    }
    addModalListener(index) {
        const saveModal = document.getElementById("saveModal");
        let modal = document.getElementById("myModal");
        let span = document.getElementsByClassName("close")[0];
        span.addEventListener('click', e => {
            modal.style.display = 'none';
        })

        saveModal.addEventListener("click", () => {
			const form = document.forms.journalModal;
			const title = form.elements.title.value;
			const date = form.elements.date.value;
			const entry = form.elements.entry.value;
			if (title === "" || date === "" || entry === "") {
				alert(
					"You must fill out all the fields to submit a journal entry!"
				);
			} else {
				this.journalModel.addJournalEntry(title, date, entry);
			}
			form.reset();            
            modal.style.display = 'block';
            this.journalModel.removeEntry(index)
            location.reload();
		});
    }
    addQuoteListListeners() {
        const quoteArray = Array.from(this.parentElementQ.children);
        quoteArray.forEach(child => {
            child.lastElementChild.addEventListener('click', e => {
                this.quoteModel.removeQuote(child.dataset.name)
                location.reload();
            })
        })

    }
    addQuoteListeners(){
		const like = document.getElementById("like");
		const refresh = document.getElementById("refresh");
        

        like.addEventListener("click", () => {
			like.style.display = "none";
			this.quoteModel.addQuote(
				document.getElementById("likeQuote").innerHTML,
				document.getElementById("likeAuthor").innerHTML
			);
		});

        refresh.addEventListener('click', () => {
            this.showQuote(this.parentElementQ)
        })
        
    }


	addListeners() {
        const menu = document.querySelector('.menu');
        const save = document.getElementById("save");
		const entryList = document.querySelector(".entryList");
		const quoteList = document.querySelector(".quoteList");

		menu.addEventListener('click', this.toggleMenu);
        save.addEventListener("click", () => {
			const form = document.forms.journal;
			const title = form.elements.title.value;
			const date = form.elements.date.value;
			const entry = form.elements.entry.value;
			if (title === "" || date === "" || entry === "") {
				alert(
					"You must fill out all the fields to submit a journal entry!"
				);
			} else {
				this.journalModel.addJournalEntry(title, date, entry);
			}
			form.reset();
		});

		quoteList.addEventListener("click", () => {
			this.showQuotes();
		});
		entryList.addEventListener("click", () => {
			this.showEntries();
		});

		save.addEventListener("click", (e) => {
			this.showEntry(e.currentTarget.dataset.name);
		});
	}
}

export default Controller;
