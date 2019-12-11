import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosCatDetailComponent } from './carros-cat-detail.component';

describe('CarrosCatDetailComponent', () => {
  let component: CarrosCatDetailComponent;
  let fixture: ComponentFixture<CarrosCatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosCatDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosCatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
