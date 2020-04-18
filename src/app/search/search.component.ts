import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public isLoading;



  constructor() { }

  ngOnInit() {
  }

  // search() {
  //   const self = this;
  //   self.isLoading = true;
  //   setTimeout(function () {
  //     self.isLoading = false;
  //   }, 3000);
  // }

 
}
