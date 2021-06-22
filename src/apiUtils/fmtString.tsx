const fmtString = (value: string | string[]): string => {
    if (Array.isArray(value)) {
        return value[0];
    }
    console.log('--- fmtString: ', value);
    return value;
};

export default fmtString;