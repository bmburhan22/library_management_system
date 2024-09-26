type Book = {
  isbn: number;
  title: string;
  author: string;
  publicationYear: number;
  isBorrowed: boolean;
};

export default class Library {
  private books: Book[] = [];
}