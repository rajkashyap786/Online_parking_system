package com.parkingSystem.OnlineParkingSystem.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parkingSystem.OnlineParkingSystem.Model.Location;
import com.parkingSystem.OnlineParkingSystem.Model.ParkingPlace;

public interface ParkingPlaceRepo extends JpaRepository<ParkingPlace,Integer> {

	List<ParkingPlace> findByparkingPlaceNameContaining(String parkingPlace);
	List<ParkingPlace> findByLocation(Location loc);
	}
