import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../interfaces/product';
import { Store } from '../models/store.model';
import { ConfirmationAlertComponent } from './../confirmation-alert/confirmation-alert.component';

@Component({
  selector: 'app-with-status',
  templateUrl: './with-status.component.html',
  styleUrls: ['./with-status.component.css']
})
export class WithStatusComponent implements OnInit {
  @ViewChild(ConfirmationAlertComponent, {static: false})
  alertChild: ConfirmationAlertComponent;

  storeModel: Store = new Store();
  purchasedProducts: Array<Product>;

  constructor() {
    this.purchasedProducts = [];
  }

  ngOnInit(): void {
  }

  getTotalPrice() {
    if (this.purchasedProducts) {
      return this.purchasedProducts.reduce(
        (prev: number, product: Product) => prev + product.price, 0
      );
    }
  }

  makePayment() {
    this.alertChild.display();
  }

  onSelectedProduct(_event: Product) {
    this.selectProduct(_event);
  }

  selectProduct(product: Product) {
    this.purchasedProducts.push(product);
  }
}
