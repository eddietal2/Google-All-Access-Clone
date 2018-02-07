import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPageComponent } from './artistpage.component';

describe('ArtistpageComponent', () => {
  let component: ArtistPageComponent;
  let fixture: ComponentFixture<ArtistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
