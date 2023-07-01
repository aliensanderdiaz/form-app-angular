import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // HttpClientModule
  ]
})
export class SharedModule { }
