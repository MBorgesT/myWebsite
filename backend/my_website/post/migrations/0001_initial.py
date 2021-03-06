# Generated by Django 3.1.7 on 2021-04-02 19:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=511)),
                ('body', models.TextField()),
                ('date', models.DateField()),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='post.topic')),
            ],
        ),
    ]
