'use client';
import { useState } from 'react';
import Dimensions from './Dimensions';
import Units from './Units';
import converterData from '../data/data.json';

const Converter = () => {
    const [selectedDimension, setSelectedDimension] = useState('length');
    const [selectedUnit1, setSelectedtUnit1] = useState('');
    const [selectedUnit2, setSelectedtUnit2] = useState('');

    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');

    const handleDimensionChange = (dimension) => {
        setSelectedDimension(dimension);
    };

    const handleUnitChange = (unit, unitNumber) => {
        unitNumber === 1 ? setSelectedtUnit1(unit) : setSelectedtUnit2(unit);
        console.log('selected unit:', selectedUnit1);
    };

    const handleInputChange = (e, inputNumber) => {
        const value = e.target.value;
        if (inputNumber === 1) {
            setInput1Value(value);
            setInput2Value(convertValue(value));
        } else if (inputNumber === 2) {
            setInput2Value(value);
            setInput1Value(convertValue(value));
        }
    };

    const convertValue = (value) => {
        const conversionRatio =
            converterData[selectedDimension].units[selectedUnit1]
                .conversion_ratio /
            converterData[selectedDimension].units[selectedUnit2]
                .conversion_ratio;

        return parseFloat(value) * conversionRatio;
    };

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-bold text-center uppercase mb-5'>
                Unit Converter
            </h1>
            <Dimensions onSelectDimension={handleDimensionChange} />

            <div className='flex md:flex-row flex-col gap-2 justify-center items-center'>
                <div className='flex flex-col'>
                    <input
                        type='text'
                        className='input input-bordered text-right'
                        onChange={(e) => handleInputChange(e, 1)}
                        value={input1Value}
                    />
                    <Units
                        dimension={selectedDimension}
                        defaultUnit='0'
                        onSelectUnit={handleUnitChange}
                    />
                </div>

                <span className='text-2xl font-bold text-base-content'>=</span>

                <div className='flex flex-col'>
                    <input
                        type='text'
                        className='input input-bordered text-right'
                        onChange={(e) => handleInputChange(e, 2)}
                        value={input2Value}
                    />
                    <Units
                        dimension={selectedDimension}
                        defaultUnit='1'
                        onSelectUnit={handleUnitChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Converter;
