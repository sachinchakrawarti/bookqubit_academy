// src/customization/themes/themes_default/forest.js
const forestTheme = {
  name: 'forest',
  label: 'Deep Forest',

  // Core color tokens used by visual styles and CSS injection
  primary: '#059669',   // emerald-600 (rich forest green accent)
  text: '#064e3b',      // emerald-900 (deep earthy ink)
  muted: '#475569',     // slate-600 (muted secondary text)
  bg: '#f0fdf4',        // green-50 (soft natural canvas)
  bgSurface: '#ffffff', // pure white for elevated cards
  bgSubtle: '#dcfce7',  // green-100 (subtle natural tint)

  hex: {
    emerald50: '#ecfdf5',
    emerald100: '#d1fae5',
    emerald200: '#a7f3d0',
    emerald500: '#10b981',
    emerald600: '#059669',
    emerald700: '#047857',
    emerald800: '#065f46',
    emerald900: '#064e3b',

    green50: '#f0fdf4',
    green100: '#dcfce7',
    green500: '#22c55e',
    green600: '#16a34a',

    slate50: '#f8fafc',
    slate100: '#f1f5f9',
    slate200: '#e2e8f0',
    slate300: '#cbd5e1',
    slate600: '#475569',
    slate700: '#334155',
    slate900: '#0f172a',

    rose50: '#fff1f2',
    rose400: '#fb7185',
    rose600: '#e11d48',

    amber400: '#fbbf24',
    amber500: '#f59e0b',

    gray50: '#f9fafb',
    gray300: '#d1d5db',
    gray600: '#4b5563',
    white: '#ffffff',
  },

  background: {
    section: "linear-gradient(to bottom, #f0fdf4, #ecfdf5)",
    bookCoverSide: "linear-gradient(to bottom right, #dcfce7, #bbf7d0)",
    navigationDots: "#ffffff"
  },

  textColors: {
    primary: "#064e3b",
    secondary: "#475569",
    highlight: "#059669",
    badge: "#047857",
    wishlistSaved: "#e11d48",
    wishlistDefault: "#4b5563"
  },

  buttonColors: {
    primaryButton: {
      background: "linear-gradient(to right, #059669, #10b981)",
      hoverBackground: "linear-gradient(to right, #047857, #059669)",
      textColor: "#ffffff"
    },
    secondaryButton: {
      background: "#ffffff",
      borderColor: "#10b981",
      hoverBackground: "#ecfdf5",
      textColor: "#047857"
    },
    wishlistButton: {
      savedBackground: "#fff1f2",
      savedBorderColor: "#fb7185",
      defaultBackground: "#ffffff",
      defaultBorderColor: "#d1d5db",
      hoverBackground: "#f9fafb"
    }
  },

  iconColors: {
    starFilled: "#f59e0b",
    starEmpty: "#d1d5db",
    navigationArrow: "#059669",
    navigationArrowHover: "#047857"
  },

  border: {
    default: "12px",
    button: "8px",
    navigationDot: "9999px"
  },

  shadow: {
    book: "0 20px 25px -5px rgba(6, 78, 59, 0.1), 0 8px 10px -6px rgba(6, 78, 59, 0.08)",
    container: "0 10px 15px -3px rgba(6, 78, 59, 0.08), 0 4px 6px -4px rgba(6, 78, 59, 0.06)",
    button: "0 4px 6px -1px rgba(6, 78, 59, 0.1), 0 2px 4px -2px rgba(6, 78, 59, 0.06)",
    buttonHover: "0 10px 15px -3px rgba(5, 150, 105, 0.18), 0 4px 6px -4px rgba(5, 150, 105, 0.12)",
    navigationDotContainer: "0 1px 2px 0 rgba(6, 78, 59, 0.05)"
  },

  layout: {
    sectionPadding: "48px 16px",
    containerWidth: "1280px"
  },

  ringEffect: "inset 0 0 0 1px rgba(6, 78, 59, 0.08)",
  opacityOverlay: 0.1
};

export default forestTheme;