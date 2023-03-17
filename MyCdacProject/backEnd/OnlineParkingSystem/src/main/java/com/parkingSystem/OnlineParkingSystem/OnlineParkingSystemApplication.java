package com.parkingSystem.OnlineParkingSystem;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class OnlineParkingSystemApplication{
	
	public static void main(String[] args) {
		SpringApplication.run(OnlineParkingSystemApplication.class, args);
	}
	
	@Bean
	public ModelMapper modelMap() {
		return new ModelMapper();	
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry reg) {
				reg.addMapping("/**")                  
				   .allowedOrigins("http://localhost:3000")
				   .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
				   .allowedHeaders("*")
	               .allowCredentials(true).maxAge(3600);
			}
		};
		
	}

}
