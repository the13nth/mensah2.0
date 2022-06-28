import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusstopService } from './../../services/busstop.service';
import { Busstop } from './../../services/busstop';

@Component({
  selector: 'app-busstop',
  templateUrl: 'busstop.page.html',
  styleUrls: ['busstop.page.scss'],
})
export class BusstopPage implements OnInit {
  items: Observable<Busstop[]>;

  constructor(private busstopService: BusstopService) {
      
  }
  ngOnInit() {
    this.items = this.busstopService.getBusstops();
  }

}