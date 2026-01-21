// Add new entries here.
// "written" controls the displayed date AND the sorting order on the homepage.
// Format: YYYY-MM-DD

const posts = [
  {
    id: "about",
    title: "About",
    written: "2026-01-21",
    tags: ["about"],
    excerpt: "A small place for poems, fragments, and journal entries.",
    body:
`This space is a quiet place for my words.

I’m part of a creative writing club, and this blog exists as a home for the things I write — poems, short reflections, fragments of thought, and pieces that start life in a physical journal before finding their way here.

Some entries are recent. Some are written months or years ago and shared later. Posts appear when they were written, not when they were uploaded.

If you’re reading this, thank you for taking the time to sit with my work.

— Marian`
  },

  {
    id: "first-entry",
    title: "First Entry",
    written: "2025-12-05",
    tags: ["reflection", "journal"],
    excerpt: "A small beginning — the kind that doesn’t shout.",
    body:
`This is a sample entry.

Write your post in paragraphs, leaving a blank line between each one.

You can backdate entries by changing the "written" date in posts.js.`
  },

  {
    id: "club-notes",
    title: "Creative Writing Club Notes",
    written: "2026-01-10",
    tags: ["club", "notes"],
    excerpt: "Little things I’m learning about writing.",
    body:
`Sometimes the best line in the whole piece is the one you almost delete.

Sometimes the draft is the point.`
  }
];
