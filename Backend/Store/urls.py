from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet, DesignViewSet, RelatedProductsAPIView
from django.conf import settings

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'categories', CategoryViewSet, basename='category')            
router.register(r'designs', DesignViewSet, basename='design')


urlpatterns = [
    path('',include(router.urls)),
     path('products/<int:pk>/related/', RelatedProductsAPIView.as_view(), name='related-products'),
]


