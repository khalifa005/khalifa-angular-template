import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MyComponentComponent } from './my-component/my-component.component';
import { FeedbackModule } from './@feedback/feedback.module';
import { FeedbackComponent } from './@feedback/Feedback/feedback.component';

export const routes: Routes = [
  {
    //this will group all the component into pages component in single view with the side menu par
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },

  {
    //this will group all the component into pages component in single view with the side menu par
    path: 'test',
    component: MyComponentComponent
    },

  {
    //this will group all the component into pages component in single view with the side menu par
    path: 'feedback',
    component: FeedbackComponent
    },

  // {
  //   path: 'test',
  //   loadChildren: () =>
  //     import(
  //       './@auth/auth.module'
  //     ).then((m) => m.NgxAuthModule),
  // },

  {
    path: 'auth',
    loadChildren: () => import('./@auth/auth.module')
      .then(m => m.NgxAuthModule),
  },

  // {
  //   //this will have it's own view without a sidemenu par
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
