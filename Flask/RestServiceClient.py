import requests

url = "http://localhost:5001/"

result = requests.get(url).json()
print(result)