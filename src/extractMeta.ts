/* eslint-disable security/detect-object-injection */
import { fromCamelToSentence } from './utils';

const extractMetadata = (props: Record<string, any> = {}) => {
    const extraction: Record<string, any> = {};
    Object.keys(props).forEach((key) => {
        if (!props[key]) {
            return;
        }
        const propType = props[key].type ? props[key].type : props[key];
        const label = props[key].label === undefined ? fromCamelToSentence(key) : props[key].label;
        extraction[key] = {
            ...propType._meta,
            label,
            propName: key,
            isCollapsible: props[key].isCollapsible,
            isPrivate: props[key].isPrivate,
            max: props[key].max,
            min: props[key].min,
            tooltip: props[key].tooltip
        };
    });
    return extraction;
};

export default extractMetadata;
