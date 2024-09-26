import Library from '../Library';

describe('Library Management System', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

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

});
