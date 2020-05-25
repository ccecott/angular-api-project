import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  // @Input() data: any;
  favoriteMovies: any = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MovieService
  ) {}

  ngOnInit(): void {
    this.favoriteMovies = this.service.getFavorites();
  }
  // favoritesRoute() {
  //   this.router.navigate(['watch']);
  // }
}
