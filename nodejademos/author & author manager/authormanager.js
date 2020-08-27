
let Author=require('./author');
let {searchAll} = require('./utils');



let AuthorManager=function(){
    this.authors=[]; 
};

AuthorManager.prototype.addAuthor=function(author){
    if(author && author.id && author.name )
        this.authors.push(author);
};

AuthorManager.prototype.getAll=function(){
    return this.authors;
};

AuthorManager.prototype.getById=function(id){

    
    for(let author of this.authors)
        if (author.id===id){
            return author;
        }

    return null;
};



AuthorManager.prototype.remove=function(id){

    //get all author who don't match current id
    this.authors= search(this.authors, a=> a.id!==id);
}


AuthorManager.prototype.search=function(isMatch){
    return searchAll(this.authors, isMatch);
}
AuthorManager.prototype.updateauthordetails=function(id,name,biography,photoUrl,email){
    this.id=id;
    this.name=name;
    this.biography=biography;
    this.photoUrl=photoUrl;
    this.email=email;

}


function showAuthors(authors, heading=null){
    console.log(heading);
    for(let author of authors){
        console.log(`${author}`);
    }
}



module.exports={
    AuthorManager:AuthorManager,
    showAuthors:showAuthors
};
