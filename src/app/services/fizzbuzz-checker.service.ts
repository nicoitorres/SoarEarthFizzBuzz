import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzbuzzCheckerService {
  validEndings = [5, 7]
  constructor() { }

  checkInput(input: number): string {
    let isBuzz: boolean = this.checkNumberEnding(this.validEndings, input);
    if (input % 3 === 0) {
      if (isBuzz)
        return "FizzBuzz";
      return "Fizz";
    }
    else if (isBuzz)
      return "Buzz"

    return input.toString();


  }
  checkNumberEnding(validEnds: number[], input: number) {
    for (let ending of validEnds) { //Loop through the numbers in the validEnds array and if the input ends in that, return true, else false
      if ((input % 10) === ending) {
        return true
      }
    }
    return false;
  }
}
