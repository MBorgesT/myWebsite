from .models import Topic
from .serializers import TopicSerializer


def get_all():
	all_topics = Topic.objects.all()
	serializer = TopicSerializer(all_topics, many=True)
	return serializer.data
