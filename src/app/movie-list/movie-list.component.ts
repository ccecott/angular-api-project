import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() data: any;
  // @Output() added = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  // addFavorite() {
  //   this.added.emit();
  // }
}
