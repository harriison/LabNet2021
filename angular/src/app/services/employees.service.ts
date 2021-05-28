import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EmployeesI } from '../models/employees.model'

@Injectable({
    providedIn: 'root'
  })
export class EmployeesService{

    constructor(private http: HttpClient){ }
    postEmployee(request: EmployeesI)
    {
        return this.http.post(environment.api + 'Employees/', request);
    }

    putEmployee(request: EmployeesI)
    {
        return this.http.put(environment.api + "Employees/", request);
    }

    deleteEmployee(id: number)
    {
        return this.http.delete(environment.api + 'Employees/' + id);
    }

    getEmployees(): Observable<any>
    {
        return this.http.get<any>(environment.api + 'Employees/');
    }

    getEmployee(id: number): Observable<any> {
      return this.http.get<any>(environment.api + 'Employees/' + id);
    }
}

