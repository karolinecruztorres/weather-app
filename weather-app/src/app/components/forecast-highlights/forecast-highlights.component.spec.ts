import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastHighlightsComponent } from './forecast-highlights.component';

describe('ForecastHighlightsComponent', () => {
  let component: ForecastHighlightsComponent;
  let fixture: ComponentFixture<ForecastHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
