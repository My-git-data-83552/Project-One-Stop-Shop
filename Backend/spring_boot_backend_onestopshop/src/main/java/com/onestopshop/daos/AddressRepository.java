package com.onestopshop.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.onestopshop.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
