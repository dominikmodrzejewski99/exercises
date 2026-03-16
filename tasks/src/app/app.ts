import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AddEmployee} from './components/add-employee/add-employee';

@Component({
  selector: 'app-root',
  imports: [FormsModule, AddEmployee],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
