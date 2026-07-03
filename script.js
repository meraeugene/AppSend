/* ---------------- Icons (lucide-style, inline) ---------------- */
const ICONS = {
  circle: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 9.01"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M5 21h14"/></svg>`,
  search: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
};
document.getElementById("iconUpload").innerHTML = ICONS.upload;
document.getElementById("iconSearch").innerHTML = ICONS.search;
document.getElementById("iconCaret").innerHTML = ICONS.chevronDown;
document.getElementById("iconEdit").innerHTML = ICONS.edit;
document.getElementById("iconTrash").innerHTML = ICONS.trash;

/* ---------------- Base data ---------------- */
const BASE_COMPANIES = [];

const DEFAULT_SUBJECT =
  "Application for Junior Frontend Developer / Web Developer – Andrew R. Villalon";
const DEFAULT_BODY = `Dear Hiring Manager,

I'm writing to apply for the Junior Frontend Developer / Web Developer position. I recently graduated with a BS in Information Technology from USTP-CDO and have hands-on experience building production interfaces in React, Next.js, and TypeScript across two internships (Open Sesame PH and Prodisenyo Builders Corp.), plus a solo AI-powered Machine Learning capstone project that won the 2026 Best Capstone Award.

I've attached my resume and cover letter for your review, along with links to my portfolio and GitHub below. I'd welcome the opportunity to discuss how I can contribute to your team.

Portfolio: andrewvillalon.online
GitHub: github.com/meraeugene
LinkedIn: linkedin.com/in/andrew-villalon

Thank you for your time and consideration. I look forward to hearing from you.

Sincerely,
Andrew R. Villalon
+63 994 758 0138
andrewvillalon.dev@gmail.com`;

const TEMPLATE_VERSION = "andrew-default-template-2026-07-03";
const KEYS = {
  theme: "theme-pref",
  applied: "applied-status",
  subject: "tmpl-subject",
  body: "tmpl-body",
  imported: "imported-companies",
  templateVersion: "tmpl-version",
};

const appStorage = {
  async get(key) {
    if (window.storage && typeof window.storage.get === "function")
      return window.storage.get(key);
    const value = localStorage.getItem(key);
    return value === null ? null : { value };
  },
  async set(key, value) {
    if (window.storage && typeof window.storage.set === "function")
      return window.storage.set(key, value);
    localStorage.setItem(key, String(value));
  },
  async delete(key) {
    if (window.storage && typeof window.storage.delete === "function")
      return window.storage.delete(key);
    localStorage.removeItem(key);
  },
};

let appliedMap = {};
let importedCompanies = [];
let subjectText = DEFAULT_SUBJECT;
let bodyText = DEFAULT_BODY;

function allCompanies() {
  return [...BASE_COMPANIES, ...importedCompanies];
}

/* ---------------- Toast ---------------- */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3600);
}

/* ---------------- Theme ---------------- */
function setTheme(mode, persist = true) {
  document.documentElement.setAttribute("data-theme", mode);
  document
    .getElementById("btnLight")
    .classList.toggle("active", mode === "light");
  document
    .getElementById("btnDark")
    .classList.toggle("active", mode === "dark");
  if (persist) appStorage.set(KEYS.theme, mode).catch(() => {});
}
document
  .getElementById("btnLight")
  .addEventListener("click", () => setTheme("light"));
document
  .getElementById("btnDark")
  .addEventListener("click", () => setTheme("dark"));

/* ---------------- Modals ---------------- */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  if (id === "templateModal")
    setTimeout(() => autoGrow(document.getElementById("bodyField")), 60);
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal-backdrop.show"))
    document.body.style.overflow = "";
}
document
  .getElementById("openTemplateBtn")
  .addEventListener("click", () => openModal("templateModal"));
document.querySelectorAll("[data-close-modal]").forEach((btn) => {
  btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});
document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal(backdrop.id);
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape")
    document
      .querySelectorAll(".modal-backdrop.show")
      .forEach((m) => closeModal(m.id));
});

function autoGrow(el) {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
}

let saveTimer;
async function saveTemplate(showSavedToast = false) {
  subjectText = document.getElementById("subjectField").value;
  bodyText = document.getElementById("bodyField").value;
  try {
    await appStorage.set(KEYS.subject, subjectText);
  } catch (e) {}
  try {
    await appStorage.set(KEYS.body, bodyText);
  } catch (e) {}
  try {
    await appStorage.set(KEYS.templateVersion, TEMPLATE_VERSION);
  } catch (e) {}
  refreshSendLinks();
  if (showSavedToast) showToast("Email template saved");
}
function debounceSaveTemplate() {
  subjectText = document.getElementById("subjectField").value;
  bodyText = document.getElementById("bodyField").value;
  refreshSendLinks();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => saveTemplate(true), 500);
}
document
  .getElementById("subjectField")
  .addEventListener("input", debounceSaveTemplate);
document.getElementById("bodyField").addEventListener("input", () => {
  autoGrow(document.getElementById("bodyField"));
  debounceSaveTemplate();
});
document
  .getElementById("subjectField")
  .addEventListener("blur", () => saveTemplate(false));
document
  .getElementById("bodyField")
  .addEventListener("blur", () => saveTemplate(false));

/* ---------------- Applied status ---------------- */
async function toggleApplied(id) {
  appliedMap[id] = !appliedMap[id];
  try {
    await appStorage.set(KEYS.applied, JSON.stringify(appliedMap));
  } catch (e) {}
  render();
}

function buildMailto(company, email) {
  const currentSubject =
    document.getElementById("subjectField")?.value ?? subjectText;
  const currentBody = document.getElementById("bodyField")?.value ?? bodyText;
  const subj = currentSubject
    .replaceAll("{{company}}", company.name)
    .replaceAll("{{role}}", company.role);
  const body = currentBody
    .replaceAll("{{company}}", company.name)
    .replaceAll("{{role}}", company.role);
  return `mailto:${email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
}

function refreshSendLinks() {
  document.querySelectorAll(".send-email-link").forEach((link) => {
    const company = allCompanies().find((c) => c.id === link.dataset.companyId);
    const email = link.dataset.email;
    if (company && email) link.href = buildMailto(company, email);
  });
}

/* ---------------- Import Excel ---------------- */
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function findKey(row, keywords) {
  const keys = Object.keys(row);
  for (const kw of keywords) {
    const match = keys.find((k) =>
      k
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .includes(kw),
    );
    if (match) return match;
  }
  return null;
}

function parseRowsToCompanies(rows) {
  let addedCompanies = 0,
    addedEmails = 0,
    skipped = 0;
  rows.forEach((row, idx) => {
    const companyKey = findKey(row, ["company"]);
    const emailKey = findKey(row, [
      "careersemail",
      "contactemail",
      "emailcontact",
      "email",
    ]);
    const roleKey = findKey(row, [
      "role",
      "besffor",
      "bestfor",
      "position",
      "target",
    ]);
    const locKey = findKey(row, ["location"]);
    const setupKey = findKey(row, ["worksetup", "setup"]);
    const urlKey = findKey(row, [
      "careersapplyurl",
      "careerspageurl",
      "careerspage",
      "applyurl",
      "sourceurl",
      "url",
    ]);

    const companyName = companyKey ? String(row[companyKey] || "").trim() : "";
    const emailRaw = emailKey ? String(row[emailKey] || "").trim() : "";
    if (!companyName || !emailRaw || !emailRaw.includes("@")) {
      skipped++;
      return;
    }

    const emails = emailRaw
      .split(/[;,]/)
      .map((e) => e.trim())
      .filter((e) => e.includes("@"));
    if (emails.length === 0) {
      skipped++;
      return;
    }

    const role = roleKey
      ? String(row[roleKey] || "").trim()
      : "Frontend Developer";
    const location = locKey ? String(row[locKey] || "").trim() : "Philippines";
    const setup = setupKey ? String(row[setupKey] || "").trim() : "—";
    const url = urlKey ? String(row[urlKey] || "").trim() : "";

    const all = [...BASE_COMPANIES, ...importedCompanies];
    let existing = all.find((c) => slugify(c.name) === slugify(companyName));

    if (existing) {
      emails.forEach((addr) => {
        if (
          !existing.emails.some(
            (e) => e.addr.toLowerCase() === addr.toLowerCase(),
          )
        ) {
          existing.emails.push({ addr, label: "Imported" });
          addedEmails++;
        }
      });
      if (url && !existing.url) existing.url = url;
    } else {
      const newCo = {
        id: "imp-" + slugify(companyName) + "-" + idx,
        name: companyName,
        role,
        location,
        setup,
        url,
        emails: emails.map((addr) => ({ addr, label: "Imported" })),
      };
      importedCompanies.push(newCo);
      addedCompanies++;
      addedEmails += emails.length;
    }
  });
  return { addedCompanies, addedEmails, skipped };
}

async function persistImported() {
  try {
    await appStorage.set(KEYS.imported, JSON.stringify(importedCompanies));
  } catch (e) {}
}

document
  .getElementById("importBtn")
  .addEventListener("click", () =>
    document.getElementById("excelInput").click(),
  );
document.getElementById("excelInput").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const data = await file.arrayBuffer();
    const wb = XLSX.read(data, { type: "array" });
    let allRows = [];
    wb.SheetNames.forEach((sn) => {
      const rows = XLSX.utils.sheet_to_json(wb.Sheets[sn], {
        defval: "",
      });
      allRows = allRows.concat(rows);
    });
    const result = parseRowsToCompanies(allRows);
    await persistImported();
    document.getElementById("importStatus").innerHTML =
      `Imported ${result.addedCompanies} new compan${result.addedCompanies === 1 ? "y" : "ies"}, ${result.addedEmails} email${result.addedEmails === 1 ? "" : "s"} added` +
      (result.skipped
        ? `, ${result.skipped} row(s) skipped (no valid email).`
        : ".");
    showToast(
      `Imported ${result.addedCompanies} companies · ${result.addedEmails} emails`,
    );
    render();
  } catch (err) {
    document.getElementById("importStatus").textContent =
      "Couldn't read that file. Try a .xlsx or .csv export.";
    showToast("Import failed — check the file format");
  }
  e.target.value = "";
});

