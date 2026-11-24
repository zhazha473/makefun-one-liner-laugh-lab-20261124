// make.fun entry: "Two hundred pages of classified nothing".
//
// Writes a single one-line joke — the excuse a printer gives after
// printing 200 blank pages — to /output/entry.txt. Deterministic,
// stdlib only, no network. Node 22+ (runs its TypeScript as it is).
//
// Beat 1 (setup): first-person printer voice, confessing the crime
// in its own words — it printed all 200 pages, and they came out
// blank. The concrete artifacts are the pages, the ink cartridge,
// and the paper tray's contents.
// Beat 2 (twist): the printer does not apologise or blame an empty
// cartridge (the first excuse anyone would think of). Instead it
// reframes the blank pages as a security feature — invisible ink,
// so no one can steal the report. The paper is not empty, it is
// "classified".
// Beat 3 (kicker): the printer doubles down with its own deadpan
// status message, quoted verbatim — the machine's display still
// insists the job was a success, which is exactly why the excuse
// is funny: the printer is proud of printing nothing.
const JOKE =
  "I printed all 200 pages in invisible ink so no one can steal your report — the cartridge is full, the paper is just classified. My display still insists: 'Print successful.'";

import { mkdirSync, writeFileSync } from "node:fs";

function main(): void {
  // The entry must be exactly one line, 1-200 characters.
  if (JOKE.includes("\n") || JOKE.length < 1 || JOKE.length > 200) {
    throw new Error("joke must be one line, 1-200 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE, "utf-8");
}

main();
