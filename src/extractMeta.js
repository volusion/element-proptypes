/* eslint-disable security/detect-object-injection */
import extract from './extract';
import * as ElementBlock from './ElementBlock';

const extractMetadata = (props = {}) => {
    return extract({ ...ElementBlock.configSchema, ...props })
};

export default extractMetadata
