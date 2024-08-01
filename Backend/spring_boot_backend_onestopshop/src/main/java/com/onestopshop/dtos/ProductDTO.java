package com.onestopshop.dtos;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ProductDTO {
    private Long id;
    private String productName;
    private String description;
    private double price;
    private int quantity;
    private Long categoryId;
}
