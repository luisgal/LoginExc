import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAdressComponent } from './set-adress.component';

describe('SetAdressComponent', () => {
  let component: SetAdressComponent;
  let fixture: ComponentFixture<SetAdressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetAdressComponent]
    });
    fixture = TestBed.createComponent(SetAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
