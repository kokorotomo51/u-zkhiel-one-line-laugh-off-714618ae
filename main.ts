// One-Line Laugh-Off entry, revised assembly: the joke is built from an
// ordered fragment table — subject, failure, consequence — joined with
// the exact punctuation the line needs, then written verbatim to
// /output/entry.txt with no trailing newline.
import * as fs from "node:fs";
import * as path from "node:path";

const BEATS: string[] = [
  "My password manager",
  "forgot my password",
  "so now we don't talk.",
];

function assemble(beats: string[]): string {
  const [subject, failure, consequence] = beats;
  return `${subject} ${failure}, ${consequence}`;
}

function main(): void {
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), assemble(BEATS), "utf8");
}

main();
