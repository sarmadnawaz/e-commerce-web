import React from 'react'
import './ProductCard.styles.scss'

function ProductCard({ imageUrl, price, name, onClick }){
    return (
        <div className='product-card-container'>
            <div className='product-card-image' style={{ backgroundImage : `url(${imageUrl})`}} />
            <div className='product-details-container'>
            <div className='product-details'>
                <p>{name}</p>
                <p>${price}</p>
            </div>
            <button onClick={onClick}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductCard