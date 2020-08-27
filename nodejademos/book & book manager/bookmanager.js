let Books=require('./book');
let {searchAll} = require('./utils');

let BookManager=function(){
    this.books=[]; 
};

BookManager.prototype.addbook=function(book){
    if(book && book.id && book.title )
        this.books.push(book);
};

BookManager.prototype.getAllbooks=function(){
    return this.books;
};
BookManager.prototype.getbookById=function(id){
    for(let book of  this.books)
        if (book.id===id){
            return book;
        }

    return null;
};
BookManager.prototype.getbookByauthor=function(author){
   
        if (book.author===author){
            return author;
        }

    return null;
};
BookManager.prototype.search=function(isMatch){
    return searchAll(this.books, isMatch);
}

BookManager.prototype.remove=function(id){

    this.authors= search(this.books, b=> b.id!==id);
}

BookManager.prototype.updatebook=function(id,title,coverpageUrl,author,price,rating){
    this.id=id;
    this.title=title;
    this.coverpageUrl=coverpageUrl;
    this.author=author;
    this.price=price;
    this.rating=rating;
}
function showBooks(books, heading=null){
    console.log(heading);
    for(let book of books){
        console.log(`${book}`);
    }
}
module.exports={
    BookManager:BookManager,
    showBooks:showBooks
};

