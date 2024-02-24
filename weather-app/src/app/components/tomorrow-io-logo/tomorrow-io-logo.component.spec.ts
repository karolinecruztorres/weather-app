import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomorrowIoLogoComponent } from './tomorrow-io-logo.component';

describe('TomorrowIoLogoComponent', () => {
  let component: TomorrowIoLogoComponent;
  let fixture: ComponentFixture<TomorrowIoLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TomorrowIoLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TomorrowIoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
