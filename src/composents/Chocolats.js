import React from 'react';
import '../CSS/Chocolats.css'


const Chocolats = ({ product }) => {
    return (
        <li className='text-center my-5 col-sm-4'>
            <img className='img' src={product.image} alt={product.title} />
            <div>{product.title}</div>
            <div>{product.price} €</div>
            <div>Note : {product.note} / 5</div>
            <button>Ajouter au panier</button>
        </li>

    );
};

export default Chocolats;