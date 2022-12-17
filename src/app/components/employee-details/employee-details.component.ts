import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EmployeesModel } from '../../models/employees.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-details',
  styleUrls: ['./employee-details.component.scss'],
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  readonly list$: Observable<EmployeesModel[]> = this._employeesService.getAll();
  private _detailsSubject: Subject<EmployeesModel> = new Subject<EmployeesModel>();
  public details$: Observable<EmployeesModel> = this._detailsSubject.asObservable();

  constructor(private _employeesService: EmployeesService) {
  }

  selectEmployee(employee: EmployeesModel): void {
    this._detailsSubject.next(employee);
  }
}
