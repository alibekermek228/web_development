from django.test import TestCase
from django.urls import reverse

from .models import Category, Product


class ApiViewsTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.category = Category.objects.create(name='Smartphones')
        cls.other_category = Category.objects.create(name='Laptops')
        cls.product = Product.objects.create(
            name='iPhone 17 Pro',
            price=949990,
            description='Flagship smartphone.',
            count=7,
            is_active=True,
            category=cls.category,
        )

    def test_products_list_returns_json(self):
        response = self.client.get(reverse('products-list'))
        names = [product['name'] for product in response.json()]

        self.assertEqual(response.status_code, 200)
        self.assertIn(self.product.name, names)

    def test_product_detail_returns_one_product(self):
        response = self.client.get(reverse('product-detail', args=[self.product.id]))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['id'], self.product.id)

    def test_categories_list_returns_json(self):
        response = self.client.get(reverse('categories-list'))
        names = [category['name'] for category in response.json()]

        self.assertEqual(response.status_code, 200)
        self.assertIn(self.category.name, names)
        self.assertIn(self.other_category.name, names)

    def test_category_detail_returns_one_category(self):
        response = self.client.get(reverse('category-detail', args=[self.category.id]))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['name'], self.category.name)

    def test_category_products_returns_products_from_selected_category(self):
        Product.objects.create(
            name='MacBook Air',
            price=699990,
            description='Laptop for study and work.',
            count=3,
            is_active=True,
            category=self.other_category,
        )

        response = self.client.get(reverse('category-products', args=[self.category.id]))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]['category_id'], self.category.id)
