import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { ResultComponent } from './search/result/result.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UsersService } from './core/services/users.service';
import { BooksService } from './core/services/books.service';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';
import { MyShelfComponent } from './core/components/my-shelf/my-shelf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LoginComponent } from './core/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ResultComponent,
    SearchComponent,
    UserComponent,
    UserListComponent,
    SideNavComponent,
    MyShelfComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UsersService,
  BooksService, Title, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
