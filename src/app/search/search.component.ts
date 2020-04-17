import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public step = 0;
  public foods = [
    { value: 'steak-0', viewValue: '健談' },
    { value: 'pizza-1', viewValue: '帥氣' },
    { value: 'tacos-2', viewValue: '幽默' }
  ];

  constructor() { }

  ngOnInit() {
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
