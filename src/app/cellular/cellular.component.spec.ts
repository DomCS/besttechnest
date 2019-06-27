import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellularComponent } from './cellular.component';

describe('CellularComponent', () => {
  let component: CellularComponent;
  let fixture: ComponentFixture<CellularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
