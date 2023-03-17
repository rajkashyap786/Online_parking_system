package com.parkingSystem.OnlineParkingSystem.Model;

import java.util.Date;

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
@Table(name="SlotBooking")
@Getter
@Setter
@NoArgsConstructor
public class BookingSlot {

	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int bookId;
	private String vehicleOwner;
	private String vehicleName;
	private String vehicleNumber;
	private String vehicleType;
	private Date addedDate;
	private int parkingTime;
	private int exitTime;
	private int amount;
	
	@ManyToOne
	 @JoinColumn(name = "userid",referencedColumnName = "userid")
    private User user;
	
	@ManyToOne
	@JoinColumn(name = "parkingPlaceid")
     private ParkingPlace parkingPlace;
	
}
