export interface Polluant {
    baseline: number,
    carCoef: number,
    airportCoef: number
}

export interface PolluantsList { 
    SO2: Polluant, 
    NO: Polluant, 
    NO2: Polluant, 
    NOx: Polluant, 
    PM10: Polluant, 
    PM25: Polluant
}

export interface DataInterface {
    date: string;
    flightNumber: number;
    carTrafficRelative: number;
    pollutants: PolluantsList
}


export const data: DataInterface[] = [
    {
      "date": "2021-01",
      "flightNumber": 845,
      "carTrafficRelative": -30.6789,
      "pollutants": {
        "SO2": {
          "baseline": 0.12,
          "carCoef": 0.05,
          "airportCoef": 0.85
        },
        "NO": {
          "baseline": 0.35,
          "carCoef": 0.09,
          "airportCoef": 0.75
        },
        "NO2": {
          "baseline": 0.25,
          "carCoef": 0.15,
          "airportCoef": 0.60
        },
        "NOx": {
          "baseline": 0.55,
          "carCoef": 0.18,
          "airportCoef": 0.90
        },
        "PM10": {
          "baseline": 20.5,
          "carCoef": 0.20,
          "airportCoef": 0.40
        },
        "PM25": {
          "baseline": 8.3,
          "carCoef": 0.12,
          "airportCoef": 0.30
        }
      }
    },
    {
      "date": "2021-02",
      "flightNumber": 912,
      "carTrafficRelative": 40.1234,
      "pollutants": {
        "SO2": {
          "baseline": 0.08,
          "carCoef": 0.04,
          "airportCoef": 0.75
        },
        "NO": {
          "baseline": 0.42,
          "carCoef": 0.10,
          "airportCoef": 0.80
        },
        "NO2": {
          "baseline": 0.28,
          "carCoef": 0.12,
          "airportCoef": 0.55
        },
        "NOx": {
          "baseline": 0.65,
          "carCoef": 0.16,
          "airportCoef": 0.85
        },
        "PM10": {
          "baseline": 25.1,
          "carCoef": 0.25,
          "airportCoef": 0.45
        },
        "PM25": {
          "baseline": 10.1,
          "carCoef": 0.10,
          "airportCoef": 0.35
        }
      }
    },
    {
      "date": "2021-03",
      "flightNumber": 780,
      "carTrafficRelative": -20.4567,
      "pollutants": {
        "SO2": {
          "baseline": 0.10,
          "carCoef": 0.06,
          "airportCoef": 0.78
        },
        "NO": {
          "baseline": 0.30,
          "carCoef": 0.08,
          "airportCoef": 0.70
        },
        "NO2": {
          "baseline": 0.22,
          "carCoef": 0.10,
          "airportCoef": 0.50
        },
        "NOx": {
          "baseline": 0.50,
          "carCoef": 0.15,
          "airportCoef": 0.82
        },
        "PM10": {
          "baseline": 19.8,
          "carCoef": 0.18,
          "airportCoef": 0.38
        },
        "PM25": {
          "baseline": 7.6,
          "carCoef": 0.09,
          "airportCoef": 0.28
        }
      }
    },
    {
      "date": "2021-04",
      "flightNumber": 843,
      "carTrafficRelative": 15.5678,
      "pollutants": {
        "SO2": {
          "baseline": 0.11,
          "carCoef": 0.05,
          "airportCoef": 0.82
        },
        "NO": {
          "baseline": 0.37,
          "carCoef": 0.11,
          "airportCoef": 0.85
        },
        "NO2": {
          "baseline": 0.26,
          "carCoef": 0.14,
          "airportCoef": 0.62
        },
        "NOx": {
          "baseline": 0.60,
          "carCoef": 0.17,
          "airportCoef": 0.88
        },
        "PM10": {
          "baseline": 21.4,
          "carCoef": 0.21,
          "airportCoef": 0.42
        },
        "PM25": {
          "baseline": 9.0,
          "carCoef": 0.11,
          "airportCoef": 0.32
        }
      }
    },
    {
      "date": "2021-05",
      "flightNumber": 895,
      "carTrafficRelative": 25.2345,
      "pollutants": {
        "SO2": {
          "baseline": 0.14,
          "carCoef": 0.07,
          "airportCoef": 0.85
        },
        "NO": {
          "baseline": 0.40,
          "carCoef": 0.13,
          "airportCoef": 0.88
        },
        "NO2": {
          "baseline": 0.30,
          "carCoef": 0.16,
          "airportCoef": 0.65
        },
        "NOx": {
          "baseline": 0.70,
          "carCoef": 0.19,
          "airportCoef": 0.92
        },
        "PM10": {
          "baseline": 23.9,
          "carCoef": 0.23,
          "airportCoef": 0.48
        },
        "PM25": {
          "baseline": 11.2,
          "carCoef": 0.13,
          "airportCoef": 0.37
        }
      }
    }
    // ... Continuer pour chaque mois jusqu'en décembre 2022
  ]