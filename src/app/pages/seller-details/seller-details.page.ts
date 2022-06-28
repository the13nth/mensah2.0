import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SellerService } from './../../services/seller.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-details',
  templateUrl: 'seller-details.page.html',
  styleUrls: ['seller-details.page.scss'],
})
export class SellerDetailsPage implements OnInit {
  sellerForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private sellerService: SellerService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.sellerForm = this.fb.group({ 
      Seller_name: '', 
      Seller_details: '', 
      Location_name: '', 
      seller_lat: '', 
      seller_longitude: '', 
      seller_scans: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.sellerService.getSellerById(this.id).subscribe(res => {
        this.sellerForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.sellerService.updateSellerById(this.id, this.sellerForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.sellerService.addSeller(this.sellerForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.sellerService.deleteSellerById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
