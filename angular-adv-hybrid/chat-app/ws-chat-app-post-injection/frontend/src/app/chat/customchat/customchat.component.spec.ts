import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomchatComponent } from './customchat.component';

describe('CustomchatComponent', () => {
  let component: CustomchatComponent;
  let fixture: ComponentFixture<CustomchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomchatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
