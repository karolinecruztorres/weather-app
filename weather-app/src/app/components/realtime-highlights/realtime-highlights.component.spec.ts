import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeHighlightsComponent } from './realtime-highlights.component';

describe('RealtimeHighlightsComponent', () => {
  let component: RealtimeHighlightsComponent;
  let fixture: ComponentFixture<RealtimeHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealtimeHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
