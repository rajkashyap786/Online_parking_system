package com.parkingSystem.OnlineParkingSystem.Entitydto;

import java.util.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ContactDto {
	
	    private int contactId;
	    private String name;
		private String email;
		private Date addedDate;
		private long mobileNumber;
		private String content;
}
