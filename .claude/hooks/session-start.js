#!/usr/bin/env node
// SessionStart hook: tells a fresh session (possibly on a different Claude
// account) what happened in the most recent *other* session, by injecting the
// tail of its saved transcript. HANDOFF.md is already loaded via CLAUDE.md;
// this covers the case where the previous session ended without a /handoff.

const fs = require("fs");
const path = require("path");

const PROJECT_DIR = path.resolve(__dirname, "..", "..");
const OUT_DIR = path.join(PROJECT_DIR, "context", "transcripts");
const TAIL_CHARS = 8000;

function main() {
  let input = {};
  try {
    input = JSON.parse(fs.readFileSync(0, "utf8") || "{}");
  } catch {}

  let index = {};
  try {
    index = JSON.parse(fs.readFileSync(path.join(OUT_DIR, "index.json"), "utf8"));
  } catch {
    return;
  }

  const prev = Object.entries(index)
    .filter(([id]) => id !== input.session_id)
    .sort((a, b) => String(b[1].updated).localeCompare(String(a[1].updated)))[0];
  if (!prev) return;

  const [id, entry] = prev;
  const file = path.join(OUT_DIR, entry.file);
  if (!fs.existsSync(file)) return;
  const md = fs.readFileSync(file, "utf8");
  const tail = md.length > TAIL_CHARS ? "…(earlier part omitted)…\n" + md.slice(-TAIL_CHARS) : md;

  const msg = [
    "## Continuity: previous ARTEMIS session",
    "",
    `The most recent earlier session was ${id.slice(0, 8)} (last updated ${new Date(entry.updated).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}).`,
    `Its full transcript is at context/transcripts/${entry.file}; all sessions are listed in context/transcripts/INDEX.md.`,
    "If HANDOFF.md looks stale compared with the tail below, trust the transcript and update HANDOFF.md first.",
    "",
    "### Tail of that transcript",
    "",
    tail,
  ].join("\n");

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: { hookEventName: "SessionStart", additionalContext: msg },
    })
  );
}

try {
  main();
} catch (e) {
  process.stderr.write("session-start: " + (e && e.message) + "\n");
}
process.exit(0);
