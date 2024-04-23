import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'DeliveryApp',

  projectId: 'uti3i56z',
  dataset: 'foodapp',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
