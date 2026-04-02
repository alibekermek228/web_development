from django.db import migrations


def add_more_products(apps, schema_editor):
    Category = apps.get_model('api', 'Category')
    Product = apps.get_model('api', 'Product')

    categories = {
        category.name: category
        for category in Category.objects.filter(
            name__in=['Smartphones', 'Laptops', 'Headphones', 'Tablets']
        )
    }

    products = [
        {
            'name': 'Apple iPhone 17 Pro Max 256Gb',
            'price': 1049990,
            'description': 'Large flagship smartphone with strong battery life.',
            'count': 4,
            'is_active': True,
            'category': categories['Smartphones'],
        },
        {
            'name': 'Apple iPhone 13 128Gb',
            'price': 319990,
            'description': 'Popular smartphone for daily use.',
            'count': 12,
            'is_active': True,
            'category': categories['Smartphones'],
        },
        {
            'name': 'Apple iPhone 17 Pro Blue 256Gb',
            'price': 949990,
            'description': 'Premium smartphone with a blue finish.',
            'count': 7,
            'is_active': True,
            'category': categories['Smartphones'],
        },
        {
            'name': 'Thunderobot 911 X Wild Hunter G2D',
            'price': 499990,
            'description': 'Powerful laptop for games and heavy tasks.',
            'count': 3,
            'is_active': True,
            'category': categories['Laptops'],
        },
        {
            'name': 'HYDRA Home Razor R7',
            'price': 274990,
            'description': 'Productive laptop with SSD storage.',
            'count': 6,
            'is_active': True,
            'category': categories['Laptops'],
        },
        {
            'name': 'HYDRA Home Razor R5',
            'price': 249990,
            'description': 'Reliable laptop for office and study.',
            'count': 8,
            'is_active': True,
            'category': categories['Laptops'],
        },
        {
            'name': 'HYDRA Home Minor Black',
            'price': 8990,
            'description': 'Wireless earbuds with comfortable fit.',
            'count': 25,
            'is_active': True,
            'category': categories['Headphones'],
        },
        {
            'name': 'HYDRA S61 Black',
            'price': 7990,
            'description': 'Affordable earbuds with balanced sound.',
            'count': 16,
            'is_active': True,
            'category': categories['Headphones'],
        },
        {
            'name': 'HYDRA S61 White',
            'price': 7990,
            'description': 'Budget earbuds for daily listening.',
            'count': 19,
            'is_active': True,
            'category': categories['Headphones'],
        },
        {
            'name': 'G-VIIL G2000 10',
            'price': 94990,
            'description': 'Tablet with a big display and large storage.',
            'count': 10,
            'is_active': True,
            'category': categories['Tablets'],
        },
        {
            'name': 'Apple iPad A16 11 2025 Wi-Fi Blue',
            'price': 249990,
            'description': 'Modern tablet with strong performance.',
            'count': 5,
            'is_active': True,
            'category': categories['Tablets'],
        },
        {
            'name': 'Xiaomi Redmi Pad 2 4G 11',
            'price': 169990,
            'description': 'Tablet with cellular support and large screen.',
            'count': 9,
            'is_active': True,
            'category': categories['Tablets'],
        },
    ]

    for product_data in products:
        Product.objects.get_or_create(
            name=product_data['name'],
            defaults=product_data,
        )


def remove_more_products(apps, schema_editor):
    Product = apps.get_model('api', 'Product')

    product_names = [
        'Apple iPhone 17 Pro Max 256Gb',
        'Apple iPhone 13 128Gb',
        'Apple iPhone 17 Pro Blue 256Gb',
        'Thunderobot 911 X Wild Hunter G2D',
        'HYDRA Home Razor R7',
        'HYDRA Home Razor R5',
        'HYDRA Home Minor Black',
        'HYDRA S61 Black',
        'HYDRA S61 White',
        'G-VIIL G2000 10',
        'Apple iPad A16 11 2025 Wi-Fi Blue',
        'Xiaomi Redmi Pad 2 4G 11',
    ]

    Product.objects.filter(name__in=product_names).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_seed_store_data'),
    ]

    operations = [
        migrations.RunPython(add_more_products, remove_more_products),
    ]
