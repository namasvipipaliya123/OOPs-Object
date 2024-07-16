class Calculator {
    constructor(displayElement) {
      this.displayElement = displayElement;
      this.clear();
    }
  
    clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
      this.updateDisplay();
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
      this.updateDisplay();
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
      this.updateDisplay();
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
      this.updateDisplay();
    }
  
    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '/':
          computation = prev / current;
          break;
        default:
          return;
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
      this.updateDisplay();
    }
  
    updateDisplay() {
      this.displayElement.textContent = this.currentOperand;
    }
  }
  const displayElement = document.getElementById('display');
  const numberButtons = document.querySelectorAll('.number');
  const operationButtons = document.querySelectorAll('.operation');
  const equalsButton = document.getElementById('btn-equal');
  const clearButton = document.getElementById('btn-clear');
  const deleteButton = document.getElementById('btn-backspace');

  const calculator = new Calculator(displayElement);
 
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.textContent);
    });
  });
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.textContent);
    });
  });
  
  equalsButton.addEventListener('click', () => {
    calculator.compute();
  });
  
  clearButton.addEventListener('click', () => {
    calculator.clear();
  });
  
  deleteButton.addEventListener('click', () => {
    calculator.delete();
  });
  