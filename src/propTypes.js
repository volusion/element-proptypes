/* eslint-disable security/detect-object-injection */
import extractMetadata from './extractMeta';

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
    'image',
    'slider',
    'media',
    'product',
    'category',
    'sectionHeader',
    'editorFull',
    'editorMinimal',
    'readOnly'
].forEach(type => {
    PropTypes[type] = getShim();
});

['component', 'objectOf', 'arrayOf', 'oneOf', 'shape', 'embeddable'].forEach(type => {
    PropTypes[type] = getShim;
});

const defaults = {
    image: {
        uriBase: '',
        imagePath: '',
        altText: '',
        width: 0,
        height: 0
    },
    slider: {
        min: 0,
        max: 10,
        stepSize: 1,
        selectedValue: 0
    }
};

const primitiveProp = type => {
    const checker = PropTypes[type];
    checker._meta = { type };
    checker.isRequired._meta = { type, isRequired: true };
    if (defaults[type]) {
        checker.default = defaults[type];
    }

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
    const objMeta = extractMetadata(shapeObj);

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

const componentTypeChecker = name => {
    const appliedChecker = PropTypes.shape({ name });

    appliedChecker._meta = {
        type: 'component',
        allowedComponents: [ name ]
    };
    appliedChecker.isRequired._meta = {
        ...appliedChecker._meta,
        isRequired: true
    };
    return appliedChecker;
}

const createComponentTypeChecker = () => componentTypeChecker

const ElementPropTypes = {
    _version: "1.0.17-0",
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
    image: primitiveProp('image'),
    slider: primitiveProp('slider'),
    arrayOf: createTypeOfTypeChecker('arrayOf'),
    objectOf: createTypeOfTypeChecker('objectOf'),
    embeddable: createShapeTypeChecker('embeddable'),
    oneOf: createEnumTypeChecker,
    shape: createShapeTypeChecker('shape'),
    readOnly: primitiveProp('readOnly'),
    component: createComponentTypeChecker(),
};

export default ElementPropTypes;
