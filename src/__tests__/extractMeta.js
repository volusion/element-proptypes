import extractMetadata from '../extractMeta';
import ElementPropTypes from '../propTypes';

describe('Metadata extractor', () => {
    it('Extracts metadata from string prop', () => {
        const props = {
            textProp: ElementPropTypes.string,
            textPropRequired: ElementPropTypes.string.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['textProp']).toEqual({
            label: 'Text Prop',
            propName: 'textProp',
            type: 'string'
        });

        expect(extracted['textPropRequired']).toEqual({
            label: 'Text Prop Required',
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

        expect(extracted['colorProp']).toEqual({
            label: 'Color Prop',
            propName: 'colorProp',
            type: 'color'
        });

        expect(extracted['colorPropRequired']).toEqual({
            label: 'Color Prop Required',
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

        expect(extracted['numberProp']).toEqual({
            label: 'Number Prop',
            propName: 'numberProp',
            type: 'number'
        });

        expect(extracted['numberPropRequired']).toEqual({
            label: 'Number Prop Required',
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

        expect(extracted['boolProp']).toEqual({
            label: 'Bool Prop',
            propName: 'boolProp',
            type: 'bool'
        });

        expect(extracted['boolPropRequired']).toEqual({
            label: 'Bool Prop Required',
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

        expect(extracted['mediaProp']).toEqual({
            label: 'Media Prop',
            propName: 'mediaProp',
            type: 'media'
        });

        expect(extracted['mediaPropRequired']).toEqual({
            label: 'Media Prop Required',
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

        expect(extracted['productProp']).toEqual({
            label: 'Product Prop',
            propName: 'productProp',
            type: 'product'
        });

        expect(extracted['productPropRequired']).toEqual({
            label: 'Product Prop Required',
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

        expect(extracted['categoryProp']).toEqual({
            label: 'Category Prop',
            propName: 'categoryProp',
            type: 'category'
        });

        expect(extracted['categoryPropRequired']).toEqual({
            label: 'Category Prop Required',
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

        expect(extracted['sectionHeaderProp']).toEqual({
            label: 'Section Header Prop',
            propName: 'sectionHeaderProp',
            type: 'sectionHeader'
        });

        expect(extracted['sectionHeaderPropRequired']).toEqual({
            label: 'Section Header Prop Required',
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

        expect(extracted['editorFullProp']).toEqual({
            label: 'Editor Full Prop',
            propName: 'editorFullProp',
            type: 'editorFull'
        });

        expect(extracted['editorFullPropRequired']).toEqual({
            label: 'Editor Full Prop Required',
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

        expect(extracted['editorMinimalProp']).toEqual({
            label: 'Editor Minimal Prop',
            propName: 'editorMinimalProp',
            type: 'editorMinimal'
        });

        expect(extracted['editorMinimalPropRequired']).toEqual({
            label: 'Editor Minimal Prop Required',
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

        expect(extracted['someNumbers']).toEqual({
            label: 'Some Numbers',
            propName: 'someNumbers',
            type: 'arrayOf',
            argType: {
                type: 'number'
            }
        });

        expect(extracted['someNumbersRequired']).toEqual({
            label: 'Some Numbers Required',
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

        expect(extracted['anObject']).toEqual({
            label: 'An Object',
            propName: 'anObject',
            type: 'objectOf',
            argType: {
                type: 'string'
            }
        });

        expect(extracted['anObjectRequired']).toEqual({
            label: 'An Object Required',
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

        expect(extracted['someOptions']).toEqual({
            label: 'Some Options',
            propName: 'someOptions',
            type: 'oneOf',
            values: ['bottom', 'top']
        });

        expect(extracted['someOptionsRequired']).toEqual({
            label: 'Some Options Required',
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

        expect(extracted['aShape']).toEqual({
            label: 'A Shape',
            propName: 'aShape',
            type: 'shape',
            objMeta: {
                aTrickyProp: {
                    label: 'A Tricky Prop',
                    propName: 'aTrickyProp',
                    type: 'string'
                },
                notATrickyProp: {
                    label: 'Not A Tricky Prop',
                    propName: 'notATrickyProp',
                    type: 'number'
                }
            }
        });

        expect(extracted['aShapeRequired']).toEqual({
            label: 'A Shape Required',
            propName: 'aShapeRequired',
            type: 'shape',
            objMeta: {
                aTrickyProp: {
                    label: 'A Tricky Prop',
                    propName: 'aTrickyProp',
                    type: 'string'
                },
                notATrickyProp: {
                    label: 'Not A Tricky Prop',
                    propName: 'notATrickyProp',
                    type: 'number'
                }
            },
            isRequired: true
        });
    });

    it('Extracts metadata using provided ui label from shape prop', () => {
        const props = {
            search: {
                label: 'Search',
                type: ElementPropTypes.shape({
                    showInput: {
                        label: 'Enable search bar',
                        type: ElementPropTypes.bool
                    },
                    searchUrl: {
                        label: 'Search page',
                        type: ElementPropTypes.string,
                        isPrivate: true
                    }
                })
            }
        };

        const extracted = extractMetadata(props);

        expect(extracted['search']).toEqual({
            label: 'Search',
            propName: 'search',
            type: 'shape',
            objMeta: {
                showInput: {
                    label: 'Enable search bar',
                    propName: 'showInput',
                    type: 'bool',
                },
                searchUrl: {
                    isPrivate: true,
                    label: 'Search page',
                    propName: 'searchUrl',
                    type: 'string',
                }
            }
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

        expect(extracted['anIframe']).toEqual({
            label: 'An Iframe',
            propName: 'anIframe',
            type: 'embeddable',
            objMeta: {
                embedType: {
                    label: 'Embed Type',
                    propName: 'embedType',
                    type: 'string'
                },
                url: {
                    label: 'Url',
                    propName: 'url',
                    type: 'string'
                },
                height: {
                    label: 'Height',
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

        expect(extracted['imageProp']).toEqual({
            label: 'Image Prop',
            propName: 'imageProp',
            type: 'image'
        });

        expect(extracted['imagePropRequired']).toEqual({
            label: 'Image Prop Required',
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

    it('Extracts metadata from slider type', () => {
        const props = {
            sliderProp: ElementPropTypes.slider,
            sliderPropRequired: ElementPropTypes.slider.isRequired
        };

        const extracted = extractMetadata(props);

        expect(extracted['sliderProp']).toEqual({
            label: 'Slider Prop',
            propName: 'sliderProp',
            type: 'slider'
        });

        expect(extracted['sliderPropRequired']).toEqual({
            label: 'Slider Prop Required',
            propName: 'sliderPropRequired',
            type: 'slider',
            isRequired: true
        });
    });

    it('Returns a default config for the slider type', () => {
        const props = {
            sliderProp: ElementPropTypes.slider
        };
        expect(props.sliderProp.default).toEqual({
            min: 0,
            max: 10,
            stepSize: 1,
            selectedValue: 0
        });
    });

    it('Extracts metadata from readOnly type', () => {
        const props = {
            aReadOnly: ElementPropTypes.readOnly
        };

        const extracted = extractMetadata(props);

        expect(extracted['aReadOnly']).toEqual({
            label: 'A Read Only',
            propName: 'aReadOnly',
            type: 'readOnly'
        });
    });

    it('Extracts metadata using provided ui label', () => {
        const props = {
            devName: {
                type: ElementPropTypes.string,
                label: 'Ui label'
            },
            devNameTwo: {
                type: ElementPropTypes.string,
                label: 'Ui label two'
            }
        };

        const extracted = extractMetadata(props);

        expect(extracted).toEqual({
            devName: {
                label: 'Ui label',
                propName: 'devName',
                type: 'string'
            },
            devNameTwo: {
                label: 'Ui label two',
                propName: 'devNameTwo',
                type: 'string'
            }
        });
    });

    it('Extracts metadata using provided ui label and keeps the label even if it is falsey', () => {
        const props = {
            devName: {
                type: ElementPropTypes.string,
                label: ''
            },
            devNameTwo: {
                type: ElementPropTypes.string,
                label: false
            },
            devNameThree: {
                type: ElementPropTypes.string,
                label: null
            }
        };

        const extracted = extractMetadata(props);

        expect(extracted).toEqual({
            devName: {
                label: '',
                propName: 'devName',
                type: 'string'
            },
            devNameTwo: {
                label: false,
                propName: 'devNameTwo',
                type: 'string'
            },
            devNameThree: {
                label: null,
                propName: 'devNameThree',
                type: 'string'
            }
        });
    });

    it('Extracts metadata using provided ui label - mixed with non label for backwards compatibility', () => {
        const props = {
            devName: {
                type: ElementPropTypes.string,
                label: 'Ui label'
            },
            devNameTwo: {
                type: ElementPropTypes.string,
                label: 'Ui label two'
            },
            devNameThree: ElementPropTypes.number,
            anIframe: {
                type: ElementPropTypes.embeddable({
                    embedType: {
                        type: ElementPropTypes.string,
                        label: 'My embed label'
                    },
                    url: ElementPropTypes.string,
                    height: ElementPropTypes.number
                }),
                label: 'External Iframe'
            },
            colors: {
                type: ElementPropTypes.shape({
                    background: {
                        type: ElementPropTypes.color,
                        label: 'My background color'
                    }
                }),
                label: 'My colors'
            },
            anArray: {
                type: ElementPropTypes.arrayOf(
                    ElementPropTypes.shape({
                        color: {
                            type: ElementPropTypes.color,
                            label: 'My Color'
                        },
                        oldProp: ElementPropTypes.string
                    })
                ),
                label: 'Array of shape'
            }
        };

        const extracted = extractMetadata(props);

        expect(extracted).toEqual({
            devName: {
                label: 'Ui label',
                propName: 'devName',
                type: 'string'
            },
            devNameTwo: {
                label: 'Ui label two',
                propName: 'devNameTwo',
                type: 'string'
            },
            devNameThree: {
                label: 'Dev Name Three',
                propName: 'devNameThree',
                type: 'number'
            },
            anIframe: {
                label: 'External Iframe',
                propName: 'anIframe',
                type: 'embeddable',
                objMeta: {
                    embedType: {
                        label: 'My embed label',
                        propName: 'embedType',
                        type: 'string'
                    },
                    url: {
                        label: 'Url',
                        propName: 'url',
                        type: 'string'
                    },
                    height: {
                        label: 'Height',
                        propName: 'height',
                        type: 'number'
                    }
                }
            },
            colors: {
                label: 'My colors',
                propName: 'colors',
                type: 'shape',
                objMeta: {
                    background: {
                        label: 'My background color',
                        propName: 'background',
                        type: 'color'
                    }
                }
            },
            anArray: {
                label: 'Array of shape',
                propName: 'anArray',
                type: 'arrayOf',
                argType: {
                    type: 'shape',
                    objMeta: {
                        color: {
                            label: 'My Color',
                            propName: 'color',
                            type: 'color'
                        },
                        oldProp: {
                            label: 'Old Prop',
                            propName: 'oldProp',
                            type: 'string'
                        }
                    }
                }
            }
        });
    });

    it('Extracts metadata and label safely if a config prop is undefined or falsey', () => {
        const props = {
            colors: {
                type: ElementPropTypes.shape({
                    background: {
                        type: ElementPropTypes.color,
                        label: 'My background color'
                    }
                }),
                label: 'My colors'
            },
            badProp: undefined,
            nullProp: null,
            falseProp: false
        };

        const extracted = extractMetadata(props);

        expect(extracted).toEqual({
            colors: {
                label: 'My colors',
                propName: 'colors',
                type: 'shape',
                objMeta: {
                    background: {
                        label: 'My background color',
                        propName: 'background',
                        type: 'color'
                    }
                }
            }
        });
    });

    it('Extracts additional properties if provided', () => {
        const props = {
            devName: {
                type: ElementPropTypes.string,
                label: 'Ui label',
                isPrivate: true,
                tooltip: 'A tooltip'
            },
            devNameTwo: {
                type: ElementPropTypes.string,
                label: 'Ui label two'
            }
        };

        const extracted = extractMetadata(props);

        expect(extracted).toEqual({
            devName: {
                label: 'Ui label',
                propName: 'devName',
                type: 'string',
                isPrivate: true,
                tooltip: 'A tooltip'
            },
            devNameTwo: {
                label: 'Ui label two',
                propName: 'devNameTwo',
                type: 'string'
            }
        });
    });

    it('Extracts metadata safely if labels are not unique', () => {
        const props = {
            devName: {
                type: ElementPropTypes.string,
                label: 'Ui label'
            },
            devNameTwo: {
                type: ElementPropTypes.string,
                label: 'Ui label'
            }
        };

        const extracted = extractMetadata(props);

        expect(extracted).toEqual({
            devName: {
                label: 'Ui label',
                propName: 'devName',
                type: 'string'
            },
            devNameTwo: {
                label: 'Ui label',
                propName: 'devNameTwo',
                type: 'string'
            }
        });
    });
    it('Extracts metadata safely if nested keys are not unique', () => {
        const props = {
            arrayOne: {
                label: 'Array label',
                type: ElementPropTypes.arrayOf(
                    ElementPropTypes.shape({
                        keyOne: {
                            label: 'Ui label one',
                            type: ElementPropTypes.string
                        },
                        keyTwo: {
                            label: 'Ui label two',
                            type: ElementPropTypes.string
                        }
                    })
                )
            },
            arrayTwo: {
                label: 'Array label',
                type: ElementPropTypes.arrayOf(
                    ElementPropTypes.shape({
                        keyOne: {
                            label: 'Ui label one',
                            type: ElementPropTypes.string
                        },
                        keyTwo: {
                            label: 'Ui label two',
                            type: ElementPropTypes.string
                        }
                    })
                )
            }
        };
       
        const extracted = extractMetadata(props);

        expect(extracted).toEqual({
            arrayOne: {
                argType: {
                    objMeta: {
                        keyOne: {
                            label: 'Ui label one',
                            propName: 'keyOne',
                            type: 'string'
                        },
                        keyTwo: {
                            label: 'Ui label two',
                            propName: 'keyTwo',
                            type: 'string'
                        }
                    },
                    type: 'shape'
                },
                label: 'Array label',
                propName: 'arrayOne',
                type: 'arrayOf'
            },
            arrayTwo: {
                argType: {
                    objMeta: {
                        keyOne: {
                            label: 'Ui label one',
                            propName: 'keyOne',
                            type: 'string'
                        },
                        keyTwo: {
                            label: 'Ui label two',
                            propName: 'keyTwo',
                            type: 'string'
                        }
                    },
                    type: 'shape'
                },
                label: 'Array label',
                propName: 'arrayTwo',
                type: 'arrayOf'
            }
        });
    });
});
