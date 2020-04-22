import extract from '../extract';
import extractMetadata from '../extractMeta';
import * as ElementBlock from '../ElementBlock';

test('it adds the standard props to the config', () => {
    const standardPropMetadata = extract(ElementBlock.configSchema)
    expect(extractMetadata({})).toEqual(standardPropMetadata);
    expect(standardPropMetadata).toMatchSnapshot();
});


