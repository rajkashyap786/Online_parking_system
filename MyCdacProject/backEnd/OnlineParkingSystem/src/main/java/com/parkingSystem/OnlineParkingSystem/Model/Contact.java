package com.parkingSystem.OnlineParkingSystem.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="contactUs")
@Getter
@Setter
@NoArgsConstructor
public class Contact {

	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int contactId;
	private String name;
	private String email;
	private long mobileNumber;
	private Date addedDate;
	
	@Column(length = 1000)
	private String content;
	
	@ManyToOne
	 @JoinColumn(name = "userid",referencedColumnName = "userid")
    private User user;
}
