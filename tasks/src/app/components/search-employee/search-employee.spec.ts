import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployee } from './search-employee';

describe('SearchEmployee', () => {
  let component: SearchEmployee;
  let fixture: ComponentFixture<SearchEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
