import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerService } from './../../services/seller.service';
import { Seller } from './../../services/seller';

@Component({
  selector: 'app-seller',
  templateUrl: 'seller.page.html',
  styleUrls: ['seller.page.scss'],
})
export class SellerPage implements OnInit {
  items: Observable<Seller[]>;

  constructor(private sellerService: SellerService) {
      
  }
  ngOnInit() {
    this.items = this.sellerService.getSellers();
  }

}