import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})

export class RatingPipe implements PipeTransform {
    public rating:string [];

  ratingComments(ratng: any, ...args: any[]): unknown {
    
    this.rating=['Excellent.Must Read','Wonderful Book.Should Read','Its a Very Good Book to read','Good book.You wont be dissapointed','Good.Read it if you have time.','Average.You may like it','Average.Read if you must!','Skip it,Go find some better read','Expensive at cost 0','Dont  read it even if you are paid for it'];

}