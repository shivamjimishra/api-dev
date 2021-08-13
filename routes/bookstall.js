

const bookscontroller = require('../controllers/books');
const bookstall = require('express').Router();


// get to return us all the books
bookstall.get('/books',bookscontroller.getAllBooks);


// get to return us book by ID
bookstall.get('/bookbyID/:id',bookscontroller.getBookByID);



module.exports = bookstall;