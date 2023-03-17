package com.parkingSystem.OnlineParkingSystem.Controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Map;

//import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.parkingSystem.OnlineParkingSystem.Entitydto.LocationDto;
import com.parkingSystem.OnlineParkingSystem.Service.LocationService;

@RestController
@RequestMapping("/location")
public class LocationController {

	@Autowired
	private LocationService locService;
	
	@Autowired
	private ObjectMapper mapper;
	
        @PostMapping("/creatLocation")
    	public ResponseEntity<?> createLocation(@RequestParam(value = "file") MultipartFile file,@RequestParam String loc1,@RequestParam String loc){	
        	String pathDir="E:\\CdacProject\\backEnd\\OnlineParkingSystem\\src\\main\\resources\\static\\images";
    	   	
//    	converting a string into json
//    	LocationDto ldto=new LocationDto();
    	try {
    		System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    		System.out.println(loc1);
    		System.out.println(loc);
    		System.out.println("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    		Files.copy(file.getInputStream(), Paths.get(pathDir+File.separator+file.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
    	     LocationDto locDto= new LocationDto(loc1,loc);// mapper.readValue(loc1, LocationDto.class);
    	     locDto.setImgeName("http://localhost:8080/images/"+file.getOriginalFilename());
    	     System.out.println(locDto.toString());
    	     locService.createloc(locDto);
    	}
     	catch(Exception e) {

         		System.out.print("message"+e.getMessage());	
    	}
//    	      LocationDto ldto=this.locService.createloc(locDto);
		return new ResponseEntity<>(Map.of("message","Location Registeration Successfull"),HttpStatus.CREATED);
	}
    
    
//    public ResponseEntity<List<LocationDto>> fetchAllLoc(HttpServletRequest req){
//    	System.out.println("line"+req.getHeader("Authorization"));
//	List<LocationDto> locDto=this.locService.getAllLocation(req.getHeader("Authorization")); 
     
    @GetMapping("/getAllLocation")
    public ResponseEntity<List<LocationDto>> fetchAllLoc(){
    	List<LocationDto> locDto=this.locService.getAllLocation(); 
    	return new ResponseEntity<List<LocationDto>>(locDto,HttpStatus.OK);
    }
    
    @GetMapping("/getSingleLoc/{locID}")
    public ResponseEntity<LocationDto> singleLocation(@PathVariable int locID){
		 LocationDto locdto= this.locService.getSingleLocation(locID);
    	return new ResponseEntity<LocationDto>(locdto,HttpStatus.OK);
    	}
    
    @DeleteMapping("/deleteLoc/{locID}")
    public ResponseEntity<?> deleteLocation(@PathVariable int locID){
		this.locService.deleteLocation(locID);
    	return new ResponseEntity<>(Map.of("message","Location Deleted Sucessfully"),HttpStatus.OK);
    	}
	
}
