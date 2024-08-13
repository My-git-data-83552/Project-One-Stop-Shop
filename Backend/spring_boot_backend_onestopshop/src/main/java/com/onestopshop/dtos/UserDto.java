package com.onestopshop.dtos;

import com.onestopshop.entities.Role;
import com.onestopshop.entities.User;

import lombok.Data;

@Data
public class UserDto {
	private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Role role;

    public UserDto(User user) {
    	this.id=user.getId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.role = user.getRole();
    }
}
