import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-my-shelf',
  templateUrl: './my-shelf.component.html',
  styleUrls: ['./my-shelf.component.css']
})
export class MyShelfComponent implements OnInit {
  books: any;

constructor(private googleBookApiService: BooksService) { }

ngOnInit() {
    this.googleBookApiService.categoryWiseSearch()
    .subscribe((data) => {
      this.books  = data;
      // 'https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/0'
    });
  }

}
