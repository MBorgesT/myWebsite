from . import business

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'GET':
        return Response(business.get_all())

    elif request.method == 'POST':
        return Response(business.insert(request.data))


@api_view(['POST'])
def get_post_page(request):
    data = business.get_post_page(request.body)
    return Response(data)


@api_view(['GET'])
def get_post_count(request):
    return Response(business.get_post_count())


@api_view(['POST'])
def get_post_page_by_topic(request):
    return Response(business.get_post_page_by_topic(request.body))


@api_view(['POST'])
def get_post_count_by_topic(request):
    return Response(business.get_post_count_by_topic(request.body))
