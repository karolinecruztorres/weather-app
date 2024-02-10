import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardContentComponent } from './components/card-content/card-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
