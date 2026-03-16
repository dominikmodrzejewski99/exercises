import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {Employee} from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http: HttpClient = inject(HttpClient);

  public addEmployee(data: Omit<Employee, 'id'>) {
    this.http.post('/api/employees', data).pipe(
      catchError(() => of([]))
    );
  }

  public searchEmployees(query: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`/api/employees?query=${query}`).pipe(
      catchError(() => of([]))
    );
  }

}
