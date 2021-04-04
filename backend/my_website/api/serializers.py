from rest_framework import serializers, fields
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    topic_name = serializers.ReadOnlyField()
    date = fields.DateField(format='%d/%m/%Y', input_formats=['%d/%m/%Y'])

    class Meta:
        model = Post
        fields = '__all__'
