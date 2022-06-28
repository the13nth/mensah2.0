import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivitiesService } from './../../services/activities.service';
import { Activities } from './../../services/activities';

@Component({
  selector: 'app-activities',
  templateUrl: 'activities.page.html',
  styleUrls: ['activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  items: Observable<Activities[]>;

  constructor(private activitiesService: ActivitiesService) {
      
  }
  ngOnInit() {
    this.items = this.activitiesService.getActivitiess();
  }

}