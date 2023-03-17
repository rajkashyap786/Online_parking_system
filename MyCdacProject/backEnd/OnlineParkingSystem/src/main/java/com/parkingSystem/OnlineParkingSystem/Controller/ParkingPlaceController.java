package com.parkingSystem.OnlineParkingSystem.Controller;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.parkingSystem.OnlineParkingSystem.Entitydto.ParkingPlaceDto;
import com.parkingSystem.OnlineParkingSystem.Service.ParkingPlaceService;

@RestController
@RequestMapping("/parking")
//@CrossOrigin("*")
public class ParkingPlaceController {

	@Autowired
	ParkingPlaceService parkingPlaceService;
	
	
    @PostMapping("/creatParkPlace/loc/{locId}/emp/{empId}")
    public ResponseEntity<?> createParkingPlace(@RequestBody ParkingPlaceDto parkPlaceDto,@PathVariable int locId,@PathVariable int empId){
    	this.parkingPlaceService.createParkPlace(parkPlaceDto,locId,empId);
    	return new ResponseEntity<>(Map.of("meassage","created Sucessfully"),HttpStatus.CREATED);
    }
    
    @PutMapping("/updateDetails/{parkplaceID}")
    public ResponseEntity<?> updateParkingDetails(@RequestBody ParkingPlaceDto parkPlaceDto,@PathVariable int parkplaceID){
    	this.parkingPlaceService.UpdateParkingDetails(parkPlaceDto, parkplaceID);
    	return new ResponseEntity<>(Map.of("message","Details Updated Sucessfully"),HttpStatus.OK);
    }
    
    @GetMapping("/getAllparkPlace")
    public ResponseEntity<List<ParkingPlaceDto>> getAllParking(){
	List<ParkingPlaceDto> parkingPlaceDto=this.parkingPlaceService.getAllParkPlace();
    	return new ResponseEntity<List<ParkingPlaceDto>>(parkingPlaceDto,HttpStatus.OK);
    	
    }
    
    @GetMapping("/getAllparkPlaceBaseOnLoc/{LocId}")
    public ResponseEntity<List<ParkingPlaceDto>> getAllparkingBasedOnLoc(@PathVariable int LocId){
	List<ParkingPlaceDto> parkPlaceDto=this.parkingPlaceService.getParkingByLocation(LocId);
    	return new ResponseEntity<List<ParkingPlaceDto>>(parkPlaceDto,HttpStatus.OK);
    	
    }
        
    @DeleteMapping("/deleteParkPlace/{parkingPlaceID}")
    public ResponseEntity<?> deleteParkPlaceDetails(@PathVariable int parkingPlaceID){
		this.parkingPlaceService.deleteParkingPlaceDetails(parkingPlaceID);
    	return new ResponseEntity<>(Map.of("message","Parking details Deleted Sucessfully"),HttpStatus.OK);
    }
    
    @GetMapping("/getSingleParking/{parkId}")
    public ResponseEntity<ParkingPlaceDto> singleParking(@PathVariable int parkId){
    	System.out.println("...............................................................");
    	System.out.println(Integer.valueOf(parkId).toString());
    	ParkingPlaceDto parkdto= this.parkingPlaceService.getSingleParkingDetails(parkId);
    	return new ResponseEntity<ParkingPlaceDto>(parkdto,HttpStatus.OK);
    	}
    
    @GetMapping("/search/{keywords}")
    public ResponseEntity<List<ParkingPlaceDto>> searchParkPlace(@PathVariable String keywords){
    	
    	List<ParkingPlaceDto> searchedPlace= this.parkingPlaceService.searchParkPlace(keywords);
		return new ResponseEntity<List<ParkingPlaceDto>>(searchedPlace,HttpStatus.OK);
    }
}
