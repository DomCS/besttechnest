import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAudioComponent } from './home-audio.component';

describe('HomeAudioComponent', () => {
  let component: HomeAudioComponent;
  let fixture: ComponentFixture<HomeAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
