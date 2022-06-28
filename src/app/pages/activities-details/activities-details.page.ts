import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivitiesService } from './../../services/activities.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities-details',
  templateUrl: 'activities-details.page.html',
  styleUrls: ['activities-details.page.scss'],
})
export class ActivitiesDetailsPage implements OnInit {
  activitiesForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private activitiesService: ActivitiesService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.activitiesForm = this.fb.group({ 
      activity_id: '', 
      activity_name: '', 
      activity_details: '', 
      activity_lat: '', 
      activity_long: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.activitiesService.getActivitiesById(this.id).subscribe(res => {
        this.activitiesForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.activitiesService.updateActivitiesById(this.id, this.activitiesForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.activitiesService.addActivities(this.activitiesForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.activitiesService.deleteActivitiesById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
