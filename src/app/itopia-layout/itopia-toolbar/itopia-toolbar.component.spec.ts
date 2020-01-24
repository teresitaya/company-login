import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItopiaToolbarComponent } from './itopia-toolbar.component';

describe('ItopiaToolbarComponent', () => {
  let component: ItopiaToolbarComponent;
  let fixture: ComponentFixture<ItopiaToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItopiaToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItopiaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
