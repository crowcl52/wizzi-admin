import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiziAddComponent } from './wizi-add.component';

describe('WiziAddComponent', () => {
  let component: WiziAddComponent;
  let fixture: ComponentFixture<WiziAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiziAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiziAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
