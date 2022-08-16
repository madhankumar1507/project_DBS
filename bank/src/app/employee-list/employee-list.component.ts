import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee'
import { Receiver } from '../employee'
import { SDN } from '../employee'
import { EmployeeService } from '../employee.service'

import * as fs from 'fs';


//import { ReceiverService } from '../employee.service'
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 public m!: String;
 public n!: number;
 public k:any;
 public c!:number;
 id!:number;
 @Input() item: String="";
public mad: String="Authorized";
 getValue(val:any,val1:any){
   this.m=val;
   this.item=val1;
   const now = new Date();
   this.sdn.forEach(function (value) {
    if(value["name"] == val1){
      alert("User is in sanction list, So transaction got declined");
      location.reload();
      return;

    }
    if(String(now).slice(0,3)=="Sun" || String(now).slice(0,3)=="Sat"){
      alert("Transactions are not allowed on SATURDAYS and SUNDAYS");
      location.reload();
return;
    }
   
  });
  this.c=0;
  this.receiver.forEach( (value) => {
    if(value['bic']==val){
        this.c=1;
        
    }
  });
  if(this.c==0){
    this.c=1;
alert("kindly check the BIC in details once");
return;
  }
   
   this.employeeService.setMsg(this.item);
    
      
      
       
    }


 
 getValue1(nat:any){
  this.n=nat;
  this.c=0;
  this.employee.forEach( (value) => {
    if(value['acc']==nat){
        this.c=1;
        
    }
  });
  if(this.c==0){
alert("There is no user with the given details, kindly check the details once");
return;
  }
}
  employee: Employee[] = [];
  receiver: Receiver[] = [];
  sdn: SDN[] = [];
  constructor(private employeeService: EmployeeService,  private route: ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
   this.getEmployees();
   this.getReceivers();
   this.getSDN();
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employee=data;
      return this.employee;
    });
  }
  private getSDN(){
    this.employeeService.getSDNList().subscribe(data =>{
      this.sdn=data;
      return this.sdn;
    })
  }
  private getReceivers(){
    
    this.employeeService.getReceiverList().subscribe(data =>{
      this.receiver=data;
      
      return this.receiver;
  

});
  }

updateEmployee(id: number){
  this.router.navigate(['update-employee', id]);
    
  }
}
