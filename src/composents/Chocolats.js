import React from 'react';
import { NavLink } from 'react-router-dom'
import '../CSS/Chocolats.css'


const Chocolats = ({ product, addProduct }) => {
    return (
        <li className='text-center my-5 col-sm-4'>
            <NavLink to="/PageProduit" state={{ product: product }}>
                <img className='img' src={product.image} alt={product.title} />
                <div>{product.title}</div>
            </NavLink>
            <div>{product.price} €</div>
            <div>Note : {product.note} / 5</div>
            <button onClick={() => addProduct(product.id, 1)} >Ajouter au panier</button>
        </li>

    );
};

export default Chocolats;