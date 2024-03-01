#!/usr/bin/python3
import requests

url = 'https://alx-intranet.hbtn.io/status'

response = requests.get(url)
body = response.text

print("Body response:")
print("\t- type:", type(body))
print("\t- content:", body)
