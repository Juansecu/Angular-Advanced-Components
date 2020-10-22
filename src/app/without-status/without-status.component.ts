import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-without-status',
  templateUrl: './without-status.component.html',
  styleUrls: ['./without-status.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithoutStatusComponent implements OnInit {
  @Input() product: Product;
  @Output() selectedProduct: EventEmitter<Product> = new EventEmitter();

  private disabled: boolean;
  public buyAction: string;

  constructor() { }

  ngOnInit(): void {
    this.buyAction = `BUY FOR $${this.product.price}`;
  }

  isItemDisabled() {
    return !!this.disabled;
  }

  selectItem() {
    this.disabled = true;
    this.buyAction = `ADDED TO CART`;
    this.selectedProduct.emit(this.product);
  }
}
