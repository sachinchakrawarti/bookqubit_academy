// src/layout/footer/footer.jsx
import Link from "next/link";

const columns = [
  {
    title: "Learn",
    links: [
      { label: "Tutorials", href: "/tutorials" },
      { label: "Exercises", href: "/exercises" },
      { label: "Quizzes", href: "/quizzes" },
      { label: "Courses", href: "/courses" },
    ],
  },
  {
    title: "Tracks",
    links: [
      { label: "HTML", href: "/tutorials/html" },
      { label: "CSS", href: "/tutorials/css" },
      { label: "JavaScript", href: "/tutorials/javascript" },
      { label: "React", href: "/tutorials/react" },
      { label: "Next.js", href: "/tutorials/nextjs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Certificates", href: "/certificates" },
      { label: "Community", href: "/community" },
      { label: "Help Center", href: "/help" },
      { label: "Status", href: "/status" },
    ],
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com",
    path: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M18.9 2H22l-7.1 8.1L23.2 22h-6.5l-5.1-6.7L5.7 22H2.6l7.6-8.7L1.5 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.7L7.3 3.7H5.5L17.8 20z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.6 15.6V8.4L15.8 12l-6.2 3.6z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Top: brand + link columns */}
        <div className="grid gap-8 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-lg font-bold text-white">
                B
              </span>
              <span className="text-lg font-semibold tracking-tight text-gray-900">
                BookQubit <span className="text-emerald-600">Academy</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
              Learn web development the practical way — tutorials, exercises,
              and courses that run in your browser.
            </p>

            <div className="mt-4 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md text-gray-500 hover:bg-gray-200 hover:text-gray-800"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-emerald-700 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} BookQubit Academy. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="hover:text-gray-800 hover:underline"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-800 hover:underline">
              Terms
            </Link>
            <Link
              href="/cookies"
              className="hover:text-gray-800 hover:underline"
            >
              Cookies
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-gray-800 hover:underline"
            >
              Accessibility
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
