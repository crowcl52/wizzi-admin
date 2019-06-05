import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosCarrosComponent } from './nuevos-carros.component';

describe('NuevosCarrosComponent', () => {
  let component: NuevosCarrosComponent;
  let fixture: ComponentFixture<NuevosCarrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevosCarrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevosCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
