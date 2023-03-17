package com.parkingSystem.OnlineParkingSystem.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parkingSystem.OnlineParkingSystem.Entitydto.ContactDto;
import com.parkingSystem.OnlineParkingSystem.Service.ContactService;

@RestController
@RequestMapping("/Contact")
public class ContactController {

	@Autowired
	private ContactService contactService;
	
	@PostMapping("/CreateUsrFeedback/{userId}")
	public ResponseEntity<?> create(@RequestBody ContactDto contactDto,@PathVariable int userId){
		
		this.contactService.createComplaint(contactDto, userId);
		return new ResponseEntity<>(Map.of("message"," Submitted sucessfully"),HttpStatus.CREATED);
	}

	@GetMapping("/UsrFeedback")
	public ResponseEntity<List<ContactDto>> getAllComplaint(){
		List<ContactDto> allComplain=this.contactService.getAllComplaint();
		return new ResponseEntity<List<ContactDto>>(allComplain,HttpStatus.OK);
	}
	
	@GetMapping("/singleFeedback/{contactId}")
	public ResponseEntity<ContactDto> getComplaintById(@PathVariable int contactId){
		ContactDto singleComplain=this.contactService.getComplaintById(contactId);
		return new ResponseEntity<ContactDto>(singleComplain,HttpStatus.OK);
	}
	
	
	@GetMapping("/getByUser/{userId}")
	public ResponseEntity<List<ContactDto>> getComplaintByuser(@PathVariable int userId){
		List<ContactDto> complain=this.contactService.getComplaintByUser(userId);
		return new ResponseEntity<List<ContactDto>>(complain,HttpStatus.OK);
	}
	
	@PutMapping("/editfeedback")
	public ResponseEntity<?> updateComplaintDetails(@RequestBody ContactDto contactDto,@PathVariable int contactId){
		
		this.contactService.updateComplaint(contactDto, contactId);
		return new ResponseEntity<>(Map.of("message","updated Sucessfully"),HttpStatus.OK);
	}
	
	@DeleteMapping("/delUsrFeedback/{contactId}")
	public ResponseEntity<?> deleteUser(@PathVariable int contactId){
		
		this.contactService.deleteComplaint(contactId);
		return new ResponseEntity<>(Map.of("message","Deleted Successfully"),HttpStatus.OK);	
	}
}
