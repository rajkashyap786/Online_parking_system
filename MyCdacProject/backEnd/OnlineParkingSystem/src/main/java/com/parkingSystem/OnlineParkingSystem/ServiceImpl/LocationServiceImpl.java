package com.parkingSystem.OnlineParkingSystem.ServiceImpl;

import java.util.List;
import java.util.ListIterator;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parkingSystem.OnlineParkingSystem.Entitydto.LocationDto;
import com.parkingSystem.OnlineParkingSystem.Model.Location;
import com.parkingSystem.OnlineParkingSystem.Repository.LocationRepo;
import com.parkingSystem.OnlineParkingSystem.Service.LocationService;
import com.parkingSystem.OnlineParkingSystem.exception.ResourceNotFoundException;

@Service
public class LocationServiceImpl implements LocationService {

	@Autowired
	LocationRepo locationRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public LocationDto createloc(LocationDto locDto) {
		Location loc=this.modelMapper.map(locDto, Location.class);
		Location locationdto=this.locationRepo.save(loc);
		return this.modelMapper.map(locationdto, LocationDto.class);
		
	}

	@Override
	public LocationDto getSingleLocation(int locId) {
		Location loc=this.locationRepo.findById(locId).orElseThrow(()-> new ResourceNotFoundException("Location","locationId",locId));
		return this.modelMapper.map(loc, LocationDto.class);	
	}

	@Override
//	public List<LocationDto> getAllLocation(String token) {
		public List<LocationDto> getAllLocation() {
		List<Location> allLoc=this.locationRepo.findAll();
		List<LocationDto> allLocDto= allLoc.stream().map((loc)->this.modelMapper.map(loc, LocationDto.class)).collect(Collectors.toList());
		
//		for (final ListIterator<LocationDto> i = allLocDto.listIterator(); i.hasNext();) {
//			  LocationDto o1=i.next();
////			String ImgeName= o1.getImgeName()+"?Authorization="+token;
////			o1.setImgeName(ImgeName);
//			}
		
		return allLocDto;
	}

	@Override
	public void deleteLocation(int locationID) {
		Location loc=this.locationRepo.findById(locationID).orElseThrow(()-> new ResourceNotFoundException("Location","locationId",locationID));
		this.locationRepo.delete(loc);
	}

	

}
