import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { AddEmployee } from './add-employee';

describe('AddEmployee', () => {
  let component: AddEmployee;
  let fixture: ComponentFixture<AddEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployee],
      providers: [provideNoopAnimations()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
