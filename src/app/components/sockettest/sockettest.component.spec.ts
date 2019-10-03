import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SockettestComponent } from './sockettest.component';

describe('SockettestComponent', () => {
  let component: SockettestComponent;
  let fixture: ComponentFixture<SockettestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SockettestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SockettestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
