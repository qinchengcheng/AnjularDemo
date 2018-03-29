import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MainData} from "./main-model";
import {MainComponent} from "./main/main.component";
import {SidebarMenuComponent} from "./sidebar-menu/sidebar-menu.component";
import {TreeviewMenuComponent} from "./treeview-menu/treeview-menu.component";
import {MainRoutingModule} from "./main-routing.module";
/**
 * 主体模块
 */
@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    NgbModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent,
    SidebarMenuComponent,
    TreeviewMenuComponent
  ],
  exports:      [],
  providers:    []
})
export class MainModule {
}
