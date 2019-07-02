import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiziModifyComponent } from './wizi-modify.component';

describe('WiziModifyComponent', () => {
  let component: WiziModifyComponent;
  let fixture: ComponentFixture<WiziModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiziModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiziModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
