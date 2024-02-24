 function convertLength(value, fromUnit, toUnit) {
    const units = {
        meter: 1,
        centimeter: 100,
        millimeter: 1000,
        kilometer: 0.001,
        inch: 39.3701,
        foot: 3.28084,
        yard: 1.09361,
        mile: 0.000621371,
    };

    if (!(fromUnit in units) || !(toUnit in units)) {
        throw new Error("Invalid unit");
    }

    const result = (value * units[fromUnit]) / units[toUnit];
    return result;
}

// Example usage:
const inputValue = 5;
const inputUnit = 'meter';
const outputUnit = 'kilometer';

const result = convertLength(inputValue, inputUnit, outputUnit);
console.log(`${inputValue} ${inputUnit} is equal to ${result} ${outputUnit}`);
