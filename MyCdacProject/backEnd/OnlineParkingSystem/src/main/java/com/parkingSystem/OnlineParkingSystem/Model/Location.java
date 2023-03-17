package com.parkingSystem.OnlineParkingSystem.Model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Table(name="Location")
@Getter
@Setter
@NoArgsConstructor
public class Location {

	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int locationId;
	private String locationName;
	private String description;
	private String imgeName;
	
	
	@OneToMany(targetEntity=ParkingPlace.class, mappedBy="location",fetch=FetchType.EAGER)
	private Set<ParkingPlace> parkingPlaces=new HashSet<>();

}
