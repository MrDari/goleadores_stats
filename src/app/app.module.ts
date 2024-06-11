import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableModule } from './data-table/DataTable.module';
import { ChartViewerModule } from './chart-viewer/ChartViewer.module';
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NavBarModule } from './nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    ChartViewerModule,
    NavBarModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
