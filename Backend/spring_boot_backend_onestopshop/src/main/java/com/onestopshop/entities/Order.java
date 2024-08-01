package com.onestopshop.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends BaseEntity {


	@Column(name = "order_date")
	private LocalDate orderDate;

	@Column(name = "status")
	private String status;

	@Column(name = "total")
	private double total;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
}
