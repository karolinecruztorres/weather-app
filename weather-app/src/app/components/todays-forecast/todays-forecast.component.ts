import { Component, Input } from '@angular/core';
import { Realtime } from '../../interfaces/realtime';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-todays-forecast',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './todays-forecast.component.html',
  styleUrl: './todays-forecast.component.scss',
})
export class TodaysForecastComponent {
  @Input() todaysData!: Realtime;
}
