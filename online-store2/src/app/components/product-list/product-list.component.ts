import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();

  visibleProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.visibleProducts = [...this.products];
    }
  }

  onDelete(productId: number): void {
    this.visibleProducts = this.visibleProducts.filter((product) => product.id !== productId);
    this.deleteProduct.emit(productId);
  }
}
