package com.parkingSystem.OnlineParkingSystem.Model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
//import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="ParkingPlace")
@Getter
@Setter
@NoArgsConstructor
public class ParkingPlace {

	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int parkingPlaceId;
	private String parkingPlaceName;
	private String parkPlaceDescription;
	private int contact;
	private String address;
	private int totalSlot;
	
	@ColumnDefault("0")
	private int totalBookedSlot;
	private int amount;
	private int totalAvailableSlot;
	
	@ManyToOne(targetEntity=Location.class)
	@JoinColumn(name="locationId")
	private Location location;
	
	@OneToOne
	@JoinColumn(name="userid")
	private User user;
	
	}
