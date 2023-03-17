package com.parkingSystem.OnlineParkingSystem.Entitydto;

import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.ColumnDefault;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ParkingPlaceDto {

	private int parkingPlaceId;
	private String parkingPlaceName;
	private String parkPlaceDescription;
	private int contact;
	private String address;
	private int totalSlot;
	
	@ColumnDefault("0")
	private int totalBookedSlot;
	private int totalAvailableSlot;
	private int amount;
	private LocationDto location;
	private UserDto user;
	private Set<BookingSlotDto> bookslot=new HashSet<>();
}
