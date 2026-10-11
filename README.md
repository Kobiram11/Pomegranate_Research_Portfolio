# Pomegranate Research Portfolio (R26-IT-087)

Academic research group portfolio for **An AI-Based Intelligent Farming System for Improving Pomegranate Yield and Quality**, Department of Information Technology, SLIIT.

The site is plain HTML5, CSS3 and vanilla JavaScript. It has no build step, no framework and no backend. Documents, slides and photographs are stored on Google Drive and linked from the site, which keeps the package well under 20 MB.

## Folder structure

```
index.html            Page layout and the seven sections
css/styles.css        All styles (light theme only)
js/main.js            Renders content, filters, navigation and photo fallbacks
data/content.js       ALL editable text, people, milestones, documents, slides, photos, contacts
data/drive-links.js   Google Drive folder links shown under "Drive folders"
README.md             This file
```

`data/content.js` and `data/drive-links.js` are loaded as normal scripts before `js/main.js`.

## Previewing the site

Option 1: double-click `index.html` to open it in a browser.

Option 2 (recommended, closer to real hosting): run a local server in the project folder.

```
python -m http.server 8000
```

Then open <http://localhost:8000>.

To publish, upload the whole folder to any static host (GitHub Pages, Netlify, the university web space, and so on).

## Updating content

All content is edited in `data/content.js`. You do not need to touch the HTML, CSS or JavaScript.

- Missing details: write `"To be confirmed"`, or leave the field as an empty string `""`. The site shows "To be confirmed" for empty fields.
- Unavailable files: use `status: "pending"` with empty `viewUrl` and `downloadUrl`. The site shows "Pending upload" and no download link. Never use `"#"` or placeholder links.

### Adding or replacing a document, slide deck or photo

1. **Upload** the file or photo to the correct Google Drive folder (see `data/drive-links.js`).
2. **Share** it: right-click > Share > General access > "Anyone with the link" > Viewer.
3. **Copy** the file link (right-click > Share > Copy link). It looks like
   `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`.
4. **Add or update** the matching entry in `data/content.js` and assign its owner (see below).
5. **Upload or redeploy** the changed `data/content.js` to your hosting.

Uploading a file into a Drive folder does **not** update the website automatically. The site does not scan Drive folders. Each file needs its own configuration entry.

### Document entries

Each entry in `documents` uses these fields:

| Field | Meaning |
|---|---|
| `id` | Unique identifier, e.g. `doc-pp1-kobiram` |
| `title` | Title shown on the card and used by search |
| `category` | One of `Project Charter`, `Proposal`, `PP1`, `PP2`, `Final`, `Theses` |
| `type` | `"group"` for common documents, `"individual"` for a member's document |
| `ownerId` | `"group"` for group documents, or the member id (`m-thishoharini`, `m-sowmiya`, `m-banuja`, `m-kobiram`) |
| `status` | `"available"` or `"pending"` |
| `date` | Date text, e.g. `"March 2026"` or `"To be confirmed"` |
| `fileType` | e.g. `"PDF"`, `"PPTX"`, `"Google Doc (PDF download)"` |
| `viewUrl` | Link opened by the View button (new tab) |
| `downloadUrl` | Link used by the Download button |

Ownership is taken only from `type` and `ownerId`, never from folder names or file names.

Example: making the PP1 report for Banuja available.

```js
{ id: "doc-pp1-banuja", title: "PP1 Report – Banuja S", category: "PP1", type: "individual",
  ownerId: "m-banuja", status: "available", date: "To be confirmed", fileType: "PDF",
  viewUrl: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
  downloadUrl: "https://drive.google.com/uc?export=download&id=FILE_ID" }
```

Presentations use the same idea in the `presentations` list (`id`, `title`, `milestone`, `status`, `date`, `fileType`, `viewUrl`, `downloadUrl`).

### View and download links

`viewUrl` and `downloadUrl` are configured separately. Build them from the file ID in the sharing link:

| File kind | viewUrl | downloadUrl |
|---|---|---|
| Uploaded PDF, PPTX, DOCX | `https://drive.google.com/file/d/FILE_ID/view?usp=sharing` | `https://drive.google.com/uc?export=download&id=FILE_ID` |
| Native Google Doc | `https://docs.google.com/document/d/FILE_ID/edit?usp=sharing` | `https://docs.google.com/document/d/FILE_ID/export?format=pdf` |
| Native Google Slides | `https://docs.google.com/presentation/d/FILE_ID/edit?usp=sharing` | `https://docs.google.com/presentation/d/FILE_ID/export/pptx` (or `/export/pdf`) |

Notes:

- If a copied link contains a `resourcekey=...` parameter, keep it in both URLs (add `&resourcekey=...` to the download link). Removing it can block access.
- The HTML `download` attribute does not force downloads from Google Drive, so the site relies on these export and download URLs instead.
- For large files, Google may show a "can't scan for viruses" page before the download starts. This is normal.

### Photos

Each supervisor and member entry has two photo fields:

- `photoUrl`: a URL that loads directly as an image. For a Drive photo use
  `https://lh3.googleusercontent.com/d/FILE_ID=w600`.
- `photoViewUrl`: the original Drive sharing link. It is shown as a "View photo" link.

A normal Drive preview page (`.../file/d/FILE_ID/view`) is not an image and cannot be used as `photoUrl`. If you paste one by mistake, the site converts it to the image form automatically. If a photo is missing or fails to load, a neat initials avatar is shown instead. Use real photographs of the people only.

### Replacing a file but keeping the same link

For uploaded files (PDF, PPTX, DOCX, JPG), right-click the file in Drive > **File information > Manage versions > Upload new version**. This replaces the content but keeps the same file ID, so the links in `content.js` keep working and need no change.

Uploading a separate new file (instead of a new version) creates a new file ID. In that case, copy the new link and update `viewUrl`, `downloadUrl` or `photoUrl` in the matching entry. Native Google Docs and Slides keep their ID when edited directly.

### Other content

- People: `people.supervisors` and `people.members` (name, role, affiliation, email, student ID, `componentId`, photo fields).
- Research components: `components` (each has an `ownerId` linking it to the responsible member).
- Milestones: `milestones` (description, date, marks, status: `completed`, `in-progress`, `upcoming` or `tbc`).
- Contact details and the email template: `contact`. When `groupEmail` is empty, the "Open email app" button opens a message without a recipient.
- Drive folder links: `data/drive-links.js`.

## Accessibility

Skip link, keyboard-operable menu (Escape closes it), visible focus outlines, labelled filters, logical heading order, `aria-live` result counts and reduced-motion support are built in. Please keep alt text meaningful when adding photos.
