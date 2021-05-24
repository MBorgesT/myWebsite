from . import business

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'GET':
        return Response(business.get_all())

    elif request.method == 'POST':
        try:
            return Response(business.insert(request.data))
        except Exception as e:
            return Response(e.__str__())


@api_view(['POST'])
def get_post_page(request):
    data = business.get_post_page(request.body)
    return Response(data)


@api_view(['GET'])
def get_post_count(request):
    try:
        return Response(business.get_post_count())
    except Exception as e:
        return Response(e.__str__())


@api_view(['POST'])
def get_posts_by_topic(request):
    try:
        return Response(business.get_posts_by_topic(request.data['topic_id']))
    except Exception as e:
        return Response(e.__str__())
