from django.shortcuts import render
from rest_framework import viewsets
from .models import Product, Category, Design
from .serializers import ProductSerializer, CategorySerializer, DesignSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
# Create your views here.

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class DesignViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = DesignSerializer
    def get_queryset(self):
        cateogory_id = self.request.query_params.get('category_id', None)
        if cateogory_id is not None:
            return Design.objects.filter(category_id=cateogory_id)


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @action(detail=False,methods=['get'], url_path='design/(?P<design_id>\d+)')
    def by_design(self, request, design_id = None):
        products = Product.objects.filter(design_id = design_id)
        serializer = self.get_serializer(products,many=True)
        return Response(serializer.data)


class RelatedProductsAPIView(APIView):
    def get(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        related_products = Product.objects.filter(
            design__category=product.design.category
        ).exclude(id=product.id)[:3]

        serializer = ProductSerializer(related_products, many=True)
        return Response(serializer.data)