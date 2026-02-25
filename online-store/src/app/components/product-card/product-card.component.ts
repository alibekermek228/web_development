import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  stars = [1, 2, 3, 4, 5];
  selectedImage = '';

  get currentImage(): string {
    return this.selectedImage || this.product.image;
  }

  isFilledStar(star: number): boolean {
    return this.product.rating >= star;
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  buildWhatsappUrl(): string {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    return `https://wa.me/?text=${text}`;
  }

  buildTelegramUrl(): string {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}
