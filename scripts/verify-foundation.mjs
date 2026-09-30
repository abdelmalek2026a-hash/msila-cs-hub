import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const requiredFiles = [
  "app/page.tsx",
  "app/layout.tsx",
  "app/globals.css",
  "app/error.tsx",
  "app/loading.tsx",
  "app/not-found.tsx",
  "app/api/health/route.ts",
  "components/icon.tsx",
  ".env.example",
  ".gitignore",
  ".github/workflows/ci.yml",
  "docs/ARCHITECTURE.md",
  "docs/ROUTE-CONTRACT.md",
  "docs/SECURITY-REVIEW.md",
  "docs/RISK-REGISTER.md",
];

for (const file of requiredFiles) {
  assert.ok(fs.existsSync(path.join(root, file)), `Missing required file: ${file}`);
}

const pkg = JSON.parse(read("package.json"));
assert.equal(pkg.scripts.typecheck, "tsc --noEmit");
assert.equal(pkg.scripts.build, "next build");
assert.equal(pkg.scripts["foundation:verify"], "node scripts/verify-foundation.mjs");

const tsconfig = JSON.parse(read("tsconfig.json"));
assert.equal(tsconfig.compilerOptions.jsx, "react-jsx");
assert.deepEqual(tsconfig.compilerOptions.paths?.["@/*"], ["./*"]);

const ci = read(".github/workflows/ci.yml");
assert.match(ci, /npm run foundation:verify/);
assert.match(ci, /npm run typecheck/);
assert.match(ci, /npm run build/);
assert.match(ci, /permissions:\n  contents: read/);
assert.match(ci, /cancel-in-progress: true/);

const page = read("app/page.tsx");
assert.doesNotMatch(page, /activeNav|setActiveNav/);
assert.doesNotMatch(page, /onClick=\{\(\) => set/);
assert.match(page, /بيانات تجريبية/);
assert.match(page, /desktopSearchInputRef/);
assert.match(page, /mobileSearchInputRef/);

const gitignore = read(".gitignore");
assert.match(gitignore, /^\.env\.local$/m);
assert.match(gitignore, /^\.env\.\*\.local$/m);
assert.match(gitignore, /^!\.env\.example$/m);

const envExample = read(".env.example");
for (const key of [
  "NEXT_PUBLIC_SUPABASE_URL=",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY=",
  "SUPABASE_SERVICE_ROLE_KEY=",
  "GEMINI_API_KEY=",
]) {
  assert.match(envExample, new RegExp(`^${key}$`, "m"));
}

for (const file of ["app", "components", "scripts", "docs"]) {
  assert.ok(fs.existsSync(path.join(root, file)), `Missing project area: ${file}`);
}

console.log("Foundation verification passed.");
