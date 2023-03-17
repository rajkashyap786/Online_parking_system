package com.parkingSystem.OnlineParkingSystem.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parkingSystem.OnlineParkingSystem.Model.Contact;
import com.parkingSystem.OnlineParkingSystem.Model.User;

public interface ContactRepo extends JpaRepository<Contact,Integer> {

	List<Contact> findByUser(User user);
}
