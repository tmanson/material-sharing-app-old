import {Component, OnInit, ViewChild} from '@angular/core';
import {SidebarService} from '../sidebar.service';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar', {static: false}) public sidebar: MatSidenav;

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.sidebarService.sidebarToggleSubject.subscribe(() => {
      const matSidenav = this.sidebar;
      if (matSidenav != null) {
        matSidenav.toggle();
      }
    });
  }

}
