function Author(id, name, biography, birthdate, email, photographurl, booklist){ 


    this.id = id;
    this.name = name;
    this.biography = biography;
    this.birthdate = birthdate;
    this.email = email;
    this.photographurl = photographurl;
    this.booklist = booklist;


    this.toString = function(){
        return `Author[ id = ${this.id}\tname = ${this.name}\tbiography = ${this.biography}\tbirthdate = ${this.birthdate}
            \temail = ${this.email}\tphotographUrl = ${this.photographurl}\tbooklist = ${this.booklist}\t]`;
    }

    authorlist = []

    this.addAuthor = function(id,name,biography,birthdate,email,photographurl,booklist)
    {
        
        authorlist.push(id,name,biography,birthdate,email,photographurl,booklist);
        console.log(authorlist);
    }

    getAuthorById = function(id)
    {
        authorlist[id];
    }
    getAllAuthors = function()
    {
        console.log(authorlist);
    }
    
    
    
}
let o1 = new Author();
o1.addAuthor(1,'nimmi','biography','23/09/1989','nimmi@gmail.com','hdjshd.sd','a,b,c,d');

let o2 = new Author();
o2.addAuthor(2,'anu','biography','23/11/1989','anu@gmail.com','hdjsssdfhd.sd','a,b,c,d');

console.log(getAuthorById(1));