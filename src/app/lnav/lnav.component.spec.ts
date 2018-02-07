import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LnavComponent } from './lnav.component';

describe('LnavComponent', () => {
  let component: LnavComponent;
  let fixture: ComponentFixture<LnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
