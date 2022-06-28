import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResultService } from './../../services/result.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-details',
  templateUrl: 'result-details.page.html',
  styleUrls: ['result-details.page.scss'],
})
export class ResultDetailsPage implements OnInit {
  resultForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private resultService: ResultService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.resultForm = this.fb.group({ 
      scan_type: '', 
      scan_details: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.resultService.getResultById(this.id).subscribe(res => {
        this.resultForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.resultService.updateResultById(this.id, this.resultForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.resultService.addResult(this.resultForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.resultService.deleteResultById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
