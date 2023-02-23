const cardBookContainer = document.querySelector(".card-container");
const addBookButton = document.querySelector(".add-book-btn");
// eslint-disable-next-line operator-linebreak
const userInputFormContainer = document.querySelector(".form-content");
const userInputForm = document.querySelector("form");

const myLibrary = [];
// array to save the objects

// eslint-disable-next-line no-unused-vars
function Book(title, author, pages, read, id) {
  // constructor with books properties
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary() {
  // user input and store the new object into the array
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read-status").checked;
  // eslint-disable-next-line no-param-reassign
  const userInput = new Book(`${title}`, `${author}`, `${pages}`, `${read}`);
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
    cardContainer.setAttribute("data-id", book.id);
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

    const readButton = document.createElement("button");
    readButton.innerText = `${book.read}`;
    if (`${book.read}` === "true") {
      readButton.innerText = "Read";
      readButton.style.backgroundColor = "#86efac";
    } else {
      readButton.innerText = "Not Read";
      readButton.style.backgroundColor = "#f87171";
    }
    // eslint-disable-next-line no-use-before-define
    readButton.addEventListener("click", readStatus);
    readButton.classList.add("read-button");
    cardContainer.appendChild(readButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerText = "Remove";
    // eslint-disable-next-line no-use-before-define
    removeButton.addEventListener("click", deleteBookFromCard);
    cardContainer.appendChild(removeButton);
  }
  return bookObject;
}

function removeDuplicateBook() {
  // eslint-disable-next-line no-unused-vars
  const bookItems = document
    .querySelectorAll(".card")
    .forEach((n) => n.remove());
}

function deleteBookFromCard(e) {
  const removeBtn = e.target;
  const container = removeBtn.parentNode;
  const dataID = container.getAttribute("data-id");
  const bookIndex = myLibrary.findIndex((book) => book.id === dataID);
  myLibrary.splice(bookIndex, 1);
  console.log(myLibrary);
  // eslint-disable-next-line no-unused-vars
  const book = container.remove();
}

function readStatus(e) {
  const toggleBtn = e.target;
  if (toggleBtn.innerText === "Read") {
    toggleBtn.innerText = "Not Read";
    toggleBtn.style.backgroundColor = "#f87171";
  } else {
    toggleBtn.innerText = "Read";
    toggleBtn.style.backgroundColor = "#86efac";
  }
}

function resetForm() {
  userInputForm.reset();
}

userInputForm.addEventListener("submit", (e) => {
  // prevent default submit
  e.preventDefault();
  removeDuplicateBook();
  addBookToLibrary();
  addBookToCard("add card");
  resetForm();
  userInputFormContainer.style.opacity = 0;
});

function addBookBtn() {
  userInputFormContainer.style.opacity = 1;
}

// show the form when user clicks on add book button
addBookButton.addEventListener("click", () => {
  addBookBtn();
});
