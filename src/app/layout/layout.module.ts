import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SidebarService} from './sidebar.service';
import {LayoutComponent} from './layout.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatListModule,
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  providers: [
    SidebarService
  ]
})
export class LayoutModule { }
