import React, { useState, useEffect } from 'react';
import { ImCross } from 'react-icons/im';
import '../CSS/ItemPanier.css';


const ItemPanier = ({ products, cartItem, updateQty, deleteToItem }) => {

    const [idProduct, setIdProduct] = useState(0)

    useEffect(() => {
        setIdProduct(cartItem.id - 1)
    }, [cartItem])

    if (cartItem.qty === 0) deleteToItem(products[idProduct].id)


    return (
        <li className='row text-center'>
            <div className='col-1'>
                <ImCross className='croix' onClick={() => deleteToItem(products[idProduct].id)} />
            </div>
            <div className='col-4'>
                <img className='imgPanier' src={products[idProduct].image} alt={products[idProduct].title} />
            </div>
            <div className='col-4'>
                <span>{products[idProduct].title}</span><br />
                <span>{products.price} €</span>
            </div>
            <div className='col-3'>
                <input type="number" className='col-10 inputCase' value={cartItem.qty} onChange={(e) => updateQty(products[idProduct].id, Number(e.target.value))} />
            </div>
        </li>
    );
};

export default ItemPanier;