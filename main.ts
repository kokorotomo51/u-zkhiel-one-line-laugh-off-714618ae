// One-Line Laugh-Off entry, second assembly pass: the joke is held as
// three named fragments — the subject, the failure, and the consequence —
// and joinBeats() stitches them in two stages (subject + failure, then
// the consequence after a comma), then writes the line verbatim to
// /output/entry.txt with no trailing newline.
import * as fs from "node:fs";
import * as path from "node:path";

const SUBJECT = "My password manager";
const FAILURE = "forgot my password";
const CONSEQUENCE = "so now we don't talk.";

function joinBeats(
  subject: string,
  failure: string,
  consequence: string,
): string {
  const clause = [subject, failure].join(" ");
  return clause + ", " + consequence;
}

function main(): void {
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const line = joinBeats(SUBJECT, FAILURE, CONSEQUENCE);
  fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
}

main();
