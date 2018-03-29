import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SelectivePreloadingStrategy} from "../selective-preloading-strategy";
import {ErrorPageComponent} from "../error-page/error-page.component";
import {MainRoutingModule} from "../main/main-routing.module";
import {MainModule} from "../main/main.module";




/**
 * app路由
 */
const appRoutes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  // {
  //   path: 'main',
  //   loadChildren: 'app/login/login.module#LoginModule'
  // },
  {
    path: 'app',
    loadChildren: 'app/main/main.module#MainModule'
  }
  // {
  //   path:'**',
  //   component: ErrorPageComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{preloadingStrategy: SelectivePreloadingStrategy,useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


