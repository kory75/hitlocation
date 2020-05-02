import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HitTableComponent } from './hit-table.component';

describe('HitTableComponent', () => {
  let component: HitTableComponent;
  let fixture: ComponentFixture<HitTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HitTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
