import { mkdir, writeFile } from "node:fs/promises";

await mkdir(new URL("../dist/server/", import.meta.url), { recursive: true });

const worker = `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`;

await writeFile(new URL("../dist/server/index.js", import.meta.url), worker);

const wrangler = {
  name: "kpa-ax-festival-2026",
  compatibility_date: "2026-08-12",
  main: "index.js",
  no_bundle: true,
  rules: [{ type: "ESModule", globs: ["**/*.js", "**/*.mjs"] }],
  assets: { directory: "../client" }
};

await writeFile(
  new URL("../dist/server/wrangler.json", import.meta.url),
  `${JSON.stringify(wrangler)}\n`
);
