import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImage = '';
  stars = [1, 2, 3, 4, 5];

  get currentImage(): string {
    return this.selectedImage || this.product.image;
  }

  likeProduct(): void {
    this.product.likes += 1;
  }

  removeProduct(): void {
    this.delete.emit(this.product.id);
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  isFilled(star: number): boolean {
    return this.product.rating >= star;
  }

  whatsappUrl(): string {
    const text = encodeURIComponent(`Посмотри этот товар: ${this.product.link}`);
    return `https://wa.me/?text=${text}`;
  }

  telegramUrl(): string {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}
