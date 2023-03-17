package com.parkingSystem.OnlineParkingSystem.Entitydto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PaymentDto {

	private String BankName;
	private String VehicleName;
	private String vehicleType;
	private String totalAmount;
}
