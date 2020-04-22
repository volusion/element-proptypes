import { fromCamelToSentence } from './utils';

const extract = (props = {}) => {
    const extraction = {};
    Object.keys(props).forEach(key => {
        if (!props[key]) {
            return;
        }
        const propType = props[key].type ? props[key].type : props[key];
        const label =
            props[key].label === undefined
                ? fromCamelToSentence(key)
                : props[key].label;
        extraction[key] = {
            ...propType._meta,
            label,
            propName: key,
            isPrivate: props[key].isPrivate,
            tooltip: props[key].tooltip
        };
    });
    return extraction;
};

export default extract;
