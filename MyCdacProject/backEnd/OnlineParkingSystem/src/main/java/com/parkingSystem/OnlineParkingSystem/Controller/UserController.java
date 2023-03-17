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

import com.parkingSystem.OnlineParkingSystem.Entitydto.UserDto;
import com.parkingSystem.OnlineParkingSystem.Service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/createUsr")
	public ResponseEntity<?> createUser(@RequestBody UserDto userDto){
		
//		UserDto newUserDto =userService.createUser(userDto);
//		return new ResponseEntity<>(newUserDto,HttpStatus.CREATED);
		 try {
		userService.createUser(userDto);
		return new ResponseEntity<>(Map.of("message","user created sucessfully"),HttpStatus.CREATED);
		 }catch (Exception e){
			 System.out.print("message : "+e);
		 }
		return  new ResponseEntity<>(Map.of("message","User creation failed"),HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/createEmp")
	public ResponseEntity<?> createEmploye(@RequestBody UserDto userDto){
		
//		UserDto newEmpDto = userService.createEmploy(userDto);
//		return new ResponseEntity<>(newEmpDto,HttpStatus.CREATED);
		 try {
			 userService.createEmploy(userDto);
		return new ResponseEntity<>(Map.of("message","Employee created sucessfully"),HttpStatus.CREATED);
		 }catch (Exception e){
			 System.out.print("message : "+e);
		 }
		return  new ResponseEntity<>(Map.of("message","Employee already exists for this empId"),HttpStatus.BAD_REQUEST);
	}

	@PutMapping("/updateUsr/{userId}")
	public ResponseEntity<UserDto> UpdateUser(@RequestBody UserDto userDto, @PathVariable int userId){
		
		UserDto updatedUser=userService.updateUser(userDto, userId);		
		return ResponseEntity.ok(updatedUser);	
	}
	
	@DeleteMapping("/delUsr/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable("userId") int uid){
		
		userService.deleteUser(uid);
		return new ResponseEntity<>(Map.of("message","UserDeleted Successfully"),HttpStatus.OK);	
	}
	
	@GetMapping("/singleUsr/{userId}")
	public ResponseEntity<UserDto> getSingleUser(@PathVariable int userId){
		UserDto singleUser=userService.getUserById(userId);
		return ResponseEntity.ok(singleUser);
	}
	
	@GetMapping("/AllUsr/")
	public ResponseEntity<List<UserDto>> fetchAllUser(){
	    List<UserDto> allDtoUser=userService.getAllUsers();
		return ResponseEntity.ok(allDtoUser);
	}
}
