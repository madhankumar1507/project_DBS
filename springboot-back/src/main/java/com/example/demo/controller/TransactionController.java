package com.example.demo.controller;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Transaction;
import com.example.demo.repository.TransactionRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class TransactionController {
	@Autowired
	private TransactionRepository transactionRepository;
	
	// get all Transactions
	@GetMapping("/transaction")
	public java.util.List<Transaction> getAllTransactions(){
		return transactionRepository.findAll();
	}
	@PostMapping("/transaction")
	public Transaction createTransaction(@RequestBody Transaction transaction) {
		return transactionRepository.save(transaction);
	}
}
