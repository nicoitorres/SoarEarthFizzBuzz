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

  constructor(private fizzCheckerService: FizzbuzzCheckerService) { }

  ngOnInit(): void {
  }

  fizzbuzzInput() {
    let input = parseInt(this.userNumberInput);
    let output = this.fizzCheckerService.checkInput(input);
    let inputoutput:inputoutput = {input:input, output:output};
    
    this.inputOutputs.push(inputoutput);
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