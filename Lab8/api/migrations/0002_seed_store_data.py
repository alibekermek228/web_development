from django.db import migrations


def seed_store_data(apps, schema_editor):
    Category = apps.get_model('api', 'Category')
    Product = apps.get_model('api', 'Product')

    categories = {
        'Smartphones': Category.objects.get_or_create(name='Smartphones')[0],
        'Laptops': Category.objects.get_or_create(name='Laptops')[0],
        'Headphones': Category.objects.get_or_create(name='Headphones')[0],
        'Tablets': Category.objects.get_or_create(name='Tablets')[0],
    }

    products = [
        {
            'name': 'Apple iPhone 17 Pro 256Gb',
            'price': 949990,
            'description': 'New iPhone with a strong camera and high performance.',
            'count': 9,
            'is_active': True,
            'category': categories['Smartphones'],
        },
        {
            'name': 'Apple iPhone 15 128Gb',
            'price': 429990,
            'description': 'Balanced iPhone model with a bright display and camera.',
            'count': 14,
            'is_active': True,
            'category': categories['Smartphones'],
        },
        {
            'name': 'Thunderobot 911S Core D',
            'price': 429990,
            'description': 'Gaming laptop for study, work, and everyday tasks.',
            'count': 5,
            'is_active': True,
            'category': categories['Laptops'],
        },
        {
            'name': 'ARTEO Prime One 14',
            'price': 239990,
            'description': 'Lightweight laptop for everyday work and study.',
            'count': 8,
            'is_active': True,
            'category': categories['Laptops'],
        },
        {
            'name': 'HYDRA Home Minor Beige',
            'price': 8990,
            'description': 'Compact wireless earbuds for daily listening.',
            'count': 21,
            'is_active': True,
            'category': categories['Headphones'],
        },
        {
            'name': 'Air Pro 2 White',
            'price': 6990,
            'description': 'Light TWS earbuds for music and phone calls.',
            'count': 18,
            'is_active': True,
            'category': categories['Headphones'],
        },
        {
            'name': 'Apple iPad A16 11 2025 Wi-Fi Silver',
            'price': 249990,
            'description': 'Modern tablet for study, media, and work.',
            'count': 6,
            'is_active': True,
            'category': categories['Tablets'],
        },
        {
            'name': 'Xiaomi Redmi Pad 2 11',
            'price': 149990,
            'description': 'Comfortable tablet for videos, browsing, and study.',
            'count': 11,
            'is_active': True,
            'category': categories['Tablets'],
        },
    ]

    for product_data in products:
        Product.objects.get_or_create(
            name=product_data['name'],
            defaults=product_data,
        )


def unseed_store_data(apps, schema_editor):
    Category = apps.get_model('api', 'Category')
    Product = apps.get_model('api', 'Product')

    product_names = [
        'Apple iPhone 17 Pro 256Gb',
        'Apple iPhone 15 128Gb',
        'Thunderobot 911S Core D',
        'ARTEO Prime One 14',
        'HYDRA Home Minor Beige',
        'Air Pro 2 White',
        'Apple iPad A16 11 2025 Wi-Fi Silver',
        'Xiaomi Redmi Pad 2 11',
    ]
    category_names = ['Smartphones', 'Laptops', 'Headphones', 'Tablets']

    Product.objects.filter(name__in=product_names).delete()
    Category.objects.filter(name__in=category_names).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_store_data, unseed_store_data),
    ]
