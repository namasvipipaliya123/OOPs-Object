class FizzBuzz {
    constructor() {
      this.currentNumber = 1;
    }
  
    print() {
      for (let i = 1; i <= 100; i++) {
        let output = '';
        
        if (i % 3 === 0) {
          output += 'Fizz';
        }
        
        if (i % 5 === 0) {
          output += 'Buzz';
        }

        if (output === '') {
          output = i;
        }
        
        console.log(output);
      }
    }
  }
  
  // Usage
  const fizzBuzz = new FizzBuzz();
  fizzBuzz.print();
  