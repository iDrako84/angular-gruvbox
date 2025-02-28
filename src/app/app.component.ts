import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import {LayoutComponent} from './layout/layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'gruv-root',
  templateUrl: './app.component.html',
  imports: [
    LayoutComponent,
    RouterOutlet
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private _themeService: ThemeService) {}

  ngOnInit(): void {
    this._themeService.initializeTheme();
  }
}
