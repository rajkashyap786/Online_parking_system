package com.parkingSystem.OnlineParkingSystem.ServiceImpl;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parkingSystem.OnlineParkingSystem.Entitydto.BookingSlotDto;
import com.parkingSystem.OnlineParkingSystem.Model.BookingSlot;
import com.parkingSystem.OnlineParkingSystem.Model.ParkingPlace;
import com.parkingSystem.OnlineParkingSystem.Model.User;
import com.parkingSystem.OnlineParkingSystem.Repository.BookingSlotRepo;
import com.parkingSystem.OnlineParkingSystem.Repository.ParkingPlaceRepo;
import com.parkingSystem.OnlineParkingSystem.Repository.UserRepo;
import com.parkingSystem.OnlineParkingSystem.Service.BookingSlotService;
import com.parkingSystem.OnlineParkingSystem.exception.ResourceNotFoundException;

@Service
public class BookingSlotImpl implements BookingSlotService {

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	ParkingPlaceRepo parkingPlaceRepo;
	
	@Autowired
	private BookingSlotRepo bookSlotRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	@Override
	public BookingSlotDto Booking(BookingSlotDto bookingslotDto,int userId,int parkPlaceid) throws Exception {
		
		  User usr=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","userId",userId));
		  ParkingPlace parkPlace=this.parkingPlaceRepo.findById(parkPlaceid).orElseThrow(()->new ResourceNotFoundException("parkingPlace","parkPlaceid",parkPlaceid));
		   BookingSlot bookslot=this.modelMapper.map(bookingslotDto, BookingSlot.class);
		   
		   if(LockBookedSlot(bookslot.getBookId())) {
			   throw new Exception("This Slot is already Booked");
		   }
		   bookslot.setAddedDate(new Date());
		   bookslot.setAmount(this.settingVehicleAmount(bookingslotDto.getVehicleType()));
		   bookslot.setUser(usr);
		   bookslot.setParkingPlace(parkPlace);
		   BookingSlot slotBooked=this.bookSlotRepo.save(bookslot);
		   return this.modelMapper.map(slotBooked, BookingSlotDto.class);
	}

	@Override
	public boolean LockBookedSlot(int bookingId) {
		
		return this.bookSlotRepo.findBybookId(bookingId) != null ? true : false;
	}
	
	@Override
	public int totalParkTime(int bookingTime, int exitTime) {
//		int timeCounter=0,penality=0;
//		for(int i=bookingTime;i<=exitTime;i++) {
//			timeCounter=timeCounter+1;
//		}
//		if(!timeCounter) {
//			amt=amt+penality;
//		}
		return 0;
	}

	@Override
	public int settingVehicleAmount(String vehicleType) {
		
		int amt=0;
		
		boolean val1=vehicleType.equals("TwoWheeler");
		boolean val2=vehicleType.equals("FourWheeler");
		if(val1== true) {
			amt= 30;
		}
		else if(val2== true) {
		amt= 60;
		}
		else {
			amt=0;
		}
		return amt;
	}
	
	@Override
	public BookingSlotDto UpdateBookingDetails(BookingSlotDto bookingslotDto, int bookingID) {
		
		BookingSlot fetchBooking=this.bookSlotRepo.findById(bookingID).orElseThrow(()-> new ResourceNotFoundException("BookingSlot","bookingID",bookingID));
		
		fetchBooking.setVehicleOwner(bookingslotDto.getVehicleOwner());;
		fetchBooking.setVehicleName(bookingslotDto.getVehicleName());
		fetchBooking.setVehicleNumber(bookingslotDto.getVehicleNumber());
		fetchBooking.setVehicleType(bookingslotDto.getVehicleType());
		
		BookingSlot updateBookingDetails=this.bookSlotRepo.save(fetchBooking);
		return this.modelMapper.map(updateBookingDetails, BookingSlotDto.class);
	}

	@Override
	public BookingSlotDto ViewBookedDetails(int bookingID) {
		BookingSlot fetchBooking=this.bookSlotRepo.findById(bookingID).orElseThrow(()-> new ResourceNotFoundException("BookingSlot","bookingID",bookingID));
		return this.modelMapper.map(fetchBooking, BookingSlotDto.class);
	}
	
	@Override
	public List<BookingSlotDto> FetchAllBooking() {
	List<BookingSlot> allBooking=this.bookSlotRepo.findAll();
	List<BookingSlotDto> AllBookDto=allBooking.stream().map((booking)->this.modelMapper.map(booking, BookingSlotDto.class)).collect(Collectors.toList());
		return AllBookDto;
	}

	@Override
	public void CancelBooking(int bookingID) {
		
		BookingSlot fetchBooking=this.bookSlotRepo.findById(bookingID).orElseThrow(()-> new ResourceNotFoundException("BookingSlot","bookingID",bookingID));
		this.bookSlotRepo.delete(fetchBooking);
	}

	@Override
	public List<BookingSlotDto> getBookingByUser(int userId) {
		User usr=this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","userId",userId));
		List<BookingSlot> bookslot=this.bookSlotRepo.findByUser(usr);
		List<BookingSlotDto> bookslotdto = bookslot.stream().map((book)->this.modelMapper.map(book, BookingSlotDto.class)).collect(Collectors.toList());
		return bookslotdto;
	}
}
