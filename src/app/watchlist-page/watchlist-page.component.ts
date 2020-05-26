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
  showIndex: number = -1;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MovieService
  ) { }

  ngOnInit(): void {
    this.favoriteMovies = this.service.getFavorites();
  }
  // favoritesRoute() {
  //   this.router.navigate(['watch']);
  // }
  deleteFav(index: number) {
    this.service.spliceFav(index);
  }
  toggleOverview(index: number): any {
    // this.showIndex = index;
    if (this.showIndex >= index) {
      this.showIndex = -1;
    } else {
      this.showIndex = index;
    }
  }
}
