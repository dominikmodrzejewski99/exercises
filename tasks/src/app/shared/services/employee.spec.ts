import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { EmployeeService } from './employee';
import { Employee } from '../models/employee.model';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  const mockEmployee: Omit<Employee, 'id'> = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    position: 'Developer',
    address: {
      street: 'ul. Testowa 1',
      city: 'Warszawa',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), EmployeeService],
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addEmployee', () => {
    it('should send POST request to /api/employees with employee data', () => {
      service.addEmployee(mockEmployee).subscribe();

      const req = httpMock.expectOne('/api/employees');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockEmployee);

      req.flush({ id: 1, ...mockEmployee });
    });

    it('should handle HTTP error gracefully and return empty array', () => {
      let result: unknown;

      service.addEmployee(mockEmployee).subscribe((res) => {
        result = res;
      });

      const req = httpMock.expectOne('/api/employees');
      req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });

      expect(result).toEqual([]);
    });
  });
});
