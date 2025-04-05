from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255,unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Design(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=255,unique=True)
    image = models.ImageField(upload_to='designs/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    design = models.ForeignKey('Design', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    colors = models.JSONField()
    sizes = models.JSONField()
    fabric = models.CharField(max_length=255)
    description = models.TextField(blank=True,null=True)
    discount_percentage = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

# calculating discounted price 
    def discounted_price(self):
        if self.discount_percentage:
            return self.price * (1 - self.discount_percentage / 100)
        return self.price
    
    def __str__(self):
        return f"{self.design.name} - {self.price}"

