"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import {
  FaSearch,
  FaTimes,
  FaBookOpen,
  FaStar,
  FaClock,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import { getBooksByLanguage } from "@/data/books";
import { useTheme } from "@/customization/themes/useTheme";
import { useVisualStyle } from "@/customization/visual_styles/useVisualStyle";

const RECENT_KEY = "bq:recent-searches";
const MAX_RECENT = 5;

/* ------------------------------------------------------------------ */
/*  Highlight matched substring                                       */
/* ------------------------------------------------------------------ */
function Highlight({ text = "", query = "" }) {
  if (!query) return <>{text}</>;
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark className="bq-hl">{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  );
}

export default function SearchBar({
  placeholder = "Search books, authors, genres...",
  className = "",
  onNavigate,
}) {
  const router = useRouter();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const debounceRef = useRef(null);

  const themeCtx = useTheme() || {};
  const styleCtx = useVisualStyle() || {};

  const activeTheme = themeCtx.themeName || "light";
  const activeVisualStyle =
    styleCtx.styleId || styleCtx.styleName || styleCtx.visualStyle || "default";

  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recent, setRecent] = useState([]);
  const [rect, setRect] = useState({ top: 0, left: 0, width: 420 });

  /* ---------------- mount + load data ---------------- */
  useEffect(() => {
    setMounted(true);
    try {
      const data =
        typeof getBooksByLanguage === "function"
          ? getBooksByLanguage("en")
          : [];
      setBooks(Array.isArray(data) ? data : []);
    } catch {
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  /* ---------------- recent searches ---------------- */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (raw) setRecent(JSON.parse(raw).slice(0, MAX_RECENT));
    } catch {}
  }, []);

  const persistRecent = useCallback((next) => {
    setRecent(next);
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const addRecent = useCallback(
    (term) => {
      const clean = term.trim();
      if (!clean) return;
      const next = [
        clean,
        ...recent.filter((r) => r.toLowerCase() !== clean.toLowerCase()),
      ].slice(0, MAX_RECENT);
      persistRecent(next);
    },
    [recent, persistRecent],
  );

  /* ---------------- debounce ---------------- */
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebounced(query), 120);
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  const trimmed = debounced.trim().toLowerCase();

  /* ---------------- positioned dropdown ---------------- */
  const updatePosition = useCallback(() => {
    if (!wrapperRef.current) return;
    const r = wrapperRef.current.getBoundingClientRect();
    setRect({
      top: r.bottom + 8,
      left: r.left,
      width: Math.max(r.width, 340),
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();
    const onResize = () => updatePosition();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [isOpen, updatePosition]);

  /* ---------------- outside click + Esc ---------------- */
  useEffect(() => {
    const onDown = (e) => {
      const inWrapper = wrapperRef.current?.contains(e.target);
      const inDropdown = dropdownRef.current?.contains(e.target);
      if (!inWrapper && !inDropdown) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setActiveIndex(-1);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  /* ---------------- ranked suggestions ---------------- */
  const suggestions = useMemo(() => {
    if (!trimmed) return [];
    const scored = [];
    for (const book of books) {
      const title = (book.title || "").toLowerCase();
      const author = (book.author || "").toLowerCase();
      const category = (book.category || "").toLowerCase();
      let score = -1;
      if (title.startsWith(trimmed)) score = 100;
      else if (title.includes(trimmed)) score = 80;
      else if (author.startsWith(trimmed)) score = 60;
      else if (author.includes(trimmed)) score = 40;
      else if (category.includes(trimmed)) score = 20;
      if (score >= 0) scored.push({ book, score });
    }
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 6).map((s) => s.book);
  }, [books, trimmed]);

  /* ---------------- flatten for keyboard nav ---------------- */
  const items = useMemo(() => {
    if (!trimmed) return recent.map((term) => ({ type: "recent", term }));
    return suggestions.map((book) => ({ type: "book", book }));
  }, [trimmed, suggestions, recent]);

  useEffect(() => {
    setActiveIndex(items.length ? 0 : -1);
  }, [items.length, trimmed]);

  useEffect(() => {
    if (activeIndex < 0 || !dropdownRef.current) return;
    dropdownRef.current
      .querySelector(`[data-idx="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  /* ---------------- actions ---------------- */
  const close = () => {
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const goBook = useCallback(
    (book) => {
      addRecent(book.title || query);
      close();
      setQuery("");
      onNavigate?.();
      router.push(`/books/${book.slug || book.id}`);
    },
    [addRecent, onNavigate, query, router],
  );

  const useRecent = (term) => {
    setQuery(term);
    setIsOpen(true);
    inputRef.current?.focus();
  };

  const submit = (e) => {
    e?.preventDefault?.();
    const clean = query.trim();
    if (!clean) return;
    addRecent(clean);
    close();
    onNavigate?.();
    router.push(`/search?q=${encodeURIComponent(clean)}`);
  };

  const onKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" && (trimmed || recent.length)) {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }
    if (!items.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + items.length) % items.length);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      const it = items[activeIndex];
      if (it?.type === "book") {
        e.preventDefault();
        goBook(it.book);
      } else if (it?.type === "recent") {
        e.preventDefault();
        useRecent(it.term);
      }
    }
  };

  /* ---------------- shared theme token shim ---------------- */
  // Fallbacks make the bar visible even if a theme forgets to set some tokens.
  const surface = "var(--vs-card-bg, var(--vs-surface-bg, #ffffff))";
  const text = "var(--vs-text, #0f172a)";
  const subText = "var(--vs-sub-text, #64748b)";
  const accent = "var(--vs-accent, #2563eb)";
  const accentSoft = "var(--vs-accent-soft, rgba(37, 99, 235, 0.15))";
  const subtle = "var(--vs-subtle-bg, rgba(148, 163, 184, 0.12))";
  const border = "var(--vs-divider-color, rgba(148, 163, 184, 0.28))";

  /* ---------------- dropdown ---------------- */
  const dropdown = (
    <div
      ref={dropdownRef}
      data-theme={activeTheme}
      data-visual-style={activeVisualStyle}
      className="bq-dropdown vs-card"
      style={{
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        maxWidth: "calc(100vw - 24px)",
        zIndex: 9999,
        padding: 8,
        background: surface,
        color: text,
        border: `1px solid ${border}`,
        borderRadius: "var(--vs-card-radius, 14px)",
        boxShadow:
          "var(--vs-card-shadow-hover, 0 18px 40px rgba(15, 23, 42, 0.18))",
        backdropFilter: "var(--vs-card-backdrop, blur(14px))",
        WebkitBackdropFilter: "var(--vs-card-backdrop, blur(14px))",
        fontFamily: "var(--bq-font-family, var(--vs-font-family, inherit))",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider"
        style={{ color: subText }}
      >
        <span className="truncate">
          {trimmed ? (
            <>
              Matches for{" "}
              <span style={{ color: text }}>&ldquo;{query.trim()}&rdquo;</span>
            </>
          ) : (
            "Recent searches"
          )}
        </span>
        {trimmed ? (
          <span className="shrink-0">{suggestions.length} found</span>
        ) : recent.length ? (
          <button
            type="button"
            onClick={() => persistRecent([])}
            className="bq-link-btn cursor-pointer"
            style={{ color: accent }}
          >
            Clear
          </button>
        ) : null}
      </div>

      {/* Body */}
      {trimmed ? (
        suggestions.length ? (
          <div className="flex flex-col gap-0.5">
            {suggestions.map((book, i) => {
              const active = activeIndex === i;
              return (
                <button
                  key={book.id || book.slug || book.title}
                  type="button"
                  data-idx={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => goBook(book)}
                  className="bq-row w-full text-left flex items-center gap-3 px-2.5 py-2 rounded-xl cursor-pointer"
                  style={{
                    background: active ? subtle : "transparent",
                    color: text,
                  }}
                >
                  <div
                    className="w-9 h-12 rounded-md overflow-hidden shrink-0 flex items-center justify-center"
                    style={{
                      background: subtle,
                      border: "1px solid " + border,
                    }}
                  >
                    {book.imageUrl ? (
                      <img
                        src={book.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaBookOpen size={14} style={{ color: accent }} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold truncate">
                      <Highlight text={book.title || ""} query={trimmed} />
                    </div>
                    <div
                      className="text-xs truncate flex items-center gap-1.5 mt-0.5"
                      style={{ color: subText }}
                    >
                      {book.author && (
                        <span className="truncate">
                          <Highlight text={book.author} query={trimmed} />
                        </span>
                      )}
                      {book.category && (
                        <>
                          <span aria-hidden>•</span>
                          <span className="truncate">
                            <Highlight text={book.category} query={trimmed} />
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {typeof book.rating === "number" && (
                    <span
                      className="flex items-center gap-1 text-xs font-semibold shrink-0"
                      style={{ color: text }}
                    >
                      <FaStar size={11} color="#f59e0b" />
                      {book.rating.toFixed(1)}
                    </span>
                  )}
                </button>
              );
            })}

            <button
              type="button"
              onClick={submit}
              className="bq-see-all w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 mt-1 rounded-xl cursor-pointer"
              style={{
                background: accentSoft,
                color: accent,
              }}
            >
              See all results for&nbsp;
              <strong className="font-bold">
                &ldquo;{query.trim()}&rdquo;
              </strong>
              <FaArrowRight size={9} />
            </button>
          </div>
        ) : loading ? (
          <div
            className="px-3 py-6 flex items-center justify-center gap-2 text-xs"
            style={{ color: subText }}
          >
            <FaSpinner className="animate-spin" /> Loading catalog…
          </div>
        ) : (
          <div className="px-3 py-5 text-center">
            <p
              className="text-xs font-medium mb-2.5"
              style={{ color: subText }}
            >
              No instant matches for &ldquo;{query.trim()}&rdquo;
            </p>
            <button
              type="button"
              onClick={submit}
              className="bq-see-all text-xs font-semibold px-3.5 py-1.5 rounded-full cursor-pointer"
              style={{
                background: "transparent",
                color: accent,
                border: `1px solid ${border}`,
              }}
            >
              Search full catalog
            </button>
          </div>
        )
      ) : recent.length ? (
        <div className="flex flex-col gap-0.5">
          {recent.map((term, i) => {
            const active = activeIndex === i;
            return (
              <button
                key={term}
                type="button"
                data-idx={i}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => useRecent(term)}
                className="bq-row w-full text-left flex items-center gap-3 px-2.5 py-2 rounded-xl cursor-pointer"
                style={{
                  background: active ? subtle : "transparent",
                  color: text,
                }}
              >
                <FaClock size={12} style={{ color: subText }} />
                <span className="text-sm truncate flex-1">{term}</span>
                <FaArrowRight size={9} style={{ color: subText }} />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );

  /* ---------------- render ---------------- */
  return (
    <div
      ref={wrapperRef}
      data-theme={activeTheme}
      data-visual-style={activeVisualStyle}
      className={`relative flex-1 max-w-xl ${className}`}
      style={{
        fontFamily: "var(--bq-font-family, var(--vs-font-family, inherit))",
      }}
    >
      <form
        onSubmit={submit}
        className="bq-form flex items-center gap-2.5 px-3.5 py-2"
        style={{
          background: surface,
          color: text,
          border: `1px solid ${border}`,
          borderRadius: "var(--vs-chip-radius, 9999px)",
          boxShadow: "var(--vs-chip-shadow, 0 1px 2px rgba(15, 23, 42, 0.06))",
          transition: "box-shadow .18s ease, border-color .18s ease",
        }}
      >
        {loading ? (
          <FaSpinner
            size={14}
            className="shrink-0 animate-spin"
            style={{ color: accent }}
          />
        ) : (
          <FaSearch size={14} className="shrink-0" style={{ color: accent }} />
        )}

        <input
          ref={inputRef}
          type="text"
          value={query}
          placeholder={placeholder}
          aria-label="Search books, authors, or genres"
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls="bq-search-list"
          aria-activedescendant={
            activeIndex >= 0 ? `bq-search-item-${activeIndex}` : undefined
          }
          autoComplete="off"
          onFocus={() => {
            if (trimmed || recent.length) {
              updatePosition();
              setIsOpen(true);
            }
          }}
          onChange={(e) => {
            const v = e.target.value;
            setQuery(v);
            if (v.trim() || recent.length) {
              updatePosition();
              setIsOpen(true);
            } else {
              setIsOpen(false);
            }
          }}
          onKeyDown={onKeyDown}
          className="bq-input w-full bg-transparent text-sm outline-none"
          style={{
            color: text,
            fontFamily: "inherit",
          }}
        />

        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="bq-icon-btn w-6 h-6 rounded-full flex items-center justify-center shrink-0 cursor-pointer"
            style={{
              background: subtle,
              color: subText,
            }}
          >
            <FaTimes size={11} />
          </button>
        )}

        <button
          type="submit"
          className="bq-submit text-xs font-semibold px-3.5 py-1.5 rounded-full shrink-0 cursor-pointer hidden sm:inline-flex items-center"
          style={{
            background: accent,
            color: "#fff",
            border: "none",
          }}
        >
          Search
        </button>
      </form>

      {/* Render into a themed node so --vs-* tokens resolve. */}
      {mounted &&
        isOpen &&
        (trimmed || recent.length) &&
        createPortal(
          dropdown,
          document.body.dataset.theme
            ? document.body
            : document.documentElement,
        )}

      <style jsx>{`
        .bq-form:focus-within {
          border-color: var(--vs-accent, #2563eb) !important;
          box-shadow:
            0 0 0 3px var(--vs-accent-soft, rgba(37, 99, 235, 0.18)),
            0 1px 2px rgba(15, 23, 42, 0.06) !important;
        }
        .bq-input::placeholder {
          color: var(--vs-sub-text, #94a3b8);
          opacity: 0.9;
        }
        .bq-row {
          transition: background 0.12s ease;
        }
        .bq-icon-btn {
          transition: opacity 0.12s ease;
        }
        .bq-icon-btn:hover {
          opacity: 0.75;
        }
        .bq-submit {
          transition:
            transform 0.12s ease,
            filter 0.12s ease;
        }
        .bq-submit:hover {
          filter: brightness(1.06);
        }
        .bq-submit:active {
          transform: scale(0.96);
        }
        .bq-see-all {
          transition: filter 0.12s ease;
        }
        .bq-see-all:hover {
          filter: brightness(0.96);
        }
        .bq-link-btn {
          background: none;
          border: none;
          font-size: 11px;
          font-weight: 600;
          padding: 0;
        }
        .bq-link-btn:hover {
          text-decoration: underline;
        }
        .bq-dropdown {
          animation: bqDrop 140ms ease-out;
        }
        @keyframes bqDrop {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .bq-hl {
          background: var(--vs-accent-soft, rgba(37, 99, 235, 0.2));
          color: inherit;
          border-radius: 3px;
          padding: 0 2px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
