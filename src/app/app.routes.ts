import { Routes } from '@angular/router';

import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { MovieSearchComponent } from '../components/search-movie/search-movie.component';

const ROUTES: Routes =[
  {path: '', component: MovieSearchComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'movie', component: MovieSearchComponent},
  {path: 'login', component: LoginFormComponent},
];

export { ROUTES };