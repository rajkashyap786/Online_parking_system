package com.parkingSystem.OnlineParkingSystem.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parkingSystem.OnlineParkingSystem.Entitydto.BookingSlotDto;
import com.parkingSystem.OnlineParkingSystem.Service.BookingSlotService;

@RestController
@RequestMapping("Booking")
public class BookingSlotController {

	@Autowired
	BookingSlotService bookingSlotService;
	
	@PostMapping("/CreateBook/user/{userId}/parkPlace/{parkId}")
	public ResponseEntity<?> CreateBooking(@RequestBody BookingSlotDto bookingSlotDto,@PathVariable int userId,@PathVariable int parkId){
		try {
		this.bookingSlotService.Booking(bookingSlotDto,userId,parkId);
		return new ResponseEntity<>(Map.of("message","Booking Successfull"),HttpStatus.CREATED);
		}
		catch(Exception e) {
			System.out.println("message"+e.getMessage());
		}
		return new ResponseEntity<>(Map.of("message","The slot is already booked"),HttpStatus.BAD_REQUEST);
	}
	
	@PutMapping("/EditBookDetails/{BookID}")
	public ResponseEntity<?> EditbookingDetails(@RequestBody BookingSlotDto bookingSlotDto, @PathVariable int BookID){
		  this.bookingSlotService.UpdateBookingDetails(bookingSlotDto, BookID);
		  return new ResponseEntity<>(Map.of("message","Booking Details Updated Sucessfully"),HttpStatus.OK);
	}
	
	@GetMapping("/fetchSingleBooking/{bookId}")
	public ResponseEntity<BookingSlotDto> SingleBookingDetail(@PathVariable int bookId){
	
	BookingSlotDto fetchBooking=this.bookingSlotService.ViewBookedDetails(bookId);
		return new ResponseEntity<BookingSlotDto>(fetchBooking,HttpStatus.OK);
	}
	
	@GetMapping("/fetchAllBooking")
	public ResponseEntity<List<BookingSlotDto>> fetchAllBooking(){
		List<BookingSlotDto> bookDto=this.bookingSlotService.FetchAllBooking();
		return new ResponseEntity<List<BookingSlotDto>>(bookDto,HttpStatus.OK);
	}
	
	@GetMapping("/fetchAll/{userId}")
	public ResponseEntity<List<BookingSlotDto>> getAllBookingbyUsrid(@PathVariable int userId){
		List<BookingSlotDto> bookDto=this.bookingSlotService.getBookingByUser(userId);
		return new ResponseEntity<List<BookingSlotDto>>(bookDto,HttpStatus.OK);
	}
	
	@DeleteMapping("/bookingCancel/{bookId}")
	public ResponseEntity<?> BookingCancellation(@PathVariable int bookId) {
		
		this.bookingSlotService.CancelBooking(bookId);
		return new ResponseEntity<>(Map.of("message","Deleted Successfully"),HttpStatus.OK);
	}
}
