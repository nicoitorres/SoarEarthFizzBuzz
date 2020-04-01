import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzCheckerComponent } from './fizzbuzz-checker.component';

describe('FizzbuzzCheckerComponent', () => {
  let component: FizzbuzzCheckerComponent;
  let fixture: ComponentFixture<FizzbuzzCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizzbuzzCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzbuzzCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
