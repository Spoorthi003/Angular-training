
let Author=require('./author'); 


let {AuthorManager, showAuthors} = require('./authormanager');
const { contains } = require('./utils');





let manager=new AuthorManager();
let a1=new Author('vivek','Vivek Dutta Mishra','Author of the Lost Epic Series');
a1.books.push('The Accursed God');


let a2=new Author('archer','Jeffrey Archer','International best seller of fictions');
a2.books.push('Kane and Abel');
a2.books.push('Sins of Father');
a2.books.push('Sons of Fortune');

let a3=new Author('grisham','John Grisham','Leading author of legal fiction');
a3.books.push('The Summons');
a3.books.push('The Runaway Jury');

manager.updateauthordetails('Jorge','Jorge RR Martin','Leading author of fantacy fiction','http://authorphograp.com','jorgemartin788@gmail.com');



manager.addAuthor(a1);
manager.addAuthor(a2);
manager.addAuthor(a3);


let authorNames = manager.search( a=> contains(a.name,'John Grisham'));

showAuthors(authorNames,'third Author');


let fictionAuthors = manager.search( a=> contains(a.biography,'fiction'));

showAuthors(fictionAuthors,'Fiction author');



let min=2;

let minBookAuthor= manager.search(a=> a.books.length>=min);
    
showAuthors(minBookAuthor,`Authors with atlest ${min} book`);