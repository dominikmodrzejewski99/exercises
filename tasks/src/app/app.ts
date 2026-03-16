import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AddEmployee} from './components/add-employee/add-employee';
import {SearchEmployee} from './components/search-employee/search-employee';

@Component({
  selector: 'app-root',
  imports: [FormsModule, AddEmployee, SearchEmployee],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
