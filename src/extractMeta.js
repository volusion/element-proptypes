/* eslint-disable security/detect-object-injection */
import { fromCamelToSentence } from './utils';

const extractMetadata = props => {
    const extraction = {};
    Object.keys(props).forEach(key => {
        if (!props[key]) {
            return;
        }
        const name = fromCamelToSentence(key);
        const uiLabel = props[key].label;
        const label = uiLabel ? uiLabel : name;
        const propType = props[key].type ? props[key].type : props[key];
        extraction[label] = {
            ...propType._meta,
            propName: key,
            isPrivate: props[key].isPrivate,
            tooltip: props[key].tooltip
        };
    });
    return extraction;
};

export default extractMetadata;
