import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardContentComponent } from './container/card-content/card-content.component';
import { TomorrowIoLogoComponent } from './components/tomorrow-io-logo/tomorrow-io-logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardContentComponent, TomorrowIoLogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
