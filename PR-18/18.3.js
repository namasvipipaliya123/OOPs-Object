class Sequence {
   
    getValue(n) {
      throw new Error('Method getValue(n) must be implemented');
    }
  }
  
 
  class FibonacciSequence extends Sequence {
    getValue(n) {
    
      if (n <= 0) {
        throw new Error('Invalid input: n must be a positive integer');
      }
  
      
      if (n === 1) return 0;
      if (n === 2) return 1; 

      let prev1 = 0;
      let prev2 = 1;
      let current = 0;
      
      for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
      }
      
      return current;
    }
  }
  const fibonacci = new FibonacciSequence();
  console.log(fibonacci.getValue(1)); 
  console.log(fibonacci.getValue(2)); 
  console.log(fibonacci.getValue(6)); 
  console.log(fibonacci.getValue(12)); 
  