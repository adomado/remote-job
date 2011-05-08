var PrimeWorker = {

  init : function() {
    postMessage({action : "log", data : "initing"});
    PrimeWorker.findPrimesBetween(1, 100);
  },

  
  // excludes first number
  // includes last number
  // Returns number of prime numbers between min & max
  findPrimesBetween : function(min, max) {
    var primeCount = 0;
    for(var number=min+1, number<=max, number++)
    {
      if(PrmeWorker.isPrime(number)) {
        primeCount += 1;
      }
        
    }
    return primeCount;
  },
  
  
  isPrime : function(number) {
    for(var i=2; i<number; i++) 
    {
      if(number % i == 0)
        return true;
      else
        return false;
    }
  }
  
  
};


self.addEventListener('message', function(e) {
  if(e.data == "start")
    PrimeWorker.init();
}, false);
