const cardBookContainer = document.querySelector(".card-container");
const addBookButton = document.querySelector(".add-book-btn");
// eslint-disable-next-line operator-linebreak
const userInputFormContainer = document.querySelector(".form-container");
const userInputForm = document.querySelector("form");

const myLibrary = [];
// array to save the objects

function Book(title, author, pages, read) {
  // constructor with books properties
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(userInput) {
  // user input and store the new object into the array
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read-status").value;
  userInput = new Book(`${title}`, `${author}`, `${pages}`, `${read}`);
  myLibrary.push(userInput);
  console.log(myLibrary);
  return userInput;
}

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

function removeDuplicateBook() {
  const bookItems = document
    .querySelectorAll(".card")
    .forEach((n) => n.remove());
}

userInputForm.addEventListener("submit", (e) => {
  // prevent default submit
  e.preventDefault();
  removeDuplicateBook();
  addBookToLibrary("add book");
  addBookToCard("add card");
  resetForm();
  userInputFormContainer.style.opacity = 0;
});

function resetForm() {
  userInputForm.reset();
}

// show the form when user clicks on add book button
addBookButton.addEventListener("click", () => {
  addBookBtn();
});

function addBookBtn() {
  userInputFormContainer.style.opacity = 1;
}
