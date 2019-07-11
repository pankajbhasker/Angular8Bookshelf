import { Component, OnInit, RootRenderer, Output, Input } from '@angular/core';
import { BooksService } from '../core/services/books.service';
import { HomeComponent } from '../home/home/home.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() childMessageStr: string;
  @Input() books: any;

  clearBooks() {
    this.books = undefined;
  }

  constructor(private googleBookApiService: BooksService, private homecomponent: HomeComponent) { }

  OnSearch(s: string) {
    this.books = this.googleBookApiService.SearchBooks(s)
      .subscribe((data) => {
        this.clearBooks();
        this.books = data;
        console.log('OnSearch data: ', this.books);
      });
  }
  ngOnInit() {
    this.googleBookApiService.SearchBooks('javascript')
      .subscribe((data) => {
        this.clearBooks();
        this.books = data;
        console.log('ngOnInit', data);
      });
  }

  /*

  getAuthorDetails():  Observable  {
    return  this.http.get(this.url).map((res:  Response)  =>  res.json());
  }

  getAuthorList():  Promise  {
    return  this.http.get(this.url).toPromise().then((res:  Response)  =>
    res.json());
  }

  */

}
