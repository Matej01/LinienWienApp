# Schnittstelle mobile APP "Wien Wo U"

## U-Bahnen + Stationen
- URL: http://84.16.242168:8125/getstations
- Request-Methode: POST
- Reaquest-Format: x-www-urlencoded (standard)
- Request-Daten:
   * empty
- Response-Format: JSON 
- Response-Daten:
  {
      lines:[
          {
              "name": "U1",
              "color": "#000000",
              "stations":[
                  {
                    "name":"Volksoper",   
                    "lat":48.111,
                    "lng":16.222
                  },
              ]
          }
      ]
  }  