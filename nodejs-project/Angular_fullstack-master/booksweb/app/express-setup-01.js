let express=require('express');
//let ejs=require('ejs');

let app=express();

app.set('view engine', 'ejs'); //automatically and internally calls require('ejs')
app.set('views', './views');   //the base folder for dynamic view templates
app.use(express.static('public')); //the base folder for static contents like html/css/js/images 

let bodyParser=require('body-parser');

app.use(bodyParser.json()); //useful if information is submitted in json format
app.use(bodyParser.urlencoded({extended:true}));


// end of express set up

// business logic 



//author data
let Author = require('./entities/author');
let authors=[
    new Author('vivek-dutta-mishra','Vivek Dutta Mishra','Author of the Amazon Best Seller The Accursed God','vivek.png','vivek@conceptarchitect.in'),
    new Author('jeffrey-archer','Jeffrey Archer','Contemporary best-seller fiction author','archer.png','jeffrey.archer@gmail.com'),
    new Author('ramdhari-singh-dinkar','Ramdhari Singh Dinkar','The National poet of India','dinker.png')

];


//author request handler (controller)
//I will handle a GET request for this URL
app.get('/authors',(request,response)=>{

    //response.send(authors);

    //use template file authors/list to display my authors using the default view-engine
    //template file extension will depend on the view engine that we are using
    console.log('GET /authors')
    response.render('authors/list',{authors:authors});

});

app.get('/authors/create',(request,response)=>{
    console.log('GET /authors/create');
    response.render('authors/create',{author:{}});
})

//I will handle a POST requrest for this URL
app.post('/authors/create',(request,response)=>{
    //console.log('POST /authors/create');
    //console.log('request.body',request.body);
    //response.send('received author details');

    let author= request.body;
    author.books=[]; //this author has not written a book yet
    authors.push(author);
    response.redirect('/authors'); //now its time to display updated authors list

}); 






//export app after proper setup
module.exports=app;