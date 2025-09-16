import type { Schema, Struct } from '@strapi/strapi';

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SupportModuleSpacing extends Struct.ComponentSchema {
  collectionName: 'components_support_module_spacings';
  info: {
    displayName: 'Module Spacing';
    icon: 'brush';
  };
  attributes: {
    linked_sides: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    spacing: Schema.Attribute.Enumeration<
      ['none', 'xl', 'large', 'default', 'small']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    spacing_bottom: Schema.Attribute.Enumeration<
      ['none', 'xl', 'large', 'default', 'small']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    spacing_top: Schema.Attribute.Enumeration<
      ['none', 'xl', 'large', 'default', 'small']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'support.module-spacing': SupportModuleSpacing;
    }
  }
}
