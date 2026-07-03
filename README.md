# AppSend

AppSend is a single-page lead tracking and application-sending tool for managing job applications from a spreadsheet. It lets you import company leads from Excel or CSV, open prefilled email drafts, mark companies as applied, and keep your template and progress saved locally in the browser.

## What it does

- Import leads from `.xlsx`, `.xls`, or `.csv` files.
- Auto-detect common spreadsheet columns such as company name, email, role, location, work setup, and careers URL.
- Display each company as a card with all available email addresses.
- Open your mail app with a prefilled subject and message.
- Mark companies as applied and track progress visually.
- Search and filter the list by company, role, location, or status.
- Switch between light and dark themes.
- Edit the reusable email template and save it automatically.
- Reset imported data and applied status without losing the template.

## How it works

AppSend is built as a plain HTML, CSS, and JavaScript app. There is no build step, backend, or database.

- `index.html` contains the layout, modals, and controls.
- `styles.css` handles the visual design, responsive layout, and theme styling.
- `script.js` contains all application logic, including import parsing, filtering, template editing, local persistence, and mailto link generation.

The app stores user state in browser storage. If the environment supports `window.storage`, AppSend uses that; otherwise it falls back to `localStorage`.

## Quick start

1. Open the project folder in VS Code or any editor.
2. Open `index.html` in a browser.
3. Import a spreadsheet with your lead list.
4. Edit the email template if needed.
5. Click Send on a company card to open your mail client with the draft filled in.

If you prefer a local server instead of opening the file directly, use a simple static server extension such as Live Server.

## Spreadsheet import format

AppSend scans the first sheet and any additional sheets in the workbook, then converts rows to company entries. It looks for columns by keyword rather than requiring an exact header name.

### Commonly recognized columns

- Company name: `company`
- Email: `email`, `careersemail`, `contactemail`, `emailcontact`
- Role: `role`, `position`, `target`, `bestfor`, `besffor`
- Location: `location`
- Work setup: `worksetup`, `setup`
- Careers URL: `careersapplyurl`, `careerspageurl`, `careerspage`, `applyurl`, `sourceurl`, `url`

### Import rules

- A row must contain a valid company name and at least one valid email address.
- Multiple email addresses can be separated by commas or semicolons.
- Duplicate companies are merged by name.
- New email addresses are added to existing companies if they are not already present.
- If a row includes a careers URL and the existing company does not already have one, it will be added.

## Email template

The template editor lets you customize the subject and body used for every email draft.

Supported placeholders:

- `{{company}}` replaces with the company name.
- `{{role}}` replaces with the role from the lead entry.

Template changes save automatically, and the app keeps the latest template in browser storage.

## Data persistence

The app remembers the following in browser storage:

- Theme preference
- Applied status for each company
- Imported companies
- Email subject and body template
- Template version

### Reset behavior

The Reset all data action clears:

- Imported companies
- Applied marks
- Search and filter state in the UI

It does not clear the saved email template.

## UI features

- Left panel for import, template editing, and stats
- Right panel for search, filtering, and company cards
- Toast notifications for feedback
- Modal dialogs for template editing and reset confirmation
- Responsive card-based lead list

## Browser and dependency notes

AppSend loads a few external assets at runtime:

- Google Fonts for typography
- `xlsx` from a CDN for spreadsheet parsing

Because of this, the app should be opened with an internet connection if you want fonts and spreadsheet import support to load correctly.

## Project structure

```text
index.html
script.js
styles.css
README.md
```

## Troubleshooting

### Import fails

Make sure the file is a valid `.xlsx`, `.xls`, or `.csv` export and that it includes at least one company name and one valid email address.

### Emails do not open correctly

The app uses `mailto:` links. Your system mail client or browser mail handler must be configured for those links.

### Saved changes seem missing

State is stored in the browser. Clearing site data, switching browsers, or using private browsing can remove saved progress.

## License

No license has been specified for this project.
