import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchComponent } from 'src/app/search/search.component';
import { EventEmitter } from 'events';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any;
  parentMessageStr = 'This message is from parent';

  showLoader = false;

  constructor(private router: Router, private route: ActivatedRoute, private googleBookApiService: BooksService,
              private _dialog: MatSnackBar ) { }

  OnSearch(s: string) {
    if (s.length > 0) {
      this.showLoader = true;
      this.books = this.googleBookApiService.SearchBooks(s)
        .subscribe((data) => {
          this.books = data;
          console.log('OnSearch data: ', this.books);
          this.showLoader = false;
        });
      console.log('on search data str : ', s);
    } else {
      this.popupDialog('Search box cannot be empty, while searching.', s);
    }
  }
  ngOnInit() {
  }

  popupDialog(message: string, action: string) {
    this._dialog.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }

}
