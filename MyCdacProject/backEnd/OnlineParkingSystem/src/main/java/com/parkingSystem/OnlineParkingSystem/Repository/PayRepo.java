package com.parkingSystem.OnlineParkingSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parkingSystem.OnlineParkingSystem.Model.Payment;

public interface PayRepo extends JpaRepository<Payment,Integer> {

}
