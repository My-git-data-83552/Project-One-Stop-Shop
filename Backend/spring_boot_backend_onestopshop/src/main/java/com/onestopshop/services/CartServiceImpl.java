package com.onestopshop.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onestopshop.daos.CartRepository;
import com.onestopshop.daos.OrderRepository;
import com.onestopshop.entities.Cart;
import com.onestopshop.entities.Order;
import com.onestopshop.entities.OrderItem;
import com.onestopshop.entities.Product;
import com.onestopshop.entities.Status;
import com.onestopshop.entities.User;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private OrderRepository orderRepository;

//    @Autowired
//    private ProductRepository productRepository;

    @Override
    public Cart getCartByUser(User user) {
        return cartRepository.findByUser(user).orElseGet(() -> {
            Cart cart = new Cart();
            cart.setUser(user);
            return cartRepository.save(cart);
        });
    }

    @Override
    public Cart addProductToCart(User user, Product product) {
        Cart cart = getCartByUser(user);
        cart.getProducts().add(product);
        return cartRepository.save(cart);
    }

    @Override
    public Order purchaseAllProductsFromCart(User user) {
        Cart cart = getCartByUser(user);
        Set<Product> products = cart.getProducts();

        Order order = new Order();
        order.setUser(user);
        order.setStatus(Status.ORDERED);

        double totalAmount = 0;

        for (Product product : products) {
            OrderItem orderItem = new OrderItem();
            orderItem.setProduct(product);
            orderItem.setQuantity(1); // assuming 1 for simplicity
            orderItem.setTotalPrice(product.getPrice());
            order.addOrderItem(orderItem);

            totalAmount += product.getPrice();
        }

        order.setTotalAmount(totalAmount);
//        order.setBillingAddress(); // assuming user has an address field

        cart.getProducts().clear();
        cartRepository.save(cart);
        return orderRepository.save(order);
    }
}
