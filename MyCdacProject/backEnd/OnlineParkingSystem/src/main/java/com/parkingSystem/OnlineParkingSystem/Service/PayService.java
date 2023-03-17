package com.parkingSystem.OnlineParkingSystem.Service;

import com.parkingSystem.OnlineParkingSystem.Entitydto.PaymentDto;
import com.parkingSystem.OnlineParkingSystem.Model.BookingSlot;

public interface PayService {

	PaymentDto makePayment(PaymentDto payDto);
//	void PaymentProcessFail(BookingSlot bookslotDto,String usr)throws Exception;
}
