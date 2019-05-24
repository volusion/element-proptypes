import extractMetadata from '../extractMeta';
import ElementPropTypes from '../propTypes';

describe('Metadata extractor', () => {
    it('Extracts metadata from string prop', () => {
        const props = {
            textProp: ElementPropTypes.string,
            textPropRequired: ElementPropTypes.string.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Text Prop']).toEqual({
            propName: 'textProp',
            type: 'string'
        });

        expect(extracted['Text Prop Required']).toEqual({
            propName: 'textPropRequired',
            type: 'string',
            isRequired: true
        });
    });

    it('Extracts metadata from color prop', () => {
        const props = {
            colorProp: ElementPropTypes.color,
            colorPropRequired: ElementPropTypes.color.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Color Prop']).toEqual({
            propName: 'colorProp',
            type: 'color'
        });

        expect(extracted['Color Prop Required']).toEqual({
            propName: 'colorPropRequired',
            type: 'color',
            isRequired: true
        });
    });

    it('Extracts metadata from number prop', () => {
        const props = {
            numberProp: ElementPropTypes.number,
            numberPropRequired: ElementPropTypes.number.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Number Prop']).toEqual({
            propName: 'numberProp',
            type: 'number'
        });

        expect(extracted['Number Prop Required']).toEqual({
            propName: 'numberPropRequired',
            type: 'number',
            isRequired: true
        });
    });

    it('Extracts metadata from bool prop', () => {
        const props = {
            boolProp: ElementPropTypes.bool,
            boolPropRequired: ElementPropTypes.bool.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Bool Prop']).toEqual({
            propName: 'boolProp',
            type: 'bool'
        });

        expect(extracted['Bool Prop Required']).toEqual({
            propName: 'boolPropRequired',
            type: 'bool',
            isRequired: true
        });
    });

    it('Extracts metadata from media type', () => {
        const props = {
            mediaProp: ElementPropTypes.media,
            mediaPropRequired: ElementPropTypes.media.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Media Prop']).toEqual({
            propName: 'mediaProp',
            type: 'media'
        });

        expect(extracted['Media Prop Required']).toEqual({
            propName: 'mediaPropRequired',
            type: 'media',
            isRequired: true
        });
    });

    it('Extracts metadata from product type', () => {
        const props = {
            productProp: ElementPropTypes.product,
            productPropRequired: ElementPropTypes.product.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Product Prop']).toEqual({
            propName: 'productProp',
            type: 'product'
        });

        expect(extracted['Product Prop Required']).toEqual({
            propName: 'productPropRequired',
            type: 'product',
            isRequired: true
        });
    });

    it('Extracts metadata from category type', () => {
        const props = {
            categoryProp: ElementPropTypes.category,
            categoryPropRequired: ElementPropTypes.category.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Category Prop']).toEqual({
            propName: 'categoryProp',
            type: 'category'
        });

        expect(extracted['Category Prop Required']).toEqual({
            propName: 'categoryPropRequired',
            type: 'category',
            isRequired: true
        });
    });

    it('Extracts metadata from sectionHeader type', () => {
        const props = {
            sectionHeaderProp: ElementPropTypes.sectionHeader,
            sectionHeaderPropRequired: ElementPropTypes.sectionHeader.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Section Header Prop']).toEqual({
            propName: 'sectionHeaderProp',
            type: 'sectionHeader'
        });

        expect(extracted['Section Header Prop Required']).toEqual({
            propName: 'sectionHeaderPropRequired',
            type: 'sectionHeader',
            isRequired: true
        });
    });

    it('Extracts metadata from editorFull type', () => {
        const props = {
            editorFullProp: ElementPropTypes.editorFull,
            editorFullPropRequired: ElementPropTypes.editorFull.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Editor Full Prop']).toEqual({
            propName: 'editorFullProp',
            type: 'editorFull'
        });

        expect(extracted['Editor Full Prop Required']).toEqual({
            propName: 'editorFullPropRequired',
            type: 'editorFull',
            isRequired: true
        });
    });

    it('Extracts metadata from editorMinimal type', () => {
        const props = {
            editorMinimalProp: ElementPropTypes.editorMinimal,
            editorMinimalPropRequired: ElementPropTypes.editorMinimal.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Editor Minimal Prop']).toEqual({
            propName: 'editorMinimalProp',
            type: 'editorMinimal'
        });

        expect(extracted['Editor Minimal Prop Required']).toEqual({
            propName: 'editorMinimalPropRequired',
            type: 'editorMinimal',
            isRequired: true
        });
    });

    it('Extracts metadata from arrayOf prop', () => {
        const props = {
            someNumbers: ElementPropTypes.arrayOf(ElementPropTypes.number),
            someNumbersRequired: ElementPropTypes.arrayOf(
                ElementPropTypes.number
            ).isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Some Numbers']).toEqual({
            propName: 'someNumbers',
            type: 'arrayOf',
            argType: {
                type: 'number'
            }
        });

        expect(extracted['Some Numbers Required']).toEqual({
            propName: 'someNumbersRequired',
            type: 'arrayOf',
            argType: {
                type: 'number'
            },
            isRequired: true
        });
    });

    it('Extracts metadata from objectOf prop', () => {
        const props = {
            anObject: ElementPropTypes.objectOf(ElementPropTypes.string),
            anObjectRequired: ElementPropTypes.objectOf(ElementPropTypes.string)
                .isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['An Object']).toEqual({
            propName: 'anObject',
            type: 'objectOf',
            argType: {
                type: 'string'
            }
        });

        expect(extracted['An Object Required']).toEqual({
            propName: 'anObjectRequired',
            type: 'objectOf',
            argType: {
                type: 'string'
            },
            isRequired: true
        });
    });

    it('Extracts metadata from oneOf prop', () => {
        const props = {
            someOptions: ElementPropTypes.oneOf(['bottom', 'top']),
            someOptionsRequired: ElementPropTypes.oneOf(['bottom', 'top'])
                .isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Some Options']).toEqual({
            propName: 'someOptions',
            type: 'oneOf',
            values: ['bottom', 'top']
        });

        expect(extracted['Some Options Required']).toEqual({
            propName: 'someOptionsRequired',
            type: 'oneOf',
            values: ['bottom', 'top'],
            isRequired: true
        });
    });

    it('Extracts metadata from shape prop', () => {
        const props = {
            aShape: ElementPropTypes.shape({
                aTrickyProp: ElementPropTypes.string,
                notATrickyProp: ElementPropTypes.number
            }),
            aShapeRequired: ElementPropTypes.shape({
                aTrickyProp: ElementPropTypes.string,
                notATrickyProp: ElementPropTypes.number
            }).isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['A Shape']).toEqual({
            propName: 'aShape',
            type: 'shape',
            objMeta: {
                'A Tricky Prop': {
                    propName: 'aTrickyProp',
                    type: 'string'
                },
                'Not A Tricky Prop': {
                    propName: 'notATrickyProp',
                    type: 'number'
                }
            }
        });

        expect(extracted['A Shape Required']).toEqual({
            propName: 'aShapeRequired',
            type: 'shape',
            objMeta: {
                'A Tricky Prop': {
                    propName: 'aTrickyProp',
                    type: 'string'
                },
                'Not A Tricky Prop': {
                    propName: 'notATrickyProp',
                    type: 'number'
                }
            },
            isRequired: true
        });
    });

    it('Extracts metadata from embeddable type', () => {
        const props = {
            anIframe: ElementPropTypes.embeddable({
                embedType: ElementPropTypes.string,
                url: ElementPropTypes.string,
                height: ElementPropTypes.number
            })
        };

        const extracted = extractMetadata(props);

        expect(extracted['An Iframe']).toEqual({
            propName: 'anIframe',
            type: 'embeddable',
            objMeta: {
                'Embed Type': {
                    propName: 'embedType',
                    type: 'string'
                },
                Url: {
                    propName: 'url',
                    type: 'string'
                },
                Height: {
                    propName: 'height',
                    type: 'number'
                }
            }
        });
    });

    it('Extracts metadata from image type', () => {
        const props = {
            imageProp: ElementPropTypes.image,
            imagePropRequired: ElementPropTypes.image.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['Image Prop']).toEqual({
            propName: 'imageProp',
            type: 'image'
        });

        expect(extracted['Image Prop Required']).toEqual({
            propName: 'imagePropRequired',
            type: 'image',
            isRequired: true
        });
    });

    it('Returns a default config for the image type', () => {
        const props = {
            imageProp: ElementPropTypes.image
        };
        expect(props.imageProp.default).toEqual({
            uriBase: '',
            imagePath: '',
            altText: '',
            width: 0,
            height: 0
        });
    });

    it('Extracts metadata from readOnly type', () => {
        const props = {
            aReadOnly: ElementPropTypes.readOnly
        };

        const extracted = extractMetadata(props);

        expect(extracted['A Read Only']).toEqual({
            propName: 'aReadOnly',
            type: 'readOnly'
        });
    });
});
