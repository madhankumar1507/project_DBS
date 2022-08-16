package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.SDN;
import com.example.demo.repository.SDNRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class SDNCoontroller{
	@Autowired
	private SDNRepository sdnRepository;
	@GetMapping("/sdn")
	public List<SDN> getAllSDN(){
		return sdnRepository.findAll();
	}
	
}
