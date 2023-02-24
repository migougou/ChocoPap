import React from 'react';
import Chocolats from './Chocolats';
import '../CSS/Boutique.css'

const Boutique = ({ products }) => {
    return (
        <div>
            <ul className='listStyle row'>
                {products.map((product) => (
                    <Chocolats product={product} />
                ))}
            </ul>
        </div>
    );
};

export default Boutique;