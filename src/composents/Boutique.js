import React, { useState } from 'react';
import Chocolats from './Chocolats';
import '../CSS/Boutique.css';

function Boutique({ products }) {

    const [isOpenCategories, setIsOpenCategories] = useState(false);
    const [isOpenPrix, setIsOpenPrix] = useState(false);
    const [isOpenNotes, setIsOpenNotes] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(30);
    const [selectedNoteMin, setSelectedNoteMin] = useState(0);
    const [selectedNoteMax, setSelectedNoteMax] = useState(5);



    const options = [
        { id: 1, name: 'Tous' },
        { id: 2, name: 'Chocolat blanc' },
        { id: 3, name: 'Chocolat au lait' },
        { id: 4, name: 'Chocolat noir' },
        { id: 5, name: 'Noix/Noisette' },
        { id: 6, name: 'Fruits' },
        { id: 7, name: 'Caramel' },
        { id: 8, name: 'Liqueur' },
    ];

    const toggleMenuCategories = () => {
        setIsOpenCategories(!isOpenCategories);
    };

    const toggleMenuPrix = () => {
        setIsOpenPrix(!isOpenPrix);
    };

    const toggleMenuNotes = () => {
        setIsOpenNotes(!isOpenNotes);
    };

    const handleOptionClick = (option) => {
        const selectedIndex = selectedOptions.indexOf(option.id);
        let newSelectedOptions = [];

        if (selectedIndex === -1) {
            newSelectedOptions = [...selectedOptions, option.id];
        } else if (selectedIndex === 0) {
            newSelectedOptions = [...selectedOptions.slice(1)];
        } else if (selectedIndex === selectedOptions.length - 1) {
            newSelectedOptions = [...selectedOptions.slice(0, -1)];
        } else if (selectedIndex > 0) {
            newSelectedOptions = [
                ...selectedOptions.slice(0, selectedIndex),
                ...selectedOptions.slice(selectedIndex + 1),
            ];
        }

        setSelectedOptions(newSelectedOptions);
    };

    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        if (name === 'minPrice') {
            setMinPrice(Number(value));
        } else {
            setMaxPrice(Number(value));
        }
    };

    const handleNoteMinChange = (event) => {
        setSelectedNoteMin(event.target.value);
    };

    const handleNoteMaxChange = (event) => {
        setSelectedNoteMax(event.target.value);
    };




    return (
        <div className='row'>
            <div className='col-sm-3'>
                <div className='shadow'>
                    <h1>FILTRE</h1>
                    <div className="dropdown">
                        <div className="dropdown-toggle" onClick={toggleMenuCategories}>
                            Catégories {isOpenCategories ? "-" : "+"}
                        </div>
                        {isOpenCategories && (
                            <div className="dropdown-option">
                                {options.map((option) => (
                                    <div className="dropdown-option" key={option.id}>
                                        <input
                                            type="checkbox"
                                            id={`option${option.id}`}
                                            value={option.id}
                                            checked={selectedOptions.includes(option.id)}
                                            onChange={() => handleOptionClick(option)}
                                        />
                                        <label htmlFor={`option${option.id}`}>{option.name}</label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="dropdown">
                        <div className="dropdown-toggle" onClick={toggleMenuPrix}>
                            Prix {isOpenPrix ? "-" : "+"}
                        </div>
                        {isOpenPrix && (
                            <div className="dropdown-option">
                                <div className="dropdown-option">
                                    <label htmlFor="minPrice">Prix min</label>
                                    <input type="number" name="minPrice" value={minPrice} onChange={handlePriceChange} />
                                </div>
                                <div className="dropdown-option">
                                    <label htmlFor="maxPrice">Prix max</label>
                                    <input type="number" name="maxPrice" value={maxPrice} onChange={handlePriceChange} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="dropdown">
                        <div className="dropdown-toggle" onClick={toggleMenuNotes}>
                            Notes {isOpenNotes ? "-" : "+"}
                        </div>
                        {isOpenNotes && (
                            <div className="dropdown-option">
                                <div className="dropdown-option">
                                    <label htmlFor="noteMin">Note min :</label>
                                    <select name="Notes" id="Notes" onChange={handleNoteMinChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="dropdown-option">
                                    <label htmlFor="noteMax">Note max :</label>
                                    <select name="Notes" id="Notes" onChange={handleNoteMaxChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ul className='listStyle row col-sm-9'>
                {products
                    .filter(product => product.price >= minPrice && product.price <= maxPrice)
                    .filter(product => product.note >= selectedNoteMin && product.note <= selectedNoteMax)

                    .map((product) => (
                        <Chocolats product={product} />
                    ))}
            </ul>

        </div>
    );
};

export default Boutique;