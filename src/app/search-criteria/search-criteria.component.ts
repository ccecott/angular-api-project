import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  data: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MovieService
  ) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe((response) => {
    //   if (!response.myTitle) {
    //     // if not provided a keyword then use my method from my service (getData)
    //     this.service.getData().subscribe((response) => {
    //       this.data = response;
    //     });
    //   } else {
    //     this.service.getTitle(response.myTitle).subscribe((data) => {
    //       this.data = data;
    //     });
    //   }
    // });
    // this.route.queryParams.subscribe((response) => {
    //   if (!response.genre_ids) {
    //     this.service.getData().subscribe((response) => {
    //       console.log(response);
    //       this.data = response;
    //     });
    //   } else {
    //     this.service.getGenre(response.genre_ids).subscribe((data) => {
    //       this.data = data;
    //     });
    //   }
    // });
    // this.route.queryParams.subscribe((response) => {
    //   if (!response.date) {
    //     this.service.getData().subscribe((response) => {
    //       console.log(response);
    //       this.data = response;
    //     });
    //   } else {
    //     this.service.getYear(response.date).subscribe((data) => {
    //       this.data = data;
    //     });
    //   }
    // });
    this.service.getGenres().subscribe((response) => {
      console.log(response);
    });
  }
  titleSearch(form: NgForm) {
    this.router.navigate(['home'], {
      queryParams: { myTitle: form.value.title },
    });
  }
  genreDrop(form: NgForm) {
    this.router.navigate(['home'], {
      queryParams: { genre_ids: form.value.genre },
    });
  }
  yearInput(form: NgForm) {
    this.router.navigate(['home'], {
      queryParams: { date: form.value.year },
    });
  }
}
