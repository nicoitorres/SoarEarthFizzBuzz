import { Component, OnInit } from '@angular/core';
import { FizzbuzzCheckerService } from 'src/app/services/fizzbuzz-checker.service';
import * as appRules from '../../fizzBuzzRules';

@Component({
  selector: 'app-fizzbuzz-checker',
  templateUrl: './fizzbuzz-checker.component.html',
  styleUrls: ['./fizzbuzz-checker.component.scss']
})
export class FizzbuzzCheckerComponent implements OnInit {

  public userNumberInput: string = "";
  public fizzbuzzOutput: string = "";
  public inputOutputs: inputoutput[] = [];

  public maxInputLength:number = 50; //Length of the input box

  public fizzDividerValue:number = appRules.fizzDivider;
  public acceptedEndings:number[] = appRules.validEndings;
  
  constructor(private fizzCheckerService: FizzbuzzCheckerService) { }

  ngOnInit(): void {
  }

  fizzbuzzInput() { //Called when Check button is pressed
    let userInput = this.userNumberInput; //Get the user input
    if (!this.validateInput(userInput)) { //Check if it's valid, return error if not.
      alert("Invalid input. Enter only numbers sperated by ,");
      return;
    }
    let inputArray = userInput.split(','); //Split the input into an array seperated by commas
    for (let input of inputArray) {
      let output = this.fizzCheckerService.checkInput(parseInt(input)); //Use the checker servize to get the output
      let inputoutput: inputoutput = { input: parseInt(input), output: output }; //Create an inputoutput object

      this.inputOutputs.push(inputoutput); //Push that object to the input output array
    }
  }

  validateInput(input: string): boolean {
    input = input.replace(/\s/g, "");
    const regex = /^\d+(,\d+)*$/g; //Any digit followed by a comma and then any digit
    return regex.test(input);
  }

  clearOutput() {
    this.inputOutputs = [];
    this.userNumberInput = '';
  }
}
export class inputoutput { //inputoutput object class
  input: number;
  output: string;
  constructor(input: number, output: string) {
    this.input = input;
    this.output = output;
  }
}