import numpy as np
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
import json
import urllib.request
url_PeopleOnIss = 'http://api.open-notify.org/astros.json'
response=urllib.request.urlopen(url_PeopleOnIss)
result = json.loads(response.read())
print("The number of people on board the ISS :",result['number'])
astronaut_names=result['people']
for names in astronaut_names:
    print(names)
url_ISSLocation = 'http://api.open-notify.org/iss-now.json'
response=urllib.request.urlopen(url_ISSLocation)
result = json.loads(response.read())
location_ISS = result['iss_position']
latitude = float(location_ISS['latitude'])
longitude = float(location_ISS['longitude'])

my_map = Basemap(projection='robin', lat_0=0, lon_0=-100,resolution='l', area_thresh=1000.0)

my_map.drawcoastlines()
my_map.drawcountries()
my_map.fillcontinents(color='coral')
my_map.drawmapboundary()
my_map.drawmeridians(np.arange(0, 360, 30))
my_map.drawparallels(np.arange(-90, 90, 30))

x,y = my_map(longitude,latitude)
my_map.plot(x, y, 'b>', markersize=16)
label = ['ISS']
plt.text(x+100000, y+500000, label)
title_string = "The current position of the ISS:\n"
title_string += "LAT:%s  LNG:%s" % (latitude, longitude)
plt.title(title_string)
plt.show()
