import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criteria-section',
  templateUrl: './criteria-section.component.html',
  styleUrls: ['./criteria-section.component.scss']
})
export class CriteriaSectionComponent implements OnInit {

  public foods = [
    { value: 'steak-0', viewValue: '健談' },
    { value: 'pizza-1', viewValue: '帥氣' },
    { value: 'tacos-2', viewValue: '幽默' }
  ];
  constructor() { }

  public search() { }
  ngOnInit() {
  }

}
