export type ClassicPropTypes =
  | 'array'
  | 'bool'
  | 'string'
  | 'color'
  | 'number'
  | 'icon'
  | 'image'
  | 'slider'
  | 'media'
  | 'product'
  | 'category'
  | 'sectionHeader'
  | 'subHeader'
  | 'editorFull'
  | 'editorMinimal'
  | 'readOnly'
  | 'date'
  | 'dateRange';
export type FunctionalPropTypes =
  | 'component'
  | 'objectOf'
  | 'arrayOf'
  | 'oneOf'
  | 'shape'
  | 'embeddable';
export type AdvancedPropTypes = 'typography' | 'spacing' | 'visibility';

export type AllPropTypes =
  | ClassicPropTypes
  | AdvancedPropTypes
  | FunctionalPropTypes;
export type PropTypesObject = { [k: string]: any };

export type Version = {
  _version: string;
};

export type ElementPropType = {
  [k in AllPropTypes]: any;
} & Version;
