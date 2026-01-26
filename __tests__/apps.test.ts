import { expect, test, describe } from "bun:test";
import { appInfoSchema } from '@runtipi/common/schemas'
import { fromError } from 'zod-validation-error';
import { z } from 'zod';
import fs from 'node:fs'
import path from 'node:path'

// Custom docker-compose schema that matches runtipi v2 format
// Note: runtipi v2 uses array format for environment (not object format)
// See: https://runtipi.io/docs/reference/dynamic-compose
const environmentSchema = z.array(z.object({
  key: z.string(),
  value: z.union([z.string(), z.number(), z.boolean()])
}));

const serviceSchema = z.object({
  name: z.string(),
  image: z.string(),
  isMain: z.boolean().optional(),
  internalPort: z.union([z.string(), z.number()]).optional(),
  environment: environmentSchema.optional(),
  volumes: z.array(z.object({
    hostPath: z.string(),
    containerPath: z.string()
  })).optional(),
  command: z.union([z.string(), z.array(z.string())]).optional(),
  dependsOn: z.array(z.string()).optional(),
  healthCheck: z.object({
    test: z.string(),
    interval: z.string().optional(),
    timeout: z.string().optional(),
    retries: z.number().optional()
  }).optional(),
  networkMode: z.string().optional(),
}).passthrough();

const dynamicComposeSchema = z.object({
  schemaVersion: z.literal(2),
  services: z.array(serviceSchema)
});

const getApps = async () => {
  const appsDir = await fs.promises.readdir(path.join(process.cwd(), 'apps'))

  const appDirs = appsDir.filter((app) => {
    const stat = fs.statSync(path.join(process.cwd(), 'apps', app))
    return stat.isDirectory()
  })

  return appDirs
};

const getFile = async (app: string, file: string) => {
  const filePath = path.join(process.cwd(), 'apps', app, file)
  try {
    const file = await fs.promises.readFile(filePath, 'utf-8')
    return file
  } catch (err) {
    return null
  }
}

describe("each app should have the required files", async () => {
  const apps = await getApps()

  for (const app of apps) {
    const files = ['config.json', 'docker-compose.json', 'metadata/logo.jpg', 'metadata/description.md']

    for (const file of files) {
      test(`app ${app} should have ${file}`, async () => {
        const fileContent = await getFile(app, file)
        expect(fileContent).not.toBeNull()
      })
    }
  }
})

describe("each app should have a valid config.json", async () => {
  const apps = await getApps()

  for (const app of apps) {
    test(`app ${app} should have a valid config.json`, async () => {
      const fileContent = await getFile(app, 'config.json')
      const parsed = appInfoSchema.omit({ urn: true }).safeParse(JSON.parse(fileContent || '{}'))

      if (!parsed.success) {
        const validationError = fromError(parsed.error);
        console.error(`Error parsing config.json for app ${app}:`, validationError.toString());
      }

      expect(parsed.success).toBe(true)
    })
  }
})

describe("each app should have a valid docker-compose.json", async () => {
  const apps = await getApps()

  for (const app of apps) {
    test(`app ${app} should have a valid docker-compose.json`, async () => {
      const fileContent = await getFile(app, 'docker-compose.json')
      const parsed = dynamicComposeSchema.safeParse(JSON.parse(fileContent || '{}'))

      if (!parsed.success) {
        const validationError = fromError(parsed.error);
        console.error(`Error parsing docker-compose.json for app ${app}:`, validationError.toString());
      }

      expect(parsed.success).toBe(true)
    })
  }
});
