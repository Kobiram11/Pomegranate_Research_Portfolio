# Pomegranate Research Portfolio (R26-IT-087)

Academic research group portfolio for **An AI-Based Intelligent Farming System for Improving Pomegranate Yield and Quality**, Department of Information Technology, SLIIT.

The site uses **only HTML5 and CSS3**. There is no JavaScript, no framework and no backend. Documents, slides and photographs are stored on Google Drive and linked from the site.

## Folder structure

```
index.html       All seven sections and all content
links.html       Separate page listing every Google Drive folder and file link
css/styles.css   All styles (light theme: blue, green and red)
README.md        This file
```

## Running the site

Double-click `index.html`, or run a local server in this folder:

```
python -m http.server 8000
```

Then open <http://localhost:8000>. Refresh the browser after every edit.

---

## Quick guide: where do I put each link?

| What you want to change | File | Search for |
|---|---|---|
| Logo | `index.html` and `links.html` | `LOGO_FILE_ID` |
| Supervisor / co-supervisor / member photo | `index.html` | the person's name, then the `person-photo` block |
| Supervisor / member name, email, details | `index.html` | `6. ABOUT US` |
| A document (proposal, PP1, PP2, final, thesis) | `index.html` | the document title, e.g. `PP1 Report – Banuja S` |
| A presentation | `index.html` | `5. PRESENTATIONS` |
| Group email | `index.html` | `7. CONTACT US` |
| Drive folder list | `links.html` | `Folders` |

In VS Code / Cursor press **Ctrl+F** to search inside a file.

---

## Step 1: Name the file before uploading to Drive

The website does **not** read file names. Only the file ID inside the link matters. Clear names simply help the group find files in Drive. Use this pattern:

| File | Drive folder | Suggested file name |
|---|---|---|
| Logo | Photos | `R26-IT-087_logo.png` |
| Supervisor photo | Photos | `supervisor_Shashika_Lokuliyana.jpg` |
| Co-supervisor photo | Photos | `cosupervisor_FirstName_LastName.jpg` |
| Member photo | Photos | `IT22281296_Thishoharini_V.jpg` (student ID first) |
| Project charter / TAF | TAF | `R26-IT-087_TAF.pdf` |
| Group document | PP1 / PP2 / Final | `R26-IT-087_PP1_Checklist.pdf`, `R26-IT-087_Final_Group_Report.pdf` |
| Individual document | Proposal / PP1 / PP2 | `R26-IT-087_PP1_IT22188304_Banuja_S.pdf` |
| Individual thesis | Theses | `R26-IT-087_Thesis_IT22245656_Kobiram_T.pdf` |
| Slides | Presentation folder | `R26-IT-087_PP1_Slides.pptx` |

Photo tips: use a real photograph of the person (no stock or AI faces), square or portrait, face centred, at least 400 × 400 pixels, JPG or PNG, under 1 MB.

## Step 2: Upload and share

1. Open the correct Drive folder (all folders are listed in `links.html`).
2. Click **New > File upload** and choose the file.
3. Right-click the uploaded file > **Share > Share**.
4. Under **General access**, choose **Anyone with the link** and **Viewer**. Click **Done**.
   (If this is not set, the photo or file will not open for visitors.)

## Step 3: Copy the link and find the FILE_ID

Right-click the file > **Share > Copy link**. You get something like:

```
https://drive.google.com/file/d/1x3sfDbMzdo9rTO3DQ6ONRsk2vMdB0B47/view?usp=sharing
```

The **FILE_ID** is the part between `/d/` and `/view`:

```
1x3sfDbMzdo9rTO3DQ6ONRsk2vMdB0B47
```

For Google Docs and Slides the link looks like `https://docs.google.com/document/d/FILE_ID/edit...`. The FILE_ID is again the part after `/d/`.

## Step 4: Put the link on the website

### Photos (supervisor, co-supervisor, members)

A Drive "view" link is a web page, not an image, so it cannot be used directly. Use this image link instead, with your FILE_ID:

```
https://lh3.googleusercontent.com/d/FILE_ID=w600
```

You can test it by pasting it into a browser tab: it must show only the photo.

In `index.html`, search for the person's name. Each person has a photo block. Members currently look like this:

```html
<div class="person-photo" role="img" aria-label="Initials of Banuja S (photograph not available)">
  <span class="avatar-initials" aria-hidden="true">BS</span>
  <!-- Photo: IT22188304_Banuja_S.jpg -> <img src="https://lh3.googleusercontent.com/d/FILE_ID=w600" alt="" width="160" height="160" loading="lazy" decoding="async" referrerpolicy="no-referrer"> -->
</div>
```

