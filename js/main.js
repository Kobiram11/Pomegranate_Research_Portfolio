(function () {
  "use strict";

  var C = window.SITE_CONTENT || {};
  var FOLDERS = window.DRIVE_FOLDERS || [];
  var TBC = C.TBC || "To be confirmed";

  var STATUS_LABELS = {
    completed: "Completed",
    "in-progress": "In progress",
    upcoming: "Upcoming",
    tbc: "To be confirmed",
    available: "Available",
    pending: "Pending upload"
  };

  /* ---------- Helpers ---------- */

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (value === null || value === undefined || value === false) return;
        if (key === "text") node.textContent = value;
        else if (key === "className") node.className = value;
        else node.setAttribute(key, value);
      });
    }
    (children || []).forEach(function (child) {
      if (child === null || child === undefined) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function $(id) { return document.getElementById(id); }

  function val(value) {
    return value && String(value).trim() ? String(value).trim() : TBC;
  }

  function isUrl(value) {
    return typeof value === "string" && /^https:\/\/\S+$/i.test(value.trim());
  }

  function getPath(obj, path) {
    return path.split(".").reduce(function (acc, key) { return acc ? acc[key] : undefined; }, obj);
  }

  function badge(status) {
    var key = STATUS_LABELS[status] ? status : "tbc";
    return el("span", { className: "badge badge-" + key, text: STATUS_LABELS[key] });
  }

  function externalLink(href, text, label, className) {
    return el("a", {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: className,
      "aria-label": label
    }, [text]);
  }

  function factList(target, rows) {
    rows.forEach(function (row) {
      target.appendChild(el("div", null, [el("dt", { text: row[0] }), el("dd", { text: val(row[1]) })]));
    });
  }

  var members = (C.people && C.people.members) || [];
  var components = C.components || [];

  function memberById(id) {
    for (var i = 0; i < members.length; i++) if (members[i].id === id) return members[i];
    return null;
  }

  function componentById(id) {
    for (var i = 0; i < components.length; i++) if (components[i].id === id) return components[i];
    return null;
  }

  function ownerName(ownerId) {
    if (ownerId === "group") return "Group (common document)";
    var m = memberById(ownerId);
    return m ? m.name + " (" + val(m.studentId) + ")" : TBC;
  }

  /* ---------- Simple text bindings ---------- */

  function renderBindings() {
    document.querySelectorAll("[data-bind]").forEach(function (node) {
      node.textContent = val(getPath(C, node.getAttribute("data-bind")));
    });
  }

  /* ---------- Home ---------- */

  function renderHome() {
    var p = C.project || {};
    factList($("project-facts"), [
      ["Group ID", p.groupId],
      ["Research group", p.researchGroup],
      ["Specialization", p.specialization],
      ["Research cluster", p.researchCluster],
      ["Members", members.length ? String(members.length) : ""]
    ]);

    (p.overview || []).forEach(function (item) {
      $("overview-cards").appendChild(el("article", { className: "card overview-card" }, [
        el("h3", { text: item.title }),
        el("p", { text: item.text })
      ]));
    });

    components.forEach(function (c) {
      var m = memberById(c.ownerId);
      $("home-components").appendChild(el("article", { className: "card mini-component" }, [
        el("h3", null, [el("a", { href: "#" + c.id, text: c.title })]),
        el("p", { text: "Responsible member: " + (m ? m.name : TBC) })
      ]));
    });
  }

  /* ---------- Domain ---------- */

  function renderDomain() {
    var d = C.domain || {};

    (d.literatureSurvey || []).forEach(function (item) {
      var refs = (item.refs || []).map(function (n) { return "[" + n + "]"; }).join(" ");
      $("literature-list").appendChild(el("article", { className: "card lit-card" }, [
        el("h4", { text: item.theme }),
        el("p", { text: item.text }),
        refs ? el("p", { className: "lit-refs", text: "Sources: " + refs }) : null
      ]));
    });

    (d.references || []).forEach(function (r) {
      $("reference-list").appendChild(el("li", { value: String(r.id), text: r.text }));
    });

    (d.researchGap || []).forEach(function (t) { $("gap-list").appendChild(el("li", { text: t })); });
    (d.researchProblem || []).forEach(function (t) { $("problem-list").appendChild(el("li", { text: t })); });

    var o = d.objectives || {};
    $("objective-main").textContent = val(o.main);
    (o.specific || []).forEach(function (t) { $("objective-list").appendChild(el("li", { text: t })); });

    (d.methodology || []).forEach(function (s) {
      $("method-steps").appendChild(el("li", null, [el("strong", { text: s.step }), el("span", { text: s.text })]));
    });

    components.forEach(function (c) {
      var m = memberById(c.ownerId);
      var body = el("div", { className: "component-body" }, [
        el("div", null, [el("h5", { text: "Problem" }), listOf(c.problem)]),
        el("div", null, [el("h5", { text: "Objectives" }), listOf(c.objectives)]),
        el("div", { className: "component-full" }, [el("h5", { text: "Method" }), el("p", { text: val(c.method) })]),
        el("div", null, [el("h5", { text: "Technologies" }), tagList(c.technologies)]),
        el("div", null, [el("h5", { text: "Evaluation" }), el("p", { text: val(c.evaluation) })]),
        el("div", { className: "component-full" }, [el("h5", { text: "Results" }), el("p", { text: val(c.results) })]),
        c.scopeNote ? el("p", { className: "scope-note component-full", text: c.scopeNote }) : null
      ]);

      $("component-list").appendChild(el("article", { className: "card component-card", id: c.id, "aria-labelledby": c.id + "-title" }, [
        el("div", { className: "component-head" }, [
          el("div", null, [
            el("h4", { id: c.id + "-title", text: c.title }),
            c.thesisTitle ? el("p", { className: "muted", text: "Thesis title: " + c.thesisTitle }) : null,
            el("p", { className: "muted", text: val(c.summary) })
          ]),
          el("span", { className: "component-owner" }, [
            "Responsible: " + (m ? m.name + " · " + val(m.studentId) : TBC)
          ])
        ]),
        body
      ]));
    });

    (d.technologies || []).forEach(function (t) {
      $("tech-list").appendChild(el("li", null, [el("strong", { text: t.name }), el("span", { text: t.use })]));
    });
  }

  function listOf(items) {
    if (!items || !items.length) return el("p", { text: TBC });
    return el("ul", null, items.map(function (t) { return el("li", { text: t }); }));
  }

  function tagList(items) {
    if (!items || !items.length) return el("p", { text: TBC });
    return el("ul", { className: "tag-list" }, items.map(function (t) { return el("li", { className: "tag", text: t }); }));
  }

  /* ---------- Milestones ---------- */

  function renderMilestones() {
    var list = C.milestones || [];
    var select = $("assessment-select");

    list.forEach(function (ms) {
      $("timeline").appendChild(el("li", { className: "timeline-item is-" + ms.status }, [
        el("span", { className: "timeline-dot", "aria-hidden": "true" }),
        el("article", { className: "card timeline-card" }, [
          el("header", null, [el("h3", { text: ms.title }), badge(ms.status)]),
          el("p", { text: val(ms.description) }),
          el("dl", { className: "timeline-meta" }, [
            el("div", null, [el("dt", { text: "Date:" }), el("dd", { text: val(ms.date) })]),
            el("div", null, [el("dt", { text: "Marks:" }), el("dd", { text: val(ms.marks) })])
          ])
        ])
      ]));
      select.appendChild(el("option", { value: ms.id, text: ms.title }));
    });

    function showDetail() {
      var ms = list.filter(function (m) { return m.id === select.value; })[0];
      var box = $("assessment-detail");
      box.textContent = "";
      if (!ms) return;
      var related = (C.presentations || []).filter(function (p) { return p.milestone === ms.title; });
      box.appendChild(el("h4", { text: ms.title }));
      box.appendChild(el("p", { text: val(ms.description) }));
      var dl = el("dl", { className: "facts" });
      factList(dl, [
        ["Date", ms.date],
        ["Allocated marks", ms.marks],
        ["Status", STATUS_LABELS[ms.status] || TBC],
        ["Presentation slides", related.length ? STATUS_LABELS[related[0].status] : ""]
      ]);
      box.appendChild(dl);
    }

    select.addEventListener("change", showDetail);
    showDetail();
  }

  /* ---------- Documents ---------- */

  function fileActions(item, noun) {
    var actions = el("div", { className: "doc-actions" });
    var hasView = item.status === "available" && isUrl(item.viewUrl);
    var hasDownload = item.status === "available" && isUrl(item.downloadUrl);

    if (!hasView && !hasDownload) {
      return el("p", { className: "pending-note", text: "Pending upload" });
    }
    if (hasView) {
      actions.appendChild(externalLink(item.viewUrl, "View", "View " + item.title + " (opens in a new tab)", "btn btn-primary btn-small"));
    }
    if (hasDownload) {
      actions.appendChild(externalLink(item.downloadUrl, "Download", "Download " + item.title + " (" + val(item.fileType) + ")", "btn btn-outline btn-small"));
    }
    return actions;
  }

  function docCard(doc) {
    var pending = doc.status !== "available";
    var isGroup = doc.type === "group";
    return el("article", { className: "card doc-card" + (pending ? " is-pending" : "") }, [
      el("div", { className: "doc-top" }, [
        el("span", { className: "doc-category", text: doc.category }),
        badge(pending ? "pending" : "available")
      ]),
      el("h3", { text: doc.title }),
      el("span", { className: "owner-pill " + (isGroup ? "owner-group" : "owner-individual") }, [
        (isGroup ? "Group" : "Individual") + " · Owner: " + ownerName(doc.ownerId)
      ]),
      el("dl", { className: "doc-meta" }, [
        el("div", null, [el("dt", { text: "Date:" }), el("dd", { text: val(doc.date) })]),
        el("div", null, [el("dt", { text: "File type:" }), el("dd", { text: val(doc.fileType) })])
      ]),
      fileActions(doc)
    ]);
  }

  function renderDocuments() {
    var docs = C.documents || [];
    var categories = C.documentCategories || [];
    var search = $("doc-search");
    var catSelect = $("doc-category");
    var typeSelect = $("doc-type");
    var memberSelect = $("doc-member");
    var chips = $("category-chips");

    categories.forEach(function (cat) { catSelect.appendChild(el("option", { value: cat, text: cat })); });
    members.forEach(function (m) { memberSelect.appendChild(el("option", { value: m.id, text: m.name })); });

    ["all"].concat(categories).forEach(function (cat) {
      var chip = el("button", { type: "button", className: "chip", "data-cat": cat, "aria-pressed": cat === "all" ? "true" : "false", text: cat === "all" ? "All" : cat });
      chip.addEventListener("click", function () {
        catSelect.value = cat;
        apply();
      });
      chips.appendChild(chip);
    });

    function apply() {
      var q = search.value.trim().toLowerCase();
      var cat = catSelect.value;
      var type = typeSelect.value;
      var member = memberSelect.value;

      var results = docs.filter(function (d) {
        if (cat !== "all" && d.category !== cat) return false;
        if (type !== "all" && d.type !== type) return false;
        if (member !== "all" && d.ownerId !== member) return false;
        if (q && d.title.toLowerCase().indexOf(q) === -1) return false;
        return true;
      });

      chips.querySelectorAll(".chip").forEach(function (chip) {
        chip.setAttribute("aria-pressed", chip.getAttribute("data-cat") === cat ? "true" : "false");
      });

      var list = $("doc-list");
      list.textContent = "";
      if (!results.length) {
        list.appendChild(el("p", { className: "empty-state", text: "No documents match the selected filters." }));
      } else {
        results.forEach(function (d) { list.appendChild(docCard(d)); });
      }
      var available = results.filter(function (d) { return d.status === "available"; }).length;
      $("doc-count").textContent = "Showing " + results.length + " of " + docs.length + " documents (" + available + " available, " + (results.length - available) + " pending upload).";
    }

    search.addEventListener("input", apply);
    [catSelect, typeSelect, memberSelect].forEach(function (s) { s.addEventListener("change", apply); });
    $("doc-filters").addEventListener("reset", function () { setTimeout(apply, 0); });
    $("doc-filters").addEventListener("submit", function (e) { e.preventDefault(); });
    apply();

    FOLDERS.forEach(function (f) {
      if (!isUrl(f.url)) return;
      $("folder-list").appendChild(el("li", null, [
        externalLink(f.url, f.label, "Open the " + f.label + " Google Drive folder (opens in a new tab)")
      ]));
    });
  }

  /* ---------- Presentations ---------- */

  function renderPresentations() {
    (C.presentations || []).forEach(function (p) {
      var pending = p.status !== "available";
      $("presentation-list").appendChild(el("article", { className: "card pres-card" + (pending ? " is-pending" : "") }, [
        el("div", { className: "doc-top" }, [
          el("span", { className: "pres-icon", "aria-hidden": "true", text: "▶" }),
          badge(pending ? "pending" : "available")
        ]),
        el("h3", { text: p.title }),
        el("dl", { className: "doc-meta" }, [
          el("div", null, [el("dt", { text: "Assessment:" }), el("dd", { text: val(p.milestone) })]),
          el("div", null, [el("dt", { text: "Date:" }), el("dd", { text: val(p.date) })]),
          el("div", null, [el("dt", { text: "File type:" }), el("dd", { text: val(p.fileType) })])
        ]),
        fileActions(p)
      ]));
    });
  }

  /* ---------- People ---------- */

  function initials(name, fallback) {
    var source = name && name.trim() ? name : fallback;
    var parts = source.replace(/\b(Ms|Mr|Mrs|Dr|Prof)\.?\s+/gi, "").trim().split(/[\s-]+/);
    var letters = parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2);
    return letters.toUpperCase();
  }

  function driveFileId(url) {
    var match = /\/file\/d\/([\w-]+)/.exec(url || "") || /[?&]id=([\w-]+)/.exec(url || "");
    return match ? match[1] : "";
  }

  /* A Drive preview page cannot be used as an <img> source, so convert it. */
  function imageSource(person) {
    var url = (person.photoUrl || "").trim();
    if (isUrl(url) && !/drive\.google\.com\/(file|open)/.test(url)) return url;
    var id = driveFileId(url) || driveFileId(person.photoViewUrl);
    return id ? "https://lh3.googleusercontent.com/d/" + id + "=w600" : "";
  }

  function photo(person) {
    var wrap = el("div", { className: "person-photo" });
    var label = person.name && person.name.trim() ? person.name : person.role || "Team member";
    var avatar = el("div", { className: "avatar-initials", role: "img", "aria-label": "Initials of " + label + " (photograph not available)", text: initials(person.name, person.role || "?") });
    wrap.appendChild(avatar);
    var src = imageSource(person);
    if (!src) return wrap;

    avatar.setAttribute("aria-hidden", "true");
    avatar.removeAttribute("role");
    avatar.removeAttribute("aria-label");
    var img = el("img", {
      src: src,
      alt: "Photograph of " + label + (person.role ? ", " + person.role : ""),
      loading: "lazy",
      decoding: "async",
      width: "120",
      height: "120",
      referrerpolicy: "no-referrer"
    });
    img.addEventListener("error", function () {
      wrap.removeChild(img);
      avatar.removeAttribute("aria-hidden");
      avatar.setAttribute("role", "img");
      avatar.setAttribute("aria-label", "Initials of " + label + " (photograph could not be loaded)");
    });
    wrap.appendChild(img);
    return wrap;
  }

  function emailValue(email) {
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return el("a", { href: "mailto:" + email.trim(), text: email.trim() });
    }
    return TBC;
  }

  function personCard(person, isMember) {
    var details = el("dl", { className: "person-details" });
    function row(label, value) {
      details.appendChild(el("div", null, [el("dt", { text: label + ":" }), el("dd", null, [typeof value === "string" ? val(value) : value])]));
    }
    if (isMember) row("Student ID", person.studentId);
    row("Affiliation", person.affiliation);
    if (isMember && person.specialization) row("Specialization", person.specialization);
    row("Email", emailValue(person.email));

    var info = el("div", { className: "person-info" }, [
      el("h4", { text: val(person.name) }),
      el("p", { className: "person-role", text: val(person.role) }),
      details
    ]);

    if (isMember) {
      var comp = componentById(person.componentId);
      info.appendChild(el("div", { className: "person-component" }, [
        el("strong", { text: "Research responsibility" }),
        comp ? el("a", { href: "#" + comp.id, text: comp.title }) : TBC
      ]));
    }
    if (isUrl(person.photoViewUrl)) {
      info.appendChild(externalLink(person.photoViewUrl, "View photo", "View original photograph of " + val(person.name) + " on Google Drive (opens in a new tab)", "photo-link"));
    }

    return el("article", { className: "card person-card" }, [photo(person, isMember), info]);
  }

  function renderPeople() {
    var sups = (C.people && C.people.supervisors) || [];
    sups.forEach(function (s) {
      var target = /co-?supervisor/i.test(s.role) ? "cosupervisor-list" : "supervisor-list";
      $(target).appendChild(personCard(s, false));
    });
    members.forEach(function (m) { $("member-list").appendChild(personCard(m, true)); });
  }

  /* ---------- Contact ---------- */

  function renderContact() {
    var ct = C.contact || {};
    var p = C.project || {};
    factList($("contact-details"), [
      ["Group ID", p.groupId],
      ["Group email", ct.groupEmail],
      ["Institution", ct.institution],
      ["Department", ct.department]
    ]);

    members.forEach(function (m) {
      $("contact-members").appendChild(el("li", null, [m.name + " (" + val(m.studentId) + ") – ", emailValue(m.email)]));
    });

    var to = $("email-to");
    var subject = $("email-subject");
    var body = $("email-body");
    var link = $("mailto-link");

    to.value = ct.groupEmail || "";
    subject.value = ct.emailSubject || "";
    body.value = ct.emailBody || "";
    $("email-to-hint").textContent = ct.groupEmail
      ? "The group email address is filled in for you."
      : "The group email address is to be confirmed. You can enter a recipient here or in your email app.";

    function update() {
      var recipient = to.value.trim().replace(/\s+/g, "");
      var params = [];
      if (subject.value.trim()) params.push("subject=" + encodeURIComponent(subject.value.trim()));
      if (body.value.trim()) params.push("body=" + encodeURIComponent(body.value.replace(/\r?\n/g, "\r\n")));
      link.href = "mailto:" + recipient + (params.length ? "?" + params.join("&") : "");
      link.setAttribute("aria-label", "Open email app with this message" + (recipient ? " addressed to " + recipient : ""));
    }
    [to, subject, body].forEach(function (f) { f.addEventListener("input", update); });
    $("email-form").addEventListener("submit", function (e) { e.preventDefault(); });
    update();
  }

  /* ---------- Navigation ---------- */

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = $("site-nav");
    var links = nav.querySelectorAll("a");

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        close();
        toggle.focus();
      }
    });

    if (!("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        var active = map[entry.target.id];
        if (active) active.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) {
      var section = $(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- Start ---------- */

  function safely(fn, name) {
    try { fn(); } catch (err) { console.error("Could not render " + name + ":", err); }
  }

  safely(renderBindings, "text");
  safely(renderHome, "home");
  safely(renderDomain, "domain");
  safely(renderMilestones, "milestones");
  safely(renderDocuments, "documents");
  safely(renderPresentations, "presentations");
  safely(renderPeople, "people");
  safely(renderContact, "contact");
  safely(initNav, "navigation");
})();
