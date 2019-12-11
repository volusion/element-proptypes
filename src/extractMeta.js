/* eslint-disable security/detect-object-injection */

const extractMetadata = props => {
    const extraction = {};
    Object.keys(props).forEach(key => {
        if (!props[key]) {
            return;
        }
        const propType = props[key].type ? props[key].type : props[key];
        extraction[key] = {
            ...propType._meta,
            label: props[key].label,
            propName: key,
            isPrivate: props[key].isPrivate,
            tooltip: props[key].tooltip
        };
    });
    return extraction;
};

export default extractMetadata;
