package com.parkingSystem.OnlineParkingSystem.ServiceImpl;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parkingSystem.OnlineParkingSystem.Entitydto.ContactDto;
import com.parkingSystem.OnlineParkingSystem.Model.Contact;
import com.parkingSystem.OnlineParkingSystem.Model.User;
import com.parkingSystem.OnlineParkingSystem.Repository.ContactRepo;
import com.parkingSystem.OnlineParkingSystem.Repository.UserRepo;
import com.parkingSystem.OnlineParkingSystem.Service.ContactService;
import com.parkingSystem.OnlineParkingSystem.exception.ResourceNotFoundException;

@Service
public class ContactServiceImpl implements ContactService {

	@Autowired
	private ContactRepo contactRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private UserRepo userRepo;

	@Override
	public ContactDto createComplaint(ContactDto contactDto,int userId) {
		
		User user=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","userId",userId));
	
		Contact contact= this.modelMapper.map(contactDto, Contact.class);
		contact.setAddedDate(new Date());
		contact.setUser(user);
	    
		Contact contactdto=	contactRepo.save(contact);
		return this.modelMapper.map(contactdto, ContactDto.class);
	}

	@Override
	public ContactDto updateComplaint(ContactDto contactDto, int contactId) {
		Contact contact=this.contactRepo.findById(contactId).orElseThrow(()->new ResourceNotFoundException("contact","contactId",contactId));
		
		contact.setName(contactDto.getName());
		contact.setEmail(contactDto.getEmail());
		contact.setMobileNumber(contactDto.getMobileNumber());
		contact.setContent(contactDto.getContent());
		
	    Contact updatedContact=this.contactRepo.save(contact);
		return this.modelMapper.map(updatedContact,ContactDto.class);
	}

	@Override
	public void deleteComplaint(int contactId) {

		Contact complain=this.contactRepo.findById(contactId).orElseThrow(()->new ResourceNotFoundException("contact","contactId",contactId));
		this.contactRepo.delete(complain);
		
	}

	@Override
	public List<ContactDto> getAllComplaint() {
		List<Contact> allComplaint=this.contactRepo.findAll();
		List<ContactDto> complaints=allComplaint.stream().map((com)->this.modelMapper.map(com, ContactDto.class)).collect(Collectors.toList());
		return complaints;
	}

	@Override
	public List<ContactDto> getComplaintByUser(int userId) {
		User user=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","userId",userId));
		List<Contact> userComplain=this.contactRepo.findByUser(user);
		
	List<ContactDto> con=userComplain.stream().map((usrComplain)->this.modelMapper.map(usrComplain, ContactDto.class)).collect(Collectors.toList());
		return con;
	}

	@Override
	public ContactDto getComplaintById(int contactId) {
		Contact complaint=this.contactRepo.findById(contactId).orElseThrow(()->new ResourceNotFoundException("contact","contactId",contactId));
		return this.modelMapper.map(complaint, ContactDto.class);
	}

}
