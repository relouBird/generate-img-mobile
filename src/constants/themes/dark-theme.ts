/**
 * SOURCE COLORS (Palette mère)
 */
const wattle = "#CCDA47";
const bottleGreen = "#0A3625";

/**
 * DERIVED PALETTE - Dark Theme (inversé)
 */
export const darkPalette = {
  // Primary devient Wattle inverse
  primary: {
    50: "#F6F9D4",
    100: "#EDF3A8",
    200: "#E3EC7D",
    300: "#DDE86A",
    400: "#D4E052",
    500: wattle, // Devient Wattle
    600: "#B8C63A",
    700: "#9BAA2D",
    800: "#7D8A22",
    900: "#606A18",
    950: "#3D4A0E",
  },
  // Accent devient Bottle Green inverse
  accent: {
    50: "#E8F2EB",
    100: "#C5DEC9",
    200: "#9EC9A6",
    300: "#72B380",
    400: "#3D9457",
    500: bottleGreen, // Devient Bottle Green
    600: "#072A1C",
    700: "#051F14",
    800: "#03150D",
    900: "#020E08",
  },
  // Background - Version sombre
  background: {
    50: "#0A0A0A",
    100: "#111111",
    soft50: "#1A1A1A",
    soft100: "#222222",
    soft200: "#2A2A2A",
    soft300: "#333333",
    soft400: "#3D3D3D",
    soft500: "#4A4A4A",
  },
  // Text - inversés
  text: {
    title: wattle,
    primary: "#7D9A8A",
    secondary: "#9AB3A4",
    tertiary: "#B8CCBF",
  },
  // Border - adaptés
  border: {
    50: "#333333",
    100: "#3D3D3D",
    200: "#4A4A4A",
    300: "#5A5A5A",
  },
  // Foreground - inversé
  foreground: {
    50: wattle,
    100: wattle,
    soft50: wattle,
    soft100: wattle,
    soft200: "#9AB3A4",
    soft300: "#9AB3A4",
    soft400: "#B8CCBF",
    soft500: "#B8CCBF",
  },
  // Status (gardées mais adaptées)
  success: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    500: "#16A34A",
    600: "#15803D",
  },
  error: {
    50: "#FEF2F2",
    100: "#FECACA",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
  },
  warning: {
    50: "#FFFBEB",
    100: "#FEF08A",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
  },
  info: {
    50: "#F0F9FF",
    100: "#BAE6FD",
    400: "#38BDF8",
    500: "#0EA5E9",
    600: "#0284C7",
  },
  // White
  white: {
    100: "#FFFFFF",
    90: "#FFFFFFCC",
    80: "#FFFFFFCC",
    70: "#FFFFFFB3",
    60: "#FFFFFF99",
  },
};
/**
 * SEMANTIC TOKENS - Dark Theme
 */
