package com.parkingSystem.OnlineParkingSystem.Service;

import java.util.List;

import com.parkingSystem.OnlineParkingSystem.Entitydto.LocationDto;

public interface LocationService {
	 
	LocationDto createloc(LocationDto locDto);
	 LocationDto getSingleLocation(int locId);
//	 List<LocationDto> getAllLocation(String token);
	 List<LocationDto> getAllLocation();
	 void deleteLocation(int locationID);
}
