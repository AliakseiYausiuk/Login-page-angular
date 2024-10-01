import { Routes } from '@angular/router';
import {LayoutAuthComponent} from "./libs/layout/layout-auth/layout-auth.component";
import {ProfileComponent} from "./libs/profile/profile/profile.component";
import {canActivateAuth} from "./libs/auth/data/access.guard";

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [canActivateAuth]
  },
  {
    path: 'login',
    component: LayoutAuthComponent
  },

];
