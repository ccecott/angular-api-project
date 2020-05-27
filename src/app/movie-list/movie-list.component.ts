import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() data: any;
  showIndex: number = -1;
  movieID: number;
  // @Output() added = new EventEmitter<void>();

  constructor(private service: MovieService) {}

  ngOnInit(): void {}

  addFavorite(movie: any) {
    this.service.pushFavorite(movie);
    if (movie.id === this.movieID) {
      console.log('no');
    } else {
      // console.log(movie.id);
      console.log();
    }
  }

  // add more functionality here, set -1 to showIndex
  toggleOverview(index: number): any {
    // this.showIndex = index;
    if (this.showIndex >= index) {
      this.showIndex = -1;
    } else {
      this.showIndex = index;
    }
  }
}
