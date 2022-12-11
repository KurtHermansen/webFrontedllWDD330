export default class QuoteView {
	renderFavoriteQuotes(journalElement, quoteElement, quotes) {
		journalElement.innerHTML = "";
		quoteElement.innerHTML = "";
		let index = 0;
		quotes.forEach((quote) => {
			quoteElement.appendChild(this.renderLikedQuote(quote, index));
			index += 1;
		});
	}
	renderLikedQuote(quote, index) {
		const quoteCard = document.createElement("div");
		quoteCard.classList.add("quoteCard");
		quoteCard.setAttribute("data-name", index);
		quoteCard.innerHTML = `
        <p class="quoted">${quote.quote}</p>
        <h3 class="author">-${quote.author}</h3>
        <div id="deleteQuote" class="deleteQuote"><i class="fa-solid fa-delete-left"></i></div>

        `;

		return quoteCard;
	}
	renderQuote(quote, element) {
		element.innerHTML = "";
		element.innerHTML = `
        <p class="bannerQuote" id="likeQuote">${quote.content}</p>
        <h3 class="bannerAuthor" id="likeAuthor">-${quote.author}</h3>
        <div class="bannerLike" id="like" class="like"><i class="fa-regular fa-heart"></i></div>
        <div class="bannerRefresh" id="refresh" class="refresh"><i class="fa-sharp fa-solid fa-rotate"></i></div>
        `;
	}

	renderJournalList(journalElement, quoteElement, entries) {
		journalElement.innerHTML = "";
		quoteElement.innerHTML = "";
		let index = 0;
		entries.forEach((entry) => {
			journalElement.appendChild(this.renderJournalEntries(entry, index));
			index += 1;
		});
	}
	renderJournalEntries(entry, index) {
		const entryCard = document.createElement("div");
		entryCard.classList.add("entryCard");
		entryCard.setAttribute("data-name", index);

		entryCard.innerHTML = `
        <h3 class="titleCard">${entry.title}</h3>
        <p class="dateCard">${entry.date}</p>
        <p class="subjectCard">${entry.entry}</p>
        <div id="deleteEntry" class="deleteEntry"><i class="fa-solid fa-delete-left"></i></div>
        <div id="editEntry" class="editEntry"><i class="fa-regular fa-pen-to-square"></i></div>`;

		return entryCard;
	}

	renderJournalEntry(element) {
		if (!element) {
			return;
		}
		const journalEntry = `
        <form name="journal" class="formJournal">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title">
            <label for="date">Date:</label>
            <input type="date" name="date" id="date">
            <label for="entry">entry: </label>
            <textarea name="entry" id="entry" cols="46" rows="10"></textarea>
            <div id="save" class="save">Save</div>
        </form>
        `;
		element.innerHTML = "";
		element.innerHTML = journalEntry;
	}

	renderEditModal(parent, title, date, entry) {
		parent.innerHTML = "";
		parent.innerHTML = `
        <div class="modal-content">          
    <span class="close">&times;</span>
    <form name="journalModal" class="formJournal">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" value="${title}">
        <label for="date">Date:</label>
        <input type="date" name="date" id="date" value="${date}">
        <label for="entry">entry: </label>
        <textarea name="entry" id="entry" cols="41" rows="10">${entry}</textarea>
        <div id="saveModal" class="save">Save</div>
      </form>
  </div>
        
        `;
	}
}
