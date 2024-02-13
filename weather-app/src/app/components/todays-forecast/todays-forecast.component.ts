import { Component, Input } from '@angular/core';
import { TodaysForecast } from '../../interfaces/todays-forecast';

@Component({
  selector: 'app-todays-forecast',
  standalone: true,
  imports: [],
  templateUrl: './todays-forecast.component.html',
  styleUrl: './todays-forecast.component.scss'
})
export class TodaysForecastComponent {
  @Input() TodaysData!: TodaysForecast
}
