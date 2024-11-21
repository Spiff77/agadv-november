import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNameComponent } from './counter-name.component';

describe('CounterNameComponent', () => {
  let component: CounterNameComponent;
  let fixture: ComponentFixture<CounterNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterNameComponent]
    });
    fixture = TestBed.createComponent(CounterNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
