import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './modules/app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {AppService} from "./app.service";

import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AppService,
    SelectivePreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
