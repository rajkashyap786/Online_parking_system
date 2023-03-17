package com.parkingSystem.OnlineParkingSystem.security;


import java.io.Serializable;

import lombok.Data;

@Data
public class JwtAuthRequest implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String username;
	private String password;


}
