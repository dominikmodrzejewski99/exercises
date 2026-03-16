import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzInputDirective, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public value: string | undefined;

  protected readonly title = signal('tasks');
}
