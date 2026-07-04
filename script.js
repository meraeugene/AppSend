/* ---------------- Icons (lucide-style, inline) ---------------- */
const ICONS = {
    sparkles: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    circle: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`,
    checkCircle: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 9.01"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    upload: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M5 21h14"/></svg>`,
    search: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    chevronRight: `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    chevronDown: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
    linkOff: `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="2" x2="22" y2="22"/><path d="M18.8 14.6a5 5 0 0 0-7.4-7.4l-3 3a5 5 0 0 0 6.3 7.6"/><path d="M5.2 9.4a5 5 0 0 0 7.4 7.4l3-3a5 5 0 0 0-6.3-7.6"/></svg>`,
    trash: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    edit: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
};
document.getElementById("iconUpload").innerHTML = ICONS.upload;
document.getElementById("iconSearch").innerHTML = ICONS.search;
document.getElementById("iconCaret").innerHTML = ICONS.chevronDown;
document.getElementById("iconEdit").innerHTML = ICONS.edit;
document.getElementById("iconTrash").innerHTML = ICONS.trash;
document.getElementById("iconSetup").innerHTML = ICONS.sparkles;
document.getElementById("iconCopy").innerHTML = ICONS.copy;

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
    profileName: "profile-name",
    profileRole: "profile-role",
    profileLocation: "profile-location",
};

function encodeData(str) {
    try {
        return btoa(unescape(encodeURIComponent(str)));
    } catch (e) {
        return str;
    }
}

function decodeData(str) {
    if (!str) return str;
    try {
        if (/^[A-Za-z0-9+/=]+$/.test(str)) {
            return decodeURIComponent(escape(atob(str)));
        }
    } catch (e) { }
    return str;
}

const appStorage = {
    async get(key) {
        const secureKey = encodeData(key);
        if (window.storage && typeof window.storage.get === "function") {
            const res = await window.storage.get(secureKey);
            if (res && res.value) {
                return { value: decodeData(res.value) };
            }
            const rawRes = await window.storage.get(key);
            if (rawRes && rawRes.value) {
                return { value: decodeData(rawRes.value) };
            }
            return res;
        }

        let value = localStorage.getItem(secureKey);
        if (value === null) {
            value = localStorage.getItem(key);
            if (value !== null) {
                localStorage.setItem(secureKey, encodeData(value));
                localStorage.removeItem(key);
            }
        }
        return value === null ? null : { value: decodeData(value) };
    },
    async set(key, value) {
        const secureKey = encodeData(key);
        const secureValue = encodeData(String(value));
        if (window.storage && typeof window.storage.set === "function") {
            return window.storage.set(secureKey, secureValue);
        }
        localStorage.setItem(secureKey, secureValue);
    },
    async delete(key) {
        const secureKey = encodeData(key);
        if (window.storage && typeof window.storage.delete === "function") {
            await window.storage.delete(secureKey);
            await window.storage.delete(key);
            return;
        }
        localStorage.removeItem(secureKey);
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
function setTheme() {
    document.documentElement.setAttribute("data-theme", "dark");
    appStorage.set(KEYS.theme, "dark").catch(() => { });
}

/* ---------------- Modals ---------------- */
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open");
    if (id === "templateModal")
        setTimeout(() => autoGrow(document.getElementById("bodyField")), 60);
}
function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal-backdrop.show")) {
        document.body.classList.remove("modal-open");
        document.documentElement.classList.remove("modal-open");
    }
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
    } catch (e) { }
    try {
        await appStorage.set(KEYS.body, bodyText);
    } catch (e) { }
    try {
        await appStorage.set(KEYS.templateVersion, TEMPLATE_VERSION);
    } catch (e) { }
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
    const nextState = !appliedMap[id];
    appliedMap[id] = nextState;
    try {
        await appStorage.set(KEYS.applied, JSON.stringify(appliedMap));
    } catch (e) { }
    showToast(nextState ? "Marked as applied" : "Moved back to pending");
    render();
}

function buildMailto(company, email) {
    const currentSubject =
        document.getElementById("subjectField")?.value ?? subjectText;
    const currentBody =
        document.getElementById("bodyField")?.value ?? bodyText;
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
        const company = allCompanies().find(
            (c) => c.id === link.dataset.companyId,
        );
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
        skipped = 0,
        noEmail = 0;
    rows.forEach((row, idx) => {
        const companyKey = findKey(row, [
            "company",
            "companyname",
            "employer",
            "organization",
            "organisation",
            "business",
        ]);
        const emailKey = findKey(row, [
            "careersemail",
            "contactemail",
            "emailcontact",
            "hrmail",
            "hremail",
            "recruitmentemail",
            "email",
        ]);
        const roleKey = findKey(row, [
            "role",
            "besffor",
            "bestfor",
            "position",
            "target",
            "jobtitle",
            "opening",
        ]);
        const locKey = findKey(row, ["location", "area", "city"]);
        const setupKey = findKey(row, [
            "worksetup",
            "setup",
            "arrangement",
            "type",
        ]);
        const urlKey = findKey(row, [
            "careersapplyurl",
            "careerspageurl",
            "careerspage",
            "applyurl",
            "sourceurl",
            "joburl",
            "website",
            "site",
            "url",
        ]);

        const companyName = companyKey
            ? String(row[companyKey] || "").trim()
            : "";
        if (!companyName) {
            skipped++;
            return;
        }

        const emailRaw = emailKey ? String(row[emailKey] || "").trim() : "";
        const emails = emailRaw
            ? emailRaw
                .split(/[;,\n]/)
                .map((e) => e.trim())
                .filter((e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))
            : [];
        if (emails.length === 0) noEmail++;

        const role = roleKey
            ? String(row[roleKey] || "").trim()
            : "Frontend Developer";
        const location = locKey
            ? String(row[locKey] || "").trim()
            : "Philippines";
        const setup = setupKey ? String(row[setupKey] || "").trim() : "—";
        const url = urlKey ? String(row[urlKey] || "").trim() : "";

        const all = [...BASE_COMPANIES, ...importedCompanies];
        let existing = all.find(
            (c) => slugify(c.name) === slugify(companyName),
        );

        if (existing) {
            if (!Array.isArray(existing.emails)) existing.emails = [];
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
            if (
                role &&
                (!existing.role || existing.role === "Frontend Developer")
            )
                existing.role = role;
            if (
                location &&
                (!existing.location || existing.location === "Philippines")
            )
                existing.location = location;
            if (setup && (!existing.setup || existing.setup === "—"))
                existing.setup = setup;
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
    return { addedCompanies, addedEmails, skipped, noEmail };
}

async function persistImported() {
    try {
        await appStorage.set(
            KEYS.imported,
            JSON.stringify(importedCompanies),
        );
    } catch (e) { }
}

document
    .getElementById("importBtn")
    .addEventListener("click", () =>
        document.getElementById("excelInput").click(),
    );
document
    .getElementById("excelInput")
    .addEventListener("change", async (e) => {
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
                (result.noEmail
                    ? `, ${result.noEmail} compan${result.noEmail === 1 ? "y" : "ies"} without email still shown`
                    : "") +
                (result.skipped
                    ? `, ${result.skipped} row(s) skipped (missing company name).`
                    : ".");
            showToast(
                `Imported ${result.addedCompanies} companies · ${result.noEmail || 0} without email`,
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

    const companies = allCompanies()
        .slice()
        .sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    let totalEmails = 0;
    companies.forEach(
        (c) => (totalEmails += Array.isArray(c.emails) ? c.emails.length : 0),
    );
    const appliedCount = companies.filter((c) => appliedMap[c.id]).length;

    document.getElementById("statTotal").textContent = companies.length;
    document.getElementById("statEmails").textContent = totalEmails;
    document.getElementById("statApplied").textContent = appliedCount;
    document.getElementById("progressFill").style.width =
        (companies.length ? (appliedCount / companies.length) * 100 : 0) +
        "%";

    const filtered = companies.filter((c) => {
        const matchesSearch =
            !search ||
            (c.name + c.role + c.location + c.setup + (c.url || ""))
                .toLowerCase()
                .includes(search);
        const isDone = !!appliedMap[c.id];
        const matchesFilter =
            filter === "all" ||
            (filter === "done" && isDone) ||
            (filter === "pending" && !isDone) ||
            (filter === "hasUrl" && !!c.url) ||
            (filter === "hasEmail" && Array.isArray(c.emails) && c.emails.length > 0);
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

    filtered.sort((a, b) =>
        String(a.name || "").localeCompare(String(b.name || ""), undefined, {
            sensitivity: "base",
            numeric: true,
        }),
    );

    filtered.forEach((c) => {
        const isDone = !!appliedMap[c.id];
        const card = document.createElement("div");
        card.className = "card" + (isDone ? " is-done" : "");

        const companyEmails = Array.isArray(c.emails) ? c.emails : [];
        const emailRows = companyEmails.length
            ? companyEmails
                .map(
                    (e) =>
                        `<div class="email-row">
           <span class="email-addr"><span class="icon">${ICONS.mail}</span>${e.addr}</span>
           <a class="btn btn-primary btn-sm send-email-link" data-company-id="${c.id}" data-email="${e.addr}" href="${buildMailto(c, e.addr)}">Send</a>
         </div>`,
                )
                .join("")
            : `<div class="email-row">
           <span class="email-addr"><span class="icon">${ICONS.mail}</span>No email provided</span>
         </div>`;

        const urlLink = c.url
            ? `<a class="url-link career-btn" href="${c.url}" target="_blank" rel="noopener">${ICONS.externalLink} Careers page</a>`
            : `<span class="url-link career-btn disabled" style="opacity: 0.42; pointer-events: none; border: 1px solid var(--glass-border-soft) !important; background: var(--glass) !important; color: var(--text-faint) !important; display: inline-flex; align-items: center; gap: 6px;">${ICONS.linkOff} No careers page</span>`;

        card.innerHTML = `
      <div class="card-top">
        <div style="min-width:0;">
          <div class="company-name" title="${c.name}">${c.name}</div>
          <div class="meta-line">${c.location}</div>
        </div>
        <div class="status-toggle ${isDone ? "done" : ""}" data-id="${c.id}" role="button" tabindex="0" aria-label="${isDone ? "Applied" : "Mark as applied"}" title="${isDone ? "Applied" : "Mark as applied"}">
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

document
    .getElementById("cardList")
    .addEventListener("click", async (e) => {
        const link = e.target.closest(".send-email-link");
        if (!link) return;
        const company = allCompanies().find(
            (c) => c.id === link.dataset.companyId,
        );
        if (!company) return;
        await saveTemplate(false);
        link.href = buildMailto(company, link.dataset.email);
        showToast("Opening email with latest template");
    });

document.getElementById("searchInput").addEventListener("input", render);
document
    .getElementById("filterSelect")
    .addEventListener("change", render);

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
        } catch (e) { }
        try {
            await appStorage.delete(KEYS.applied);
        } catch (e) { }
        document.getElementById("importStatus").textContent = "";
        document.getElementById("searchInput").value = "";
        document.getElementById("filterSelect").value = "all";
        closeModal("resetModal");
        render();
        showToast("All data reset");
    });

