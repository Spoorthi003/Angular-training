class Calc{

    
    constructor(){

        this.numbers=[];
    }

    /* note: functions inside class will not have a function prefix */

    addList(num){
    
            this.numbers.push(num); 
    }

}


module.exports=Calc;