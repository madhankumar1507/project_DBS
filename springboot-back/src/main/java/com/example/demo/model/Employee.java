package com.example.demo.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "main")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "CustomerID")
	private String acc;
	@Column(name = "Account_Holder_Name")
	private String name;
	
	@Column(name = "Balance")
	private long balance;
	
	@Column(name = "Overdraft")
	private String overdraft;
	
	@Column(name = "b_Name")
	private String b_name;

public Employee() {
		
	}
	
	
	public Employee(String acc, String name, long balance, String overdraft, String b_name) {
		super();
		this.acc = acc;
		this.name = name;
		this.balance = balance;
		this.overdraft = overdraft;
		this.b_name = b_name;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getAcc() {
		return acc;
	}

	public void setAcc(String acc) {
		this.acc = acc;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getBalance() {
		return balance;
	}

	public void setBalance(long balance) {
		this.balance = balance;
	}

	public String getOverdraft() {
		return overdraft;
	}

	public void setOverdraft(String overdraft) {
		this.overdraft = overdraft;
	}

	public String getB_name() {
		return b_name;
	}

	public void setB_name(String b_name) {
		this.b_name = b_name;
	}
	
}
