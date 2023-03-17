package com.parkingSystem.OnlineParkingSystem.security;


import com.parkingSystem.OnlineParkingSystem.Model.User;

import lombok.Data;

@Data
public class JwtAuthResponse {

	
	private String token;
	
    private User user;
	
//this use to return token in response
}
