import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Receiver } from './employee';
import { Transaction } from './employee';
import { SDN } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   msg!: String;
  private baseURL="http://localhost:8080/api/v1/employees"
  private baseURL2="http://localhost:8080/api/v1/receivers"
  private baseURL3="http://localhost:8080/api/v1/transaction"
  private baseURL4="http://localhost:8080/api/v1/sdn"
  constructor(private httpClient:HttpClient) {}

    getEmployeesList():Observable<Employee[]>{
      return this.httpClient.get<Employee[]>(`${this.baseURL}`);
    }
   getEmployeeById(id: number): Observable<Employee>{
     return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
   }
   getSDNList():Observable<SDN[]>{
     return this.httpClient.get<SDN[]>(`${this.baseURL4}`);
   }
   updateEmployee(id:number,employee: Employee): Observable<any>{
     return this.httpClient.put(`http://localhost:8080/api/v1/employees/${id}`, employee);
   }
   getReceiverList():Observable<Receiver[]>{
     return  this.httpClient.get<Receiver[]>(`${this.baseURL2}`);
   }
   createTransaction(transaction : Transaction):Observable<Object>{
     return this.httpClient.post(`${this.baseURL3}`,transaction);
   }
   getTransactionList():Observable<Transaction[]>{
     return this.httpClient.get<Transaction[]>(`${this.baseURL3}`);
   }
   setMsg(data:String){
     return this.msg=data;
   }
   getMsg(){
     return this.msg;
   }
   
}
