import { Component, OnInit } from '@angular/core';
import { BooksService } from '../core/services/books.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  books;
  constructor(private googleBookApiService: BooksService) { }

  OnSearch(s) {
    this.books = this.googleBookApiService.SearchBooks(s)
    .subscribe((data) => {
      this.books  = data;
      console.log('OnSearch data: ', this.books);
    });
  }
  ngOnInit() {
    this.googleBookApiService.SearchBooks('javascript')
        .subscribe((data) => {
          this.books  = data;
          console.log('ngOnInit', data);
        });
  }

}
