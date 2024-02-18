import { Component, Input } from '@angular/core';
import { Forecast } from '../../interfaces/forecast';

@Component({
  selector: 'app-forecast-highlights',
  standalone: true,
  imports: [],
  templateUrl: './forecast-highlights.component.html',
  styleUrl: './forecast-highlights.component.scss',
})
export class ForecastHighlightsComponent {
  @Input() highlightsData!: Forecast;
}
