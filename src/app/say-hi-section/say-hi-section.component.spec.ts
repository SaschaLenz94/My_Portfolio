import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayHiSectionComponent } from './say-hi-section.component';

describe('SayHiSectionComponent', () => {
  let component: SayHiSectionComponent;
  let fixture: ComponentFixture<SayHiSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SayHiSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SayHiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
