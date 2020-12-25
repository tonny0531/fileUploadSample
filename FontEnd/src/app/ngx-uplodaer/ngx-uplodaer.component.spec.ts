import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUplodaerComponent } from './ngx-uplodaer.component';

describe('NgxUplodaerComponent', () => {
  let component: NgxUplodaerComponent;
  let fixture: ComponentFixture<NgxUplodaerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUplodaerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUplodaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
