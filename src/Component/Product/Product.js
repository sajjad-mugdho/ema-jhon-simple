import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    const { name, img, seller, price, ratings } = props.product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'>
                <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></p>
            </button>
        </div>
    );
};

export default Product;