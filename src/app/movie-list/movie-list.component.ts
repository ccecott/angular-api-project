import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  data: any;
  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.service.getData().subscribe((response) => {
      // console.log(response);
      this.data = response;
    });
  }
  // setData()
}
