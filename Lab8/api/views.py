from django.http import JsonResponse
from django.views.decorators.http import require_GET

from .models import Category, Product


def serialize_category(category: Category) -> dict:
    return {
        'id': category.id,
        'name': category.name,
    }


def serialize_product(product: Product) -> dict:
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category_id,
    }


@require_GET
def products_list(request):
    products = Product.objects.select_related('category').all()
    data = [serialize_product(product) for product in products]
    return JsonResponse(data, safe=False)


@require_GET
def product_detail(request, id: int):
    try:
        product = Product.objects.select_related('category').get(id=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    return JsonResponse(serialize_product(product))


@require_GET
def categories_list(request):
    categories = Category.objects.all()
    data = [serialize_category(category) for category in categories]
    return JsonResponse(data, safe=False)


@require_GET
def category_detail(request, id: int):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    return JsonResponse(serialize_category(category))


@require_GET
def category_products(request, id: int):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

    products = category.products.all()
    data = [serialize_product(product) for product in products]
    return JsonResponse(data, safe=False)
