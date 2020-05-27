import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  favoriteMovies: any = [];
  // favoritesArray: object[];
  data: any = [];
  genres: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MovieService
  ) {}

  ngOnInit(): void {
    this.favoriteMovies = this.service.getFavorites();
    this.route.queryParams.subscribe((response) => {
      if (response.myTitle) {
        this.service.getTitle(response.myTitle).subscribe((data) => {
          this.data = data.results;
          this.addProperty();
        });
      } else if (response.genre || response.year || response.rating) {
        this.service
          .filterMovies(response.year, response.genre, response.rating)
          .subscribe((response) => {
            this.data = response.results;
            this.addProperty();
          });
      } else {
        // if not provided a keyword then use my method from my service (getData)
        this.service.getData().subscribe((response) => {
          this.data = response.results;
          this.addProperty();
        });
      }
    });

    this.service.getGenres().subscribe((response) => {
      this.genres = response.genres;
    });
  }
  titleSearch(form: NgForm) {
    this.router.navigate(['home'], {
      queryParams: { myTitle: form.value.title },
    });
  }
  filterSearch(form: NgForm) {
    console.log(form.value);
    this.router.navigate(['home'], {
      queryParams: {
        year: form.value.year,
        genre: form.value.genre,
        rating: form.value.rating,
      },
    });
  }
  addProperty(): void {
    this.data.forEach((movie) => {
      if (this.checkDuplicate(movie)) {
        movie.isClicked = true;
      }
    });
  }
  checkDuplicate(movie: any): boolean {
    return this.favoriteMovies.some((item) => {
      return item.id === movie.id;
    });
  }

  addFavorite(movie: any) {
    if (this.checkDuplicate(movie)) {
      console.log('i need to remove');
    } else {
      movie.isClicked = true;
      console.log(movie);
      this.service.pushFavorite(movie);
    }
  }
}
