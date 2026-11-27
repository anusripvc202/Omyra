/* OMYRA – site interactions (vanilla JS + Bootstrap 5) */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* Transparent-to-glassmorphic navbar on scroll */
  const navbar = document.querySelector(".main-navbar") || document.querySelector(".site-header");
  const toTop = document.querySelector(".back-to-top");
  const onScroll = () => {
    const isScrolled = window.scrollY > 40;
    if (navbar) navbar.classList.toggle("scrolled", isScrolled);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop && toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* Footer year */
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* Reveal on scroll */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add("in"));

  /* Animated counters */
  const counters = $$("[data-count]");
  const runCounter = (el) => {
    const target = parseFloat(el.dataset.count), suffix = el.dataset.suffix || "", dur = 1600, start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { runCounter(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach((c) => co.observe(c));
  } else counters.forEach((c) => (c.textContent = c.dataset.count + (c.dataset.suffix || "")));

  /* Filterable grids: [data-filter-group] buttons -> [data-filter-target] items */
  $$("[data-filter-group]").forEach((group) => {
    const target = $(group.dataset.filterGroup);
    if (!target) return;
    const buttons = $$(".filter-pill", group);
    const apply = (filter) => {
      buttons.forEach((b) => {
        const on = b.dataset.filter === filter;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      $$(".filter-item", target).forEach((item) => {
        const cats = (item.dataset.category || "").split(" ");
        const searchHidden = item.dataset.searchHidden === "1";
        const show = (filter === "all" || cats.includes(filter)) && !searchHidden;
        item.classList.toggle("is-hidden", !show);
      });
      target.dataset.activeFilter = filter;
      const empty = $("[data-empty]", target.parentElement);
      if (empty) empty.classList.toggle("d-none", $$(".filter-item:not(.is-hidden)", target).length > 0);
    };
    buttons.forEach((b) => b.addEventListener("click", () => apply(b.dataset.filter)));
    target._applyFilter = apply;
    const hash = location.hash.replace("#", "");
    if (hash && buttons.some((b) => b.dataset.filter === hash)) {
      apply(hash);
      setTimeout(() => group.scrollIntoView({ behavior: "smooth", block: "center" }), 250);
    } else apply("all");
  });
  // keep dropdown hash links working while already on the page
  window.addEventListener("hashchange", () => {
    const hash = location.hash.replace("#", "");
    $$("[data-filter-group]").forEach((group) => {
      const target = $(group.dataset.filterGroup);
      if (target && target._applyFilter && $$(".filter-pill", group).some((b) => b.dataset.filter === hash)) {
        target._applyFilter(hash);
        group.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  /* Blog search */
  const search = $("#blogSearch");
  if (search) {
    const grid = $("#blogGrid");
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      $$(".filter-item", grid).forEach((item) => {
        item.dataset.searchHidden = q && !item.textContent.toLowerCase().includes(q) ? "1" : "0";
      });
      grid._applyFilter && grid._applyFilter(grid.dataset.activeFilter || "all");
    });
  }

  /* 5-Group Catalog Filtering, Search & Extensible Group 5 Rendering (treatments.html) */
  const renderGroup5Cards = (gridEl, subcat, prefix = "") => {
    if (!gridEl || !subcat || !Array.isArray(subcat.services) || subcat.services.length === 0) return;
    const extraHtml = subcat.services.map((item) => {
      const detailHref = item.detailUrl
        ? `${prefix}${item.detailUrl}`
        : `${prefix}service-detail.html?service=${encodeURIComponent(item.slug)}`;
      const consultHref = `${prefix}consultation.html?treatment=${encodeURIComponent(item.slug || subcat.consultationSlug)}`;
      const safeName = (item.name || "").replace(/"/g, "&quot;");
      const imgSrc = item.img ? `${prefix}${item.img}?v=38` : `${prefix}${subcat.img}?v=38`;
      return `
        <div class="col-md-6 col-lg-4 service-item" data-category="yoniveda-garbha-sanskar" data-subcategory="${subcat.id}" data-search-text="${safeName} ${(item.shortDesc || "").replace(/"/g, "&quot;")} ${subcat.name} YONIVEDA GARBHA SANSKAR">
          <article class="g5-feature-card">
            <div class="media">
              <img src="${imgSrc}" alt="${safeName}" loading="lazy">
              <span class="tag">${subcat.name}</span>
            </div>
            <div class="body">
              <h4>${item.name}</h4>
              <p class="desc">${item.shortDesc || ""}</p>
              <div class="g5-card-btn-row">
                <a class="btn-omyra-outline" href="${detailHref}">Learn More <i class="bi bi-arrow-right"></i></a>
                <a class="btn-omyra" href="${consultHref}">Book a Consultation</a>
              </div>
            </div>
          </article>
        </div>`;
    }).join("");
    gridEl.insertAdjacentHTML("beforeend", extraHtml);
  };

  if (window.OMYRA_GROUP5 && Array.isArray(window.OMYRA_GROUP5.subcategories)) {
    window.OMYRA_GROUP5.subcategories.forEach((sub) => {
      renderGroup5Cards(document.querySelector(`[data-g5-grid="${sub.id}"]`), sub, "");
      const detailGrid = document.querySelector(`[data-g5-detail-grid="${sub.id}"]`);
      if (detailGrid && sub.services.length > 0) {
        const emptyNote = document.querySelector(`[data-g5-empty-note="${sub.id}"]`);
        if (emptyNote) emptyNote.classList.add("d-none");
        renderGroup5Cards(detailGrid, sub, "../../");
      }
    });
  }

  const catalog = $("#servicesCatalog");
  if (catalog) {
    const pills = $$(".filter-pill", $("#serviceFilterPills"));
    const searchInput = $("#serviceSearch");
    const clearBtn = $("#serviceSearchClear");
    const countEl = $("#serviceMatchCount");
    const emptyEl = $("#serviceEmptyState");
    const resetBtn = $("#serviceResetFilters");
    const sections = $$(".service-category-section", catalog);
    let activeCat = "all";

    const updateCatalog = (scrollTargetId = "") => {
      const q = (searchInput ? searchInput.value : "").trim().toLowerCase();
      if (clearBtn) clearBtn.classList.toggle("d-none", !q);
      let visibleTotal = 0;

      sections.forEach((sec) => {
        const secCat = sec.dataset.catSection;
        const catMatches = activeCat === "all" || activeCat === secCat;
        let secVisible = 0;
        $$(".service-item", sec).forEach((cardCol) => {
          const text = (cardCol.dataset.searchText || cardCol.textContent).toLowerCase();
          const show = catMatches && (!q || text.includes(q));
          cardCol.classList.toggle("is-hidden", !show);
          if (show) {
            secVisible++;
            visibleTotal++;
          }
        });
        // Also hide empty Group 5 subcategory blocks during search
        $$(".g5-subcat-block", sec).forEach((blk) => {
          const anyVis = $$(".service-item:not(.is-hidden)", blk).length > 0;
          blk.classList.toggle("d-none", !anyVis);
        });
        sec.classList.toggle("is-hidden", secVisible === 0);
      });

      pills.forEach((btn) => {
        const on = btn.dataset.catFilter === activeCat;
        btn.classList.toggle("active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });

      if (countEl) {
        countEl.textContent = q
          ? `Showing ${visibleTotal} matching listings for "${searchInput.value.trim()}"`
          : activeCat === "all"
            ? `Showing all 47 brochure services + YONIVEDA & GARBHA SANSKAR across 5 treatment groups`
            : activeCat === "yoniveda-garbha-sanskar"
              ? `Showing Group 5 – YONIVEDA & GARBHA SANSKAR`
              : `Showing ${visibleTotal} services`;
      }
      if (emptyEl) emptyEl.classList.toggle("d-none", visibleTotal > 0);

      if (scrollTargetId) {
        const targetEl = document.getElementById(scrollTargetId);
        if (targetEl) setTimeout(() => targetEl.scrollIntoView({ behavior: "smooth", block: "start" }), 70);
      }
    };

    pills.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCat = btn.dataset.catFilter;
        updateCatalog("");
        if (activeCat === "all") {
          history.replaceState(null, "", "treatments.html");
        } else {
          history.replaceState(null, "", "#" + activeCat);
        }
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", () => updateCatalog(""));
    }
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        updateCatalog("");
        searchInput.focus();
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        activeCat = "all";
        if (searchInput) searchInput.value = "";
        updateCatalog("");
      });
    }

    const applyHash = () => {
      const h = location.hash.replace("#", "");
      if (h === "yoniveda" || h === "garbha-sanskar") {
        activeCat = "yoniveda-garbha-sanskar";
        updateCatalog(h);
      } else if (h && pills.some((b) => b.dataset.catFilter === h)) {
        activeCat = h;
        updateCatalog(h);
      } else {
        activeCat = "all";
        updateCatalog("");
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
  }

  /* Reusable Service Detail Page renderer (service-detail.html) */
  const detailRoot = $("#serviceDetailRoot");
  if (detailRoot && Array.isArray(window.OMYRA_SERVICES)) {
    const extraG5 = (window.OMYRA_GROUP5 && Array.isArray(window.OMYRA_GROUP5.subcategories))
      ? window.OMYRA_GROUP5.subcategories.flatMap((s) => s.services || [])
      : [];
    const combinedServices = window.OMYRA_SERVICES.concat(extraG5);
    const slug = new URLSearchParams(location.search).get("service");
    const srv = combinedServices.find((s) => s.slug === slug) || window.OMYRA_SERVICES[0];
    const cat = (window.OMYRA_CATEGORIES || []).find((c) => c.id === srv.category);

    document.title = `${srv.name} – OMYRA | ${srv.categoryLabel}`;
    const setText = (sel, val) => { const el = $(sel); if (el) el.textContent = val; };
    setText("#sdBreadcrumbCat", srv.categoryLabel);
    setText("#sdBreadcrumbName", srv.name);
    const bcCat = $("#sdBreadcrumbCat");
    if (bcCat) bcCat.href = "treatments.html#" + srv.category;
    setText("#sdCategoryBadge", srv.categoryLabel);
    setText("#sdTitle", srv.name);
    setText("#sdShortDesc", srv.shortDesc);
    setText("#sdOverview", srv.overview);
    setText("#sdSessionInfo", srv.sessionInfo);
    setText("#sdApproach", srv.approach);

    const imgEl = $("#sdImage");
    if (imgEl) { imgEl.src = srv.img + "?v=34"; imgEl.alt = srv.name; }

    const bookBtn = $("#sdBookBtn");
    if (bookBtn) bookBtn.href = "consultation.html?treatment=" + encodeURIComponent(srv.slug);
    const backBtn = $("#sdBackBtn");
    if (backBtn) {
      backBtn.href = "treatments.html#" + srv.category;
      backBtn.innerHTML = `<i class="bi bi-arrow-left"></i> All ${cat ? cat.shortTitle : srv.categoryLabel}`;
    }

    const listEl = $("#sdHighlights");
    if (listEl) {
      listEl.innerHTML = srv.highlights
        .map((h) => `<li><i class="bi bi-check2"></i><span>${h}</span></li>`)
        .join("");
    }

    const relGrid = $("#sdRelatedGrid");
    const relHeading = $("#sdRelatedHeading");
    if (relHeading) relHeading.textContent = `More ${srv.categoryLabel}`;
    if (relGrid) {
      const siblings = window.OMYRA_SERVICES.filter((s) => s.category === srv.category && s.slug !== srv.slug).slice(0, 4);
      relGrid.innerHTML = siblings.map((item) => `
        <div class="col-sm-6 col-lg-3">
          <article class="treatment-card service-catalog-card">
            <div class="media">
              <img src="${item.img}?v=34" alt="${item.name.replace(/"/g, "&quot;")}" loading="lazy">
              <span class="tag">${cat ? cat.shortTitle : item.categoryLabel}</span>
            </div>
            <div class="body">
              <h3>${item.name}</h3>
              <p class="desc">${item.shortDesc}</p>
              <div class="service-card-actions">
                <a class="link-arrow" href="service-detail.html?service=${encodeURIComponent(item.slug)}">View Details <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </article>
        </div>
      `).join("");
    }
  }

  /* Gallery lightbox */
  const lbEl = $("#lightboxModal");
  if (lbEl && window.bootstrap) {
    const lb = new bootstrap.Modal(lbEl);
    const img = $("img", lbEl), cap = $(".lightbox-caption", lbEl);
    let list = [], idx = 0;
    const show = () => {
      const it = list[idx];
      img.src = it.dataset.full; img.alt = it.dataset.title || "";
      cap.textContent = it.dataset.title || "";
    };
    $$("[data-lightbox]").forEach((btn) => btn.addEventListener("click", () => {
      list = $$("[data-lightbox]").filter((b) => !b.closest(".filter-item.is-hidden"));
      idx = list.indexOf(btn); show(); lb.show();
    }));
    $(".lightbox-nav.prev", lbEl).addEventListener("click", () => { idx = (idx - 1 + list.length) % list.length; show(); });
    $(".lightbox-nav.next", lbEl).addEventListener("click", () => { idx = (idx + 1) % list.length; show(); });
    lbEl.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") $(".lightbox-nav.prev", lbEl).click();
      if (e.key === "ArrowRight") $(".lightbox-nav.next", lbEl).click();
    });
  }

  /* Treatment details modal */
  const tmEl = $("#treatmentModal");
  if (tmEl && window.bootstrap) {
    const tm = new bootstrap.Modal(tmEl);
    $$("[data-treatment]").forEach((btn) => btn.addEventListener("click", () => {
      const card = btn.closest("[data-title]");
      const d = card.dataset;
      $(".tm-img", tmEl).src = d.img; $(".tm-img", tmEl).alt = d.title;
      $(".tm-title", tmEl).textContent = d.title;
      $(".tm-sub", tmEl).textContent = d.sub;
      $(".tm-desc", tmEl).textContent = d.desc;
      $(".tm-duration", tmEl).textContent = d.duration;
      $(".tm-sessions", tmEl).textContent = d.sessions;
      $(".tm-benefits", tmEl).innerHTML = d.benefits.split("|").map((b) => `<li><i class="bi bi-check2"></i><span>${b}</span></li>`).join("");
      $(".tm-book", tmEl).href = "consultation.html?treatment=" + encodeURIComponent(d.slug);
      tm.show();
    }));
  }

  /* Blog article modal */
  const amEl = $("#articleModal");
  if (amEl && window.bootstrap) {
    const am = new bootstrap.Modal(amEl);
    $$("[data-article]").forEach((btn) => btn.addEventListener("click", (e) => {
      e.preventDefault();
      const tpl = $("#" + btn.dataset.article);
      if (!tpl) return;
      $(".article-content", amEl).innerHTML = tpl.innerHTML;
      $(".article-cover", amEl).src = tpl.dataset.cover; $(".article-cover", amEl).alt = tpl.dataset.title;
      am.show();
    }));
  }

  /* Forms – client-side validation & friendly confirmation */
  $$("form.needs-validation").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); e.stopPropagation();
      const ok = form.checkValidity();
      form.classList.add("was-validated");
      const msg = $(".form-success", form);
      if (!ok) { const bad = $(":invalid", form); bad && bad.focus(); msg && msg.classList.remove("show"); return; }
      const btn = $("[type=submit]", form), label = btn.innerHTML;
      btn.disabled = true; btn.innerHTML = '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Sending…';
      setTimeout(() => {
        const name = (form.querySelector("[name=name]") || {}).value || "";
        if (msg) {
          const first = name.trim().split(" ")[0];
          $(".form-success-name", msg) && ($(".form-success-name", msg).textContent = first ? ", " + first : "");
          msg.classList.add("show");
        }
        form.reset(); form.classList.remove("was-validated");
        btn.disabled = false; btn.innerHTML = label;
        setMinDate();
      }, 900);
    });
  });

  /* Newsletter forms */
  $$(".newsletter-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = $("input[type=email]", form), out = $(".newsletter-msg", form);
      const valid = input.value && input.checkValidity();
      if (out) out.textContent = valid ? "Thank you! You're subscribed to OMYRA beauty notes." : "Please enter a valid email address.";
      if (valid) input.value = "";
      else input.focus();
    });
  });

  /* Consultation: minimum date + prefill treatment from ?treatment= */
  function setMinDate() {
    const d = $("#prefDate");
    if (!d) return;
    const t = new Date(); t.setMinutes(t.getMinutes() - t.getTimezoneOffset());
    d.min = t.toISOString().split("T")[0];
  }
  setMinDate();
  const sel = $("#treatmentSelect");
  if (sel) {
    const want = new URLSearchParams(location.search).get("treatment");
    if (want) {
      const opt = $$("option", sel).find((o) => o.value === want);
      if (opt) sel.value = want;
    }
  }
  const expertSel = $("#expertSelect");
  if (expertSel) {
    const want = new URLSearchParams(location.search).get("expert");
    if (want && $$("option", expertSel).some((o) => o.value === want)) expertSel.value = want;
  }

  /* Close mobile menu after choosing an in-page link */
  const nav = $("#mainNav");
  if (nav && window.bootstrap) {
    $$(".nav-link, .dropdown-item, .mega-mob-list a", nav).forEach((a) => a.addEventListener("click", () => {
      if (nav.classList.contains("show") && a.getAttribute("href") && a.getAttribute("href").includes("#")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }));
  }

  /* Treatments Multi-Level Mega Menu (Desktop hover/click + Mobile Accordion) */
  const megaItem = $(".nav-item.has-mega");
  if (megaItem) {
    const toggleBtn = $(".mega-toggle", megaItem);
    const navLink = $(":scope > .nav-link", megaItem);
    const catBtns = $$(".mega-cat-btn", megaItem);
    const panes = $$(".mega-pane", megaItem);
    const mobCats = $$(".mega-mob-cat", megaItem);
    let closeTimer = null;

    const isDesktop = () => window.innerWidth >= 1200;

    const setActiveCat = (catId) => {
      catBtns.forEach((b) => {
        const on = b.dataset.megaCat === catId;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      panes.forEach((p) => p.classList.toggle("active", p.dataset.megaPane === catId));
    };

    const openMega = () => {
      clearTimeout(closeTimer);
      megaItem.classList.add("mega-open");
      toggleBtn && toggleBtn.setAttribute("aria-expanded", "true");
    };

    const closeMega = (immediate = false) => {
      clearTimeout(closeTimer);
      const hide = () => {
        megaItem.classList.remove("mega-open");
        toggleBtn && toggleBtn.setAttribute("aria-expanded", "false");
      };
      if (immediate) hide();
      else closeTimer = setTimeout(hide, 140);
    };

    // Desktop hover open/close with forgiving bridge delay
    megaItem.addEventListener("mouseenter", () => { if (isDesktop()) openMega(); });
    megaItem.addEventListener("mouseleave", () => { if (isDesktop()) closeMega(false); });

    // Click chevron toggle (desktop & mobile)
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (megaItem.classList.contains("mega-open")) closeMega(true);
        else openMega();
      });
    }

    // On mobile, tapping Treatments text opens accordion if closed; second tap goes to treatments.html
    if (navLink) {
      navLink.addEventListener("click", (e) => {
        if (!isDesktop() && !megaItem.classList.contains("mega-open")) {
          e.preventDefault();
          openMega();
        }
      });
    }

    // Desktop 1st-level category hover & click switches 2nd-level nested panel
    catBtns.forEach((btn) => {
      btn.addEventListener("mouseenter", () => { if (isDesktop()) setActiveCat(btn.dataset.megaCat); });
      btn.addEventListener("focus", () => { if (isDesktop()) { openMega(); setActiveCat(btn.dataset.megaCat); } });
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        setActiveCat(btn.dataset.megaCat);
      });
    });

    // Mobile expandable accordion per category
    mobCats.forEach((box) => {
      const trig = $(".mega-mob-trigger", box);
      if (!trig) return;
      trig.addEventListener("click", (e) => {
        e.preventDefault();
        const willOpen = !box.classList.contains("open");
        mobCats.forEach((other) => {
          other.classList.remove("open");
          const ot = $(".mega-mob-trigger", other);
          ot && ot.setAttribute("aria-expanded", "false");
        });
        if (willOpen) {
          box.classList.add("open");
          trig.setAttribute("aria-expanded", "true");
        }
      });
    });

    // Close on outside click or Escape key
    document.addEventListener("click", (e) => {
      if (!megaItem.contains(e.target)) closeMega(true);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMega(true);
    });
  }

  /* Styled Video Testimonials: hover preview + theatre modal player */
  const vCards = $$(".vtest-card");
  const vModalEl = $("#videoTestimonialModal");
  if (vCards.length) {
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vModal = vModalEl && window.bootstrap ? new bootstrap.Modal(vModalEl) : null;
    const modalVideo = $("#vtestModalVideo");

    const openVideoCard = (card) => {
      if (!vModal || !modalVideo) return;
      const d = card.dataset;
      const setText = (sel, val) => { const el = $(sel); if (el) el.textContent = val || ""; };
      setText("#vtestModalCat", d.videoCat);
      setText("#vtestModalQuote", d.videoQuote);
      setText("#vtestModalTitle", d.videoClient);
      setText("#vtestModalRole", d.videoRole);
      const av = $("#vtestModalAvatar");
      if (av && d.videoAvatar) { av.src = d.videoAvatar; av.alt = d.videoClient || "OMYRA Client"; }
      const bk = $("#vtestModalBook");
      if (bk) bk.href = d.videoSlug ? `consultation.html?treatment=${encodeURIComponent(d.videoSlug)}` : "consultation.html";
      modalVideo.poster = d.videoPoster || "";
      modalVideo.src = d.videoSrc || "";
      modalVideo.currentTime = 0;
      vModal.show();
      modalVideo.play().catch(() => {});
    };

    vCards.forEach((card) => {
      const previewVid = $("video", card);
      if (previewVid && !reduceMotion) {
        card.addEventListener("mouseenter", () => {
          if (window.innerWidth >= 992) previewVid.play().catch(() => {});
        });
        card.addEventListener("mouseleave", () => {
          previewVid.pause();
          previewVid.currentTime = 0;
        });
      }
      card.addEventListener("click", () => openVideoCard(card));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openVideoCard(card);
        }
      });
    });

    if (vModalEl && modalVideo) {
      vModalEl.addEventListener("hidden.bs.modal", () => {
        modalVideo.pause();
        modalVideo.removeAttribute("src");
        modalVideo.load();
      });
    }
  }
})();
