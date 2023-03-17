package com.parkingSystem.OnlineParkingSystem.Entitydto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BookingSlotDto {

	private int bookId;
	private String vehicleOwner;
	private String vehicleName;
	private String vehicleNumber;
	private String vehicleType;
	private int parkingTime;
	private int exitTime;
	private int amount;
	private ParkingPlaceDto parkPlace;
}
