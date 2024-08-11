package com.onestopshop.services;

import com.onestopshop.entities.Cart;
import com.onestopshop.entities.Order;
import com.onestopshop.entities.Product;
import com.onestopshop.entities.User;

public interface CartService {
    Cart getCartByUser(User user);
    Cart addProductToCart(User user, Product product);
    Order purchaseAllProductsFromCart(User user);
}
