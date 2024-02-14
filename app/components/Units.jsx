import converterData from '../data/data.json';

const Units = ({ dimension, defaultUnit }) => {
    const units = Object.values(converterData[dimension].units);

    const unitOptions = units.map((unit) => (
        <option key={unit.symbol} value={unit.name}>
            {unit.name}
        </option>
    ));
    console.log(defaultUnit, 'is default');
    return (
        <select
            className='select select-bordered select-sm'
            value={converterData[dimension].default[Number(defaultUnit)]}
        >
            {unitOptions}
        </select>
    );
};

export default Units;
