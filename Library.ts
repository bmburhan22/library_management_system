type Book = {
  isbn: number;
  title: string;
  author: string;
  publicationYear: number;
  isBorrowed: boolean;
};

export default class Library {
  private books: Book[] = [];
  addBook = (isbn: number, title: string, author: string, publicationYear: number): void => {
    const book: Book = { isbn, title, author, publicationYear, isBorrowed: false };
    this.books.push(book);
  }
  borrowBook = (isbn: number): void => { }
  returnBook = (isbn: number): void => { }
  viewAvailableBooks = (): Book[] => this.books;
}