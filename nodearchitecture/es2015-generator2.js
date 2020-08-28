
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


//generator with while

gen=getValues();
it= gen.next(); //go to first value

while(!it.done){  //if done is false
    console.log(it.value); //print value
    it=gen.next();      //move to next point
}


/* 
    generator with for-of 
    for-of is designed to work with generators
    it automatically calls generator function 
        1. uses it=gen.next(), 
        2. sets condition for it !it.done
        3. uses the value it.value
    
*/

console.log('using for-of with generator');
console.log();
console.log();

for(let value of getValues())
    console.log(value);