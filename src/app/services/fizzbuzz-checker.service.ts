import { Injectable } from '@angular/core';
import * as appRules from '../fizzBuzzRules';

@Injectable({
  providedIn: 'root'
})
export class FizzbuzzCheckerService {
  
  constructor() { }

  checkInput(input: number): string {
    if (input == 0)
      return '0';
    if (!input)
      throw new Error("InvalidInput");
    
    let isBuzz: boolean = this.checkNumberEnding(appRules.validEndings, input);
    if (input % appRules.fizzDivider === 0) { //If divisble by 3
      if (isBuzz) //If also a valid ending
        return "FizzBuzz";
      return "Fizz";
    }
    else if (isBuzz)
      return "Buzz"

    return input.toString(); //If we got here, it is an ordinary number


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
