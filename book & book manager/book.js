

let Books=function(id,title,coverpageUrl=null,author,price,rating=null){

    this.id=id;
    this.title=title;
    this.coverpageUrl=coverpageUrl;
    this.author=author;
    this.price=price;
    this.rating=rating;
}

Books.prototype.toString=function(){
    return `Books[${this.id},${this.price}]`;
};

module.exports=Books; 

