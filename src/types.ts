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
export type PropTypesObject = { [k in AllPropTypes]: any };

export type Version = {
  _version: string;
};

export type ElementPropType = {
  [k in AllPropTypes]: any;
} & Version;

export type PropType = {
  _meta: {
    type: AllPropTypes;
  };
  label?: string;
  isCollapsible?: boolean;
  isPrivate?: boolean;
  max?: number;
  min?: number;
  tooltip?: string;
  type?: string;
  propName?: string;
};

export type ExtractionResult = {
  [key: string]: PropType;
};
