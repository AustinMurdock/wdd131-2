
const articles = [
	{
		id: 1,
		title: "Septimus Heap Book One: Magyk",
		date: "March 22nd, 2005",
		description:
			"If you enjoy stories about numerical coincidences and stylistic misspellings this is the book for you.",
		imgSrc: "./images/magyk-cover.jpg",
		imgAlt: "septimus heap book cover: diary with gold dragon ring",
		ages: "10-14",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐",
	},
	{
		id: 2,
		title: "Magnus Chase Book One: Sword of Summer",
		date: "December 12, 2021",
		description:
			"The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
		imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
		imgAlt: "Book cover for Magnus Chase 1",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐",
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
            "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐",
	},
];
let gallery = document.getElementById("gallery");

articles.forEach(e => {
    let bookListingHTML = `
        <!-- ID: ${e.id} (js-insert) -->
        <div class="book-stats">
            <p><i>${e.date}</i></p>
            <p>${e.ages}</p>
            <p>${e.genre}</p>
            <p aria-label="${e.stars.length} out of 5 stars" role="img">${e.stars}</p>
        </div>
        <article class="book-front">
            <h2>${e.title}</h2>
            <img src="${e.imgSrc}" alt="${e.imgAlt}">
            <p>${e.description}</p>
        </article>
        `;
    let bookListing = document.createElement("div");
    bookListing.classList.add("book-listing");
    bookListing.innerHTML = bookListingHTML;
    gallery.appendChild(bookListing);
});