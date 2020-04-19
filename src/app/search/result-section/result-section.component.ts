import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.scss']
})
export class ResultSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetail() {
    this.router.navigate(['/provider-detail']);
  }
}
