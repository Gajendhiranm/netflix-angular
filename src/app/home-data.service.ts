import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  results: any = [];
  id: Number = 0;
  movieId : Number = 0;
  pageNo : Number = 0;
  constructor(private http: HttpClient) {}

  PopularData = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/tv?api_key=0fc36919fff2603ac5d92fb95863f537'
    );
  };
  
   trendingAllData  = () => {
   return this.http.get<any>(
     'https://api.themoviedb.org/3/trending/all/day?api_key=0fc36919fff2603ac5d92fb95863f537'
   );
   }

   
  comedyMovies = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=35'
    );
  };


  
 seriesAtpage = (e: any) => {
   this.pageNo = e;
  return this.http.get<any>(
    `https://api.themoviedb.org/3/tv/popular?api_key=0fc36919fff2603ac5d92fb95863f537&language=en-US&page=${this.pageNo}`
  );
 }



  HorrorMovies = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=27'
    );
  };

  RomanticMovies = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=10749'
    );
  };

  documentaries = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=99'
    );
  };
  ActionMovies = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=28'
    );
  };

  TopRated = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/trending/all/week?api_key=0fc36919fff2603ac5d92fb95863f537'
    );
  };

  movie = (e: any) => {
    this.movieId = e;
    console.log(this.movieId);
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=0fc36919fff2603ac5d92fb95863f537`
    );
  }


  detailMovie = (e: any) => {
    this.id = e;
    console.log(this.id);
    return this.http.get<any>(
      `https://api.themoviedb.org/3/tv/${this.id}?api_key=0fc36919fff2603ac5d92fb95863f537`
    );
  };


//https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US

getVideo = (e : any) => {
  this.id = e;
  return this.http.get<any>(
    `https://api.themoviedb.org/3/tv/${this.id}/videos?api_key=0fc36919fff2603ac5d92fb95863f537`
  );
}
//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
getMovieVideo = (e : any) => {
  this.id = e;
  return this.http.get<any>(
    `https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=0fc36919fff2603ac5d92fb95863f537&language=en-US`
  );
}

 credits = (e: any) => {
      this.id = e;
      return this.http.get<any>(
        `https://api.themoviedb.org/3/tv/${this.id}/aggregate_credits?api_key=0fc36919fff2603ac5d92fb95863f537`
      );
 }
 Moviecredits = (e: any) => {
  this.id = e;
  return this.http.get<any>(
    `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=0fc36919fff2603ac5d92fb95863f537&language=en-US`
  );
}

}
