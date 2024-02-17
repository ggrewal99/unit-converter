'use client';
import { useState } from 'react';
import converterData from '../data/data.json';

const Units = ({ dimension, defaultUnit, onSelectUnit }) => {
    const units = Object.values(converterData[dimension].units);
    const defaultUnitForDimension =
        converterData[dimension].default[defaultUnit];

    const [selectedUnit, setSelectedUnit] = useState(defaultUnitForDimension);

    const handleUnitChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedUnit(selectedValue);
        onSelectUnit(selectedValue);
    };

    const unitOptions = units.map((unit) => (
        <option key={unit.symbol} value={unit.name}>
            {unit.name}
        </option>
    ));

    return (
        <select
            className='select select-bordered select-sm'
            onChange={handleUnitChange}
            value={selectedUnit}
        >
            {unitOptions}
        </select>
    );
};

export default Units;
