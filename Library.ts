type Book = {
  isbn: number;
  title: string;
  author: string;
  publicationYear: number;
  isBorrowed: boolean;
};

export class BookNotFoundError extends Error {
  constructor(isbn: number) {
    super(`Book [ISBN ${isbn}] not found.`);
    this.name = "BookNotFoundError";
  }
}
export class BookAlreadyBorrowedError extends Error {
  constructor(isbn: number) {
    super(`Book [ISBN ${isbn}] is already borrowed.`);
    this.name = "BookAlreadyBorrowedError";
  }
}

export default class Library {
  private books: Book[] = [];
  addBook = (isbn: number, title: string, author: string, publicationYear: number): void => {
    const book: Book = { isbn, title, author, publicationYear, isBorrowed: false };
    this.books.push(book);
  }
  borrowBook = (isbn: number): void => {
    const book = this.books.find(book => book.isbn == isbn);
    if (book == null) throw new BookNotFoundError(isbn);
    if (book.isBorrowed) throw new BookAlreadyBorrowedError(isbn);
    book.isBorrowed = true;
  }
  returnBook = (isbn: number): void => { }
  viewAvailableBooks = (): Book[] => this.books.filter(book => !book.isBorrowed);
}