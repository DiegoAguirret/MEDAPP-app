import { parseDrug, parseSource, type Drug, type Source } from '@medapp/content-schema';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { ZodError } from 'zod';

export class ContentLoadError extends Error {}

function readYaml(path: string): unknown {
  return parse(readFileSync(path, 'utf8'));
}

function describe(file: string, err: unknown): ContentLoadError {
  if (err instanceof ZodError) {
    const issues = err.issues.map((i) => `  - ${i.path.join('.')}: ${i.message}`).join('\n');
    return new ContentLoadError(`${file} no cumple el esquema:\n${issues}`);
  }
  return new ContentLoadError(`${file}: ${err instanceof Error ? err.message : String(err)}`);
}

export function loadContent(contentDir: string): {
  drugs: Drug[];
  sources: Source[];
  recalledDrugIds: string[];
} {
  const sourcesFile = join(contentDir, 'sources.yaml');
  const rawSources = readYaml(sourcesFile);
  if (!Array.isArray(rawSources)) throw new ContentLoadError(`${sourcesFile} debe ser una lista`);
  const sources = rawSources.map((s, i) => {
    try {
      return parseSource(s);
    } catch (err) {
      throw describe(`${sourcesFile}[${i}]`, err);
    }
  });

  const drugsDir = join(contentDir, 'drugs');
  const drugs = readdirSync(drugsDir)
    .filter((f) => f.endsWith('.yaml'))
    .sort()
    .map((f) => {
      const file = join(drugsDir, f);
      try {
        const drug = parseDrug(readYaml(file));
        if (`${drug.id}.yaml` !== f) {
          throw new ContentLoadError(`el id "${drug.id}" no coincide con el nombre del archivo`);
        }
        return drug;
      } catch (err) {
        throw describe(file, err);
      }
    });

  const recallsFile = join(contentDir, 'recalls.yaml');
  const recalls = existsSync(recallsFile) ? readYaml(recallsFile) : [];
  const recalledDrugIds = Array.isArray(recalls) ? recalls.map(String) : [];

  return { drugs, sources, recalledDrugIds };
}
