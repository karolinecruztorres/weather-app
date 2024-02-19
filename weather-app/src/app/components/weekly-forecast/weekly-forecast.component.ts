import { Component, Input } from '@angular/core';
import { Forecast } from '../../interfaces/forecast';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-weekly-forecast',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './weekly-forecast.component.html',
  styleUrl: './weekly-forecast.component.scss',
})
export class WeeklyForecastComponent {
  @Input() weeklyData!: Forecast;
}
