import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DAW2 Calculadora';
  currentNumber = '0';
	operation = '';

	constructor() {}

	getOperation(op: string) {
		this.operation = op;
		this.currentNumber += op;
	}

	getNumber(number: string) {
		if (this.currentNumber === '0') {
			this.currentNumber = number;
		} else {
			this.currentNumber += number;
		}
	}

	addDecimalPoint() {
		this.currentNumber += '.';
	}

	calc() {
		let result = eval(this.currentNumber);
		this.currentNumber = (this.currentNumber.includes('.'))?
			String(result.toFixed(2)) : String(result);
	}

	clearAll() {
		this.currentNumber = '0';
		this.operation = '';
	}
}
