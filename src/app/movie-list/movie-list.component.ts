import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() data: any = [];
  showIndex: number = -1;

  @Output() added = new EventEmitter<any>();

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    // this.favoriteMovies = this.service.getFavorites();
    // this.addProperty();
  }
  addFavorite(movie: any): void {
    this.added.emit(movie);
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
