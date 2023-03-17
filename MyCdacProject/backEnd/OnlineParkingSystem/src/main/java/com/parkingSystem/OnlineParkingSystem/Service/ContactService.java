package com.parkingSystem.OnlineParkingSystem.Service;

import java.util.List;

import com.parkingSystem.OnlineParkingSystem.Entitydto.ContactDto;

public interface ContactService {

	ContactDto createComplaint(ContactDto contactDto,int userId);
	ContactDto updateComplaint(ContactDto contactDto, int contactId);
	void deleteComplaint(int contactId);
	List<ContactDto> getAllComplaint();
	ContactDto getComplaintById(int contactId);
	List<ContactDto> getComplaintByUser(int userId);
}
