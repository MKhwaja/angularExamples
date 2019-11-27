import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfValidationComponent } from './if-validation.component';

describe('IfValidationComponent', () => {
  let component: IfValidationComponent;
  let fixture: ComponentFixture<IfValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
