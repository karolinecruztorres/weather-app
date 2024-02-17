import { Component, Input } from '@angular/core';
import { WeeklyForecast } from '../../interfaces/weekly-forecast';

@Component({
  selector: 'app-weekly-forecast',
  standalone: true,
  imports: [],
  templateUrl: './weekly-forecast.component.html',
  styleUrl: './weekly-forecast.component.scss'
})
export class WeeklyForecastComponent {
  @Input() weeklyData!: WeeklyForecast;
}
