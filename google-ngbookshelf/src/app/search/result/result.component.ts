import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../core/services/books.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  book;

  constructor(private googleBooksApiService: BooksService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const isbn = this.route.snapshot.params.isbn;
    this.googleBooksApiService.SearchByISBN(isbn).
         subscribe((data) => {
          this.book = data || {};
          console.log('ISBN data: ', data);
    });
  }

}
