// Built-in intro timestamps (seconds). Source: the official "Opening" chapter markers
// in the One Pace files where present, otherwise audio fingerprinting (tools/).
// Your own settings in the extension override these.
var OPS_DEFAULTS = {
 "arcs": {
  "Alabasta": {
   "start": 0,
   "end": 109.9
  },
  "Amazon Lily": {
   "start": 0,
   "end": 100.0
  },
  "Arlong Park": {
   "start": 0,
   "end": 110.6
  },
  "Baratie": {
   "start": 0,
   "end": 110.7
  },
  "Dressrosa": {
   "start": 0,
   "end": 102.8
  },
  "Drum Island": {
   "start": 0,
   "end": 110.4
  },
  "Egghead": {
   "start": 0,
   "end": 90.0
  },
  "Enies Lobby": {
   "start": 0,
   "end": 110.0
  },
  "Fishman Island": {
   "start": 0,
   "end": 150.5
  },
  "Gaimon": {
   "start": 0,
   "end": 110.3
  },
  "If You Could Go Anywhere... The Adventures of the Straw Hats": {
   "start": 0,
   "end": 98.8
  },
  "Impel Down": {
   "start": 66,
   "end": 179.6
  },
  "Jaya": {
   "start": 0,
   "end": 109.7
  },
  "Little Garden": {
   "start": 0,
   "end": 110.2
  },
  "Loguetown": {
   "start": 0,
   "end": 109.9
  },
  "Long Ring Long Land": {
   "start": 0,
   "end": 110.0
  },
  "Marineford": {
   "start": 0,
   "end": 151.0
  },
  "Orange Town": {
   "start": 0,
   "end": 110.6
  },
  "Post-Enies Lobby": {
   "start": 0,
   "end": 118.7
  },
  "Post-War": {
   "start": 0,
   "end": 151.0
  },
  "Punk Hazard": {
   "start": 0,
   "end": 150.7
  },
  "Return to Sabaody": {
   "start": 0,
   "end": 118.1
  },
  "Reverse Mountain": {
   "start": 0,
   "end": 111.7
  },
  "Romance Dawn": {
   "start": 0,
   "end": 111.2
  },
  "Sabaody Archipelago": {
   "start": 0,
   "end": 100.0
  },
  "Skypiea": {
   "start": 0,
   "end": 110.0
  },
  "Skypiea 25 Alternate (G-8)": {
   "start": 0,
   "end": 110.7
  },
  "Syrup Village": {
   "start": 0,
   "end": 111.4
  },
  "The Adventures of Buggy's Crew": {
   "start": 0,
   "end": 110.4
  },
  "The Trials of Koby-Meppo": {
   "start": 0,
   "end": 109.9
  },
  "Thriller Bark": {
   "start": 0,
   "end": 159.2
  },
  "Wano": {
   "start": 0,
   "end": 101.5
  },
  "Warship Island 01 (April Fools 2025)": {
   "start": 44,
   "end": 154.6
  },
  "Water Seven": {
   "start": 0,
   "end": 110.1
  },
  "Whisky Peak": {
   "start": 0,
   "end": 111.7
  },
  "Whole Cake Island": {
   "start": 0,
   "end": 97.9
  },
  "Zou": {
   "start": 0,
   "end": 101.8
  }
 },
 "episodes": {
  "Alabasta 01": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 02": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 03": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 04": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 05": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 06": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 07": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 08": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 09": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 10": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 11": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 12": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 13": {
   "start": 87.2,
   "end": 197.2
  },
  "Alabasta 14": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 15": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 16": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 17": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 18": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 19": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 20": {
   "start": 0.0,
   "end": 109.9
  },
  "Alabasta 21": {
   "start": 0.0,
   "end": 109.9
  },
  "Amazon Lily 01": {
   "start": 0.0,
   "end": 100.0
  },
  "Amazon Lily 02": {
   "start": 0.0,
   "end": 100.0
  },
  "Amazon Lily 03": {
   "start": 0.0,
   "end": 100.0
  },
  "Amazon Lily 04": {
   "start": 0.0,
   "end": 100.0
  },
  "Amazon Lily 05": {
   "start": 0.0,
   "end": 100.0
  },
  "Arlong Park 01": {
   "start": 0.0,
   "end": 111.1
  },
  "Arlong Park 02": {
   "start": 0.0,
   "end": 110.7
  },
  "Arlong Park 03": {
   "start": 0.0,
   "end": 110.4
  },
  "Arlong Park 04": {
   "start": 0.0,
   "end": 110.7
  },
  "Arlong Park 05": {
   "start": 0.0,
   "end": 110.7
  },
  "Arlong Park 05 Extended": {
   "start": 0.0,
   "end": 110.7
  },
  "Arlong Park 06": {
   "start": 0.0,
   "end": 110.1
  },
  "Arlong Park 07": {
   "start": 0.0,
   "end": 110.2
  },
  "Arlong Park 08": {
   "start": 136.6,
   "end": 245.1
  },
  "Arlong Park 09": {
   "start": 0.0,
   "end": 110.4
  },
  "Arlong Park 10": {
   "start": 0.0,
   "end": 110.6
  },
  "Arlong Park 10 Extended": {
   "start": 0.0,
   "end": 110.6
  },
  "Baratie 01": {
   "start": 0.0,
   "end": 111.8
  },
  "Baratie 02": {
   "start": 0.0,
   "end": 110.7
  },
  "Baratie 03": {
   "start": 0.0,
   "end": 110.9
  },
  "Baratie 04": {
   "start": 0.0,
   "end": 110.6
  },
  "Baratie 05": {
   "start": 0.0,
   "end": 110.6
  },
  "Baratie 06": {
   "start": 0.0,
   "end": 110.7
  },
  "Baratie 07": {
   "start": 0.0,
   "end": 110.7
  },
  "Baratie 08": {
   "start": 0.0,
   "end": 110.4
  },
  "Dressrosa 01": {
   "start": 0.0,
   "end": 150.1
  },
  "Dressrosa 02": {
   "start": 0.0,
   "end": 157.6
  },
  "Dressrosa 03": {
   "start": 0.0,
   "end": 161.0
  },
  "Dressrosa 04": {
   "start": 0.0,
   "end": 159.4
  },
  "Dressrosa 05": {
   "start": 0.0,
   "end": 159.8
  },
  "Dressrosa 06": {
   "start": 0.0,
   "end": 159.8
  },
  "Dressrosa 07": {
   "start": 0.0,
   "end": 161.0
  },
  "Dressrosa 08": {
   "start": 0.0,
   "end": 159.8
  },
  "Dressrosa 09": {
   "start": 0.0,
   "end": 159.8
  },
  "Dressrosa 10": {
   "start": 0.0,
   "end": 159.6
  },
  "Dressrosa 11": {
   "start": 0.0,
   "end": 150.2
  },
  "Dressrosa 12": {
   "start": 0.0,
   "end": 150.2
  },
  "Dressrosa 13": {
   "start": 0.0,
   "end": 150.2
  },
  "Dressrosa 14": {
   "start": 0.0,
   "end": 91.3
  },
  "Dressrosa 15": {
   "start": 0.0,
   "end": 91.3
  },
  "Dressrosa 16": {
   "start": 0.0,
   "end": 90.8
  },
  "Dressrosa 17": {
   "start": 0.0,
   "end": 91.4
  },
  "Dressrosa 18": {
   "start": 0.0,
   "end": 91.1
  },
  "Dressrosa 19": {
   "start": 0.0,
   "end": 91.1
  },
  "Dressrosa 20": {
   "start": 0.0,
   "end": 90.9
  },
  "Dressrosa 21": {
   "start": 0.0,
   "end": 91.5
  },
  "Dressrosa 22": {
   "start": 0.0,
   "end": 90.9
  },
  "Dressrosa 23": {
   "start": 0.1,
   "end": 90.9
  },
  "Dressrosa 24": {
   "start": 0.0,
   "end": 91.3
  },
  "Dressrosa 25": {
   "start": 0.1,
   "end": 91.3
  },
  "Dressrosa 26": {
   "start": 0.0,
   "end": 103.2
  },
  "Dressrosa 27": {
   "start": 0.0,
   "end": 102.9
  },
  "Dressrosa 28": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 29": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 30": {
   "start": 0.0,
   "end": 103.2
  },
  "Dressrosa 31": {
   "start": 0.0,
   "end": 102.9
  },
  "Dressrosa 32": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 33": {
   "start": 0.0,
   "end": 103.2
  },
  "Dressrosa 34": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 35": {
   "start": 0.0,
   "end": 102.9
  },
  "Dressrosa 36": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 37": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 38": {
   "start": 0.0,
   "end": 103.3
  },
  "Dressrosa 39": {
   "start": 0.0,
   "end": 103.3
  },
  "Dressrosa 40": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 41": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 42": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 43": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 44": {
   "start": 0.0,
   "end": 102.8
  },
  "Dressrosa 45": {
   "start": 0.0,
   "end": 102.7
  },
  "Dressrosa 46": {
   "start": 0.0,
   "end": 102.5
  },
  "Dressrosa 47": {
   "start": 0.0,
   "end": 102.7
  },
  "Dressrosa 48": {
   "start": 0.0,
   "end": 102.9
  },
  "Drum Island 01": {
   "start": 0.1,
   "end": 110.7
  },
  "Drum Island 02": {
   "start": 0.0,
   "end": 110.6
  },
  "Drum Island 03": {
   "start": 22.8,
   "end": 133.0
  },
  "Drum Island 04": {
   "start": 0.0,
   "end": 110.8
  },
  "Drum Island 05": {
   "start": 0.0,
   "end": 110.4
  },
  "Drum Island 06": {
   "start": 0.0,
   "end": 110.1
  },
  "Drum Island 07": {
   "start": 0.0,
   "end": 110.4
  },
  "Drum Island 08": {
   "start": 0.0,
   "end": 110.4
  },
  "Egghead 01": {
   "none": true
  },
  "Egghead 02": {
   "none": true
  },
  "Egghead 03": {
   "start": 0.0,
   "end": 90.1
  },
  "Egghead 04": {
   "start": 0.0,
   "end": 90.1
  },
  "Egghead 05": {
   "start": 0.0,
   "end": 90.1
  },
  "Egghead 06": {
   "start": 0.0,
   "end": 90.1
  },
  "Egghead 07": {
   "start": 0.0,
   "end": 90.1
  },
  "Egghead 08": {
   "start": 120.9,
   "end": 211.0
  },
  "Egghead 08 Extended": {
   "start": 120.8,
   "end": 209.6
  },
  "Egghead 09": {
   "start": 31.4,
   "end": 121.3
  },
  "Egghead 10": {
   "start": 0.0,
   "end": 89.6
  },
  "Egghead 11": {
   "start": 40.3,
   "end": 130.1
  },
  "Egghead 12": {
   "start": 0.0,
   "end": 90.0
  },
  "Egghead 13": {
   "start": 0.0,
   "end": 90.3
  },
  "Egghead 13 Extended": {
   "start": 37.3,
   "end": 127.2
  },
  "Egghead 14": {
   "start": 0.0,
   "end": 91.3
  },
  "Egghead 14 Extended": {
   "start": 188.9,
   "end": 278.8
  },
  "Egghead 15": {
   "start": 0.0,
   "end": 89.9
  },
  "Egghead 16": {
   "start": 0.0,
   "end": 89.9
  },
  "Egghead 17": {
   "start": 302.2,
   "end": 392.7
  },
  "Egghead 18": {
   "start": 54.6,
   "end": 144.4
  },
  "Egghead 19": {
   "start": 0.0,
   "end": 91.4
  },
  "Egghead 19 Extended": {
   "start": 92.3,
   "end": 183.3
  },
  "Egghead 20": {
   "start": 0.0,
   "end": 89.9
  },
  "Egghead 21": {
   "start": 0.0,
   "end": 89.9
  },
  "Egghead 21 Extended": {
   "start": 0.0,
   "end": 89.5
  },
  "Egghead 22": {
   "start": 0.0,
   "end": 89.8
  },
  "Enies Lobby 01": {
   "start": 0.0,
   "end": 113.4
  },
  "Enies Lobby 02": {
   "start": 0.0,
   "end": 109.8
  },
  "Enies Lobby 03": {
   "start": 0.0,
   "end": 109.8
  },
  "Enies Lobby 04": {
   "start": 0.0,
   "end": 113.3
  },
  "Enies Lobby 05": {
   "start": 25.3,
   "end": 134.6
  },
  "Enies Lobby 06": {
   "start": 0.0,
   "end": 110.6
  },
  "Enies Lobby 07": {
   "start": 0.0,
   "end": 110.4
  },
  "Enies Lobby 08": {
   "start": 0.0,
   "end": 110.1
  },
  "Enies Lobby 09": {
   "start": 0.0,
   "end": 110.1
  },
  "Enies Lobby 10": {
   "start": 0.0,
   "end": 109.8
  },
  "Enies Lobby 11": {
   "start": 0.0,
   "end": 110.0
  },
  "Enies Lobby 12": {
   "start": 0.0,
   "end": 110.2
  },
  "Enies Lobby 13": {
   "start": 193.7,
   "end": 304.1
  },
  "Enies Lobby 14": {
   "start": 0.0,
   "end": 110.7
  },
  "Enies Lobby 15": {
   "start": 0.0,
   "end": 110.6
  },
  "Enies Lobby 16": {
   "start": 0.0,
   "end": 110.2
  },
  "Enies Lobby 17": {
   "start": 0.0,
   "end": 109.9
  },
  "Enies Lobby 18": {
   "start": 0.0,
   "end": 109.9
  },
  "Enies Lobby 19": {
   "start": 0.0,
   "end": 109.9
  },
  "Enies Lobby 20": {
   "start": 0.0,
   "end": 109.9
  },
  "Enies Lobby 21": {
   "start": 0.0,
   "end": 109.9
  },
  "Enies Lobby 22": {
   "start": 0.0,
   "end": 109.9
  },
  "Enies Lobby 23": {
   "start": 0.0,
   "end": 109.9
  },
  "Enies Lobby 24": {
   "start": 0.0,
   "end": 109.9
  },
  "Enies Lobby 25": {
   "none": true
  },
  "Fishman Island 01": {
   "start": 0.0,
   "end": 113.0
  },
  "Fishman Island 02": {
   "start": 0.0,
   "end": 159.4
  },
  "Fishman Island 03": {
   "start": 0.0,
   "end": 159.4
  },
  "Fishman Island 04": {
   "start": 0.0,
   "end": 159.5
  },
  "Fishman Island 05": {
   "start": 0.0,
   "end": 150.7
  },
  "Fishman Island 06": {
   "start": 0.0,
   "end": 159.5
  },
  "Fishman Island 07": {
   "start": 0.0,
   "end": 150.5
  },
  "Fishman Island 08": {
   "start": 0.0,
   "end": 150.2
  },
  "Fishman Island 09": {
   "start": 0.0,
   "end": 150.2
  },
  "Fishman Island 10": {
   "start": 0.0,
   "end": 149.5
  },
  "Fishman Island 11": {
   "start": 0.0,
   "end": 150.5
  },
  "Fishman Island 12": {
   "start": 0.0,
   "end": 150.5
  },
  "Fishman Island 13": {
   "start": 0.0,
   "end": 150.4
  },
  "Fishman Island 14": {
   "start": 0.0,
   "end": 150.5
  },
  "Fishman Island 15": {
   "start": 0.0,
   "end": 150.4
  },
  "Fishman Island 16": {
   "start": 0.0,
   "end": 150.7
  },
  "Fishman Island 17": {
   "start": 0.0,
   "end": 150.5
  },
  "Fishman Island 18": {
   "start": 0.0,
   "end": 150.4
  },
  "Fishman Island 19": {
   "start": 0.0,
   "end": 150.5
  },
  "Fishman Island 20": {
   "start": 0.0,
   "end": 150.7
  },
  "Fishman Island 21": {
   "start": 0.0,
   "end": 150.4
  },
  "Fishman Island 22": {
   "start": 0.0,
   "end": 150.5
  },
  "Fishman Island 23": {
   "start": 0.0,
   "end": 150.4
  },
  "Fishman Island 24": {
   "start": 0.0,
   "end": 150.5
  },
  "Gaimon 01": {
   "start": 0.0,
   "end": 110.3
  },
  "If You Could Go Anywhere... The Adventures of the Straw Hats 01": {
   "start": 0.0,
   "end": 98.8
  },
  "Impel Down 01": {
   "start": 66.2,
   "end": 179.6
  },
  "Impel Down 02": {
   "none": true
  },
  "Impel Down 03": {
   "none": true
  },
  "Impel Down 04": {
   "none": true
  },
  "Impel Down 05": {
   "none": true
  },
  "Impel Down 06": {
   "none": true
  },
  "Impel Down 07": {
   "none": true
  },
  "Impel Down 08": {
   "none": true
  },
  "Impel Down 09": {
   "none": true
  },
  "Impel Down 10": {
   "none": true
  },
  "Jaya 01": {
   "start": 34.3,
   "end": 143.8
  },
  "Jaya 02": {
   "start": 0.0,
   "end": 109.7
  },
  "Jaya 03": {
   "start": 0.0,
   "end": 109.7
  },
  "Jaya 04": {
   "start": 0.0,
   "end": 109.7
  },
  "Jaya 05": {
   "start": 0.0,
   "end": 109.7
  },
  "Jaya 06": {
   "start": 0.0,
   "end": 109.7
  },
  "Jaya 07": {
   "start": 0.0,
   "end": 109.7
  },
  "Jaya 08": {
   "start": 0.0,
   "end": 109.7
  },
  "Little Garden 01": {
   "start": 0.0,
   "end": 110.2
  },
  "Little Garden 02": {
   "start": 0.0,
   "end": 110.1
  },
  "Little Garden 03": {
   "start": 0.0,
   "end": 110.3
  },
  "Little Garden 04": {
   "start": 0.0,
   "end": 110.4
  },
  "Little Garden 05": {
   "start": 0.0,
   "end": 110.2
  },
  "Loguetown 01": {
   "start": 0.0,
   "end": 109.9
  },
  "Loguetown 02": {
   "start": 0.0,
   "end": 109.9
  },
  "Loguetown 03": {
   "start": 69.9,
   "end": 180.2
  },
  "Long Ring Long Land 00": {
   "none": true
  },
  "Long Ring Long Land 01": {
   "start": 0.0,
   "end": 110.1
  },
  "Long Ring Long Land 02": {
   "start": 0.0,
   "end": 110.0
  },
  "Long Ring Long Land 03": {
   "start": 0.0,
   "end": 110.0
  },
  "Long Ring Long Land 04": {
   "start": 0.0,
   "end": 110.0
  },
  "Long Ring Long Land 05": {
   "start": 0.0,
   "end": 110.0
  },
  "Long Ring Long Land 06": {
   "start": 167.5,
   "end": 277.4
  },
  "Marineford 01": {
   "start": 0.0,
   "end": 151.0
  },
  "Marineford 02": {
   "start": 80.3,
   "end": 231.3
  },
  "Marineford 03": {
   "start": 0.0,
   "end": 151.3
  },
  "Marineford 04": {
   "start": 0.0,
   "end": 151.3
  },
  "Marineford 05": {
   "start": 0.0,
   "end": 150.3
  },
  "Marineford 06": {
   "start": 105.6,
   "end": 256.5
  },
  "Marineford 07": {
   "start": 0.0,
   "end": 151.0
  },
  "Marineford 08": {
   "start": 0.0,
   "end": 151.0
  },
  "Marineford 09": {
   "start": 0.0,
   "end": 151.3
  },
  "Marineford 10": {
   "start": 171.0,
   "end": 322.3
  },
  "Marineford 11": {
   "start": 0.0,
   "end": 151.3
  },
  "Marineford 12": {
   "start": 0.0,
   "end": 151.3
  },
  "Marineford 13": {
   "start": 0.0,
   "end": 151.0
  },
  "Marineford 14": {
   "start": 0.0,
   "end": 151.0
  },
  "Marineford 15": {
   "start": 0.0,
   "end": 151.0
  },
  "Marineford 16": {
   "start": 0.0,
   "end": 151.0
  },
  "Marineford 17": {
   "start": 0.0,
   "end": 151.0
  },
  "One Piece Fan Letter": {
   "none": true
  },
  "One Piece Fan Letter 01": {
   "none": true
  },
  "Orange Town 01": {
   "start": 0.0,
   "end": 110.8
  },
  "Orange Town 02": {
   "start": 0.0,
   "end": 110.6
  },
  "Orange Town 03": {
   "start": 0.0,
   "end": 110.6
  },
  "Post-Enies Lobby 01": {
   "start": 0.0,
   "end": 86.3
  },
  "Post-Enies Lobby 02": {
   "start": 0.0,
   "end": 86.8
  },
  "Post-Enies Lobby 03": {
   "start": 0.0,
   "end": 86.8
  },
  "Post-Enies Lobby 04": {
   "start": 0.0,
   "end": 150.7
  },
  "Post-Enies Lobby 05": {
   "start": 0.0,
   "end": 150.6
  },
  "Post-Enies Lobby 06": {
   "start": 0.0,
   "end": 150.6
  },
  "Post-War 01": {
   "start": 0.0,
   "end": 151.0
  },
  "Post-War 02": {
   "start": 0.0,
   "end": 151.0
  },
  "Post-War 03": {
   "start": 0.0,
   "end": 151.0
  },
  "Post-War 04": {
   "start": 0.0,
   "end": 151.0
  },
  "Post-War 05": {
   "start": 266.0,
   "end": 416.0
  },
  "Post-War 06": {
   "start": 0.0,
   "end": 151.0
  },
  "Post-War 07": {
   "start": 0.0,
   "end": 151.0
  },
  "Post-War 08": {
   "start": 0.0,
   "end": 151.0
  },
  "Punk Hazard 01": {
   "start": 0.0,
   "end": 150.5
  },
  "Punk Hazard 02": {
   "start": 0.0,
   "end": 150.7
  },
  "Punk Hazard 03": {
   "start": 0.0,
   "end": 150.6
  },
  "Punk Hazard 04": {
   "start": 0.0,
   "end": 149.9
  },
  "Punk Hazard 05": {
   "start": 0.0,
   "end": 150.6
  },
  "Punk Hazard 06": {
   "start": 0.0,
   "end": 150.6
  },
  "Punk Hazard 07": {
   "start": 0.0,
   "end": 150.6
  },
  "Punk Hazard 08": {
   "start": 0.0,
   "end": 149.5
  },
  "Punk Hazard 09": {
   "start": 0.0,
   "end": 150.5
  },
  "Punk Hazard 10": {
   "start": 0.0,
   "end": 159.6
  },
  "Punk Hazard 11": {
   "start": 0.0,
   "end": 159.8
  },
  "Punk Hazard 12": {
   "start": 0.0,
   "end": 159.8
  },
  "Punk Hazard 13": {
   "start": 0.0,
   "end": 159.8
  },
  "Punk Hazard 14": {
   "start": 0.0,
   "end": 150.5
  },
  "Punk Hazard 15": {
   "start": 0.0,
   "end": 159.6
  },
  "Punk Hazard 16": {
   "start": 0.0,
   "end": 150.4
  },
  "Punk Hazard 17": {
   "start": 0.0,
   "end": 159.6
  },
  "Punk Hazard 18": {
   "start": 0.0,
   "end": 150.9
  },
  "Punk Hazard 19": {
   "start": 0.0,
   "end": 150.9
  },
  "Punk Hazard 20": {
   "start": 0.0,
   "end": 160.1
  },
  "Punk Hazard 21": {
   "start": 0.0,
   "end": 150.7
  },
  "Punk Hazard 22": {
   "start": 0.0,
   "end": 158.6
  },
  "Return to Sabaody 01": {
   "start": 156.2,
   "end": 269.3
  },
  "Return to Sabaody 02": {
   "start": 0.0,
   "end": 113.2
  },
  "Return to Sabaody 03": {
   "start": 0.0,
   "end": 122.9
  },
  "Reverie 01": {
   "none": true
  },
  "Reverie 02": {
   "none": true
  },
  "Reverie 03": {
   "none": true
  },
  "Reverse Mountain 01": {
   "start": 0.0,
   "end": 110.6
  },
  "Reverse Mountain 02": {
   "start": 0.0,
   "end": 111.7
  },
  "Reverse Mountain 02 Extended": {
   "start": 0.0,
   "end": 111.7
  },
  "Romance Dawn 01": {
   "none": true
  },
  "Romance Dawn 02": {
   "start": 0.0,
   "end": 111.7
  },
  "Romance Dawn 03": {
   "start": 58.2,
   "end": 167.8
  },
  "Romance Dawn 04": {
   "start": 0.0,
   "end": 110.7
  },
  "Sabaody Archipelago 01": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 02": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 03": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 04": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 05": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 06": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 07": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 08": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 09": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 10": {
   "start": 0.0,
   "end": 100.0
  },
  "Sabaody Archipelago 11": {
   "start": 0.0,
   "end": 100.0
  },
  "Skypiea 01": {
   "start": 0.0,
   "end": 109.7
  },
  "Skypiea 02": {
   "start": 0.0,
   "end": 109.7
  },
  "Skypiea 03": {
   "start": 0.0,
   "end": 109.7
  },
  "Skypiea 04": {
   "start": 0.0,
   "end": 109.7
  },
  "Skypiea 05": {
   "start": 0.0,
   "end": 109.7
  },
  "Skypiea 06": {
   "start": 0.0,
   "end": 109.7
  },
  "Skypiea 07": {
   "start": 0.0,
   "end": 109.7
  },
  "Skypiea 08": {
   "start": 0.0,
   "end": 109.7
  },
  "Skypiea 09": {
   "start": 0.0,
   "end": 110.3
  },
  "Skypiea 10": {
   "start": 0.0,
   "end": 110.7
  },
  "Skypiea 11": {
   "start": 103.7,
   "end": 210.7
  },
  "Skypiea 12": {
   "start": 0.0,
   "end": 109.8
  },
  "Skypiea 13": {
   "start": 0.0,
   "end": 110.0
  },
  "Skypiea 14": {
   "start": 0.0,
   "end": 110.0
  },
  "Skypiea 15": {
   "start": 83.2,
   "end": 193.2
  },
  "Skypiea 16": {
   "start": 0.0,
   "end": 109.6
  },
  "Skypiea 17": {
   "start": 0.0,
   "end": 110.0
  },
  "Skypiea 18": {
   "start": 0.0,
   "end": 110.0
  },
  "Skypiea 19": {
   "start": 0.0,
   "end": 110.0
  },
  "Skypiea 20": {
   "start": 0.0,
   "end": 110.0
  },
  "Skypiea 21": {
   "start": 0.0,
   "end": 110.0
  },
  "Skypiea 22": {
   "start": 0.0,
   "end": 110.0
  },
  "Skypiea 23": {
   "start": 0.0,
   "end": 110.0
  },
  "Skypiea 24": {
   "start": 0.0,
   "end": 110.2
  },
  "Skypiea 25": {
   "start": 0.0,
   "end": 110.7
  },
  "Skypiea 25 Alternate (G-8)": {
   "start": 0.0,
   "end": 110.7
  },
  "Syrup Village 01": {
   "start": 0.0,
   "end": 111.8
  },
  "Syrup Village 02": {
   "start": 0.0,
   "end": 111.8
  },
  "Syrup Village 03": {
   "start": 0.0,
   "end": 111.8
  },
  "Syrup Village 04": {
   "start": 0.0,
   "end": 110.4
  },
  "Syrup Village 05": {
   "start": 0.0,
   "end": 110.2
  },
  "Syrup Village 06": {
   "start": 0.0,
   "end": 111.4
  },
  "Syrup Village 07": {
   "start": 0.0,
   "end": 110.4
  },
  "The Adventures of Buggy's Crew": {
   "start": 0.0,
   "end": 110.0
  },
  "The Adventures of Buggy's Crew 01": {
   "start": 0.0,
   "end": 110.8
  },
  "The Trials of Koby-Meppo 01": {
   "start": 0.0,
   "end": 109.9
  },
  "Thriller Bark 01": {
   "start": 0.0,
   "end": 159.3
  },
  "Thriller Bark 02": {
   "start": 0.0,
   "end": 159.1
  },
  "Thriller Bark 03": {
   "start": 0.0,
   "end": 150.2
  },
  "Thriller Bark 04": {
   "start": 0.0,
   "end": 159.4
  },
  "Thriller Bark 05": {
   "start": 0.0,
   "end": 159.6
  },
  "Thriller Bark 06": {
   "start": 0.0,
   "end": 159.8
  },
  "Thriller Bark 07": {
   "start": 0.0,
   "end": 151.0
  },
  "Thriller Bark 08": {
   "start": 0.0,
   "end": 159.5
  },
  "Thriller Bark 09": {
   "start": 0.0,
   "end": 160.0
  },
  "Thriller Bark 10": {
   "start": 0.0,
   "end": 151.0
  },
  "Thriller Bark 11": {
   "start": 0.0,
   "end": 160.0
  },
  "Thriller Bark 12": {
   "start": 0.0,
   "end": 159.8
  },
  "Thriller Bark 13": {
   "start": 0.0,
   "end": 150.4
  },
  "Thriller Bark 14": {
   "start": 0.3,
   "end": 159.4
  },
  "Thriller Bark 15": {
   "start": 0.1,
   "end": 150.6
  },
  "Thriller Bark 16": {
   "start": 0.0,
   "end": 160.0
  },
  "Thriller Bark 17": {
   "start": 0.0,
   "end": 150.4
  },
  "Thriller Bark 18": {
   "start": 0.0,
   "end": 159.5
  },
  "Thriller Bark 19": {
   "start": 0.0,
   "end": 150.9
  },
  "Thriller Bark 20": {
   "start": 0.0,
   "end": 150.7
  },
  "Thriller Bark 21": {
   "start": 0.0,
   "end": 150.7
  },
  "Thriller Bark 22": {
   "start": 0.0,
   "end": 150.9
  },
  "Wano 01": {
   "none": true
  },
  "Wano 02": {
   "start": 0.0,
   "end": 101.3
  },
  "Wano 02 Extended": {
   "start": 0.0,
   "end": 101.6
  },
  "Wano 03": {
   "start": 0.0,
   "end": 101.8
  },
  "Wano 04": {
   "start": 0.0,
   "end": 101.8
  },
  "Wano 05": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 06": {
   "start": 0.0,
   "end": 101.5
  },
  "Wano 07": {
   "start": 0.0,
   "end": 101.5
  },
  "Wano 08": {
   "start": 0.0,
   "end": 101.4
  },
  "Wano 09": {
   "start": 0.0,
   "end": 101.5
  },
  "Wano 10": {
   "start": 0.0,
   "end": 102.0
  },
  "Wano 11": {
   "start": 0.0,
   "end": 101.5
  },
  "Wano 12": {
   "start": 0.0,
   "end": 101.8
  },
  "Wano 13": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 14": {
   "start": 225.0,
   "end": 326.6
  },
  "Wano 15": {
   "start": 128.1,
   "end": 229.1
  },
  "Wano 16": {
   "start": 100.1,
   "end": 202.0
  },
  "Wano 17": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 18": {
   "start": 28.3,
   "end": 131.4
  },
  "Wano 19": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 20": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 21": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 22": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 23": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 24": {
   "start": 0.0,
   "end": 102.1
  },
  "Wano 25": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 26": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 27": {
   "start": 114.4,
   "end": 216.2
  },
  "Wano 28": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 29": {
   "start": 0.0,
   "end": 101.9
  },
  "Wano 30": {
   "start": 56.7,
   "end": 158.6
  },
  "Wano 31": {
   "none": true
  },
  "Wano 32": {
   "none": true
  },
  "Wano 33": {
   "start": 310.9,
   "end": 402.8
  },
  "Wano 34": {
   "start": 0.0,
   "end": 91.9
  },
  "Wano 35": {
   "start": 439.1,
   "end": 530.8
  },
  "Wano 36": {
   "start": 0.0,
   "end": 91.9
  },
  "Wano 37": {
   "start": 0.0,
   "end": 91.9
  },
  "Wano 38": {
   "start": 0.0,
   "end": 91.9
  },
  "Wano 39": {
   "start": 0.0,
   "end": 91.9
  },
  "Wano 40": {
   "start": 0.0,
   "end": 91.9
  },
  "Wano 41": {
   "start": 119.3,
   "end": 211.4
  },
  "Wano 42": {
   "start": 0.0,
   "end": 91.9
  },
  "Wano 43": {
   "start": 0.0,
   "end": 91.9
  },
  "Wano 44": {
   "start": 142.9,
   "end": 234.6
  },
  "Wano 45": {
   "start": 33.9,
   "end": 125.7
  },
  "Wano 46": {
   "start": 0.0,
   "end": 91.9
  },
  "Wano 47": {
   "start": 0.0,
   "end": 91.8
  },
  "Wano 48": {
   "start": 0.0,
   "end": 91.6
  },
  "Wano 49": {
   "start": 0.0,
   "end": 92.0
  },
  "Wano 49 Extended": {
   "start": 0.0,
   "end": 92.0
  },
  "Wano 50": {
   "start": 0.0,
   "end": 92.4
  },
  "Wano 51": {
   "start": 0.0,
   "end": 91.8
  },
  "Wano 52": {
   "start": 0.0,
   "end": 91.8
  },
  "Wano 53": {
   "start": 110.1,
   "end": 201.8
  },
  "Wano 54": {
   "start": 0.0,
   "end": 91.7
  },
  "Wano 55": {
   "start": 0.0,
   "end": 110.8
  },
  "Wano 55 Extended": {
   "start": 0.0,
   "end": 110.8
  },
  "Wano 56": {
   "start": 0.0,
   "end": 89.9
  },
  "Wano 57": {
   "start": 0.0,
   "end": 90.9
  },
  "Wano 58": {
   "start": 0.0,
   "end": 89.8
  },
  "Wano 59": {
   "start": 0.0,
   "end": 90.9
  },
  "Wano 60": {
   "start": 215.3,
   "end": 307.0
  },
  "Wano 61": {
   "start": 90.5,
   "end": 180.3
  },
  "Wano 62": {
   "start": 219.4,
   "end": 309.8
  },
  "Wano 62 Extended": {
   "start": 219.7,
   "end": 311.7
  },
  "Warship Island 01 (April Fools 2025)": {
   "start": 44.3,
   "end": 154.6
  },
  "Warship Island 01 (April Fools 2025) 01": {
   "start": 44.3,
   "end": 154.6
  },
  "Water Seven 01": {
   "start": 0.0,
   "end": 109.9
  },
  "Water Seven 02": {
   "start": 0.0,
   "end": 109.9
  },
  "Water Seven 03": {
   "start": 0.0,
   "end": 109.9
  },
  "Water Seven 04": {
   "start": 0.0,
   "end": 109.9
  },
  "Water Seven 05": {
   "start": 234.4,
   "end": 344.5
  },
  "Water Seven 06": {
   "start": 0.0,
   "end": 110.1
  },
  "Water Seven 07": {
   "start": 0.0,
   "end": 110.1
  },
  "Water Seven 08": {
   "start": 0.0,
   "end": 110.1
  },
  "Water Seven 09": {
   "start": 91.6,
   "end": 201.7
  },
  "Water Seven 10": {
   "start": 0.0,
   "end": 110.1
  },
  "Water Seven 11": {
   "start": 0.0,
   "end": 110.1
  },
  "Water Seven 12": {
   "start": 0.0,
   "end": 110.1
  },
  "Water Seven 13": {
   "start": 0.0,
   "end": 110.1
  },
  "Water Seven 14": {
   "start": 44.3,
   "end": 154.4
  },
  "Water Seven 15": {
   "start": 0.0,
   "end": 110.1
  },
  "Water Seven 16": {
   "start": 0.0,
   "end": 110.1
  },
  "Water Seven 17": {
   "start": 0.0,
   "end": 111.7
  },
  "Water Seven 18": {
   "start": 0.0,
   "end": 72.4
  },
  "Water Seven 19": {
   "start": 0.0,
   "end": 111.6
  },
  "Water Seven 20": {
   "start": 0.0,
   "end": 111.6
  },
  "Whisky Peak 01": {
   "start": 0.0,
   "end": 111.7
  },
  "Whisky Peak 02": {
   "start": 0.0,
   "end": 111.7
  },
  "Whole Cake Island 01": {
   "start": 0.0,
   "end": 101.7
  },
  "Whole Cake Island 02": {
   "start": 0.0,
   "end": 101.5
  },
  "Whole Cake Island 03": {
   "start": 0.0,
   "end": 102.2
  },
  "Whole Cake Island 04": {
   "start": 0.0,
   "end": 101.8
  },
  "Whole Cake Island 05": {
   "start": 0.0,
   "end": 102.9
  },
  "Whole Cake Island 06": {
   "start": 0.0,
   "end": 102.0
  },
  "Whole Cake Island 07": {
   "start": 54.7,
   "end": 156.1
  },
  "Whole Cake Island 08": {
   "start": 0.0,
   "end": 101.7
  },
  "Whole Cake Island 09": {
   "start": 0.0,
   "end": 101.9
  },
  "Whole Cake Island 10": {
   "start": 0.0,
   "end": 101.7
  },
  "Whole Cake Island 11": {
   "start": 0.0,
   "end": 94.3
  },
  "Whole Cake Island 12": {
   "start": 0.0,
   "end": 94.4
  },
  "Whole Cake Island 13": {
   "start": 0.0,
   "end": 94.3
  },
  "Whole Cake Island 14": {
   "start": 0.0,
   "end": 94.3
  },
  "Whole Cake Island 15": {
   "start": 322.2,
   "end": 416.3
  },
  "Whole Cake Island 16": {
   "start": 0.0,
   "end": 94.2
  },
  "Whole Cake Island 17": {
   "start": 0.0,
   "end": 94.4
  },
  "Whole Cake Island 18": {
   "start": 0.1,
   "end": 94.2
  },
  "Whole Cake Island 19": {
   "start": 0.0,
   "end": 94.3
  },
  "Whole Cake Island 20": {
   "start": 0.1,
   "end": 94.1
  },
  "Whole Cake Island 21": {
   "start": 95.0,
   "end": 189.1
  },
  "Whole Cake Island 22": {
   "start": 0.0,
   "end": 94.3
  },
  "Whole Cake Island 23": {
   "start": 0.1,
   "end": 93.8
  },
  "Whole Cake Island 24": {
   "start": 0.0,
   "end": 94.3
  },
  "Whole Cake Island 25": {
   "start": 158.4,
   "end": 252.7
  },
  "Whole Cake Island 26": {
   "start": 0.0,
   "end": 94.5
  },
  "Whole Cake Island 27": {
   "start": 0.0,
   "end": 94.2
  },
  "Whole Cake Island 28": {
   "start": 0.0,
   "end": 94.5
  },
  "Whole Cake Island 29": {
   "start": 0.0,
   "end": 98.2
  },
  "Whole Cake Island 30": {
   "start": 0.0,
   "end": 97.9
  },
  "Whole Cake Island 31": {
   "start": 0.0,
   "end": 98.3
  },
  "Whole Cake Island 32": {
   "start": 0.0,
   "end": 98.2
  },
  "Whole Cake Island 33": {
   "start": 0.0,
   "end": 98.3
  },
  "Whole Cake Island 34": {
   "start": 0.0,
   "end": 97.9
  },
  "Whole Cake Island 35": {
   "start": 0.0,
   "end": 98.3
  },
  "Whole Cake Island 36": {
   "start": 0.0,
   "end": 98.3
  },
  "Whole Cake Island 37": {
   "start": 0.0,
   "end": 98.0
  },
  "Whole Cake Island 38": {
   "start": 0.0,
   "end": 97.8
  },
  "Whole Cake Island 39": {
   "start": 0.0,
   "end": 98.2
  },
  "Zou 01": {
   "start": 0.0,
   "end": 101.7
  },
  "Zou 02": {
   "start": 0.0,
   "end": 101.8
  },
  "Zou 03": {
   "start": 0.0,
   "end": 101.5
  },
  "Zou 04": {
   "start": 0.0,
   "end": 102.0
  },
  "Zou 05": {
   "start": 0.0,
   "end": 101.7
  },
  "Zou 06": {
   "start": 0.0,
   "end": 101.9
  },
  "Zou 07": {
   "start": 0.0,
   "end": 101.7
  },
  "Zou 08": {
   "start": 0.0,
   "end": 102.2
  },
  "Zou 09": {
   "start": 0.0,
   "end": 102.9
  },
  "Zou 10": {
   "start": 0.0,
   "end": 102.2
  }
 }
};
