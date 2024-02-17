'use client';
import { useState, useEffect } from 'react';
import converterData from '../data/data.json';
import {
    DEFAULT_DIMENSION,
    DEFAULT_UNIT_1_INDEX,
    DEFAULT_UNIT_2_INDEX,
} from '../config/constants';
import Dimensions from './Dimensions';
import Units from './Units';

const Converter = () => {
    const [selectedDimension, setSelectedDimension] =
        useState(DEFAULT_DIMENSION);
    const [selectedUnit1, setSelectedUnit1] = useState(DEFAULT_UNIT_1_INDEX);
    const [selectedUnit2, setSelectedUnit2] = useState(DEFAULT_UNIT_2_INDEX);
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');

    useEffect(() => {
        setDefaultUnits();
    }, [selectedDimension]);

    useEffect(() => {
        const baseValue = convertValue(input1Value, selectedUnit1, true);
        setInput2Value(convertValue(baseValue, selectedUnit2, false));
    }, [selectedUnit1, selectedUnit2]);

    const setDefaultUnits = () => {
        setSelectedUnit1(
            converterData[selectedDimension].default[DEFAULT_UNIT_1_INDEX]
        );
        setSelectedUnit2(
            converterData[selectedDimension].default[DEFAULT_UNIT_2_INDEX]
        );
    };

    const convertValue = (value, selectedUnit, toBase = true) => {
        if (value === '') {
            return '';
        }

        const conversionExpression =
            converterData[selectedDimension.toLowerCase()].units[
                selectedUnit.toLowerCase()
            ][toBase === true ? 'conversion_to_base' : 'conversion_from_base'];

        const customEval = new Function(
            'value',
            `return ${conversionExpression}`
        );

        return customEval(parseFloat(value));
    };

    /* HANDLE CHANGE FUNCTION BELOW */

    const handleDimensionChange = (e) => {
        setSelectedDimension(e.target.value);
    };

    const handleInputChange = (e, inputNumber) => {
        const value = e.target.value;
        if (isNaN(value)) {
            return;
        }
        if (value === 0) {
            setInput1Value(0);
            setInput2Value(0);
            return;
        }

        const baseValue = convertValue(
            value,
            inputNumber === 1 ? selectedUnit1 : selectedUnit2,
            true
        );

        const convertedValue = convertValue(
            baseValue,
            inputNumber === 1 ? selectedUnit2 : selectedUnit1,
            false
        );

        setInput1Value(inputNumber === 1 ? value : convertedValue);
        setInput2Value(inputNumber === 1 ? convertedValue : value);
    };

    const handleUnitChange = (e, unitInputNumber) => {
        unitInputNumber === 1
            ? setSelectedUnit1(e.target.value)
            : setSelectedUnit2(e.target.value);
    };

    return (
        <div className='flex flex-col gap-5 w-full md:w-fit px-6 md:p-0'>
            <h1 className='text-3xl font-bold text-center uppercase mb-5'>
                Unit Converter
            </h1>
            <select
                className='select select-bordered capitalize mb-8'
                onChange={handleDimensionChange}
                defaultValue={DEFAULT_DIMENSION}
            >
                <Dimensions />
            </select>

            <div className='flex md:flex-row flex-col gap-2 w-full justify-center items-center'>
                <div className='flex flex-col w-full md:w-fit md:p-0'>
                    <input
                        type='text'
                        className='input input-bordered text-right rounded-none rounded-t'
                        onChange={(e) => handleInputChange(e, 1)}
                        value={input1Value}
                    />
                    <select
                        className='select select-bordered select-sm rounded-none rounded-b'
                        onChange={(e) => handleUnitChange(e, 1)}
                        value={selectedUnit1}
                    >
                        <Units selectedDimension={selectedDimension} />
                    </select>
                </div>

                <span className='text-2xl font-bold text-base-content'>=</span>

                <div className='flex flex-col w-full md:w-fit md:p-0'>
                    <input
                        type='text'
                        className='input input-bordered text-right rounded-none rounded-t'
                        onChange={(e) => handleInputChange(e, 2)}
                        value={input2Value}
                    />
                    <select
                        className='select select-bordered select-sm rounded-none rounded-b'
                        onChange={(e) => handleUnitChange(e, 2)}
                        value={selectedUnit2}
                    >
                        <Units selectedDimension={selectedDimension} />
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Converter;