export const darkSemantic = {
  // App
  background: darkPalette.background.soft50,
  foreground: darkPalette.primary[500],

  // Card
  card: darkPalette.background[50],
  cardForeground: darkPalette.primary[500],

  // Primary UI
  primary: darkPalette.primary[500],
  primaryForeground: darkPalette.accent[500],

  // Secondary UI
  secondary: darkPalette.background.soft100,
  secondaryForeground: darkPalette.primary[500],

  // Muted
  muted: darkPalette.background.soft200,
  mutedForeground: darkPalette.text.secondary,

  // Borders
  border: darkPalette.border[200],

  // Status
  success: darkPalette.success[500],
  warning: darkPalette.warning[500],
  danger: darkPalette.error[500],

  // Shadows - adaptés pour dark mode
  shadow: {
    xs: {
      shadowColor: "rgba(0, 0, 0, 0.3)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 1,
    },
    sm: {
      shadowColor: "rgba(0, 0, 0, 0.4)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 2,
    },
    md: {
      shadowColor: "rgba(0, 0, 0, 0.4)",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: "rgba(0, 0, 0, 0.4)",
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 1,
      shadowRadius: 16,
      elevation: 8,
    },
  },

  // Buttons
  button: {
    primary: {
      background: darkPalette.primary[500],
      hoverBackground: darkPalette.primary[600],
      text: darkPalette.accent[500],
    },
    outline: {
      background: darkPalette.background[50],
      hoverBackground: darkPalette.background.soft100,
      border: darkPalette.border[200],
      text: darkPalette.primary[500],
      hoverText: darkPalette.primary[600],
    },
    disabled: {
      background: darkPalette.background.soft100,
      border: darkPalette.background.soft200,
      text: darkPalette.accent[700],
    },
    error: {
      background: darkPalette.error[600],
      text: "#FFFFFF",
    },
    success: {
      background: darkPalette.success[500],
      text: "#FFFFFF",
    },
    ghost: {
      text: darkPalette.text.tertiary,
      hoverText: darkPalette.text.secondary,
      hoverBackground: darkPalette.background.soft100,
    },
  },

  // Badges
  badge: {
    neutral: {
      background: darkPalette.background.soft100,
      text: "#1A4D35",
      icon: darkPalette.text.secondary,
    },
    primary: {
      background: darkPalette.primary[50],
      text: darkPalette.primary[500],
      icon: darkPalette.primary[500],
    },
    error: {
      background: darkPalette.error[50],
      text: darkPalette.error[600],
      icon: darkPalette.error[500],
    },
    warning: {
      background: darkPalette.warning[50],
      text: "#B45309",
      icon: darkPalette.warning[500],
    },
    success: {
      background: darkPalette.success[50],
      text: darkPalette.success[600],
      icon: darkPalette.success[500],
    },
  },

  // Sidebar
  sidebar: {
    nav: {
      defaultBackground: darkPalette.background.soft100,
      hoverBackground: darkPalette.background.soft200,
      hoverText: darkPalette.primary[500],
      activeText: darkPalette.primary[500],
      activeBackground: darkPalette.border[200],
      defaultText: darkPalette.text.secondary,
      icon: darkPalette.text.tertiary,
    },
    badge: {
      background: darkPalette.primary[500],
      text: darkPalette.accent[500],
    },
    footer: {
      background: darkPalette.background.soft200,
      title: darkPalette.primary[500],
      subtitle: darkPalette.text.secondary,
      buttonText: darkPalette.accent[500],
    },
  },

  // Inputs
  input: {
    background: darkPalette.background[50],
    labelText: darkPalette.primary[500],
    disabledText: "#BCC088",
    placeholderText: darkPalette.text.tertiary,
    primaryFocusBorder: darkPalette.primary[300],
    errorFocusBorder: darkPalette.error[500],
    successFocusBorder: darkPalette.success[500],
    error: darkPalette.error[500],
    success: darkPalette.success[500],
  },

  // Tabs
  tab: {
    background: darkPalette.background.soft100,
    activeBackground: darkPalette.background[50],
    secondaryActiveBackground: darkPalette.background.soft200,
  },

  // Checkbox
  checkbox: {
    background: darkPalette.background[50],
    checkedBorder: darkPalette.primary[500],
    checkedBackground: darkPalette.primary[500],
    checkedIcon: darkPalette.accent[500],
  },

  // Scrollbar
  scrollbar: {
    background: darkPalette.border[200],
  },

  // Dropdowns
  dropdown: {
    background: darkPalette.background[50],
    hoverBackground: darkPalette.background.soft50,
    divider: darkPalette.background.soft200,
  },

  // Calendar
  calendar: {
    primary: {
      badge: darkPalette.primary[500],
      background: darkPalette.primary[50],
    },
    success: {
      badge: darkPalette.success[500],
      background: darkPalette.success[50],
    },
    text: darkPalette.primary[500],
    menuText: darkPalette.text.tertiary,
    dropdownBackground: darkPalette.background[50],
  },

  // Chat
  chat: {
    list: {
      primary: "#1A4D35",
      primaryAlt: darkPalette.background.soft100,
      secondary: darkPalette.primary[500],
      secondaryAlt: darkPalette.background.soft200,
    },
  },

  // Modal
  modal: {
    button: {
      success: darkPalette.success[500],
      info: darkPalette.info[600],
      warning: "#CA8A04",
      error: darkPalette.error[600],
    },
  },

  // Toggle
  toggle: {
    defaultBackground: darkPalette.border[200],
    disabledForeground: darkPalette.background[50],
    disabledBackground: darkPalette.background.soft100,
    activeBackground: darkPalette.primary[500],
  },
};