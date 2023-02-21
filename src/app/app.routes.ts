import { Routes } from '@angular/router';

import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { SearchMovieComponent } from '../components/search-movie/search-movie.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';

const ROUTES: Routes =[
  {path: '', component: UserProfileComponent},
  {path: 'user', component: UserProfileComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'movie', component: SearchMovieComponent},
  {path: 'login', component: LoginFormComponent},
];

export { ROUTES };