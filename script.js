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
