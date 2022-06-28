import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MistscanService } from './../../services/mistscan.service';
import { Mistscan } from './../../services/mistscan';

@Component({
  selector: 'app-mistscan',
  templateUrl: 'mistscan.page.html',
  styleUrls: ['mistscan.page.scss'],
})
export class MistscanPage implements OnInit {
  items: Observable<Mistscan[]>;

  constructor(private mistscanService: MistscanService) {
      
  }
  ngOnInit() {
    this.items = this.mistscanService.getMistscans();
  }

}