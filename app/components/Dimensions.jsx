import converterData from '../data/data.json';

const Dimensions = ({ onSelectDimension }) => {
    const dimensions = Object.keys(converterData);

    const handleDimensionChange = (event) => {
        const selectedDimension = event.target.value;
        onSelectDimension(selectedDimension);
    };

    const dimensionOptions = dimensions.map((dimension) => (
        <option key={dimension} value={dimension}>
            {converterData[dimension].name}
        </option>
    ));

    return (
        <select
            className='select select-bordered capitalize'
            onChange={handleDimensionChange}
        >
            {dimensionOptions}
        </select>
    );
};

export default Dimensions;
