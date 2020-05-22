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
  data: any;
  genres: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MovieService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      console.log(response)
      if (response.myTitle) {
        console.log("up");
        this.service.getTitle(response.myTitle).subscribe((data) => {
          this.data = data;
        });
      } else if (response.genre || response.year || response.rating) {
        console.log("heool");
        this.service.filterMovies(response.year, response.genre).subscribe((response) => {
          this.data = response;
        })
      } else {
        console.log("down");
        // if not provided a keyword then use my method from my service (getData)
        this.service.getData().subscribe((response) => {
          this.data = response;
        });

      }
    });

    this.service.getGenres().subscribe((response) => {

      this.genres = response["genres"];
    });
  }
  titleSearch(form: NgForm) {
    this.router.navigate(['home'], {
      queryParams: { myTitle: form.value.title },
    });
  }
  filterSearch(form: NgForm) {
    console.log(form.value);
    this.router.navigate(["home"], {
      queryParams: {
        year: form.value.year,
        genre: form.value.genre,
        rating: form.value.rating
      }
    })
  }
  // genreDrop(form: NgForm) {
  //   this.router.navigate(['home'], {
  //     queryParams: { genre_ids: form.value.genre },
  //   });
  // }
  // yearInput(form: NgForm) {
  //   this.router.navigate(['home'], {
  //     queryParams: { date: form.value.year },
  //   });
  // }
}
