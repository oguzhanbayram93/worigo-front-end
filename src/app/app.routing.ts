import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { HotelListComponent } from './Admin/hotel-list/hotel-list.component';
import { AddHotelComponent } from './admin/add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './admin/update-hotel/update-hotel.component';

export const routes: Routes = [
  {path:'',component:UserLoginComponent},
{
  path: 'Admin', component: AdminComponent, children: [

    {path:'HotelList',component:HotelListComponent},
    {path:'AddHotel',component:AddHotelComponent},
    {path:'HotelList/UpdateHotel/:id',component:UpdateHotelComponent},
  ]
},
  

  // {
  //   path: '404',
  //   component: P404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: P500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  // {
  //   path: '',
  //   component: DefaultLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'base',
  //       loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
  //     },
  //     {
  //       path: 'buttons',
  //       loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
  //     },
  //     {
  //       path: 'charts',
  //       loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
  //     },
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  //     },
  //     {
  //       path: 'icons',
  //       loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
  //     },
  //     {
  //       path: 'notifications',
  //       loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
  //     },
  //     {
  //       path: 'theme',
  //       loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
  //     },
  //     {
  //       path: 'widgets',
  //       loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
  //     }
  //   ]
  // },
  {path:'ResetPassword',component:ResetPasswordComponent},  
  {path:'ForgotPassword',component:ForgotPasswordComponent},
  {path:'**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
