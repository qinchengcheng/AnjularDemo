import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
import {MenuData} from "../main-model";

@Component({
  selector: 'c-treeview-menu',
  templateUrl: './treeview-menu.component.html',
  styleUrls: ['./treeview-menu.component.scss']
})
export class TreeviewMenuComponent implements OnInit {
  @Input() data:MenuData;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  /**
   * 是否有子节点
   * @param item
   */
  isLeaf(item: MenuData) {
    return !item.children || !item.children.length;
  }

  /**
   * 点击
   * @param item
   */
  itemClicked(item: MenuData) {
    if (!this.isLeaf(item)) {
      item.isExpend = !item.isExpend;
    } else {
      this.router.navigate([item.url]);
    }
  }
}
