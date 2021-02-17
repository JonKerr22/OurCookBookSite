import requests

url = "http://localhost:5000/"

result = requests.get(url).json()
print(result)