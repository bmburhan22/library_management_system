# Library Management System

## Overview

This project implements a simple **Library Management System** that allows users to perform basic operations such as:
- Adding books to the library.
- Borrowing books (only if available).
- Returning borrowed books.
- Viewing a list of all available books.

### Features

- **Add Books:** Users can add new books to the library, each with a unique ISBN, title, author, and publication year.
- **Borrow Books:** Users can borrow books if they are available in the library. The system ensures that the book is available before allowing it to be borrowed.
- **Return Books:** Users can return books they borrowed, and the system updates the book's availability status.
- **View Available Books:** Users can view a list of all books that are currently available to borrow.

### Requirements

- **Node.js** (>= 14.x)
- **npm** (>= 6.x)
- **Jest** for unit testing

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bmburhan22/library_management_system.git
   cd library_management_system

2. **Install dependencies:**

```
npm install
```

3. **Run Application:**

```
tsc
node index.js
```

4. **Run Tests**

```
npm test
```