import { buildConfig } from 'payload/config'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { viteBundler } from '@payloadcms/bundler-vite'

import Users from './collections/Users'
import Posts from './collections/Posts'

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    migrationDir: './src/cms/migrations',
  }),
  telemetry: false,
  editor: lexicalEditor({}),
  admin: {
    user: Users.slug,
    bundler: viteBundler()
  },
  collections: [Users, Posts]
})