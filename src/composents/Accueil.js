import React, { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight, FaBullseye, FaGenderless } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../CSS/Accueil.css'


function Accueil() {

    const [imgValue, setImgValue] = useState(1)

    const addOneToNumberProduct = () => {
        if (imgValue !== 3) {
            setImgValue(imgValue + 1)
        } else {
            setImgValue(1)
        }
    }

    const removeOneToNumberProduct = () => {
        if (imgValue === 1) {
            setImgValue(3)
        } else {
            setImgValue(imgValue - 1)
        }
    }

    return (
        <div className="bgimage text-white accueil" style={{
            backgroundImage: `url(./images/accueil${imgValue}.jpg)`,
        }}>
            <h2 className='titleCP'>CHOCO PAP</h2>
            <div className='buttonCP'>
                <span className='col-auto cursor' onClick={removeOneToNumberProduct}><FaChevronCircleLeft size={40} /></span>
                <span className='col-auto cursor' onClick={addOneToNumberProduct}><FaChevronCircleRight size={40} /></span>
            </div>
            <div className='linkCP'>
                <NavLink to="/Boutique" ><span className='fs-4 fw-bold text-white border border-info bg-black bg-opacity-75'>Voir la boutique</span></NavLink>
            </div>
            <div className='selectorCP'>
                <span onClick={() => setImgValue(1)} className="p-2 cursor">{imgValue === 1 ? <FaBullseye size={20} /> : <FaGenderless size={20} />}</span>
                <span onClick={() => setImgValue(2)} className="p-2 cursor">{imgValue === 2 ? <FaBullseye size={20} /> : <FaGenderless size={20} />}</span>
                <span onClick={() => setImgValue(3)} className="p-2 cursor">{imgValue === 3 ? <FaBullseye size={20} /> : <FaGenderless size={20} />}</span>
            </div>
        </div >

    );
};

export default Accueil;