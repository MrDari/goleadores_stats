import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartViewerComponent } from './ChartViewer.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import {MatCardModule} from '@angular/material/card';
import { ChartModule } from 'angular-highcharts';


@NgModule({

  declarations: [
    ChartViewerComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    MatCardModule,
    ChartModule
  ],


})
export class ChartViewerModule { }
