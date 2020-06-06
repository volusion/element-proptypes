/* eslint-disable security/detect-object-injection */
import { fromCamelToSentence } from './utils';

const extractMetadata = (props: any = {}) => {
    const extraction: Record<string, any> = {};
    Object.keys(props).forEach(key => {
        const prop: any = props[key];
        if (!prop) {
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

export default extractMetadata;
