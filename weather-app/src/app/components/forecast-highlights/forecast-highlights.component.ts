import { Component, Input } from '@angular/core';
import {
  ForecastHighlightsRealTime,
  ForecastHighlights,
} from '../../interfaces/forecast-highlights';

@Component({
  selector: 'app-forecast-highlights',
  standalone: true,
  imports: [],
  templateUrl: './forecast-highlights.component.html',
  styleUrl: './forecast-highlights.component.scss',
})
export class ForecastHighlightsComponent {
  @Input() highlightsRealTimeData!: ForecastHighlightsRealTime;
  @Input() highlightsData!: ForecastHighlights;
}
