import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxshareComponent } from './ngxshare.component';

describe('NgxshareComponent', () => {
  let component: NgxshareComponent;
  let fixture: ComponentFixture<NgxshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
