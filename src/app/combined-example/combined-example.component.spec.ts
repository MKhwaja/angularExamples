import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedExampleComponent } from './combined-example.component';

describe('CombinedExampleComponent', () => {
  let component: CombinedExampleComponent;
  let fixture: ComponentFixture<CombinedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
