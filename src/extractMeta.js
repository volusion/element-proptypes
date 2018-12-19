import { fromCamelToSentence } from './utils';

const extractMetadata = props => {
    const extraction = {};
    Object.keys(props).forEach(key => {
        const name = fromCamelToSentence(key);
        extraction[name] = {
            ...props[key]._meta,
            propName: key
        };
    });
    return extraction;
};

export default extractMetadata;
