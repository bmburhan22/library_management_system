import Library, { BookAlreadyBorrowedError, BookNotFoundError } from '../Library';

describe('Library Management System', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  // Testcases for addBook
  test('Add a book to library', () => {
    library.addBook(5343, 'Python 101', 'Jane White', 2018);
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0]).toEqual({
      isbn: 5343,
      title: 'Python 101',
      author: 'Jane White',
      publicationYear: 2018,
      isBorrowed: false
    });
  });

  // Testcases for borrowBook
  test('Allow borrowing books if available', () => {
    library.addBook(5343, 'Python 101', 'Jane White', 2018);
    library.borrowBook(5343);
    expect(library.viewAvailableBooks().length).toBe(0);
  });

  test('Throw error when borrowing a book that does not exist', () => {
    expect(() => library.borrowBook(777)).toThrowError(new BookNotFoundError(777));
  });

  test('Throw error when borrowing a book that is already borrowed', () => {
    library.addBook(5343, 'Python 101', 'Jane White', 2018);
    library.borrowBook(5343);
    expect(() => library.borrowBook(5343)).toThrowError(new BookAlreadyBorrowedError(5343));
  });

  // Testcases for returnBook
  test('Allow returning a borrowed book', () => {
    library.addBook(5343, 'Python 101', 'Jane White', 2018);
    library.borrowBook(5343);
    library.returnBook(5343);
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0]).toEqual({
      isbn: 5343,
      title: 'Python 101',
      author: 'Jane White',
      publicationYear: 2018,
      isBorrowed: false,
    });
  });

  test('Throw error when returning a book that does not exist', () => {
    expect(() => library.returnBook(777)).toThrowError(new BookNotFoundError(777));
  });

  test('View available books', () => {
    library.addBook(5343, 'Python 101', 'Jane White', 2018);
    library.addBook(5344, 'Learn Flutter Basics', 'Bob Mark', 2020);
    library.borrowBook(5343);
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0]).toEqual({
      isbn: 5344,
      title: 'Learn Flutter Basics',
      author: 'Bob Mark',
      publicationYear: 2020,
      isBorrowed: false
    });
  });

});
