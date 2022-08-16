package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.example.demo.model.Receiver;
import com.example.demo.repository.ReceiverRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ReceiverController {
	@Autowired
	private ReceiverRepository receiverRepository;
	@GetMapping("/receivers")
	public List<Receiver> getAllReceiver(){
		return receiverRepository.findAll();
	}
}
