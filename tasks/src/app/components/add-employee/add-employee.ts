import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {nameValidator} from '../../shared/validators/name.validator';

@Component({
  selector: 'app-add-employee',
  imports: [
    ReactiveFormsModule,
    NzInputDirective,
    NzSelectComponent,
    NzOptionComponent,
    NzButtonComponent
  ],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss',
})
export class AddEmployee {
  private formBuilder: FormBuilder = inject(FormBuilder);

  public employeeForm = this.formBuilder.group({
    firstName: ['', [Validators.minLength(2), Validators.required]],
    lastName: ['', [Validators.minLength(2), Validators.required]],
    position: ['', Validators.required],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
    }),
  },
  {
   validators: [nameValidator('firstName', 'lastName')]
  }

  );

  public onSubmit() {
    console.log('Form submitted', this.employeeForm.value);
  }
}
