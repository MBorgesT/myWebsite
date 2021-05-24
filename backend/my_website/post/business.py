from .models import Post
from .serializers import PostSerializer
import json


def get_post_page(request_body):
    parsed_data = json.loads(request_body)

    posts_per_page = parsed_data['posts_per_page']
    page = parsed_data['page']

    start = posts_per_page * (page - 1)
    end = start + posts_per_page
    posts = Post.objects.order_by('-date')[start:end]

    serializer = PostSerializer(posts, many=True)
    return serializer.data


def get_post_count():
    return Post.objects.all().count()


def get_all():
    all_posts = Post.objects.all().order_by('-date')
    serializer = PostSerializer(all_posts, many=True)
    return serializer.data


def insert(request_body):
    serializer = PostSerializer(data=request_body)

    if serializer.is_valid():
        serializer.save()
    else:
        raise Exception(serializer.errors)

    return serializer.data


def get_posts_by_topic(topic_id):
    posts = Post.objects.filter(topic_id=topic_id).order_by('-date')
    serializer = PostSerializer(posts, many=True)
    return serializer.data
