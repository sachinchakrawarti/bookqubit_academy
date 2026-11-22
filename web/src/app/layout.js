// src/app/layout.js
import ThemeProvider from "@/customization/themes/ThemeProvider.jsx";
import FontProvider from "@/customization/font/FontProvider.jsx";
import Navbar from "@/layout/navbar/navbar.jsx";
import HtmlLangSync from "@/customization/i18n/HtmlLangSync.jsx";
import "./globals.css";

export const metadata = {
  title: {
    default: "BookQubit Academy",
    template: "%s | BookQubit Academy",
  },
  description: "Tutorials, programming guides, and academic resources.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <HtmlLangSync />
        <ThemeProvider>
          <FontProvider>
            <Navbar />
            {children}
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}