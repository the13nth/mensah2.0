import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MistscanService } from './../../services/mistscan.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mistscan-details',
  templateUrl: 'mistscan-details.page.html',
  styleUrls: ['mistscan-details.page.scss'],
})
export class MistscanDetailsPage implements OnInit {
  mistscanForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private mistscanService: MistscanService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.mistscanForm = this.fb.group({ 
      MistscanID: '', 
      MistType: '', 
      MistData: '', 
      Mistdetails: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.mistscanService.getMistscanById(this.id).subscribe(res => {
        this.mistscanForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.mistscanService.updateMistscanById(this.id, this.mistscanForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.mistscanService.addMistscan(this.mistscanForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.mistscanService.deleteMistscanById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
