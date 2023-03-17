package com.parkingSystem.OnlineParkingSystem.ServiceImpl;

import java.util.HashMap;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parkingSystem.OnlineParkingSystem.Entitydto.PaymentDto;
import com.parkingSystem.OnlineParkingSystem.Model.BookingSlot;
import com.parkingSystem.OnlineParkingSystem.Model.Payment;
import com.parkingSystem.OnlineParkingSystem.Repository.BookingSlotRepo;
import com.parkingSystem.OnlineParkingSystem.Repository.PayRepo;
import com.parkingSystem.OnlineParkingSystem.Service.PayService;

@Service
public class PayServiceImpl implements PayService {

	@Autowired
	private PayRepo payrepo;
	
	@Autowired
	private BookingSlotRepo bookSlotRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public PaymentDto makePayment(PaymentDto payDto) {
		Payment pay=this.modelMapper.map(payDto, Payment.class);
		Payment paymDto=this.payrepo.save(pay);
		return this.modelMapper.map(paymDto, PaymentDto.class);
	}

//	@Override
//	public void PaymentProcessFail(BookingSlot bookslot, String usr) throws Exception {
//		
//		Map<BookingSlot,Integer> PaymentFailure=new HashMap<>();
//		int allowedTries=15;
//		
//		if(!bookslot.getVehicleOwner().equals(usr)) {
//			throw new Exception();
//		}
//		
//		if(!PaymentFailure.containsKey(bookslot)) {
//			PaymentFailure.put(bookslot, 0);
//		}
//		
//		int payFailCount=PaymentFailure.get(bookslot);
//		int newPayFailCount=payFailCount+1;
//		PaymentFailure.put(bookslot, newPayFailCount);
//		
//		if(newPayFailCount > allowedTries) {
//			this.bookSlotRepo.deleteById(bookslot.getBookId());
//		}
//	}

	

}
