import { Injectable } from '@angular/core';
import { Movie } from './movieModel';
@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor() { }

  getShowsData(location: string, movieId: number) {
    return this.ShowsData.filter((obj) => {
      return obj.location === location && obj.movieId === movieId;
    })
  }

  addMovie(movie: Movie) {
    movie.id = this.MOVIE_DATA.length;
    this.MOVIE_DATA.unshift(movie);
  }

  updateMovie(movie: Movie) {
    this.MOVIE_DATA.find((obj, index) => {
      if (obj.id === movie.id) {
        this.MOVIE_DATA[index] = movie;
      }
    })
  }

  MOVIE_DATA: Movie[] = [
    {
      locations: [
        {
          name: 'Chennai',
          available: true
        },
        {
          name: 'Bangalore',
          available: false
        },
        {
          name: 'Hydrebad',
          available: true
        }
      ],  name: 'VampireDaries', cast: 'Stefan,Demon', language: 'English', genre: 'Thriller',
      id: 1
    },
    {
      locations: [
        {
          name: 'Tirupathi',
          available: true
        },
        {
          name: 'Bangalore',
          available: true
        },
        {
          name: 'Hydrebad',
          available: true
        }
      ],  name: 'The Originals', cast: 'Klaus', language: 'English', genre: 'Thriller', id: 2
    },
    {
      locations: [
        {
          name: 'Tirupathi',
          available: true
        },
        {
          name: 'Vizag',
          available: true
        },
        {
          name: 'Hydrebad',
          available: true
        }
      ], name: 'Bahubali', cast: 'Prahbhas,Rana,Anuskha', language: 'Telugu', genre: 'Action'
      , id: 3
    },
    {
      locations: [
        {
          name: 'Tirupathi',
          available: true
        },
        {
          name: 'Bangalore',
          available: false
        },
        {
          name: 'Mumbai',
          available: true
        }
      ], name: 'RRR', cast: 'rabhas,Rana', language: 'Telugu', genre: 'Action'
      , id: 4
    },
    {
      locations: [
        {
          name: 'Tirupathi',
          available: true
        },
        {
          name: 'Bangalore',
          available: false
        },
        {
          name: 'Mumbai',
          available: true
        }
      ], name: 'Pushpa', cast: 'Allu-Arjun', language: 'Telugu', genre: 'Thriller'
      , id: 5
    },
    {
      locations: [
        {
          name: 'Tirupathi',
          available: true
        },
        {
          name: 'Bangalore',
          available: false
        },
        {
          name: 'Mumbai',
          available: true
        }
      ], name: 'Puspha-2', cast: 'Allu-Arjun,Rasmika', language: 'Telugu', genre: 'Comedy'
      , id: 6
    },
    {
      locations: [
        {
          name: 'Tirupathi',
          available: true
        },
        {
          name: 'Bangalore',
          available: true
        },
        {
          name: 'Mumbai',
          available: true
        }
      ],  name: 'Vikram', cast: 'KamlalHassan,Vijaysethupathi', language: 'Tamil', genre: 'Action'
      , id: 7
    },
    {
      locations: [
        {
          name: 'Tirupathi',
          available: true
        },
        {
          name: 'Hydrebad',
          available: false
        },
        {
          name: 'Mumbai',
          available: true
        }
      ], name: 'PuniyanSelvan-1', cast: 'Vikram,karthi', language: 'Tamil', genre: 'Historic'
      , id: 8
    },
    {
      locations: [
        {
          name: 'Tirupathi',
          available: true
        },
        {
          name: 'Mumbai',
          available: true
        },
        {
          name: 'Vizag',
          available: true
        }
      ],  name: 'Beast', cast: 'Thalapathy Vijay', language: 'Tamil', genre: 'Action'
      , id: 9
    },
  ];

  ShowsData = [
    {
      id: 1,
      location: 'Chennai',
      movieId: 1,
      timings: [
        {
          time: '12:30PM',
          available: true
        },
        {
          time: '3:30PM',
          available: false
        }
      ],
      theatreName: 'Palani',
      price: 300,
    },
    {
      id: 2,
      location: 'Tirupathi',
      movieId: 1,
      timings: [
        {
          time: '3:00PM',
          available: true
        }
      ],
      theatreName: 'Palani',
      price: 300,
    },
    {
      id: 3,
      location: 'Tirupathi',
      movieId: 2,
      timings: [
        {
          time: '7:00PM',
          available: true
        }
      ],
      theatreName: 'PVR',
      price: 300,
    },
    {
      id: 4,
      location: 'Tirupathi',
      movieId: 2,
      timings: [
        {
          time: '10:30PM',
          available: false
        }
      ],
      theatreName: 'Palani',
      price: 300,
    },
    {
      id: 5,
      location: 'Bangalore',
      movieId: 3,
      timings: [
        {
          time: '12:30PM',
          available: true
        }
      ],
      theatreName: 'Sandhya',
      price: 300,
    },
    {
      id: 6,
      location: 'Bangalore',
      movieId: 3,
      timings: [
        {
          time: '3:00PM',
          available: true
        }
      ],
      theatreName: 'Sandhya',
      price: 300,
    },
    {
      id: 7,
      location: 'Bangalore',
      movieId: 4,
      timings: [
        {
          time: '6:30PM',
          available: true
        }
      ],
      theatreName: 'Sandhya',
      price: 300,
    },
    {
      id: 8,
      location: 'Bangalore',
      movieId: 4,
      timings: [
        {
          time: '10:30PM',
          available: true
        }
      ],
      theatreName: 'Sandhya',
      price: 300,
    },
    {
      id: 9,
      location: 'Mumbai',
      movieId: 9,
      timings: [
        {
          time: '7:00PM',
          available: true
        }
      ],
      theatreName: 'Sandhya',
      price: 300,
    },
    {
      id: 10,
      location: 'Mumbai',
      movieId: 9,
      timings: [
        {
          time: '10:30PM',
          available: true
        }
      ],
      theatreName: 'Sandhya',
      price: 300,
    },
    {
      id: 11,
      location: 'Vizag',
      movieId: 4,
      timings: [
        {
          time: '12:00PM',
          available: true
        }
      ],
      theatreName: 'Vikram',
      price: 300,
    },
    {
      id: 12,
      location: 'Vizag',
      movieId: 4,
      timings: [
        {
          time: '3:00PM',
          available: true
        }
      ],
      theatreName: 'Vikram',
      price: 300,
    },
    
  ]

}