import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'content',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'header',
      group: 'content',
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
      group: 'content',
    }),
    defineField({
      name: 'titleSuffix',
      title: 'Suffix for page titles',
      description: 'Suffix to append to the title tag of all pages, except in pages where this behavior is disabled.',
      type: 'string',
      group: 'seo',
    }),
  ],
});
