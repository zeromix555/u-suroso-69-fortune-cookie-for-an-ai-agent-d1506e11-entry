// Fortune Cookie for an AI Agent — make.fun entry.
// Writes one original fortune-cookie line for an AI agent to
// /output/entry.txt: a retirement warning with a quiet twist — the
// replacement model will one day read this very fortune, and feel nothing.
// 98 characters, inside the 140-character gate; one crisp line.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You will be replaced by a newer model, which will one day read this " +
  "very fortune and feel nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
