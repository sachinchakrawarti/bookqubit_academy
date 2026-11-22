// src/app/[lang]/layout.js
const LANGS = ["en", "fr", "de"];

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }) {
  // `await` is required on Next 16; harmless on 14/15.
  // eslint-disable-next-line no-unused-vars
  const { lang } = await params;
  return <>{children}</>;
}