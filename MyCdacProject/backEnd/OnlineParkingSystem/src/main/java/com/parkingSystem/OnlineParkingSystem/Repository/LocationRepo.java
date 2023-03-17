package com.parkingSystem.OnlineParkingSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parkingSystem.OnlineParkingSystem.Model.Location;

public interface LocationRepo extends JpaRepository<Location,Integer>{

}
