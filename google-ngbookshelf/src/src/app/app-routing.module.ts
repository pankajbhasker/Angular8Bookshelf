import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/contact/contact.component';
import { SearchComponent } from './search/search.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { ResultComponent } from './search/result/result.component';
import { LoginComponent } from './core/components/login/login.component';
import { MyShelfComponent } from './core/components/my-shelf/my-shelf.component';

const routes: Routes = [
// { path: '', pathMatch: 'full', redirectTo: 'home' },

{ path: '', pathMatch: 'full', component: HomeComponent },
{path: 'home', component: HomeComponent},
{ path: 'login', component: LoginComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'users', component: UserListComponent },
{ path: 'users/:login', component: UserComponent },
{ path: 'search', component: SearchComponent },
{path: 'category', component: MyShelfComponent },
{path: 'search/:isbn', component: ResultComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
