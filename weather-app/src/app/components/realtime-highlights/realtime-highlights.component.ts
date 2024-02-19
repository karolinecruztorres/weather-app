import { Component, Input } from '@angular/core';
import { Realtime } from '../../interfaces/realtime';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-realtime-highlights',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './realtime-highlights.component.html',
  styleUrl: './realtime-highlights.component.scss',
})
export class RealtimeHighlightsComponent {
  @Input() highlightsRealTimeData!: Realtime;
}
