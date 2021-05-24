from django.db import models
from topic.models import Topic


class Post(models.Model):
    title = models.CharField(max_length=511)
    body = models.TextField()
    date = models.DateField()
    topic = models.ForeignKey(Topic, on_delete=models.PROTECT)

    def __str__(self):
        return self.title

    @property
    def topic_name(self):
        return self.topic.name
