class StringManipulator {
    constructor(inputString) {
      this.inputString = inputString;
    }
  
    cleanString() { 
      this.inputString = this.inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }
  }
  
  class PalindromeChecker extends StringManipulator {
    constructor(inputString) {
      super(inputString);
    }
  
    isPalindrome() {
      this.cleanString();
      const reversedString = this.inputString.split('').reverse().join('');
      return this.inputString === reversedString;
    }
  }

  const palindromeChecker = new PalindromeChecker("A man, a plan, a canal, Panama!");
  console.log(palindromeChecker.isPalindrome()); 
  
  const palindromeChecker2 = new PalindromeChecker("Hello world");
  console.log(palindromeChecker2.isPalindrome()); 
  