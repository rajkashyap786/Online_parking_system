package com.parkingSystem.OnlineParkingSystem.Model;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@NoArgsConstructor
@Getter
@Setter
@Data
public class User implements UserDetails {

       
	private static final long serialVersionUID = 1L;
	
	   @Id
	   @GeneratedValue(strategy= GenerationType.IDENTITY)
	   private int userid;
	   private String name;
	   private String email;
	   private String username;
	   private String password;
	   private int contact;
	   private String address;
	   private String role;
	     
	    
//	   @OneToMany(mappedBy="user",cascade=CascadeType.ALL)
//	   private Set<Contact> contactus=new HashSet<>();
	   
//	   @OneToMany(mappedBy="user",cascade=CascadeType.ALL,fetch=FetchType.EAGER)
//	   private Set<BookingSlot> userBooking=new HashSet<>();
	   

		@Override
		public Collection<? extends GrantedAuthority> getAuthorities() {
		 SimpleGrantedAuthority SGA=new  SimpleGrantedAuthority(this.getRole());
			return List.of(SGA);
		}
	
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	
	@Override
	public boolean isEnabled() {
		return true;
	}
	
}
