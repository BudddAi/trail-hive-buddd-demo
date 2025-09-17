import type { Schema, Struct } from '@strapi/strapi';

export interface ModulesBlogArchive extends Struct.ComponentSchema {
  collectionName: 'components_modules_blog_archives';
  info: {
    description: 'Blog archive page with header, search, category filters, and featured posts grid';
    displayName: 'Blog Archive';
  };
  attributes: {
    allCategoriesLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 1;
      }>;
    description: Schema.Attribute.RichText;
    featuredPostsToggle: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    manualFeaturedPosts: Schema.Attribute.Relation<
      'oneToMany',
      'api::post.post'
    >;
    preheading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    searchPlaceholder: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 1;
      }>;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesBlogGrid extends Struct.ComponentSchema {
  collectionName: 'components_modules_blog_grids';
  info: {
    description: 'Showcase section for blog posts in a grid format with automatic or manual post selection';
    displayName: 'Blog Grid';
  };
  attributes: {
    button: Schema.Attribute.Component<'molecules.button', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    fetchLatest: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    posts: Schema.Attribute.Relation<'manyToMany', 'api::post.post'>;
    preheading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesCards extends Struct.ComponentSchema {
  collectionName: 'components_modules_cards';
  info: {
    description: 'Feature section with content block and grid of feature cards highlighting key benefits or aspects';
    displayName: 'Cards';
  };
  attributes: {
    button: Schema.Attribute.Component<'molecules.button', false>;
    cards: Schema.Attribute.Component<'molecules.feature-image-card', true>;
    heading: Schema.Attribute.Component<'molecules.heading', false>;
    preHeading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesCardsWithIcons extends Struct.ComponentSchema {
  collectionName: 'components_modules_cards_with_iconss';
  info: {
    description: 'Showcase section for key features or benefits in a grid layout with icons, titles and descriptions';
    displayName: 'Cards With Icons';
  };
  attributes: {
    cards: Schema.Attribute.Component<'molecules.feature-card', true>;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.Component<'molecules.heading', false>;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesFooter extends Struct.ComponentSchema {
  collectionName: 'components_modules_footers';
  info: {
    description: 'Comprehensive website footer with logo, navigation links, newsletter subscription, and social media';
    displayName: 'Footer';
  };
  attributes: {
    copyrightText: Schema.Attribute.Text;
    legalLinks: Schema.Attribute.Component<'molecules.link', true>;
    linkColumns: Schema.Attribute.Component<'molecules.link-column', true>;
    logo: Schema.Attribute.Component<'molecules.logo', false> &
      Schema.Attribute.Required;
    newsletterAgreement: Schema.Attribute.RichText;
    newsletterButton: Schema.Attribute.Component<'molecules.button', false> &
      Schema.Attribute.Required;
    newsletterPlaceholder: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    socialLinks: Schema.Attribute.Component<'molecules.social-link', true>;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesFullWidthBanner extends Struct.ComponentSchema {
  collectionName: 'components_modules_full_width_banners';
  info: {
    description: 'Prominent visual component with full-width image and compelling headline that captures user attention';
    displayName: 'Full Width Banner';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['light-green', 'white', 'gray']
    > &
      Schema.Attribute.DefaultTo<'light-green'>;
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesGalleryBlock extends Struct.ComponentSchema {
  collectionName: 'components_modules_gallery_blocks';
  info: {
    description: 'Responsive image carousel with navigation arrows and pagination dots';
    displayName: 'Gallery Block';
  };
  attributes: {
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesHero extends Struct.ComponentSchema {
  collectionName: 'components_modules_heros';
  info: {
    description: 'Primary hero section with heading, description, call-to-action button, and featured image in a two-column layout';
    displayName: 'Hero';
  };
  attributes: {
    button: Schema.Attribute.Component<'molecules.button', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesHeroStack extends Struct.ComponentSchema {
  collectionName: 'components_modules_hero_stacks';
  info: {
    description: 'Hero section with main heading, background image, and overlay card containing title, description and CTA button';
    displayName: 'Hero Stack';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    mainHeading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    overlayButton: Schema.Attribute.Component<'molecules.button', false> &
      Schema.Attribute.Required;
    overlayDescription: Schema.Attribute.RichText & Schema.Attribute.Required;
    overlayHeading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesLeftRight extends Struct.ComponentSchema {
  collectionName: 'components_modules_left_rights';
  info: {
    description: 'Flexible two-column component that displays an image alongside textual content with configurable positioning';
    displayName: 'Left Right';
  };
  attributes: {
    accordionItems: Schema.Attribute.Component<
      'molecules.feature-accordion-item',
      true
    >;
    button: Schema.Attribute.Component<'molecules.button', false>;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    preheading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesNavbar extends Struct.ComponentSchema {
  collectionName: 'components_modules_navbars';
  info: {
    description: 'Responsive website navigation bar with brand logo, navigation links, and call-to-action buttons';
    displayName: 'Navbar';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'molecules.button', true>;
    logo: Schema.Attribute.Component<'molecules.logo', false> &
      Schema.Attribute.Required;
    navLinks: Schema.Attribute.Component<'molecules.link', true>;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesPricing extends Struct.ComponentSchema {
  collectionName: 'components_modules_pricings';
  info: {
    description: 'Pricing section with monthly/yearly toggle and pricing plan cards';
    displayName: 'Pricing';
  };
  attributes: {
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    monthlyLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 1;
      }>;
    pricingPlans: Schema.Attribute.Component<
      'molecules.detailed-pricing-card',
      true
    >;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
    tagline: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    yearlyLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 1;
      }>;
  };
}

export interface ModulesPricingTable extends Struct.ComponentSchema {
  collectionName: 'components_modules_pricing_tables';
  info: {
    description: 'Comprehensive pricing table with header, pricing plan cards, and detailed feature comparison table organized by categories';
    displayName: 'Pricing Table';
  };
  attributes: {
    featureCategories: Schema.Attribute.Component<
      'molecules.feature-category',
      true
    >;
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    plans: Schema.Attribute.Component<'molecules.pricing-plan-card', true> &
      Schema.Attribute.Required;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesQuote extends Struct.ComponentSchema {
  collectionName: 'components_modules_quotes';
  info: {
    description: 'Customer testimonial section with quote and logo cloud to build social proof';
    displayName: 'Quote';
  };
  attributes: {
    author: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
        minLength: 1;
      }>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    logos: Schema.Attribute.Component<'molecules.logo', true>;
    logosTitle: Schema.Attribute.Text;
    preheading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
    quote: Schema.Attribute.RichText;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesSectionCards extends Struct.ComponentSchema {
  collectionName: 'components_modules_section_cards';
  info: {
    description: 'Showcase key features or advantages in a visually engaging grid layout with heading and feature cards';
    displayName: 'Section Cards';
  };
  attributes: {
    cards: Schema.Attribute.Component<'molecules.info-card', true>;
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface ModulesStatsWithImage extends Struct.ComponentSchema {
  collectionName: 'components_modules_stats_with_images';
  info: {
    description: 'Two-column layout with textual content including heading, description, and accordion features alongside a supporting image';
    displayName: 'Stats With Image';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    features: Schema.Attribute.Component<
      'molecules.feature-accordion-item',
      true
    >;
    heading: Schema.Attribute.Component<'molecules.heading', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    spacing: Schema.Attribute.Component<'support.module-spacing', false> &
      Schema.Attribute.Required;
  };
}

export interface MoleculesButton extends Struct.ComponentSchema {
  collectionName: 'components_molecules_buttons';
  info: {
    description: 'Reusable button component for CTAs.';
    displayName: 'Button';
    icon: 'cursor-pointer';
  };
  attributes: {
    style: Schema.Attribute.Enumeration<
      [
        'solid-dark',
        'outline-dark',
        'ghost',
        'outline-light',
        'solid-light',
        'solid-green',
      ]
    > &
      Schema.Attribute.DefaultTo<'solid-dark'>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    url: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface MoleculesDetailedPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_detailed_pricing_cards';
  info: {
    description: 'Component for a single pricing plan card with monthly/yearly options.';
    displayName: 'Detailed Pricing Card';
    icon: 'credit-card';
  };
  attributes: {
    billingCycleMonthly: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    billingCycleYearly: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    button: Schema.Attribute.Component<'molecules.button', false>;
    features: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images'>;
    includesText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    monthlyPrice: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    planName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    yearlyPrice: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface MoleculesFeatureAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_molecules_feature_accordion_items';
  info: {
    description: 'Component for a single expandable item in a feature list, with a title and description.';
    displayName: 'Feature Accordion Item';
    icon: 'list';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface MoleculesFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_feature_cards';
  info: {
    description: 'Component for a feature item with an icon, title, and description.';
    displayName: 'Feature Card';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface MoleculesFeatureCategory extends Struct.ComponentSchema {
  collectionName: 'components_molecules_feature_categories';
  info: {
    description: 'Component for a category in the feature comparison table.';
    displayName: 'Feature Category';
    icon: 'layer-group';
  };
  attributes: {
    features: Schema.Attribute.Component<'molecules.feature-item', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface MoleculesFeatureImageCard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_feature_image_cards';
  info: {
    description: 'Component for a feature card with an image, title, and description.';
    displayName: 'Feature Image Card';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface MoleculesFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_molecules_feature_items';
  info: {
    description: 'Component for a single row in the feature comparison table.';
    displayName: 'Feature Item';
    icon: 'list';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    values: Schema.Attribute.Component<'molecules.feature-value', true>;
  };
}

export interface MoleculesFeatureValue extends Struct.ComponentSchema {
  collectionName: 'components_molecules_feature_values';
  info: {
    description: 'Component for a single feature value in the comparison table.';
    displayName: 'Feature Value';
    icon: 'check-circle';
  };
  attributes: {
    value: Schema.Attribute.Text;
  };
}

export interface MoleculesHeading extends Struct.ComponentSchema {
  collectionName: 'components_molecules_headings';
  info: {
    description: 'Reusable heading component with tag selector.';
    displayName: 'Heading';
    icon: 'heading';
  };
  attributes: {
    preheading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subheading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    tag: Schema.Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Schema.Attribute.DefaultTo<'h2'>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface MoleculesInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_info_cards';
  info: {
    description: 'Component for a feature card with layout and width options, used in a grid.';
    displayName: 'Info Card';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    layout: Schema.Attribute.Enumeration<
      ['text_top', 'text_left', 'text_right']
    > &
      Schema.Attribute.DefaultTo<'text_top'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    width: Schema.Attribute.Enumeration<['half', 'full']> &
      Schema.Attribute.DefaultTo<'half'>;
  };
}

export interface MoleculesLink extends Struct.ComponentSchema {
  collectionName: 'components_molecules_links';
  info: {
    description: 'An atomic component for a single hyperlink with text, URL, and target attributes.';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
  };
}

export interface MoleculesLinkColumn extends Struct.ComponentSchema {
  collectionName: 'components_molecules_link_columns';
  info: {
    description: 'Component for a column of links with a title, used in footers or sidebars.';
    displayName: 'Link Column';
    icon: 'link';
  };
  attributes: {
    links: Schema.Attribute.Component<'molecules.link', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface MoleculesLogo extends Struct.ComponentSchema {
  collectionName: 'components_molecules_logos';
  info: {
    description: 'Component for the site logo, containing an image and a URL.';
    displayName: 'Logo';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface MoleculesPricingPlanCard extends Struct.ComponentSchema {
  collectionName: 'components_molecules_pricing_plan_cards';
  info: {
    description: 'Component for a single pricing plan card.';
    displayName: 'Pricing Plan Card';
    icon: 'credit-card';
  };
  attributes: {
    billingCycle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    button: Schema.Attribute.Component<'molecules.button', false>;
    description: Schema.Attribute.Text;
    planName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    price: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface MoleculesSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_molecules_social_links';
  info: {
    description: 'Component for a single social media link, specifying the platform to determine the icon.';
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'twitter', 'linkedin']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

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
      'modules.blog-archive': ModulesBlogArchive;
      'modules.blog-grid': ModulesBlogGrid;
      'modules.cards': ModulesCards;
      'modules.cards-with-icons': ModulesCardsWithIcons;
      'modules.footer': ModulesFooter;
      'modules.full-width-banner': ModulesFullWidthBanner;
      'modules.gallery-block': ModulesGalleryBlock;
      'modules.hero': ModulesHero;
      'modules.hero-stack': ModulesHeroStack;
      'modules.left-right': ModulesLeftRight;
      'modules.navbar': ModulesNavbar;
      'modules.pricing': ModulesPricing;
      'modules.pricing-table': ModulesPricingTable;
      'modules.quote': ModulesQuote;
      'modules.section-cards': ModulesSectionCards;
      'modules.stats-with-image': ModulesStatsWithImage;
      'molecules.button': MoleculesButton;
      'molecules.detailed-pricing-card': MoleculesDetailedPricingCard;
      'molecules.feature-accordion-item': MoleculesFeatureAccordionItem;
      'molecules.feature-card': MoleculesFeatureCard;
      'molecules.feature-category': MoleculesFeatureCategory;
      'molecules.feature-image-card': MoleculesFeatureImageCard;
      'molecules.feature-item': MoleculesFeatureItem;
      'molecules.feature-value': MoleculesFeatureValue;
      'molecules.heading': MoleculesHeading;
      'molecules.info-card': MoleculesInfoCard;
      'molecules.link': MoleculesLink;
      'molecules.link-column': MoleculesLinkColumn;
      'molecules.logo': MoleculesLogo;
      'molecules.pricing-plan-card': MoleculesPricingPlanCard;
      'molecules.social-link': MoleculesSocialLink;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'support.module-spacing': SupportModuleSpacing;
    }
  }
}
