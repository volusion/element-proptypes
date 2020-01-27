/* eslint-disable security/detect-object-injection */
import { fromCamelToSentence } from './utils';

const extractMetadata = props => {
    // console.log("NOW EXTRACTING METADATA...")
    const extraction = {};
    Object.keys(props).forEach(key => {
        if (!props[key]) {
            return;
        }
        const propType = props[key].type ? props[key].type : props[key];
        const label = props[key].label === undefined
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
    // console.log("EXTRACTED: ", extraction)
    return extraction;
};

export default extractMetadata;
