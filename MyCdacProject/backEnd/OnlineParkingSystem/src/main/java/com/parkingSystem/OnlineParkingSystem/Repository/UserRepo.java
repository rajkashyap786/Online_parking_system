package com.parkingSystem.OnlineParkingSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parkingSystem.OnlineParkingSystem.Model.User;

public interface UserRepo extends JpaRepository<User,Integer> {

	User findByUsername(String username); 
}
