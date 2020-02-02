import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../sidebar.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
  }
  clickMenu() {
    this.sidebarService.toggle();
  }

}
