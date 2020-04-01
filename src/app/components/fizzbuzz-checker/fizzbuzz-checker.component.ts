import { Component, OnInit } from '@angular/core';
import { FizzbuzzCheckerService } from 'src/app/services/fizzbuzz-checker.service';

@Component({
  selector: 'app-fizzbuzz-checker',
  templateUrl: './fizzbuzz-checker.component.html',
  styleUrls: ['./fizzbuzz-checker.component.scss']
})
export class FizzbuzzCheckerComponent implements OnInit {

  public userNumberInput: string = "";

  constructor(private fizzCheckerService: FizzbuzzCheckerService) { }

  ngOnInit(): void {
  }
  fizzbuzzInput() {
    alert(this.fizzCheckerService.checkInput(parseInt(this.userNumberInput)));
  }
}
