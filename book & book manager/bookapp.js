let Books=require('./book');

let {BookManager, showBooks} = require('./bookmanager');
const { contains } = require('./utils');

let manager=new BookManager();

let b1=new Books('sudha','Wise or otherwise days', 'Sudha Murty','400rs','3.5');

let b2=new Books('agata','The Agata Cristie Code','Agata Cristie' ,'1000rs','4.5');

let b3=new Books('rk','Malgudi days', 'R K Narayan','800rs','5.0');

manager.addbook(b1);
manager.addbook(b2);
manager.addbook(b3);

manager.getAllbooks();

let titlebooks = manager.search( b=> contains(b.title,'days'));
showBooks(titlebooks,'book with title days');

let pricerange='800rs';
let pricebooks = manager.search( b=> b.price<=pricerange);
showBooks(pricebooks,`Books with pricerange ${pricerange} price`);

let ratingrange='4.5';
let ratingbooks = manager.search( b=> b.rating<=ratingrange);
showBooks(ratingbooks,`Books with ratingrange ${ratingrange} rating`);



