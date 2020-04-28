import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitLocationComponent } from './hit-location.component';

describe('HitLocationComponent', () => {
  let component: HitLocationComponent;
  let fixture: ComponentFixture<HitLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
