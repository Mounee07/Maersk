import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SidenavComponent] // Export them here
})
export class SharedModule { }
