

function isPrime(i) {
    if(num <2 ) return false;
      for(var j=2; j<i ;j++){
          if(i % j == 0)
          return false;
      }
      return true;
  }

  for(var i=100;i<=200;i++){
      if(isPrime(i)) console.log(i);
  }