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
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.service.getTitle(response.results).subscribe((data) => {
        this.data = data;
      });
    });

  }
  titleSearch(form: NgForm) {
    this.router.navigate(["movie-list"], {
      queryParams: { myTitle: form.value.title }

    });
  }
}
