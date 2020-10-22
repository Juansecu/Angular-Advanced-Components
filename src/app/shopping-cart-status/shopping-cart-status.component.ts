import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {Product} from '../interfaces/product';

@Component({
  selector: 'app-shopping-cart-status',
  templateUrl: './shopping-cart-status.component.html',
  styleUrls: ['./shopping-cart-status.component.css']
})
export class ShoppingCartStatusComponent implements OnInit, DoCheck {
  @Input() price: number;
  @Input() storeModel: Array<Product>;

  @Output() pay: EventEmitter<null> = new EventEmitter();

  constructor() { }

  makePayment() {
    this.pay.emit();
  }

  ngOnInit(): void {
  }

  /*ngOnChanges(changes: SimpleChanges) {
    if (changes.price.currentValue < changes.price.previousValue) {
      alert('¿Estás seguro de que deseas eliminar este producto del carrito?');
    }
  }*/

  /*
    * ngDoCheck reconocerá cada cambio que haya en el DOM,
    * así que es muy probable que hayan costos de vida de la aplicación bastantemente altos.
    * Se recomienda utilizar con precaución.
  */
  ngDoCheck() {
    console.log('DoCheck activated!');
  }
}
