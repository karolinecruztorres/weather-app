import { Component, Input } from '@angular/core';
import { Forecast } from '../../interfaces/forecast';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-forecast-highlights',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './forecast-highlights.component.html',
  styleUrl: './forecast-highlights.component.scss',
})
export class ForecastHighlightsComponent {
  @Input() highlightsData!: Forecast;
}
