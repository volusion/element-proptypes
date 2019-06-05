/* eslint-disable security/detect-object-injection */
import { fromCamelToSentence } from './utils';

const extractMetadata = props => {
    const extraction = {};
    Object.keys(props).forEach(key => {
        const name = fromCamelToSentence(key);
        const uiLabel = props[key].uiLabel;
        const label = uiLabel ? uiLabel : name;
        const propType = props[key].type ? props[key].type : props[key];
        extraction[label] = {
            ...propType._meta,
            propName: key
        };
    });
    return extraction;
};

export default extractMetadata;
