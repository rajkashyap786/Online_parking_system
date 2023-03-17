package com.parkingSystem.OnlineParkingSystem.Entitydto;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LocationDto {

	public LocationDto(String loc1, String loc) {
		this.locationName=loc1;
		this.description=loc;
		// TODO Auto-generated constructor stub
	}
	private int locationId;
	private String locationName;
	private String description;
	private String imgeName;
	
}
