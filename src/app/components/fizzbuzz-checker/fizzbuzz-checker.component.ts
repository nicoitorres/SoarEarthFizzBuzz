import { Component, OnInit } from '@angular/core';
import { FizzbuzzCheckerService } from 'src/app/services/fizzbuzz-checker.service';

@Component({
  selector: 'app-fizzbuzz-checker',
  templateUrl: './fizzbuzz-checker.component.html',
  styleUrls: ['./fizzbuzz-checker.component.scss']
})
export class FizzbuzzCheckerComponent implements OnInit {

  public userNumberInput: string = "";
  public fizzbuzzOutput: string = "";
  public inputOutputs: inputoutput[] = [];

  public maxInputLength:number = 50;

  constructor(private fizzCheckerService: FizzbuzzCheckerService) { }

  ngOnInit(): void {
  }

  fizzbuzzInput() {
    let userInput = this.userNumberInput;
    if (!this.validateInput(userInput)) {
      alert("Invalid input. Enter only numbers sperated by ,");
      return;
      //Handle invalid input here
    }
    let inputArray = userInput.split(',');
    for (let input of inputArray) {
      let output = this.fizzCheckerService.checkInput(parseInt(input));
      let inputoutput: inputoutput = { input: parseInt(input), output: output };

      this.inputOutputs.push(inputoutput);
    }
  }

  validateInput(input: string): boolean {
    input = input.replace(/\s/g, "");
    const regex = /^\d+(,\d+)*$/g;
    return regex.test(input);
  }

  clearOutput() {
    this.inputOutputs = [];
  }
}
export class inputoutput {
  input: number;
  output: string;
  constructor(input: number, output: string) {
    this.input = input;
    this.output = output;
  }
}