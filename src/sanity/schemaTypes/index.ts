import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { navlinks } from "./navlinks";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, navlinks],
};
