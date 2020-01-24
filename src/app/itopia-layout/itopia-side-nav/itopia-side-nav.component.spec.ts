import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItopiaSideNavComponent } from './itopia-side-nav.component';

describe('ItopiaSideNavComponent', () => {
  let component: ItopiaSideNavComponent;
  let fixture: ComponentFixture<ItopiaSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItopiaSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItopiaSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
