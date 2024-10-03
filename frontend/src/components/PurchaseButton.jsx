import React from 'react';
import { purchaseAllProducts } from '../services/CartService';

const PurchaseButton = ({ userId }) => {
    const handlePurchase = async () => {
        try {
            const response = await purchaseAllProducts(userId);
            alert(response.data);
            
        } catch (error) {
            console.error("Error purchasing products:", error.response.data);
            alert("Failed to purchase products. Please try again.");
        }
    };

    return (
        <button className="btn btn-primary" onClick={handlePurchase}>
            Purchase All Products
        </button>
    );
};

export default PurchaseButton;
