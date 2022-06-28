import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ScanService } from './../../services/scan.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scan-details',
  templateUrl: 'scan-details.page.html',
  styleUrls: ['scan-details.page.scss'],
})
export class ScanDetailsPage implements OnInit {
  scanForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private scanService: ScanService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.scanForm = this.fb.group({ 
      Scan_ID: '', 
      scan_type: '', 
      scanned_data: '', 
      scanned_item_price: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.scanService.getScanById(this.id).subscribe(res => {
        this.scanForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.scanService.updateScanById(this.id, this.scanForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.scanService.addScan(this.scanForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.scanService.deleteScanById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
