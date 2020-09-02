let Books=require('../entities/book');

let contains=function(main,sub){
    return main.toLowerCase().indexOf(sub.toLowerCase())>=0;
}

class BookService{

    constructor(bookRepository){
        this.bookRepository=bookRepository;
        //this.authors=[]; //start with an empty list of authors
    }

    async addbook(books){
        this.book=[]; 
        if(books && books.id && books.title ){
            this.books.push(book);
            console.log('Book is added', books.title);
            if(!books.id)
                books.id=books.title.toLowerCase().replace(' ','-');
            await this.bookRepository.addbook(books);
        }
        else{
            console.log('Book add failed');
        }
    }

   

    async getAllbook(){
        let books=await this.bookRepository.getAllbook();
        return books;
    }

    async getbookById(id){
        let books=await this.bookRepository.getbookById(id);
        return books;
    }

    async search(term){
        
        return await this.getAllbook().filter(b=> contains(b.title,term) || contains(b.author,term));
    }

    async remove(id){
        await this.bookRepository.remove(id);
        
    }

    


    


}







module.exports=BookService;
