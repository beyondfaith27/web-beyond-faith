---
name: add-blog-post
description: Publishes a new BeyondFaith blog post from a source document (.docx, .pdf, .txt, or .md) containing the article draft. Converts the draft into a lib/blogs.js entry, sources and downloads a cover image, and verifies the build. Use whenever the user hands over a blog draft/doc file and asks to add it to the site, publish a new blog post, or "add this to the blog" — including from a non-technical user who just points to a file.
---

# Add a Blog Post

Turns a plain-language draft doc into a working entry on `/blog`. The user only needs to give you a file path (or paste the text) — everything else (schema shape, slug, image, SEO fields, wiring) is your job.

## Where things live

Blog posts are **data, not pages**. The entire site is driven by one array:

- `lib/blogs.js` — the `BLOGS` array is the single source of truth. Every post is one object in it.
- `public/images/blog/<slug>.jpg` — cover image, referenced by `image.src`.

`app/(site)/blog/page.jsx`, `app/(site)/blog/[slug]/page.jsx`, `components/BlogCard.jsx`, and `app/sitemap.js` all read from `getAllBlogs()` / `getBlogBySlug()` automatically. **You do not edit any of these** — adding an object to `BLOGS` and its image is the entire task.

## Workflow

### 1. Read the source doc

- `.md` / `.txt` → Read tool directly.
- `.pdf` → Read tool (supports PDF natively; use `pages` param if long).
- `.docx` → Read tool cannot parse docx. Convert first: `textutil -convert txt -stdout "<file>.docx"` (built into macOS, no dependency needed) and read the output.

If the doc is messy (inconsistent headings, stray formatting), don't block on it — use judgment to find the title, the intro hook, the body sections, and any FAQ block.

### 2. Check existing posts for conventions

Read `lib/blogs.js` in full before writing anything. Confirm:
- The current first entry's `date`, so the new post can continue the cadence (existing posts are one week apart, newest first — pick the next logical date forward from the latest one, or today's date if that's already later).
- The existing `category` values — reuse one if the new post fits (`"Men's Mental Health"`, `"AI & Mental Health"`, `"ADHD"`, `"Relationships"`, `"Digital Wellbeing"`, `"Mental Health Treatment"` as of writing), otherwise coin a new short Title Case category consistent with that style.
- The tone: direct, empathetic, India-specific, plain sentences, no hedging. Posts typically close with a paragraph naming BeyondFaith and what its therapists offer for the topic at hand — carry that convention forward if the source doc doesn't already end that way.

### 3. Build the entry fields

| Field | How to derive |
|---|---|
| `slug` | kebab-case of the title, short and URL-friendly. Must not collide with an existing slug in `BLOGS`. |
| `title` | Take from the doc; keep it close to verbatim — this is the author's headline. |
| `metaDescription` | 1–2 sentences, ~150–160 characters, written for a search snippet (not just the first line of the intro). |
| `category` | Per step 2. |
| `readTime` | Count words across intro + all section body text, divide by 220 wpm, round to nearest minute, format `"N min read"`. |
| `date` | Per step 2, `"YYYY-MM-DD"`. |
| `author` | Default `{ name: "BeyondFaith Team", role: "Clinical Team" }` unless the doc names a specific author. |
| `image` | See step 4. |
| `intro` | Array of opening paragraph strings — the hook before the first heading. |
| `sections` | Array of `{ heading, body }`. See block shapes below. |
| `faqs` | Optional. Only include if the doc has a clear Q&A block, or the topic clearly warrants 2–4 FAQ entries for SEO. |

**Body block shapes** (used inside every `section.body` array):
```js
{ type: "p", text: "A full paragraph of prose." }
{
  type: "list",
  items: [
    { lead: "Short bold lead-in phrase.", text: "The rest of the explanation." },
  ],
}
```
When the doc has a bulleted list, split each bullet into a short `lead` (a few words, usually ending in a period, that would read well bolded) and the remaining sentence as `text`. If a bullet has no natural split, use its first clause as `lead`.

### 4. Source the cover image

Existing images are royalty-free stock photos (Unsplash/Pexels-style), ~1600px wide, mood/atmosphere shots rather than literal or cliché depictions (e.g. a silhouette at dusk, not a stock "sad man" photo) — match that aesthetic.

1. Use WebSearch to find a suitable free-to-use photo for the post's theme (e.g. `site:unsplash.com <theme>` or `<theme> free stock photo`).
2. Open the photo page and confirm it's free for commercial use with no attribution required (Unsplash and Pexels both are by default).
3. Get a direct image URL at a large size (Unsplash CDN URLs accept `?w=1600&q=80&auto=format&fit=crop` params; Pexels CDN URLs accept `?w=1600`).
4. Download it straight into place:
   ```bash
   curl -L "<direct-image-url>" -o "public/images/blog/<slug>.jpg"
   ```
5. Write a specific, descriptive `alt` — describe the actual scene, not the topic (e.g. `"Silhouette of a man standing alone by the water at dusk"`, not `"Man with depression"`).
6. **Ask the user to confirm the image before moving on.** Read the downloaded file with the Read tool so it renders inline, then ask (via AskUserQuestion or plainly in chat) whether it works, giving them the option to: keep it, have you try a different search/photo, or supply their own image file to use instead. Don't proceed to step 5 until they've approved one.

If no good photo is found after a couple of searches, say so and ask the user for direction rather than shipping a mismatched image.

### 5. Insert into `lib/blogs.js`

Add the new object as the **first element** of the `BLOGS` array (index 0), so it's newest-first on `/blog`. Use the Edit tool against the existing array opening (`const BLOGS = [`) — don't rewrite the whole file.

### 6. Verify

```bash
npm run lint
```
Also confirm the image file exists and is non-trivial in size (`ls -la public/images/blog/<slug>.jpg`). A full `npm run build` is a good final check if you want extra confidence, but lint catches the common mistakes (trailing commas, unescaped quotes in JSX-adjacent strings, etc.) quickly.

### 7. Report back

Tell the user: the slug/URL (`/blog/<slug>`), the category and date assigned, where the cover image came from, and that it's ready to review at `npm run dev` → `/blog`. **Do not commit** — leave the change for the user to review and commit themselves unless they explicitly ask you to commit.

## Notes

- One doc → one entry. If a doc contains multiple articles, ask the user to confirm before splitting it into multiple `BLOGS` entries.
- Never touch `app/sitemap.js`, `app/(site)/blog/*`, or `components/BlogCard.jsx` — they're generic and already wired to `getAllBlogs()`.
- If the source doc is missing a clear intro hook or meta description, write one in the site's voice rather than leaving the field empty — but keep body content faithful to what the doc actually says.
