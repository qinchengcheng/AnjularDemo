import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [NgbDropdownConfig]
})
export class DropdownComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    config.placement = 'top-left';
    config.autoClose = false;
  }

  ngOnInit() {
  }

}
