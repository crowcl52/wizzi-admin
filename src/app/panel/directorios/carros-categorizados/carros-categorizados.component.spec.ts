import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosCategorizadosComponent } from './carros-categorizados.component';

describe('CarrosCategorizadosComponent', () => {
  let component: CarrosCategorizadosComponent;
  let fixture: ComponentFixture<CarrosCategorizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosCategorizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosCategorizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
