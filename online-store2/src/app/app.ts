import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedCategoryName = '';
  categoryProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  chooseCategory(category: Category): void {
    this.selectedCategoryId = category.id;
    this.selectedCategoryName = category.name;
    this.categoryProducts = this.productService.getProductsByCategory(category.id);
  }

  onDeleteProduct(productId: number): void {
    this.productService.removeProduct(productId);
    if (this.selectedCategoryId !== null) {
      this.categoryProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }
}
