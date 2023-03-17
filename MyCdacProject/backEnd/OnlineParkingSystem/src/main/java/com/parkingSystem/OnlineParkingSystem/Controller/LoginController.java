 package com.parkingSystem.OnlineParkingSystem.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parkingSystem.OnlineParkingSystem.Model.User;
import com.parkingSystem.OnlineParkingSystem.Repository.UserRepo;
import com.parkingSystem.OnlineParkingSystem.security.JwtAuthRequest;
import com.parkingSystem.OnlineParkingSystem.security.JwtAuthResponse;
import com.parkingSystem.OnlineParkingSystem.security.JwtTokenHelper;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
    private JwtTokenHelper jwtTokenHelper;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/usr")
	public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception{
		
		this.authenticate(request.getUsername(),request.getPassword());
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
		User usr=this.userRepo.findByUsername(request.getUsername());
//	 	System.out.println("userdetails:"+userDetails);
		 String token = this.jwtTokenHelper.generateToken(userDetails);
	
		 JwtAuthResponse response=new JwtAuthResponse();
		 response.setToken(token);
		 response.setUser(usr);
		 return new ResponseEntity<JwtAuthResponse>(response,HttpStatus.OK);
		
	}

	private void authenticate(String username, String password) throws Exception {
		
		UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(username,password);
		try {
		this.authenticationManager.authenticate(authenticationToken);
		}
		catch(BadCredentialsException e) {
			System.out.println("Invalid Details"+ e);
			throw new Exception("Invalid username and password");
         
		}
	}

}
