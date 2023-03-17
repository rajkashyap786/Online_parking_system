package com.parkingSystem.OnlineParkingSystem.Service;

import java.util.List;

import com.parkingSystem.OnlineParkingSystem.Entitydto.BookingSlotDto;

public interface BookingSlotService {
	
	BookingSlotDto Booking(BookingSlotDto bookingslotDto,int userId,int parkPlaceid) throws Exception;
    boolean LockBookedSlot(int bookingId);
    int totalParkTime(int bookingTime, int exitTime);
	int settingVehicleAmount(String vehicleType);
	BookingSlotDto UpdateBookingDetails(BookingSlotDto bookingslotDto,int bookingID);
	BookingSlotDto ViewBookedDetails(int bookingID);
	 List<BookingSlotDto> getBookingByUser(int userId);
	List<BookingSlotDto> FetchAllBooking();
    void CancelBooking(int bookingID);
    
}
