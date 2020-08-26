var num  =window.prompt('Enter your number');


function isPrime(num) {
  if(num <2 ) return false;
    for(var j=2; j<i ;j++){
        if(i % j == 0)
        return false;
    }
    return true;
}

for(var i=2;i<=num;i++){
    if(isPrime(num)) console.log(num);
}