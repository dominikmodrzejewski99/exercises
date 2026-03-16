import { Component } from '@angular/core';
import {debounceTime, delay, distinctUntilChanged, of, startWith, switchMap} from 'rxjs';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-search-employee',
  imports: [
    NzInputDirective,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './search-employee.html',
  styleUrl: './search-employee.scss',
})
export class SearchEmployee {

  public searchControl: FormControl = new FormControl('');

  public employees$ = of(
    [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
      },
      {
        id: 3,
        firstName: 'Bob',
        lastName: 'Smith',
      }
  ]).pipe(delay(1000));

  public searchEmployees$ = this.searchControl.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(() => this.employees$)
  )
}
