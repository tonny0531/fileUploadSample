import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginUploaderComponent } from './origin-uploader.component';

describe('OriginUploaderComponent', () => {
  let component: OriginUploaderComponent;
  let fixture: ComponentFixture<OriginUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
