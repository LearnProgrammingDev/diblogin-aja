import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
      kind: 'cloud',
    },
    cloud: {
      project: 'ryu-nakamura/diblogin-aja',
    },

  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/data/blog/*',   // sesuai struktur AstroPaper
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDatetime: fields.date({ label: 'Publish Date' }),
        description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
  },
});
