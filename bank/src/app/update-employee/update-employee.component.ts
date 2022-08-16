import { Component, OnInit, Input } from '@angular/core';

import { EmployeeService } from '../employee.service'
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Employee, Transaction } from '../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:number;
  employee: Employee = new Employee();
  employee2: Employee = new Employee();
  transaction1: Transaction[] = [];
  transaction: Transaction = new Transaction();
  send!:String;
  
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.send = String(this.employeeService.getMsg());
    console.log(1)
    console.log(this.employeeService.getMsg());
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      this.balance();
     
    }, error => console.log(error));
  this.getTransactions();
  }
   
    private getTransactions(){
      this.employeeService.getTransactionList().subscribe(data =>{
        this.transaction1=data;
        return this.transaction1;
      });
    }
  saveTransaction(){
    const now = new Date();
  
    this.transaction.time = String(now.toLocaleString());
    this.transaction.sender= this.employee.name;
    this.transaction.amount = this.employee.balance;
    this.transaction.receiver = this.send;
    if(this.transaction.type=="Bank To Bank" || this.transaction.type=="Customer To Customer"){
      if(this.employee.name.slice(0,9)=="HDFC BANK" || this.send.slice(0,9)=="HDFC BANK"){
             if(this.send.slice(0,9)=="HDFC BANK" && this.employee.name.slice(0,9)=="HDFC BANK"){
              this.transaction.status = "Success";
              alert("Transaction Success ");
             }
             else{
              this.transaction.status = "Denied";
              alert("Transaction Denied ");

             }
      }
      else{
    this.transaction.status = "Success";
    alert("Transaction Success");
      }
    }
    if(this.employee2.balance<this.employee.balance){
      if(this.employee.overdraft=="yes"){
        this.transaction.status = "Success";
      }
      else{
        this.transaction.status = "Denied";
      }
    }
    this.transaction.transactionId = String(Math.floor(100000 + Math.random()* 900000));
    this.employeeService.createTransaction(this.transaction).subscribe(data=>{},
      error => console.log(error));
  }
  onSubmit(){
    this.saveTransaction();
    console.log(typeof(this.employee.balance));
    console.log(typeof(this.employee2.balance));
    if(this.transaction.status=="Success"){
const k = Number(this.employee2.balance) - (Number(this.employee.balance)+(Number(this.employee.balance)*0.25));
console.log(k)
 this.employee.balance=String(k);
    }
    else{
     const k= this.employee2.balance;
     this.employee.balance=String(k);
    }
 


    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      
      //this.goToEmployeeList();
    }
    , error => console.log(error));
    
  }
 
  /*goToEmployeeList(){
    this.router.navigate(['/employees']);
  }*/
  balance(){
    
    this.id = this.route.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe(data => {
    this.employee2 = data;
    console.log(this.employee2.balance);
    return this.employee2.balance;

  }, error => console.log(error));
}
move(){
  this.router.navigate(['transactions']);
}
}