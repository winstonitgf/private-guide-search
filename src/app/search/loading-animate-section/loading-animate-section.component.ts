import { Component, OnInit } from '@angular/core';
import { SearchLoadingService } from 'src/app/services/search-loading.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-loading-animate-section',
  templateUrl: './loading-animate-section.component.html',
  styleUrls: ['./loading-animate-section.component.scss']
})
export class LoadingAnimateSectionComponent implements OnInit {

  public isLoading: Observable<boolean>;
  constructor(public searchLoadingService: SearchLoadingService) {
    this.isLoading = searchLoadingService.SearchLoadingSubscription();
  }

  ngOnInit() {
  }

}
