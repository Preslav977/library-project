const myLibrary = [];
// array to save the objects

function Book(title, author, pages, read) {
  // constructor with books properties
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const theHobbit = new Book("Hobbit", "J.R.R Tolkien", 310, "Yes");
  const theLastWish = new Book("The Last Wish", "Andrzej Sapkowski", 288, "No");
  const theHarryPotter = new Book(
    "Harry Potter and the Philosopher's Stone",
    "J. K. Rowling",
    "223",
    "No"
  );
  myLibrary.push(theHobbit);
  myLibrary.push(theHobbit);
  myLibrary.push(theHarryPotter);
}

addBookToLibrary();

function addBookToCard(bookObject) {
  // objects needs to be passed just to create
  // a book based on that
  // if bookObject is passed here create

  // eslint-disable-next-line no-restricted-syntax
  for (const book of myLibrary) {
    // loop the array and call that function
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardBookContainer.appendChild(cardContainer);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("card-content");
    titleDiv.innerText = `Title: ${book.title}`;
    cardContainer.appendChild(titleDiv);
    const authorDiv = document.createElement("div");
    authorDiv.classList.add("card-content");
    authorDiv.innerText = `Author: ${book.author}`;
    cardContainer.appendChild(authorDiv);
    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("card-content");
    pagesDiv.innerText = `Pages: ${book.pages}`;
    cardContainer.appendChild(pagesDiv);
    const readDiv = document.createElement("div");
    readDiv.classList.add("card-content");
    readDiv.innerText = `Read: ${book.read}`;
    cardContainer.appendChild(readDiv);
  }
  return bookObject;
}
