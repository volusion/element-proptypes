const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const fromCamelToSentence = (camelCaseString: string) => {
    return capitalize(camelCaseString.split(/(?=[A-Z])/).join(' '));
};

export { fromCamelToSentence };
