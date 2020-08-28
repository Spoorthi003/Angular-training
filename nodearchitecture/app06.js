let {fetchPrimes}=require('./lib/primes');




//a function that has an await should be marked async
function testPrimes(min,max){

    let id=`getPrimes(${min},${max})`;    
    console.log('starting job:', id);

    let event= fetchPrimes(min,max,id);

    
    event
        .on('error', error=>console.log('error',error))
        .on('prime',p=>console.log(p))
        .on('end', result=>console.log(result.id,result.total));
        //I am not handling individual primes
    
}



testPrimes(2,100); //success
testPrimes(100,5); //error
testPrimes(200,300);