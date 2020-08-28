
//yield must be present in a generator function
//A generator function is indefied by a * before function name signature
function * getValues(){

    console.log('calculating first value')
    yield 1;
    console.log('calculating first value')
    yield 2;
    console.log('calculating first value')
    yield 3;
    console.log('calculation over');
}

//this function  doesn't return 1,2 or 3. It returns a generator object
let result=getValues();


console.log(result, typeof(result));

console.log(result.next()); //it returns first yield, done:false says we may have more items

console.log(result.next()); //it returns the second yiled, done:false says we may have more items

console.log(result.next()); //it returns the next yiled, done:false says we may have more items

console.log(result.next()); //value:undefined as nothing yielded, done:true means end of journey


//once a generator reaches end, it can't be used any further. 
console.log(result.next());

//you can get new generator by calling the function again


//let gen=getValues();

