import { OverlayContainer } from '@angular/cdk/overlay';
import { Inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

constructor() { }

themeSignal = signal<string>("light");

	setTheme(theme: string) {
		this.themeSignal.set(theme);
	}

	updateTheme() {
		this.themeSignal.update((value) => (value === "dark" ? "light" : "dark"));
	}


}