/* ---------------- Load state ---------------- */
async function loadState() {
    setTheme();

    try {
        const a = await appStorage.get(KEYS.applied);
        if (a && a.value) appliedMap = JSON.parse(a.value);
    } catch (e) { }
    try {
        const im = await appStorage.get(KEYS.imported);
        if (im && im.value) importedCompanies = JSON.parse(im.value);
    } catch (e) { }

    // Check profile
    let profileName = null;
    let profileRole = null;
    let profileLocation = null;
    try {
        const nameVal = await appStorage.get(KEYS.profileName);
        if (nameVal && nameVal.value) profileName = nameVal.value;
        const roleVal = await appStorage.get(KEYS.profileRole);
        if (roleVal && roleVal.value) profileRole = roleVal.value;
        const locVal = await appStorage.get(KEYS.profileLocation);
        if (locVal && locVal.value) profileLocation = locVal.value;
    } catch (e) { }

    if (profileName) {
        document.getElementById("setupNameField").value = profileName;
    }
    if (profileRole) {
        document.getElementById("setupRoleField").value = profileRole;
    }
    if (profileLocation) {
        document.getElementById("setupLocationField").value = profileLocation;
    }

    // Show welcome screen if name is not set AND there are no imported companies
    const showSetup = !profileName && importedCompanies.length === 0;
    if (showSetup) {
        setTimeout(() => openModal("instructionsModal"), 500);
    }

    let storedTemplateVersion = null;
    try {
        const v = await appStorage.get(KEYS.templateVersion);
        if (v && v.value) storedTemplateVersion = v.value;
    } catch (e) { }

    if (storedTemplateVersion === TEMPLATE_VERSION) {
        try {
            const s = await appStorage.get(KEYS.subject);
            if (s && s.value) subjectText = s.value;
        } catch (e) { }
        try {
            const b = await appStorage.get(KEYS.body);
            if (b && b.value) bodyText = b.value;
        } catch (e) { }
    } else {
        subjectText = DEFAULT_SUBJECT;
        bodyText = DEFAULT_BODY;
        try {
            await appStorage.set(KEYS.subject, subjectText);
        } catch (e) { }
        try {
            await appStorage.set(KEYS.body, bodyText);
        } catch (e) { }
        try {
            await appStorage.set(KEYS.templateVersion, TEMPLATE_VERSION);
        } catch (e) { }
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

/* ---------------- Getting Started & Setup Logic ---------------- */
function generateAIPrompt(name, role, location) {
    return `Act as an expert job search assistant and lead generation specialist.
Please generate a list of 100-200 targeted company leads for job applications with the following criteria:
- Target Role: ${role || "Software Developer / Frontend Developer"}
- Target Location: ${location || "Remote / Hybrid"}
- Candidate Name: ${name || "Andrew Villalon"}

Output the results exactly in a clean table format with the following columns:
1. Company (The name of the company hiring)
2. Email (Valid careers, HR, or recruitment email address - if multiple, separate with commas. If none found, keep empty or leave blank)
3. Role (The specific position, e.g., ${role || "Frontend Developer"})
4. Location (The city and country)
5. Work Setup (Specify: Remote, Hybrid, or On-site)
6. Careers URL (Link directly to their careers page, job post, or company website URL)

Include realistic entries for active companies that hire for this role in ${location || "this location"}. Do not include markdown around the table, just a clean, copy-pasteable table format.`;
}

async function updateTemplateWithSetup(name, role) {
    let currentSubject = document.getElementById("subjectField").value;
    let currentBody = document.getElementById("bodyField").value;

    if (currentSubject === DEFAULT_SUBJECT) {
        currentSubject = `Application for ${role} – ${name}`;
        document.getElementById("subjectField").value = currentSubject;
        await appStorage.set(KEYS.subject, currentSubject);
    }
    if (currentBody === DEFAULT_BODY) {
        currentBody = currentBody
            .replace(/Junior Frontend Developer \/ Web Developer/g, role)
            .replace(/Andrew R. Villalon/g, name)
            .replace(/andrewvillalon.dev@gmail.com/g, "")
            .replace(/\+63 994 758 0138/g, "")
            .replace(/andrewvillalon.online/g, "")
            .replace(/github.com\/meraeugene/g, "")
            .replace(/linkedin.com\/in\/andrew-villalon/g, "");
        document.getElementById("bodyField").value = currentBody;
        await appStorage.set(KEYS.body, currentBody);
        autoGrow(document.getElementById("bodyField"));
    }
    refreshSendLinks();
}

async function handleProfileInput() {
    const name = document.getElementById("setupNameField").value.trim();
    const role = document.getElementById("setupRoleField").value.trim();
    const location = document.getElementById("setupLocationField").value.trim();

    // Dynamically update prompt text
    const prompt = generateAIPrompt(name, role, location);
    document.getElementById("generatedPromptText").textContent = prompt;

    // Auto save to storage as user types
    try {
        await appStorage.set(KEYS.profileName, name);
        await appStorage.set(KEYS.profileRole, role);
        await appStorage.set(KEYS.profileLocation, location);
    } catch (e) { }

    // Auto update email templates
    if (name && role) {
        await updateTemplateWithSetup(name, role);
    }
}

// Add input event listeners to profile fields for auto-save and auto-update
["setupNameField", "setupRoleField", "setupLocationField"].forEach((id) => {
    document.getElementById(id).addEventListener("input", handleProfileInput);
});

// Onboarding Step Navigation
document.getElementById("toProfileBtn").addEventListener("click", () => {
    closeModal("instructionsModal");
    openModal("profileSetupModal");
});

document.getElementById("generatePromptBtn").addEventListener("click", () => {
    const name = document.getElementById("setupNameField").value.trim();
    const role = document.getElementById("setupRoleField").value.trim();
    const location = document.getElementById("setupLocationField").value.trim();

    if (!name || !role || !location) {
        showToast("Please fill in all fields to generate prompt");
        return;
    }

    // Generate prompt text
    const prompt = generateAIPrompt(name, role, location);
    document.getElementById("generatedPromptText").textContent = prompt;

    closeModal("profileSetupModal");
    openModal("copyPromptModal");
});

document.getElementById("closePromptBtn").addEventListener("click", () => {
    closeModal("copyPromptModal");
});

document.getElementById("copyPromptBtn").addEventListener("click", () => {
    const text = document.getElementById("generatedPromptText").textContent;
    navigator.clipboard.writeText(text).then(() => {
        showToast("Prompt copied to clipboard!");
    }).catch(() => {
        showToast("Failed to copy prompt");
    });
});

document.getElementById("openSetupBtn").addEventListener("click", async () => {
    let profileName = "";
    let profileRole = "";
    let profileLocation = "";
    try {
        const nameVal = await appStorage.get(KEYS.profileName);
        if (nameVal && nameVal.value) profileName = nameVal.value;
        const roleVal = await appStorage.get(KEYS.profileRole);
        if (roleVal && roleVal.value) profileRole = roleVal.value;
        const locVal = await appStorage.get(KEYS.profileLocation);
        if (locVal && locVal.value) profileLocation = locVal.value;
    } catch (e) { }

    document.getElementById("setupNameField").value = profileName;
    document.getElementById("setupRoleField").value = profileRole;
    document.getElementById("setupLocationField").value = profileLocation;

    const prompt = generateAIPrompt(profileName, profileRole, profileLocation);
    document.getElementById("generatedPromptText").textContent = prompt;

    openModal("instructionsModal");
});

// AppSend absolute final sticky glass header helper
(function () {
    const root = document.documentElement;
    const header = document.querySelector("header");
    if (!header) return;

    function syncHeaderHeight() {
        const height = Math.ceil(header.getBoundingClientRect().height || 0);
        if (height > 0) {
            root.style.setProperty("--appsend-header-h", height + "px");
        }
    }

    function updateScrolledState() {
        header.classList.toggle("is-scrolled", window.scrollY > 4);
    }

    syncHeaderHeight();
    updateScrolledState();
    window.addEventListener("load", syncHeaderHeight, { passive: true });
    window.addEventListener("resize", syncHeaderHeight, { passive: true });
    window.addEventListener("orientationchange", function () {
        setTimeout(syncHeaderHeight, 250);
    }, { passive: true });
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    // PWA Service Worker Registration
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./sw.js")
                .then((reg) => console.log("Service Worker registered successfully", reg))
                .catch((err) => console.error("Service Worker registration failed", err));
        });
    }

    // Hide Splash Screen after minimum time to display animations
    window.addEventListener("load", () => {
        const splash = document.getElementById("splashScreen");
        if (splash) {
            setTimeout(() => {
                splash.classList.add("hide");
            }, 1800);
        }
    });
})();
