import React from 'react';
import '../CSS/Panier.css';
import { ImCross } from 'react-icons/im'
import ItemPanier from './ItemPanier';



const Panier = ({ unsetDisplayPanier, products, cart, updateQty, deleteToItem, deleteItem, subTotal }) => {


    return (
        <div className='position-absolute col-12 col-sm-6 offset-sm-6'>
            <div className='bg-primary'>
                <ImCross className='m-2 p-1 border border-2 rounded border-dark btnClose' onClick={unsetDisplayPanier} />
                <h2 className='text-center pb-5 mb-0'>PANIER</h2>
            </div>
            <ul className='bg-secondary m-0'>
                {cart.map(cartItem => {
                    products.find(product => product.id === cartItem);
                    return (<ItemPanier key={cartItem.id} products={products} cartItem={cartItem} updateQty={updateQty} deleteToItem={deleteToItem} />);
                })}
            </ul>
            <div className='bg-primary'>
                <h4 className='text-center py-3'>TOTAL = {subTotal} €</h4>
                <button className='my-2 btnPanier' onClick={() => deleteItem()}>REINITIALISER LE PANIER</button>
                <button className='my-2 btnPanier'>VALIDER LE PANIER</button>
            </div>
        </div>

    );
};

export default Panier;