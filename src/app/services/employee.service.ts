import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlApi: string;
  constructor(private http: HttpClient) { 
    this.urlApi = '';
  }
  
  public set setUrlApi(url : string) {
    this.urlApi = url;
  }

  public getConfig(): Observable<any>{
    return this.http.get('assets/app-config.json');
  }
  
  public getEmployees(id?: number): Observable<any> {
    return id ? this.http.get(this.urlApi +"/"+ id) : this.http.get(this.urlApi);
  }
  

}
