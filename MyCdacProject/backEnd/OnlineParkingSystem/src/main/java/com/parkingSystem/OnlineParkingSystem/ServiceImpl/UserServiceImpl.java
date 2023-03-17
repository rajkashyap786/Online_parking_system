package com.parkingSystem.OnlineParkingSystem.ServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.parkingSystem.OnlineParkingSystem.Entitydto.UserDto;
import com.parkingSystem.OnlineParkingSystem.Model.User;
import com.parkingSystem.OnlineParkingSystem.Repository.UserRepo;
import com.parkingSystem.OnlineParkingSystem.SecurityConfig.ProjectConstants;
import com.parkingSystem.OnlineParkingSystem.Service.UserService;
import com.parkingSystem.OnlineParkingSystem.exception.ResourceNotFoundException;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	public UserDto createUser(UserDto userDto) throws Exception {
		
		User user= dtoToUser(userDto);
		
		 if(checkIfUserExist(user.getUsername())){
	            throw new Exception("User already exists for this username");
	        }
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setRole(ProjectConstants.usr);
		User saveUser=userRepo.save(user);
		return userToDto(saveUser);
	}
	
	@Override
	public UserDto createEmploy(UserDto userDto) throws Exception {
		
		User user= dtoToUser(userDto);
		
		 if(checkIfUserExist(user.getUsername())){
	            throw new Exception("User already exists for this username");
	        }
		user.setPassword(passwordEncoder.encode(user.getPassword()));
	        user.setRole(ProjectConstants.emp);
		User saveUser=userRepo.save(user);
		return userToDto(saveUser);
	}
	
	@Override
	 public boolean checkIfUserExist(String username) {
	        return userRepo.findByUsername(username) != null ? true : false;
	    }

	@Override
	public UserDto updateUser(UserDto userDto, int userId) {
	   
		User user = userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));
		
		user.setName(userDto.getName());
		user.setEmail(userDto.getEmail());
		user.setUsername(userDto.getUsername());
		user.setPassword(passwordEncoder.encode(userDto.getPassword()));
		user.setContact(userDto.getContact());
		user.setAddress(userDto.getAddress());
		
		User updatUser=userRepo.save(user);
		UserDto userdto=userToDto(updatUser);
		return userdto;
	}

	@Override
	public UserDto getUserById(int userId) {
		
		User user=userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
		return userToDto(user);
	}

	@Override
	public List<UserDto> getAllUsers() {
	
		List<User> users = userRepo.findAll();
		List<UserDto> AlluserDtos = users.stream().map(user ->this.userToDto(user)).collect(Collectors.toList());
		return AlluserDtos;
	}

	@Override
	public void deleteUser(int userId) {
		
		User user=userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","Id",userId));
		userRepo.delete(user);
	}
	
	public User dtoToUser(UserDto userDto) {
		User user= modelMapper.map(userDto,User.class);
//		user.setId(userDto.getId());
//		user.setName(userDto.getName());
//		user.setEmail(userDto.getName());
//		user.setContact(userDto.getContact());
//		user.setUsername(userDto.getUsername());;
//		user.setPassword(userDto.getPassword());
//		user.setAddress(userDto.getAddress());
		return user;
	}

	public UserDto userToDto(User user) {
		UserDto userDto= modelMapper.map(user,UserDto.class);
//		userDto.setId(user.getId());
//		userDto.setName(user.getName());
//		userDto.setEmail(user.getName());
//		userDto.setContact(user.getContact());
//		userDto.setUsername(user.getUsername());;
//		userDto.setPassword(user.getPassword());
//		userDto.setAddress(user.getAddress());
		return userDto;
	}

}
