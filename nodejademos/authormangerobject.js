let author1=new Object();

author1.id = "001";
author1.Name = "Natasha  Sharma";
author1.Biography = "A well known fiction Writer from delhi ,renowned by mutiple awards";
author1.Birthdate = "09/07/1899";
author1.Email = "natashasharma08@gmail.com";
author1.PhotographUrl = "https://www.getlitt.co/blog/wp-content/uploads/2018/09/5-minutes-with1.jpg";
author1.listofbooks = "Secret to a great life ,Boycott foriegn goods,keep yourself Happy";

let author2=new Object();

author2.id = "002";
author2.Name = "Ankush  Athreya";
author2.Biography = "A well known mystery novel Writer from south india ,renowned by mutiple awards";
author2.Birthdate = "03/02/1897";
author2.Email = "ankushathreya007@gmail.com";
author2.PhotographUrl = "http://authorsphotography.com";
author2.listofbooks = "A perfect crime ,Dectective,Indian Crimes";


let author3=new Object();
// author3.name=this.name;

function addAuthor(name){
    
    author3.name=name;
    console.log(` A new author  is added with name ${author3.name}`);
}

addAuthor('Aushutosh Verma');

function getAllAuthors(){
    console.log(` All authors present are : ${author1.Name} ,  ${author2.Name} ,${author3.name}`);
} 

getAllAuthors();

function getAuthorById(id) {

    if(id==="001"){
        console.log(`Author is:  ${author1.Name} `);
    }

    console.log(`Author is:  ${author2.Name} `);

}

getAuthorById("002");


function Searchbyname(name)
{
  if(name ==="Natasha  Sharma"){
    console.log(`The Author is Author1 `);
  }

  if(name ==="Ankush  Athreya"){
    console.log(`The Author is Author2 `);
  }
 
  if(name ==="Aushutosh Verma"){
    console.log(`The Author is Author3 `);
  }

} 
Searchbyname("Aushutosh Verma");

function Searchbybookwritten (bookname){
    if(bookname==="Secret to a great life")
    {
        console.log(`The Author is: ${author2.Name} `);
    }
    if(bookname==="A perfect crime")
    {
        console.log(`The Author is: ${author2.Name} `);
    }
}
Searchbybookwritten("A perfect crime");

function Searchbybiography(biography){
    if(biography==="A well known fiction Writer from delhi ,renowned by mutiple awards")
    {
        console.log(`The Biography belongs to author: ${author1.Name} `);
    }
    if(biography==="A well known mystery novel Writer from south india ,renowned by mutiple awards"){
        console.log(`The Biography belongs to author : ${author2.Name} `);
    }

}
Searchbybiography("A well known fiction Writer from delhi ,renowned by mutiple awards")

function Deleteauthor(authorname){
    if(authorname==="Natasha  Sharma")
    {
        console.log(`The Author deleted is author1 `);
    }

    if(authorname==="Ankush  Athreya")
    {
        console.log(`The Author deleted is author2 `);
    }

    if(authorname==="Aushutosh Verma")
    {
        console.log(`The Author deleted is author3 `);
    }
} 
Deleteauthor("Aushutosh Verma");

function Updateauthordetails (id,name,biography,birthdate,email,photographyurl,listofbooks){
    author2.id = id ;
    author2.name=name;
    author2.biography = biography;
    author2.birthdate = birthdate;
    author2.email = email;
    author2.photographyurl = photographyurl;
    author2.listofbooks = listofbooks;

    console.log(` A author2  is updated with details:  ${author2.id} ,${author2.name} ,${author2.biography} ,${author2.birthdate} ,${author2.email}  , ${author2.photographyurl} , ${author2.listofbooks}`);
}
Updateauthordetails('004','Sejal khan' ,'A well known Awarness Writer from Assam ,renowned by mutiple awards','07/08/1992','sejalkhan877@gmail.com','http://authorsphotography.com','A Journey of the soul,A thousand steps,Monk tales')
