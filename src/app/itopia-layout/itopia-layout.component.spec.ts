import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItopiaLayoutComponent } from './itopia-layout.component';

describe('ItopiaLayoutComponent', () => {
  let component: ItopiaLayoutComponent;
  let fixture: ComponentFixture<ItopiaLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItopiaLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItopiaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
