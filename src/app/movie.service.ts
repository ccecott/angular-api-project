import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey: string = '120979ac9f0a7e6dbca67ca72dac0636';
  apiHomeUrl: string = 'https://api.themoviedb.org/3/movie/popular';
  apiTitle: string = 'https://api.themoviedb.org/3/search/movie';
  apiGenres: string = 'https://api.themoviedb.org/3/genre/movie/list';
  apiDiscover: string = 'https://api.themoviedb.org/3/discover/movie';
  constructor(private http: HttpClient) { }
  // popular movies
  getData() {
    return this.http.get(this.apiHomeUrl, {
      params: {
        api_key: this.apiKey,
        language: 'en-US',
      },
    });
  }
  // keyword
  getTitle(myTitle: string) {
    return this.http.get(this.apiTitle, {
      params: {
        query: myTitle,
        api_key: this.apiKey,
      },
    });
  }
  getGenres() {
    return this.http.get(this.apiGenres, {
      params: {
        api_key: this.apiKey,
      },
    });
  }
  filterMovies(release: any, genre: any) {
    console.log("heard");
    return this.http.get(this.apiDiscover, {
      params: {
        api_key: this.apiKey,
        primary_release_year: release,
        with_genres: genre,
      },
    });
  }
}
