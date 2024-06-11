import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './DataTable.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    NavBarModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule
  ],

})
export class DataTableModule { }