Change it to this (remove the comment, paste the FILE_ID, update the label):

```html
<div class="person-photo" role="img" aria-label="Photograph of Banuja S, Group Member">
  <span class="avatar-initials" aria-hidden="true">BS</span>
  <img src="https://lh3.googleusercontent.com/d/PASTE_FILE_ID_HERE=w600" alt="" width="160" height="160" loading="lazy" decoding="async" referrerpolicy="no-referrer">
</div>
```

The photo then loads directly in the profile card. No "View photo" button is needed. If the photo cannot load, the initials stay visible behind it. The supervisor card already uses this format.

### Logo

1. Upload the logo (PNG with transparent background is best) to the **Photos** folder and share it (Step 2).
2. Get its FILE_ID (Step 3).
3. In `index.html` **and** `links.html`, search for `LOGO_FILE_ID`. You will see:

```html
<!-- LOGO: ...
<img class="brand-logo" src="https://lh3.googleusercontent.com/d/LOGO_FILE_ID=w200" alt="" width="44" height="44">
-->
```

4. Delete the `<!-- LOGO: ...` line and the `-->` line, and replace `LOGO_FILE_ID` with the real FILE_ID:

```html
<img class="brand-logo" src="https://lh3.googleusercontent.com/d/PASTE_FILE_ID_HERE=w200" alt="" width="44" height="44">
```

### Documents

Each document is one `<article class="doc-card">` block in the Documents section. To make a pending file available, find its card (search for its title) and replace it with this pattern:

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

To add a brand-new document, copy any card, paste it in the same section and edit it. Set these values carefully, because they control the filters and the owner shown on the card:

| Attribute | Allowed values |
|---|---|
| `data-category` | `charter`, `proposal`, `pp1`, `pp2`, `final`, `theses` |
| `data-type` | `group` (common document) or `individual` |
| `data-owner` | `group`, `thishoharini`, `sowmiya`, `banuja`, `kobiram` |
| status | `is-available` with View and Download buttons, or `is-pending` with `<p class="pending-note">Pending upload</p>` and no links |

Ownership comes only from these attributes, never from folder names or file names. Inside HTML, write `&` in links as `&amp;`. Never use `href="#"`.

### View and Download link formats

| File kind | View link | Download link |
|---|---|---|
| Uploaded PDF, PPTX, DOCX | `https://drive.google.com/file/d/FILE_ID/view?usp=sharing` | `https://drive.google.com/uc?export=download&id=FILE_ID` |
| Google Doc | `https://docs.google.com/document/d/FILE_ID/edit?usp=sharing` | `https://docs.google.com/document/d/FILE_ID/export?format=pdf` |
| Google Slides | `https://docs.google.com/presentation/d/FILE_ID/edit?usp=sharing` | `https://docs.google.com/presentation/d/FILE_ID/export/pptx` |

- If a copied link contains `resourcekey=...`, keep it in both links.
- The HTML `download` attribute does not force downloads from Google Drive, so the site uses the download/export links above.
- For large files Google may show a "can't scan for viruses" page first. This is normal.

### Presentations

Same as documents, in the `5. PRESENTATIONS` section (no filter attributes needed).

## Step 5: Save and publish

Save the HTML file, refresh the browser to check it, then upload or redeploy the changed file to the hosting.

**Uploading a file into Drive does not update the website by itself.** The site does not scan Drive folders. Every file needs its card or link added in the HTML.

---

## Replacing a file but keeping the same link

For an uploaded file (PDF, PPTX, DOCX, JPG): right-click it in Drive > **File information > Manage versions > Upload new version**. The FILE_ID stays the same, so the website needs no change.

Uploading a separate new file creates a new FILE_ID. Then you must update the link in the HTML. Google Docs and Slides keep their FILE_ID when edited directly.

## Missing information

Write `To be confirmed` for details that are not known yet. Do not invent names, dates, marks, results or contact details.

## How the interactive parts work without JavaScript

| Feature | How it works |
|---|---|
| Document filters | Radio buttons styled as chips; CSS `:has()` hides cards that do not match. "Clear filters" is a form reset button. |
| Result count | CSS counters count only the visible cards. |
| Assessment details | Native `<details>` panels (keyboard accessible). |
| Photo fallback | Initials sit behind the photo and remain visible if it fails. |
| Email | `mailto:` link labelled "Open email app". |

Title search is not included (it needs JavaScript); visitors can use Ctrl+F. Filters need a current browser (Chrome/Edge 105+, Safari 15.4+, Firefox 121+); older browsers show all documents.

## Accessibility

Skip link, keyboard-operable filters with visible focus outlines, labelled filter groups, logical headings and reduced-motion support are built in.
