import converterData from '../data/data.json';

const Dimensions = () => {
    const dimensions = Object.keys(converterData);

    return dimensions.map((dimension) => (
        <option key={dimension} value={dimension}>
            {converterData[dimension].name}
        </option>
    ));
};

export default Dimensions;
