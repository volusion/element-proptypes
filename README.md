# Element PropTypes

This package creates a React PropTypes replacement that adds metadata to the validators, and in that
way, we can do cool things like automatic form generation of block configurations and validations.

## Table of Contents

- [Using the Proptypes](#using-the-proptypes)
- [Developing](#developing)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)


## Using the PropTypes

```js
import { ElementPropTypes } from '@volusion/element-proptypes';

let props = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: ElementPropTypes.array,
  optionalBool: ElementPropTypes.bool,
  optionalNumber: ElementPropTypes.number,
  optionalString: ElementPropTypes.string,
  optionalColor: ElementPropTypes.color,
  optionalMedia: ElementPropTypes.media,
  optionalEditorFull: ElementPropTypes.editorFull,
  optionalEditorMinimal: ElementPropTypes.editorMinimal,

  // You can make them required too
  requiredArray: ElementPropTypes.array,
  requiredBool: ElementPropTypes.bool,
  requiredNumber: ElementPropTypes.number,
  requiredString: ElementPropTypes.string,
  requiredColor: ElementPropTypes.color,
  requiredMedia: ElementPropTypes.media,
  requiredEditorFull: ElementPropTypes.editorFull,
  requiredEditorMinimal: ElementPropTypes.editorMinimal,

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: ElementPropTypes.oneOf(['News', 'Photos']),

  // Or a required one
  requiredEnum: ElementPropTypes.oneOf(['News', 'Photos']).isRequired,

  // An array of a certain type
  optionalArrayOf: ElementPropTypes.arrayOf(PropTypes.number),

  // A required array of a certain type
  requiredArrayOf: ElementPropTypes.arrayOf(PropTypes.number).isRequired,

  // An object with property values of a certain type
  optionalObjectOf: ElementPropTypes.objectOf(PropTypes.number),

  // A required object with property values of a certain type
  requiredObjectOf: ElementPropTypes.objectOf(PropTypes.number).isRequired,

  // An object taking on a particular shape
  optionalObjectWithShape: ElementPropTypes.shape({
    color: ElementPropTypes.color,
    fontFamily: ElementPropTypes.string,
    fontSize: ElementPropTypes.number
  })

  // A required object taking on a particular shape
  RequiredObjectWithShape: ElementPropTypes.shape({
    color: ElementPropTypes.color,
    fontFamily: ElementPropTypes.string,
    fontSize: ElementPropTypes.number
  }).isRequired
}
```

The previous props will generate a schema object like this when using the function `extractMetadata`

```js
import { extractMetadata } from 'element-proptypes';

const meta = extractMetadata(props);

//console.log(meta)
{
  'Optional Array': {
      type: 'array'
  },
  'Optional Bool': {
      type: 'bool'
  },
  'Optional Number': {
      type: 'number'
  },
  'Optional String': {
      type: 'string'
  },
  'Optional Color': {
      type: 'color'
  },
  'Optional Media': {
      type: 'media'
  },
  'Optional Editor Full': {
      type: 'editorFull'
  },
  'Optional Editor Minimal': {
      type: 'editorMinimal'
  },
  'Required Array': {
      type: 'array',
      isRequired: true
  },
  'Required Bool': {
      type: 'bool',
      isRequired: true
  },
  'Required Number': {
      type: 'number',
      isRequired: true
  },
  'Required String': {
      type: 'string',
      isRequired: true
  },
  'Required Color': {
      type: 'color',
      isRequired: true
  },
  'Required Media': {
      type: 'media',
      isRequired: true
  },
  'Required Editor Full': {
      type: 'editorFull',
      isRequired: true
  },
  'Required Editor Minimal': {
      type: 'editorMinimal',
      isRequired: true
  },
  'Optional Enum': {
      type: 'oneOf',
      values: ['News', 'Photos']
  },
  'Required Enum': {
      type: 'oneOf',
      values: ['News', 'Photos'],
      isRequired: true
  },
  'Optional Array Of': {
      type: 'arrayOf',
      argType: {
          type: 'number'
      }
  },
  'Required Array Of': {
      type: 'arrayOf',
      argType: {
          type: 'number'
      },
      isRequired: true
  },
  'Optional Object Of': {
      type: 'objectOf',
      argType: {
          type: 'number'
      }
  },
  'Optional Object Of': {
      type: 'objectOf',
      argType: {
          type: 'number'
      }
  },
  'Required Object Of': {
      type: 'objectOf',
      argType: {
          type: 'number'
      },
      isRequired: true
  },
  'Object With Shape': {
    objMeta: {
     'Color': {
        type: 'string'
      },
      'Font Size': {
        type: 'number'
      }
    }
  })
  'Required Object With Shape': {
    objMeta: {
     'Color': {
        type: 'string'
      },
      'Font Size': {
        type: 'number'
      }
    },
    isRequired: true
  })
}

```

## Developing

```bash
npm install
npm run build
```

Run `npm run build` every time you want to compile and transpile your code.


### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/volusion/element-proptypes/tags).

### Deployment

`npm run release`


## Contributing

We're very excited that you're interested in contributing! At present, we are not accepting contributions for this repo, but that might change in the future. However, we are very interested in your suggestions for new `PropTypes` that you want to have in this package. You can make your suggestions by opening an issue. We do already have a [Code of Conduct](CODE_OF_CONDUCT.md) in place.

## Code of Conduct

Our Code of Conduct, by way of the Contributor Covenant, [can be found here](CODE_OF_CONDUCT.md).

## License

&copy; 2018 onward by Volusion
[MIT License](LICENSE)
