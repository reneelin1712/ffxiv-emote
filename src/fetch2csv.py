import requests
import csv

url = 'https://xivapi.com/emote'

headers = {
    'Accept': 'application/json',
    'Content-Type':'application/json'
}

response = requests.request('GET',url, headers=headers,data=[])
myjson = response.json()

emoteInfo = myjson['Results']
pages = myjson['Pagination']['PageTotal']
allEmoteInfo = []

for i in range(pages-1):
    response_next = requests.request('GET',url+'?page='+str(i+2), headers=headers,data=[])
    myjson_next = response_next.json()
    emoteInfo_next = myjson_next['Results']
    emoteInfo = emoteInfo+emoteInfo_next


emotes = []
csvheader = ['ID','Icon','Name','Url']

for emote in emoteInfo:
    listing = [emote['ID'],emote['Icon'],emote['Name'],emote['Url']]
    emotes.append(listing)



with open('emotes.csv','w',encoding='UTF8',newline='') as f:
    writer = csv.writer(f)
    writer.writerow(csvheader)
    writer.writerows(emotes)