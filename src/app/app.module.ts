import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from '../components/menu/menu.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { MyFormComponent } from 'src/components/my-form/my-form.component';
import { FormsModule } from '@angular/forms';
import { SearchMovieComponent } from 'src/components/search-movie/search-movie.component';
import { LoginFormComponent } from 'src/components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SignUpComponent,
    MenuComponent,
    MyFormComponent,
    SearchMovieComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
