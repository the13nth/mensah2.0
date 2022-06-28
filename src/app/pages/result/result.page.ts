import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultService } from './../../services/result.service';
import { Result } from './../../services/result';

@Component({
  selector: 'app-result',
  templateUrl: 'result.page.html',
  styleUrls: ['result.page.scss'],
})
export class ResultPage implements OnInit {
  items: Observable<Result[]>;

  constructor(private resultService: ResultService) {
      
  }
  ngOnInit() {
    this.items = this.resultService.getResults();
  }

}