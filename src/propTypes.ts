/* eslint-disable no-undef,security/detect-object-injection */
import extractMetadata from './extractMeta';
import {
    AdvancedPropTypes,
    AllPropTypes,
    ClassicPropTypes,
    ElementPropType,
    FunctionalPropTypes,
    PropTypesObject
} from './types';

const PropTypes = {} as PropTypesObject;

function getShim() {
    function shim() {}
    function requiredShim() {}
    shim.isRequired = requiredShim;
    return shim;
}

const classicPropTypes: ClassicPropTypes[] = [
    'array',
    'bool',
    'string',
    'color',
    'number',
    'icon',
    'image',
    'slider',
    'media',
    'product',
    'category',
    'sectionHeader',
    'subHeader',
    'editorFull',
    'editorMinimal',
    'readOnly',
    'date',
    'dateRange'
];
classicPropTypes.forEach((type) => {
    PropTypes[type] = getShim();
});

const advancedPropTypes: AdvancedPropTypes[] = [
    'spacing',
    'typography',
    'visibility'
];

advancedPropTypes.forEach((type) => {
    PropTypes[type] = getShim();
});

const functionalPropTypes: FunctionalPropTypes[] = [
    'component',
    'objectOf',
    'arrayOf',
    'oneOf',
    'shape',
    'embeddable'
];

functionalPropTypes.forEach((type) => {
    PropTypes[type] = getShim;
});

const defaults = {
    icon: {
        iconName: '',
        iconPrefix: '',
        defaultFilter: ''
    },
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
} as PropTypesObject;

const primitiveProp = (type: ClassicPropTypes | AdvancedPropTypes) => {
    const checker = PropTypes[type];
    checker._meta = { type };
    checker.isRequired._meta = { type, isRequired: true };
    if (defaults[type]) {
        checker.default = defaults[type];
    }

    return checker;
};

const createTypeOfTypeChecker = (type: AllPropTypes) => (arrType: any) => {
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

const createEnumTypeChecker = (expectedValues: any) => {
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

const createShapeTypeChecker = (type: AllPropTypes) => (shapeObj: any) => {
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

const componentTypeChecker = (name: AllPropTypes) => {
    const appliedChecker = PropTypes.shape({ name });

    appliedChecker._meta = {
        type: 'component',
        allowedComponents: [name]
    };
    appliedChecker.isRequired._meta = {
        ...appliedChecker._meta,
        isRequired: true
    };
    return appliedChecker;
};

const createComponentTypeChecker = () => componentTypeChecker;

const ElementPropTypes: ElementPropType = {
    _version: '1.0.17-0',
    // classic types
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
    subHeader: primitiveProp('subHeader'),
    image: primitiveProp('image'),
    slider: primitiveProp('slider'),
    date: primitiveProp('date'),
    dateRange: primitiveProp('dateRange'),
    icon: primitiveProp('icon'),
    readOnly: primitiveProp('readOnly'),
    // functional types
    arrayOf: createTypeOfTypeChecker('arrayOf'),
    objectOf: createTypeOfTypeChecker('objectOf'),
    embeddable: createShapeTypeChecker('embeddable'),
    oneOf: createEnumTypeChecker,
    shape: createShapeTypeChecker('shape'),
    component: createComponentTypeChecker(),
    // advanced types
    typography: primitiveProp('typography'),
    spacing: primitiveProp('spacing'),
    visibility: primitiveProp('visibility')
};

export default ElementPropTypes;
