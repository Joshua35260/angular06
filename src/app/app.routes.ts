import { Routes } from '@angular/router';

import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';

const ROUTES: Routes =[
  {path: '', component: UserProfileComponent},
  {path: 'user', component: UserProfileComponent},
  {path: 'sign-up', component: SignUpComponent}
];

export { ROUTES };