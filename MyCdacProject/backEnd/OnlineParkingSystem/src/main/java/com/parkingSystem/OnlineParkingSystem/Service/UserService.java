package com.parkingSystem.OnlineParkingSystem.Service;

import java.util.List;

import com.parkingSystem.OnlineParkingSystem.Entitydto.UserDto;

public interface UserService {

	UserDto createUser(UserDto userDto) throws Exception;
	UserDto createEmploy(UserDto userDto) throws Exception;
	 boolean checkIfUserExist(String username);
	UserDto updateUser(UserDto user,int userId );
	UserDto getUserById(int userId);
	List<UserDto> getAllUsers();
	void deleteUser(int userId);
}
