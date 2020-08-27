
let Author=function(id,name,biography=null,photoUrl=null,email=null){

    this.id=id;
    this.name=name;
    this.biography=biography;
    this.photoUrl=photoUrl;
    this.email=email;
    this.books=[] ;  
}
Author.prototype.toString=function(){
    return `Author[${this.id},${this.name}]`;
};


module.exports=Author;   //I want to export Author to make it available in other modules






