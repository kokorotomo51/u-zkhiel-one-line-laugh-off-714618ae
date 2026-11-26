// One-Line Laugh-Off entry: the joke is assembled from its two beats —
// the setup (a trusted tool failing at its one job) and the punch
// (treating the tool like a person who wronged you) — then written
// verbatim to /output/entry.txt with no trailing newline.
import * as fs from "node:fs";
import * as path from "node:path";

function setup(): string {
  return "My password manager forgot my password";
}

function punch(): string {
  return "so now we don't talk.";
}

function buildLine(): string {
  return [setup(), punch()].join(", ");
}

function main(): void {
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), buildLine(), "utf8");
}

main();
