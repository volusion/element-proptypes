import { fromCamelToSentence } from './utils';

const PropTypes = {};

function getShim() {
    function shim() {}
    function requiredShim() {}
    shim.isRequired = requiredShim;
    return shim;
}

['array', 'bool', 'string', 'color', 'number', 'media', 'editorFull', 'editorMinimal', 'readOnly'].forEach(type => {
    PropTypes[type] = getShim();
});

['objectOf', 'arrayOf', 'oneOf', 'shape', 'embeddable'].forEach(type => {
    PropTypes[type] = getShim;
});

const primitiveProp = type => {
    const checker = PropTypes[type];
    checker._meta = { type };
    checker.isRequired._meta = { type, isRequired: true };
    return checker;
};

const createTypeOfTypeChecker = type => arrType => {
    const appliedChecker = PropTypes[type](arrType);
    appliedChecker._meta = {
        type,
        argType: arrType._meta
    };
    appliedChecker.isRequired._meta = {
        ...appliedChecker._meta,
        isRequired: true
    };
    return appliedChecker;
};

const createEnumTypeChecker = expectedValues => {
    const appliedChecker = PropTypes.oneOf(expectedValues);
    appliedChecker._meta = {
        type: 'oneOf',
        values: expectedValues
    };
    appliedChecker.isRequired._meta = {
        ...appliedChecker._meta,
        isRequired: true
    };
    return appliedChecker;
};

const createShapeTypeChecker = type => shapeObj => {
    const appliedChecker = PropTypes.shape(shapeObj);
    const objMeta = {};
    Object.keys(shapeObj).forEach(key => {
        objMeta[fromCamelToSentence(key)] = {
            ...shapeObj[key]._meta,
            propName: key
        };
    });

    appliedChecker._meta = {
        type,
        objMeta
    };
    appliedChecker.isRequired._meta = {
        ...appliedChecker._meta,
        isRequired: true
    };
    return appliedChecker;
};

const ElementPropTypes = {
    array: primitiveProp('array'),
    bool: primitiveProp('bool'),
    color: primitiveProp('color'),
    media: primitiveProp('media'),
    editorFull: primitiveProp('editorFull'),
    editorMinimal: primitiveProp('editorMinimal'),
    number: primitiveProp('number'),
    string: primitiveProp('string'),
    arrayOf: createTypeOfTypeChecker('arrayOf'),
    objectOf: createTypeOfTypeChecker('objectOf'),
    embeddable: createShapeTypeChecker('embeddable'),
    oneOf: createEnumTypeChecker,
    shape: createShapeTypeChecker('shape'),
    readOnly: primitiveProp('readOnly')
};

export default ElementPropTypes;
