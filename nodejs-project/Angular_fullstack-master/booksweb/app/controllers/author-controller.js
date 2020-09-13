const AuthorService = require("../services/author-service");
const Author=require('../entities/author');




async function  getAuthorList(request,response){
    try{
        var authors=await authorService.getAll();
        await response.render('authors/list', {authors:authors});
    }catch(e){
        console.log('error',e,e.message);
    }

}


async function  showAuthorForm(request,response){

    var author={};
    await response.render('authors/create', {author:author});

}

async function addAuthor(request,response){
    var author=request.body;
    try{
    await authorService.add(author);
    await response.redirect('/authors');
    }catch(e){
        console.log(e.message);
    }
}

var authorService=new AuthorService();


function createAuthorController(expressApp){


    authorService.add(new Author('vivek-dutta-mishra','Vivek Dutta Mishra','Author of the Amazon Best Seller The Accursed God','vivek.png','vivek@conceptarchitect.in'));
    authorService.add(new Author('jeffrey-archer','Jeffrey Archer','Contemporary best-seller fiction author','archer.png','jeffrey.archer@gmail.com'));
    authorService.add(new Author('ramdhari-singh-dinkar','Ramdhari Singh Dinkar','The National poet of India','dinker.png'));
    

    expressApp.get('/authors', getAuthorList);
    expressApp.get('/authors/create', showAuthorForm);
    expressApp.post('/authors/create', addAuthor);
};

module.exports=createAuthorController;
