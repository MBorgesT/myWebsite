import requests, random
import datetime

URL = 'https://jsonplaceholder.typicode.com/posts'
r = requests.get(url=URL)
data = r.json()

URL = 'http://localhost:8000/api/posts/'

first_day = datetime.datetime.now() - datetime.timedelta(days = 120)


def get_date_text(date):
    return date.strftime('%d/%m/%Y')

flag = 0

for i in range(100):
    d = data[i]

    aux = {
        'title': d['title'],
        'body': d['body'],
        'date': get_date_text(first_day + (datetime.timedelta(days=i))),
        'topic': random.choice([1, 2, 3])
    }

    r = requests.post(url=URL, data=aux)

    if flag == 0:
        print(r.text)
        flag = int(input())
