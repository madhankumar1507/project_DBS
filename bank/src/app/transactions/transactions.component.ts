import { Component, OnInit, Input } from '@angular/core';

import { EmployeeService } from '../employee.service'
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Employee, Transaction } from '../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transaction1: Transaction[] = [];
  transaction: Transaction = new Transaction();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getTransactions();
  }
  private getTransactions(){
    this.employeeService.getTransactionList().subscribe(data =>{
      this.transaction1=data;
      return this.transaction1;
    });
  }
 
}
