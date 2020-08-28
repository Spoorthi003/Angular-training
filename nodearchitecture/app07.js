let {primeGenerator}=require('./lib/primes');

let countPrime7=0;

//find first 100 primes that end with a 7
for(let prime of primeGenerator(2,500000)){
    if(prime%10===7){
        console.log('\t\t',prime);        
        countPrime7++;
        if(countPrime7===10)
            break;
    }
}


