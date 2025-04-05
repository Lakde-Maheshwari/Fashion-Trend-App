from rest_framework import serializers
from .models import Product, Category, Design

class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Design
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    design = DesignSerializer(read_only=True)  

    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    designs = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'

    def get_designs(self, obj):
        designs = Design.objects.filter(category=obj)
        return DesignSerializer(designs, many=True).data
