class Books{

    
    constructor(id,title,coverpageUrl=null,author,price,rating=null,Aboutbook=null){
        this.id=id;
        this.title=title;
        this.coverpageUrl=coverpageUrl;
        this.author=author;
        this.price=price;
        this.rating=rating;
        this.Aboutbook =Aboutbook
    }

    toString(){
        return `Book[Id=${this.id}\tTitle=${this.title}\tAuthor=${this.author}]`;
    }
    addBook(books){
        this.book=[]; 
        if(books && books.id && books.title )
        this.book.push(books);
    }
}
module.exports=Books; 