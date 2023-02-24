import React from 'react';
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';

//Footer écris classiquement avec du bootstrap, les logos des RS sont importés avec react-icons//

const Footer = () => {
    return (
        <footer className='bg-primary'>
            <div className='row mx-3'>
                <div className='col-sm-3 mt-sm-4'>
                    <h1 className='mb-3 pt-3 pt-sm-0'>Choco Pap</h1>
                    <p className='col-8 py-sm-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum corrupti soluta similique ipsa. Quibusdam eum molestiae rerum autem totam?</p>
                </div>
                <div className='col-sm-3'>
                    <h1 className='mb-5 mt-4 mb-sm-3'>Contact</h1>
                    <p className='lh-1 my-1 pt-sm-4'>Adresse : 51 rue du chocolat 75000 Paris</p>
                    <p className='lh-1 my-1'>T&eacute;l&eacute;phone : 01 23 45 67 89</p>
                    <p className='lh-1 my-1'>Horaires : 9h00-17h00 du Lundi au Vendredi</p>
                </div>
                <div className='mt-5 pb-5 col-sm-3 pt-sm-5 offset-sm-3'>
                    <span className='me-3'><ImFacebook2 size='50' /></span>
                    <span className='mx-3'><BsInstagram size='50' /></span>
                    <span className='mx-3'><FaTwitterSquare size='50' /></span>
                </div>
            </div>

        </footer >
    );
};

export default Footer;

