const AuthorService = require("../services/author-service");
const Author=require('../entities/author');
const BookService = require("../services/book-service");
let Books=require('../entities/book');
const BooksRepository=require('../repositories/book-repository');
const AuthorRepository=require('../repositories/author-repository');


let booksRepository=new BooksRepository();

var bookService=new BookService(booksRepository);

let authorRepository=new AuthorRepository();

var authorService=new AuthorService(authorRepository);

//express calls user logic
// for url --> /authors
async function  getBookList(request,response){

    //user logic to get user data
    let books=await bookService.getAllbook();  //user logic
    //express sends JSON response directly to the client
    await response.send(books);  
}

async function addbook(request,response){
    var books=request.body;
    try{
        await bookService.addbook(book);
        response.status(201); //created
        await response.send(books);
    }catch(e){
        response.status(400);
        await response.send(e.message);
        console.log(e.message);
    }
}

// express is responsible for passing control to user function
//for url format -->   /authors/vivek-dutta-mishra
async function getbookById(request,response){

    //express extracts url part and adds to request.params
    let id= request.params.bookId; //this should be the last part of url /authors/details/:authorId

    //user logic
    let book=await bookService.getbookById(id);
    if(book)
        await response.send(book); //express
    else{
        response.status(404); //not found -->express
        await response.send({error: `book not found`, id:id}); //express
    }

};

async function removeBook(request,response){
    let id=request.params.bookId;
    await bookService.remove(id);
    response.status(204); //no content
    await response.send({});
}
async function getAuthorById(request,response){

    //express extracts url part and adds to request.params
    let id= request.params.authorId; //this should be the last part of url /authors/details/:authorId

    //user logic
    let author=await authorService.getById(id);
    if(author)
        await response.send(author); //express
    else{
        response.status(404); //not found -->express
        await response.send({error: `author not found`, id:id}); //express
    }

};



var express = require('express');
var router = express.Router();

//all this will be mapped /authors/
router.get('/bookslist', getBookList);
router.post('/bookscreate', addbook);
router.get('/api/book/:bookId', getbookById);
router.delete('/api/book/:bookId', removeBook);
router.get('/api/book/:authorId', getAuthorById);



module.exports = router;




