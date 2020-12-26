import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationComponent } from './notification/notification.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [LayoutComponent, SidebarComponent, NotificationComponent, ContentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
    NotificationComponent
  ]
})
export class LayoutModule { }
