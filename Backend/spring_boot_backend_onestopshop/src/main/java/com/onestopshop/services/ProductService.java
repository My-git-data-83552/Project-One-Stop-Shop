package com.onestopshop.services;

import com.onestopshop.dtos.ProductDTO;
import com.onestopshop.entities.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<ProductDTO> getAllProducts();
    Optional<ProductDTO> getProductById(Long id);
    Product saveProduct(ProductDTO productDTO);
    void deleteProduct(Long id);
}
