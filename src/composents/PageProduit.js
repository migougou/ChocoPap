import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/PageProduit.css'

const PageProduit = ({ addProduct }) => {

    let location = useLocation();
    let product = location.state.product;

    const [qty, setQty] = useState(0);

    const handleQuantityChange = (event) => {
        setQty(parseInt(event.target.value));
    };


    return (
        <div className='row col-10 offset-1 p-sm-5'>
            <div className='col-sm-6 col-8 ps-sm-5'>
                <h2 className='pt-5 pb-1'>{product.title}</h2>
                <h2 className='py-1'>{product.price} €</h2>
                <div className='py-4'>{product.description}</div>
                <input type="number" className='my-2 case d-block d-sm-inline' min={0} value={qty} onChange={handleQuantityChange} step="1" />
                <button className='my-4 ms-sm-4 caseButton' onClick={() => qty > 0 ? addProduct(product.id, qty) : ''}>AJOUTER AU PANIER</button>
            </div>
            <img src={product.image} alt={product.tilte} className='py-4 col-sm-6 order-sm-first' />
            <div>
                <h4 className='py-3'>Ingrédients</h4>
                <div className='pb-5 pt-3'>{product.ingredients}</div>

            </div>
        </div>
    );
};

export default PageProduit;