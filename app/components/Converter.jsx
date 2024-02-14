'use client';
import { useState } from 'react';
import Dimensions from './Dimensions';
import Units from './Units';

const Converter = () => {
    const [selectedDimension, setSelectedDimension] = useState('length');

    const handleDimensionChange = (dimension) => {
        setSelectedDimension(dimension);
    };

    return (
        <div className='flex flex-col gap-5'>
            <Dimensions onSelectDimension={handleDimensionChange} />

            <div className='flex md:flex-row flex-col gap-2 justify-center items-center'>
                <div className='flex flex-col'>
                    <input
                        type='text'
                        className='input input-bordered text-right'
                    />
                    <Units dimension={selectedDimension} defaultUnit='0' />
                </div>

                <span className='text-2xl font-bold text-base-content'>=</span>

                <div className='flex flex-col'>
                    <input
                        type='text'
                        className='input input-bordered text-right'
                    />
                    <Units dimension={selectedDimension} defaultUnit='1' />
                </div>
            </div>
        </div>
    );
};

export default Converter;
