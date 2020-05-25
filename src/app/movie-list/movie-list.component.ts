import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() data: any;
  // @Output() added = new EventEmitter<void>();
  constructor(private service: MovieService) {}

  ngOnInit(): void {}

  addFavorite(movie: any) {
    this.service.pushFavorite(movie);
  }
}
