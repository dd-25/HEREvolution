import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

function FormUser() {

    const [cities, setcities, inprange, setinprange, sectors, setsectors, preferences, setpreferences, air, setair, water, setwater,land,setland,rainfall,setrainfall] = useContext(UserContext);
    const handelsubmit = () => {
        // console.log(cities)
        // console.log(sectors)
        // console.log(inprange)
        // console.log(preferences)
        console.log(water)
    }
    const handleSectorChange = (e) => {
        setsectors(e.target.value);
    };

    const handleCityChange = (e) => {
        setcities(e.target.value);
    };

    const handleRangeChange = (e) => {
        setinprange(e.target.value)
    };

    const handleCheckboxChange = (e, value) => {
        if (e.target.checked) {
            setpreferences([...preferences, value]);
        }
        else {
            setpreferences(preferences.filter((item) => item !== value));
        }
    };

    return (
        <>
            <div className='formouter'>
                <form action="" className='formforinput'>
                    {/* <div className='industryouter'>
                        <div>Select Industry</div>
                        <select name="sectors" id="sectors" className='locpreferences' value={sectors} onChange={handleSectorChange}>

                            <option value="Agriculture">Food Based</option>
                            <option value="Automotive">Automotive Based</option>
                            <option value="Chemical">Automotive Based</option>
                            <option value="Food">Automotive Based</option>
                            <option value="Mining">Mining</option>
                            <option value="Tech Parks">Automotive Based</option>
                            <option value="Textile">Textile Based</option>

                        </select>
                    </div>
                    <div className='citesouter'>
                        <div>Select Cities</div>
                        <select name="cities" id="cities" className='cities' value={cities} onChange={handleCityChange}>
                            <option value="Delhi">Delhi</option>
                            <option value="Bombay">Bombay</option>
                            <option value="Pune">Pune</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Chennai">Chennai</option>
                        </select>
                    </div>
                    <div className='approximatearea'>
                        <div>Approximate Area</div>
                        <input
                            type="range"
                            id="area"
                            name="area"
                            min="0"
                            max="1000"
                            value={inprange}
                            step="10"
                            className='area'
                            onChange={handleRangeChange}
                        />
                    </div> */}
                    <div className='preferencesouter'>
                        <div className='preferenceheading'>Select the preferences</div>
                        <div className='foroptions'>
                        <label className='optionscheck' style={{ color: 'black' }}>
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    if (e.target.checked) {

                                        setwater(true)

                                    }
                                    else {

                                        setwater(false)
                                    }
                                }}
                            />
                            Water
                        </label>
                        <label className='optionscheck' style={{ color: 'black' }}>
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    if (e.target.checked) {

                                        setair(true)

                                    }
                                    else {

                                        setair(false)
                                    }
                                }}
                            />
                            Air
                        </label>
                        <label className='optionscheck' style={{ color: 'black' }}>
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    if (e.target.checked) {

                                        setland(true)

                                    }
                                    else {

                                        setland(false)
                                    }
                                }}
                            />
                            Land
                        </label>
                        <label className='optionscheck' style={{ color: 'black' }}>
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    if (e.target.checked) {

                                        setrainfall(true)

                                    }
                                    else {

                                        setrainfall(false)
                                    }
                                }}
                            />
                            Rainfall
                        </label>
                        </div>

                        {/* <label className='' style={{ color: 'black' }}>
    <input
        type="checkbox"
        onChange={(e) => handleCheckboxChange(e, 'landQuality')}
    />
    Land Quality
</label> */}

                    </div>
                    {/* <button onClick={(e) => {
                        handelsubmit()
                        e.preventDefault()
                    }}>Submit</button> */}
                </form>
            </div>
        </>
    );
}

export default FormUser;
