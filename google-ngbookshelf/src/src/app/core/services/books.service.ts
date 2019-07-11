import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  SearchBooks(search: string): Observable<any>  {
    console.log(search);
    const encodedURI  = encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + search + '&maxResults=10');
    // return this.http.get(encodedURI);
    return this.http.get(encodedURI);
  }

  SearchByISBN(isbn: string) {
  const encodedURI = encodeURI('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + '&maxResults=10');
  return this.http.get(encodedURI);
  }

  categoryWiseSearch() {
  const encodedCategoryURI = encodeURI('assets/database/mylib.json');
  return this.http.get(encodedCategoryURI);
  }
}

