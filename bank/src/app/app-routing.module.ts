import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { TransactionsComponent } from './transactions/transactions.component';
const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'getdetails', component: GetDetailsComponent},
  {path: '', redirectTo:'employees',pathMatch:'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
{path: 'transactions', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
  EmployeeListComponent,
  GetDetailsComponent,
  UpdateEmployeeComponent
]