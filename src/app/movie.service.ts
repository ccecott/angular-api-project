import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey: string = '120979ac9f0a7e6dbca67ca72dac0636';
  apiHomeUrl: string =
    'https://api.themoviedb.org/3/movie/popular?api_key=120979ac9f0a7e6dbca67ca72dac0636&language=en-US&page=1';
  apiTitle: string =
    'https://api.themoviedb.org/3/search/movie?api_key=120979ac9f0a7e6dbca67ca72dac0636&query=';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiHomeUrl);
  }
  getTitle(myTitle: string) {
    return this.http.get(this.apiTitle, {
      params: { q: myTitle }
    });
  }
}
