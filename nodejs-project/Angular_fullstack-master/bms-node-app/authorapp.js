//----- my application logic here ---

let Author = require('./author');
let {AuthorManager, showAuthors} = require('./authormanager');


let manager=new AuthorManager();

manager.addAuthor(new Author('vivek','Vivek Dutta Mishra','Author of the Lost Epic Series'));
manager.addAuthor(new Author('archer','Jeffrey Archer','International best seller of fictions'));
manager.addAuthor(new Author('grisham','John Grisham','Leading author of legal fiction'));


showAuthors(manager.getAll(), 'List of All Authors');

console.log('author with id vivek', manager.getById('vivek'));
console.log('author with id amish', manager.getById('amish'));


showAuthors(manager.searchAnything('biography','fiction'),'Authors of fiction ');


 

let min=1;
//showAuthors(manager.searchAnything(min),`Author with at least ${min} book`);


//manager.remove('archer');

//showAuthors(manager.getAll(), 'List after deleting Archer');