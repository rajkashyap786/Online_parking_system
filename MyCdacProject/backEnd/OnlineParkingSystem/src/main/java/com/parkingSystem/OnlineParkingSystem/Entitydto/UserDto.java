package com.parkingSystem.OnlineParkingSystem.Entitydto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

	   private int userid;
	   private String name;
	   private String email;
	   private String username;
	   private String password;
	   private int contact;
	   private String address;
	   private String role;
}
