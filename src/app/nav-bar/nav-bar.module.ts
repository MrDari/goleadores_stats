import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterLink, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule


  ],
  exports:  [NavBarComponent]
})
export class NavBarModule { }
