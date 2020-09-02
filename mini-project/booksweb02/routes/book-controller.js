const BookService = require("../services/book-service");
const Books=require('../entities/book');
const BooksRepository=require('../repositories/book-repository');



let booksRepository=new BooksRepository();


async function seed(){
    let books= await booksRepository.getAllbook();

    if(books.length===0){
        console.log('seeding default data set');
        books=[
            new Books('sudha','Wise or otherwise days', 'Sudha Murty','400rs','3.5','A man dumps his aged father in an old-age home after declaring him to be a homeless stranger, a tribal chief in the Sahyadri hills teaches the author that there is humility in receiving too, and a sick woman remembers to thank her benefactor even from her deathbed.'),
            new Books('agata','The Agata Cristie Code','Agata Cristie' ,'1000rs','4.5',`What makes Agatha Christie such a successful writer? On the 75th anniversary of the creation of her immortal character Miss Marple, this documentary introduces viewers to new fields of scientific inquiry using sophisticated computer analyses of Christie's every written word, her sentence structure, story arcs, poisons used, red herrings, clues and more. From British Pathé TV's Arts Collection.`),
            new Books('rk','Malgudi days', 'R K Narayan','800rs','5.0',`Malgudi Days is a collection of short stories written by R. K. Narayan, published in 1943 by Indian Thought Publications, the publishing company Naraya huimself founded in 1942. He founded the company after he was cut off from England as a result of WWII, and needed some outlet for his writing. It wasn’t just a vanity press, though, as during the war there was no other way to circulate Indian writing, and Indian readers had no access to new work.`)
        ];
        booksRepository.books=books;
        await booksRepository.save(); 
    }
}


var bookService=new BookService(booksRepository);


async function  getBookList(request,response){
    
    
    var books=await bookService.getBookList();
    
    await response.render('/bookslist', {books:books});
}


async function  showBookForm(request,response){

    var book={};
    await response.render('/bookscreate', {book:book});

}

async function addbook(request,response){
    var book=request.body;
    try{
    await bookService.addbook(book);
    await response.redirect('/books');
    }catch(e){
        console.log(e.message);
    }
}

async function showBookDetails(request,response){

    let id= request.params.bookId; 

    let book=await bookService.getbookById(id);

    await response.render('books/details',{book});

};

async function removeBook(request,response){
    let id=request.params.bookId;
    await bookService.remove(id);
    await response.redirect('/books'); 
}



var express = require('express');
const { render } = require("ejs");
var router = express.Router();

//all this will be mapped /authors/
router.get('/books', getBookList);
router.get('/bookslist', getBookList);
router.get('/bookcreate', showBookForm);
router.post('/bookcreate', addbook);


router.get('/details/:bookId', showBookDetails);
router.get('/delete/:bookId', removeBook);



module.exports = router;




