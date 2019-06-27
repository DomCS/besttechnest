import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPeripheralsComponent } from './desktop-peripherals.component';

describe('DesktopPeripheralsComponent', () => {
  let component: DesktopPeripheralsComponent;
  let fixture: ComponentFixture<DesktopPeripheralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPeripheralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPeripheralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
