import converterData from '../data/data.json';

const Units = ({ dimension, defaultUnit, onSelectUnit }) => {
    const units = Object.values(converterData[dimension].units);

    const handleUnitChange = (e) => {
        onSelectUnit(e.target.value);
    };

    const unitOptions = units.map((unit) => (
        <option key={unit.symbol} value={unit.name}>
            {unit.name}
        </option>
    ));
    console.log(defaultUnit, 'is default');
    return (
        <select
            className='select select-bordered select-sm'
            defaultValue={converterData[dimension].default[Number(defaultUnit)]}
            onChange={handleUnitChange}
        >
            {unitOptions}
        </select>
    );
};

export default Units;
