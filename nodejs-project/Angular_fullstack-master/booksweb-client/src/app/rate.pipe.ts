import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
  

      let width = +args[0];
      console.log("width is",width);
      let maxW = 110;
      let max=10;
      let val = 0
      val = width * maxW /max;

      if(val >= 9 )
      {
        //console.log("must read");
        return "Must Read";
      }
      else
        return "good read";





  }

}
