import React from 'react';
import { addProductToCart } from '../services/CartService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const AddToCartButton = ({ productId, userId, quantity }) => {
    // debugger;
    const token=sessionStorage.getItem("token");
    const role=sessionStorage.getItem("role");
    const handleAddToCart = async () => {
        const cartItemDTO = {
            productId: productId,
            userId: userId,
            quantity: quantity,
        };
        
        if(token==null)
            toast.warn("You should login first");
        else if(role!='ROLE_BUYER')
            toast.warn("...Login as a Buyer")
          else{     

        try {
            const response = await addProductToCart(cartItemDTO);
            //console.log('response of axios response - ',response);
            toast.success('Product added to your Cart')
        } catch (error) {
            console.error("Error adding product to cart:", error.response.data);
            toast.error("Failed to add product to cart. Please try again.");
        }
    }
    };

    return (
        <Link className="button-gold mb-3 mt-3" onClick={handleAddToCart}>
            Add to Cart
        </Link>
    );
};

export default AddToCartButton;
