import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormContainerComponent } from './custom-form-container.component';
import {ControlContainer} from '@angular/forms';

describe('CustomFormContainerComponent', () => {
  let component: CustomFormContainerComponent;
  let fixture: ComponentFixture<CustomFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFormContainerComponent],
      providers:[ControlContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
