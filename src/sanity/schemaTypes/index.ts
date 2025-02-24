import { type SchemaTypeDefinition } from 'sanity'
import { author } from './autor';
import { project } from './project';
import { playlist } from './playlist';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, project, playlist],
};
