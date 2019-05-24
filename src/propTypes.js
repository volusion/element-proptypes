import { fromCamelToSentence } from './utils';

const PropTypes = {};

function getShim() {
    function shim() {}
    function requiredShim() {}
    shim.isRequired = requiredShim;
    return shim;
}

[
    'array',
    'bool',
    'string',
    'color',
    'number',
    'media',
    'product',
    'category',
    'sectionHeader',
    'image',
    'editorFull',
    'editorMinimal',
    'readOnly'
].forEach(type => {
    PropTypes[type] = getShim();
});

['objectOf', 'arrayOf', 'oneOf', 'shape', 'embeddable', 'image'].forEach(
    type => {
        PropTypes[type] = getShim;
    }
);

const defaults = {
    image: {
        uriBase: '',
        imagePath: '',
        altText: '',
        width: 0,
        height: 0
    }
};

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

    if (defaults[type]) {
        appliedChecker.default = defaults[type];
    }

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
    product: primitiveProp('product'),
    category: primitiveProp('category'),
    sectionHeader: primitiveProp('sectionHeader'),
    arrayOf: createTypeOfTypeChecker('arrayOf'),
    objectOf: createTypeOfTypeChecker('objectOf'),
    embeddable: createShapeTypeChecker('embeddable'),
    image: createShapeTypeChecker('image'),
    oneOf: createEnumTypeChecker,
    shape: createShapeTypeChecker('shape'),
    readOnly: primitiveProp('readOnly')
};

export default ElementPropTypes;
