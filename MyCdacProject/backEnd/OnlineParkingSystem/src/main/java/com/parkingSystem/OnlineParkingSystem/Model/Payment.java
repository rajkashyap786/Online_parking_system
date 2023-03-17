package com.parkingSystem.OnlineParkingSystem.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="park_payment")
@Getter
@Setter
@NoArgsConstructor
public class Payment {

	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int payId;
	private Date addedDate;
	private String BankName;
	private String VehicleName;
	private String vehicleType;
	private String totalAmount;

}
