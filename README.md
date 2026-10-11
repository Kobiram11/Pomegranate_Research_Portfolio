# Pomegranate Research Portfolio (R26-IT-087)

Academic research group portfolio for **An AI-Based Intelligent Farming System for Improving Pomegranate Yield and Quality**, Department of Information Technology, SLIIT.

The site uses **only HTML5 and CSS3**. It has no JavaScript, no framework, no build step and no backend. Documents, slides and photographs are stored on Google Drive and linked from the site, which keeps the package well under 20 MB.

## Folder structure

```
index.html       All seven sections and all content (Home, Domain, Milestones,
                 Documents, Presentations, About Us, Contact Us)
links.html       Separate page with every Google Drive folder and file link
css/styles.css   All styles (light theme only) and the CSS-only document filters
README.md        This file
```

## Previewing the site

Option 1: double-click `index.html` to open it in a browser.

Option 2: run a local server in the project folder, then open <http://localhost:8000>.

```
python -m http.server 8000
```

To publish, upload the folder to any static host (GitHub Pages, Netlify, university web space, and so on).

## How the interactive parts work without JavaScript

| Feature | How it works |
|---|---|
| Document filters (category, Group/Individual, member) | Radio buttons styled as chips. CSS `:has()` hides cards that do not match. "Clear filters" is a normal form reset button. |
| Result count | CSS counters count only the visible cards. |
| Assessment dropdown | Native `<details>` panels (keyboard and screen-reader accessible). |
| Photo fallback | The initials avatar sits underneath the photo. If the photo is missing or fails to load, the initials remain visible. |
| Email | A `mailto:` link labelled "Open email app" with the subject and message prefilled. |
| Mobile navigation | The menu links wrap onto extra lines on small screens. |

Title search is not included because text search needs JavaScript. Visitors can use the browser's own find (Ctrl+F / Cmd+F).

The filters need a current browser with `:has()` support (Chrome/Edge 105+, Safari 15.4+, Firefox 121+). In older browsers all documents are simply shown.

## Updating content

All content is edited directly in `index.html`. Each section is marked with a comment such as `<!-- 4. DOCUMENTS -->`.

- Missing details: write `To be confirmed`.
- Unavailable files: show the `Pending upload` badge and note, with no links. Never use `href="#"` or placeholder links.

### Adding or replacing a document, slide deck or photo

1. **Upload** the file or photo to the correct Google Drive folder (listed in `links.html`).
2. **Share** it: right-click > Share > General access > "Anyone with the link" > Viewer.
3. **Copy** the file link. It looks like `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`.
4. **Add or update** the matching card in `index.html` (and the row in `links.html`), and set its group or member owner.
5. **Upload or redeploy** the changed HTML file to your hosting.

Uploading a file into a Drive folder does **not** update the website automatically. The site does not scan Drive folders. Each file needs its own card.

### Document cards

Every document is one `<article class="doc-card">` block. Copy an existing block and edit it.

```html
<article class="card doc-card is-available" data-category="pp1" data-type="individual" data-owner="banuja">
  <div class="doc-top"><span class="doc-category">PP1</span><span class="badge badge-available">Available</span></div>
  <h3>PP1 Report – Banuja S</h3>
  <p class="owner-pill owner-individual">Individual · Owner: Banuja S (IT22188304)</p>
  <dl class="doc-meta"><div><dt>Date:</dt><dd>To be confirmed</dd></div><div><dt>File type:</dt><dd>PDF</dd></div></dl>
  <div class="doc-actions">
    <a class="btn btn-primary btn-small" href="https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
       target="_blank" rel="noopener noreferrer" aria-label="View PP1 Report of Banuja S (opens in a new tab)">View</a>
    <a class="btn btn-outline btn-small" href="https://drive.google.com/uc?export=download&amp;id=FILE_ID"
       target="_blank" rel="noopener noreferrer" aria-label="Download PP1 Report of Banuja S (PDF)">Download</a>
  </div>
</article>
```

The attributes control the filters and the ownership, so set them carefully:

| Attribute / class | Allowed values |
|---|---|
| `data-category` | `charter`, `proposal`, `pp1`, `pp2`, `final`, `theses` |
| `data-type` | `group` (common document) or `individual` |
| `data-owner` | `group`, `thishoharini`, `sowmiya`, `banuja`, `kobiram` |
| status class | `is-available` or `is-pending` (also change the badge and replace the buttons with `<p class="pending-note">Pending upload</p>`) |

Ownership comes only from these attributes and the owner label, never from folder names or file names. In URLs inside HTML, write `&` as `&amp;`.

Presentation cards in the Presentations section follow the same pattern without the filter attributes.

### View and download links

Configure the View and Download links separately, using the file ID from the sharing link:

| File kind | View link | Download link |
|---|---|---|
| Uploaded PDF, PPTX, DOCX | `https://drive.google.com/file/d/FILE_ID/view?usp=sharing` | `https://drive.google.com/uc?export=download&id=FILE_ID` |
| Native Google Doc | `https://docs.google.com/document/d/FILE_ID/edit?usp=sharing` | `https://docs.google.com/document/d/FILE_ID/export?format=pdf` |
| Native Google Slides | `https://docs.google.com/presentation/d/FILE_ID/edit?usp=sharing` | `https://docs.google.com/presentation/d/FILE_ID/export/pptx` (or `/export/pdf`) |

- If a copied link contains a `resourcekey=...` parameter, keep it in both links. Removing it can block access.
- The HTML `download` attribute does not force downloads from Google Drive, so the site uses these download and export URLs instead.
- For large files, Google may show a "can't scan for viruses" page before downloading. This is normal.

### Photos

Each person card has a photo block:

```html
<div class="person-photo" role="img" aria-label="Photograph of NAME, ROLE">
  <span class="avatar-initials" aria-hidden="true">AB</span>
  <img src="https://lh3.googleusercontent.com/d/FILE_ID=w600" alt="" width="120" height="120"
       loading="lazy" decoding="async" referrerpolicy="no-referrer">
</div>
```

- `img src` must be a link that loads directly as an image. For Drive photos use `https://lh3.googleusercontent.com/d/FILE_ID=w600`. A normal Drive preview page (`.../file/d/FILE_ID/view`) is not an image and will not work.
- Add a "View photo" link to the original Drive sharing link under the person's details (see the supervisor card).
- With no photo, delete the `<img>` line and change the `aria-label` to say the photograph is not available. The initials avatar is shown.
- Use real photographs of the people only.

### Replacing a file but keeping the same link

For uploaded files (PDF, PPTX, DOCX, JPG), right-click the file in Drive > **File information > Manage versions > Upload new version**. This replaces the content but keeps the same file ID, so the existing links keep working.

Uploading a separate new file creates a new file ID. In that case, copy the new link and update the View, Download or photo links. Native Google Docs and Slides keep their ID when edited directly.

### Contact email

The group email is to be confirmed, so "Open email app" opens a message with no recipient. When the address is known, put it straight after `mailto:` in the link (for example `mailto:group@example.com?subject=...`) and replace "To be confirmed" in the contact details.

## Accessibility

The site includes a skip link, keyboard-operable filters with visible focus outlines, labelled filter groups (`fieldset`/`legend`), logical heading order and reduced-motion support. Keep labels and `aria-label` text meaningful when adding content.
