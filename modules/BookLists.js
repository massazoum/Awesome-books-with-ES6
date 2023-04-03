export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
 }
 
export class BookList {
  static bookListElement = document.getElementById('book-list');
  static books = JSON.parse(localStorage.getItem('books')) || [];
  static addBookForm = document.getElementById('add-book-form');

  static handleAddBook(event) {
    event.preventDefault();
    const titleInput = document.getElementById('title-input');
    const authorInput = document.getElementById('author-input');
    const title = titleInput.value;
    const author = authorInput.value;
    const book = new Book(title, author);
    BookList.addBook(book);
    titleInput.value = '';
    authorInput.value = '';
  }

  static handleRemoveBook(event) {
    if (event.target.classList.contains('remove-button')) {
      const index = parseInt(event.target.dataset.index);
      BookList.removeBook(index);
    }
  }

  static addBook(book) {
    BookList.books.push(book);
    localStorage.setItem('books', JSON.stringify(BookList.books));
    BookList.displayBooks();
  }

  static removeBook(index) {
    BookList.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(BookList.books));
    BookList.displayBooks();
  }

  static displayBooks() {
    BookList.bookListElement.innerHTML = '';
    BookList.books.forEach((book, index) => {
      const div = document.createElement('div');
      
      div.innerHTML = `<div class="jshtml"> <div class="jshtml1"><h2> ${book.title} </h2><p> ${book.author}</p></div> <button data-index="${index}" class="remove-button">Remove</button></div>`;
      BookList.bookListElement.appendChild(div);
    });
  }

  static init() {
    BookList.addBookForm.addEventListener('submit', BookList.handleAddBook);
    BookList.bookListElement.addEventListener('click', BookList.handleRemoveBook);
    BookList.displayBooks();
  }
}

BookList.init();


// export class BookList {
//   constructor() {
//     this.bookListElement = document.getElementById('book-list');
//     this.books = JSON.parse(localStorage.getItem('books')) || [];
//     this.addBookForm = document.getElementById('add-book-form');

//     this.addBookForm.addEventListener('submit', this.handleAddBook.bind(this));
//     this.bookListElement.addEventListener('click', this.handleRemoveBook.bind(this));
//     this.displayBooks();
//   }

//   static handleAddBook(event) {
//     event.preventDefault();
//     const titleInput = document.getElementById('title-input');
//     const authorInput = document.getElementById('author-input');
//     const title = titleInput.value;
//     const author = authorInput.value;
//     const book = new Book(title, author);
//     this.addBook(book);
//     titleInput.value = '';
//     authorInput.value = '';
//   }

//   static handleRemoveBook(event) {
//     if (event.target.classList.contains('remove-button')) {
//       const index = parseInt(event.target.dataset.index);
//       this.removeBook(index);
//     }
//   }

//   static addBook(book) {
//     this.books.push(book);
//     localStorage.setItem('books', JSON.stringify(this.books));
//     this.displayBooks();
//   }

//   static removeBook(index) {
//     this.books.splice(index, 1);
//     localStorage.setItem('books', JSON.stringify(this.books));
//     this.displayBooks();
//   }

//   static displayBooks() {
//     this.bookListElement.innerHTML = '';
//     this.books.forEach((book, index) => {
//       const div = document.createElement('div');
      
//       div.innerHTML = `<div class="jshtml"> <div class="jshtml1"><h2> ${book.title} </h2><p> ${book.author}</p></div> <button data-index="${index}" class="remove-button">Remove</button></div>`;
//       this.bookListElement.appendChild(div);
//     });
//   }
// }
