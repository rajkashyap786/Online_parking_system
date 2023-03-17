package com.parkingSystem.OnlineParkingSystem.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parkingSystem.OnlineParkingSystem.Entitydto.PaymentDto;
import com.parkingSystem.OnlineParkingSystem.Service.PayService;


@RestController
@RequestMapping("/checkout")
public class PaymentController {

	@Autowired
	private PayService payService;
	
	@PostMapping("/pay")
	public ResponseEntity<?> payingAmount(@RequestBody PaymentDto payDto ){
		PaymentDto paydto=this.payService.makePayment(payDto);
		return new ResponseEntity<>(paydto,HttpStatus.CREATED);
	}

}
