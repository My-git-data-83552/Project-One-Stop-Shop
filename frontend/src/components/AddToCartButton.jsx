import React from 'react';
import { addProductToCart } from '../services/CartService';
import { toast } from 'react-toastify';


const AddToCartButton = ({ productId, userId, quantity }) => {
    // debugger;
    const handleAddToCart = async () => {
        const cartItemDTO = {
            productId: productId,
            userId: userId,
            quantity: quantity,
        };

        try {
            const response = await addProductToCart(cartItemDTO);
            console.log('response of axios response - ',response);
            toast.success('Product added to your Cart')
            // Optionally, update the UI or redirect
        } catch (error) {
            console.error("Error adding product to cart:", error.response.data);
            toast.error("Failed to add product to cart. Please try again.");
        }
    };

    return (
        <button className="btn btn-warning mb-3 mt-3" onClick={handleAddToCart} style={{
            borderRadius:'100px',
            

        }}>
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