/* ---------------- Render ---------------- */
function render() {
  const search = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const filter = document.getElementById("filterSelect").value;
  const list = document.getElementById("cardList");
  const empty = document.getElementById("emptyState");
  list.innerHTML = "";

  const companies = allCompanies();
  let totalEmails = 0;
  companies.forEach((c) => (totalEmails += c.emails.length));
  const appliedCount = companies.filter((c) => appliedMap[c.id]).length;

  document.getElementById("statTotal").textContent = companies.length;
  document.getElementById("statEmails").textContent = totalEmails;
  document.getElementById("statApplied").textContent = appliedCount;
  document.getElementById("progressFill").style.width =
    (companies.length ? (appliedCount / companies.length) * 100 : 0) + "%";

  const filtered = companies.filter((c) => {
    const matchesSearch =
      !search || (c.name + c.role + c.location).toLowerCase().includes(search);
    const isDone = !!appliedMap[c.id];
    const matchesFilter = filter === "all" || (filter === "done") === isDone;
    return matchesSearch && matchesFilter;
  });

  if (filtered.length === 0) {
    empty.innerHTML =
      companies.length === 0
        ? `<div style="margin-bottom:14px;">${ICONS.upload}</div><div style="font-weight:600; color:var(--text-dim); margin-bottom:4px;">No companies yet</div><div>Import an Excel file on the left to add your lead list.</div>`
        : `No companies match your search.`;
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  filtered.forEach((c) => {
    const isDone = !!appliedMap[c.id];
    const card = document.createElement("div");
    card.className = "card" + (isDone ? " is-done" : "");

    const emailRows = c.emails
      .map(
        (e) =>
          `<div class="email-row">
         <span class="email-addr"><span class="icon">${ICONS.mail}</span>${e.addr}</span>
         <a class="btn btn-primary btn-sm send-email-link" data-company-id="${c.id}" data-email="${e.addr}" href="${buildMailto(c, e.addr)}">Send</a>
       </div>`,
      )
      .join("");

    const urlLink = c.url
      ? `<a class="url-link" href="${c.url}" target="_blank" rel="noopener">${ICONS.externalLink} Careers page</a>`
      : "";

    card.innerHTML = `
      <div class="card-top">
        <div style="min-width:0;">
          <div class="company-name" title="${c.name}">${c.name}</div>
          <div class="meta-line">${c.location}</div>
        </div>
        <div class="status-toggle ${isDone ? "done" : ""}" data-id="${c.id}">
          <span class="icon">${isDone ? ICONS.checkCircle : ICONS.circle}</span>${isDone ? "Applied" : "Mark applied"}
        </div>
      </div>
      <div class="pills"><span class="pill">${c.role}</span><span class="pill">${c.setup}</span></div>
      <div class="email-list">${emailRows}</div>
      ${urlLink}
    `;

    card
      .querySelector(".status-toggle")
      .addEventListener("click", () => toggleApplied(c.id));
    list.appendChild(card);
  });
}

document.getElementById("cardList").addEventListener("click", async (e) => {
  const link = e.target.closest(".send-email-link");
  if (!link) return;
  const company = allCompanies().find((c) => c.id === link.dataset.companyId);
  if (!company) return;
  await saveTemplate(false);
  link.href = buildMailto(company, link.dataset.email);
  showToast("Opening email with latest template");
});

document.getElementById("searchInput").addEventListener("input", render);
document.getElementById("filterSelect").addEventListener("change", render);

document
  .getElementById("resetBtn")
  .addEventListener("click", () => openModal("resetModal"));
document
  .getElementById("confirmResetBtn")
  .addEventListener("click", async () => {
    importedCompanies = [];
    appliedMap = {};
    try {
      await appStorage.delete(KEYS.imported);
    } catch (e) {}
    try {
      await appStorage.delete(KEYS.applied);
    } catch (e) {}
    document.getElementById("importStatus").textContent = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("filterSelect").value = "all";
    closeModal("resetModal");
    render();
    showToast("All data reset");
  });

/* ---------------- Load state ---------------- */
async function loadState() {
  try {
    const t = await appStorage.get(KEYS.theme);
    setTheme(t && t.value ? t.value : "dark", false);
  } catch (e) {
    setTheme("dark", false);
  }

  try {
    const a = await appStorage.get(KEYS.applied);
    if (a && a.value) appliedMap = JSON.parse(a.value);
  } catch (e) {}
  try {
    const im = await appStorage.get(KEYS.imported);
    if (im && im.value) importedCompanies = JSON.parse(im.value);
  } catch (e) {}
  let storedTemplateVersion = null;
  try {
    const v = await appStorage.get(KEYS.templateVersion);
    if (v && v.value) storedTemplateVersion = v.value;
  } catch (e) {}

  if (storedTemplateVersion === TEMPLATE_VERSION) {
    try {
      const s = await appStorage.get(KEYS.subject);
      if (s && s.value) subjectText = s.value;
    } catch (e) {}
    try {
      const b = await appStorage.get(KEYS.body);
      if (b && b.value) bodyText = b.value;
    } catch (e) {}
  } else {
    subjectText = DEFAULT_SUBJECT;
    bodyText = DEFAULT_BODY;
    try {
      await appStorage.set(KEYS.subject, subjectText);
    } catch (e) {}
    try {
      await appStorage.set(KEYS.body, bodyText);
    } catch (e) {}
    try {
      await appStorage.set(KEYS.templateVersion, TEMPLATE_VERSION);
    } catch (e) {}
  }

  document.getElementById("subjectField").value = subjectText;
  document.getElementById("bodyField").value = bodyText;
  autoGrow(document.getElementById("bodyField"));

  render();
}
loadState();
window.addEventListener("resize", () =>
  autoGrow(document.getElementById("bodyField")),
);
