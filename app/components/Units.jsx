'use client';
import { useState } from 'react';
import converterData from '../data/data.json';

const Units = ({ selectedDimension }) => {
    const units = Object.values(converterData[selectedDimension].units);
    return units.map((unit) => (
        <option key={unit.symbol} value={unit.name}>
            {unit.displayName}
        </option>
    ));
};

export default Units;
