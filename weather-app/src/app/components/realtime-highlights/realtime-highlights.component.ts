import { Component, Input } from '@angular/core';
import { Realtime } from '../../interfaces/realtime';

@Component({
  selector: 'app-realtime-highlights',
  standalone: true,
  imports: [],
  templateUrl: './realtime-highlights.component.html',
  styleUrl: './realtime-highlights.component.scss',
})
export class RealtimeHighlightsComponent {
  @Input() highlightsRealTimeData!: Realtime;
}
