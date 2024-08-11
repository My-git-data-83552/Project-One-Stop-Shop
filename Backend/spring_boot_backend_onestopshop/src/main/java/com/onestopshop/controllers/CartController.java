package com.onestopshop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.onestopshop.entities.Order;
import com.onestopshop.entities.Product;
import com.onestopshop.entities.User;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;
import com.onestopshop.services.CartService;
import com.onestopshop.services.ProductService;
import com.onestopshop.services.UserService;

@RestController
@RequestMapping("/buyer/cart")
public class CartController {

    @Autowired
    private CartService cartService;
    @Autowired
    private UserService userService;
    @Autowired
    private ProductService productService;

    @PostMapping("/add/{productId}")
    public ResponseEntity<?> addProductToCart(@PathVariable Long productId, @RequestParam Long userId) {
        // Retrieve user and product by their IDs (assuming you have methods for that)
        User user = userService.getUserById(userId)
        		.orElseThrow(()->new ResourceNotFoundException("User ID Invalid"));
        Product product = productService.getProductById(productId)
        		.orElseThrow(()->new ResourceNotFoundException("ID Invalid"));

        return ResponseEntity.status(HttpStatus.CREATED).body(cartService.addProductToCart(user, product));
    }
    
    @PostMapping("/purchase")
    public String purchaseAllProducts(@RequestParam Long userId) {
        User user = userService.getUserById(userId)
        		.orElseThrow(()->new ResourceNotFoundException("User ID Invalid"));
        Order order = cartService.purchaseAllProductsFromCart(user);
        return "Order placed with ID: " + order.getId();
    }
}
