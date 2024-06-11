import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from '../services/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  isDarkThemeActive = false;
  constructor ( @Inject(DOCUMENT) private document: Document, private themeService: ThemeService){}

  ngOnInit(): void {


  }
  onChange(newValue: boolean): void {
    if (newValue) {
      this.document.body.classList.add('dark');
      this.themeService.updateTheme()
      this.isDarkThemeActive = !this.isDarkThemeActive
    } else {
      this.document.body.classList.remove('dark');
      this.themeService.updateTheme()
      this.isDarkThemeActive = !this.isDarkThemeActive
    }
  }

}
