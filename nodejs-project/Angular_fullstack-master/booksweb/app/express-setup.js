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
let authorController=require('./controllers/author-controller');

authorController(app); //configure app with required route






//export app after proper setup
module.exports=app;