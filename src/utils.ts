function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function fromCamelToSentence(camelCaseString: string) {
    return capitalize(camelCaseString.split(/(?=[A-Z])/).join(' '));
}

export { fromCamelToSentence };
