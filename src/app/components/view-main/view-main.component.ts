import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.scss']
})
export class ViewMainComponent implements OnInit, AfterViewChecked{

  public loading: boolean;
  public displayedColumns: any;

  public formGroup: FormGroup;

  public employees: Employee[];

  public infoUrl: boolean;

  public dataSource?: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private loadData: boolean;

  constructor(private employeeService: EmployeeService) {
    this.formGroup = new FormGroup({
      idEmployee: new FormControl(''),
    });

    this.employees = [];
    this.infoUrl = false;
    this.loadData = false;
    this.configTable();
    this.paginator = {} as MatPaginator;
    this.sort = {} as MatSort;
    this.loading = true;

  }

  public ngOnInit(): void {
    this.employeeService.getConfig().subscribe({
      next: (data: any) => {
        this.employeeService.setUrlApi = data.urlApi;
        this.infoUrl = true;
        this.loading = false;
      }, error: (error: any) =>{
        alert(`Se presento el siguiente error: ${JSON.stringify(error)}`)
        this.loading = false;
      }
    });
  }

  public ngAfterViewChecked(): void {
    if (this.dataSource && !this.loadData){
      this.loadData=true;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
  }

  public consultEmployees(): void {
    this.employees = [];
    let id: number = (this.formGroup.get("idEmployee") !== null && this.formGroup.get("idEmployee") !== undefined)
      ? this.formGroup.get("idEmployee")!.value : null;
    this.loading = true;
    this.getEmployee(id);

  }

  public getEmployee(id: number): void {
    this.employeeService.getEmployees(id).subscribe({
      next: (result: any) => {
        if (result.status === 'ok') {
          if (id) {
            this.employees.push(result.employee);
          } else {
            result.employees.forEach((element: Employee) => {
              this.employees.push(element);
            });
          }
          this.dataSource = new MatTableDataSource(this.employees);
          this.loading = false;
        } else {
          alert(`Se presento el siguiente error: ${result.status} ${result.message}`)
          this.loading = false;
        }
      }, error: (error: any) => {
        alert(`Se presento el siguiente error: ${JSON.stringify(error)}`)
        this.loading = false;
      }
    });
  }

  private configTable(): void {
    this.displayedColumns = ['id', 'name', 'age', 'salary', 'annualSalary', 'profileImage'];
  }
}
