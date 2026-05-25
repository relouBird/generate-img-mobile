// theme/colors.ts

/**
 * SOURCE COLORS (Palette mère)
 */
const wattle = "#CCDA47";
const bottleGreen = "#0A3625";

/**
 * DERIVED PALETTE - Light Theme
 */
export const lightPalette = {
  // Primary - Bottle Green & variants
  primary: {
    50: "#E8F2EB",
    100: "#C5DEC9",
    200: "#9EC9A6",
    300: "#72B380",
    400: "#3D9457",
    500: bottleGreen,
    600: "#072A1C",
    700: "#051F14",
    800: "#03150D",
    900: "#020E08",
    950: "#010704",
  },
  // Accent - Wattle & variants
  accent: {
    50: "#F6F9D4",
    100: "#EDF3A8",
    200: "#E3EC7D",
    300: "#DDE86A",
    400: "#D4E052",
    500: wattle,
    600: "#B8C63A",
    700: "#9BAA2D",
    800: "#7D8A22",
    900: "#606A18",
  },
  // Background
  background: {
    50: "#FFFFFF",
    100: "#FFFFFF",
    soft50: "#F6F8E8",
    soft100: "#F0F2DC",
    soft200: "#E8EAD0",
    soft300: "#DDE0B8",
    soft400: "#CDD0A0",
    soft500: "#BCC088",
  },
  // Text
  text: {
    title: bottleGreen,
    primary: "#1A4D35",
    secondary: "#3D6B4F",
    tertiary: "#6B9A7A",
  },
  // Border
  border: {
    50: "#F0F2DC",
    100: "#E8EAD0",
    200: "#DDE0B8",
    300: "#BCC088",
  },
  // Foreground
  foreground: {
    50: bottleGreen,
    100: bottleGreen,
    soft50: bottleGreen,
    soft100: bottleGreen,
    soft200: "#1A4D35",
    soft300: "#1A4D35",
    soft400: "#3D6B4F",
    soft500: "#3D6B4F",
  },
  // Status
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
 * SEMANTIC TOKENS - Light Theme
 */
export const lightSemantic = {
  // App
  background: lightPalette.background.soft50,
  foreground: lightPalette.primary[500],

  // Card
  card: lightPalette.background[50],
  cardForeground: lightPalette.primary[500],

  // Primary UI
  primary: lightPalette.primary[500],
  primaryForeground: lightPalette.accent[500],

  // Secondary UI
  secondary: lightPalette.background.soft100,
  secondaryForeground: lightPalette.primary[500],

  // Muted
  muted: lightPalette.background.soft200,
  mutedForeground: lightPalette.text.secondary,

  // Borders
  border: lightPalette.border[200],

  // Status
  success: lightPalette.success[500],
  warning: lightPalette.warning[500],
  danger: lightPalette.error[500],

  // Shadows (React Native utilise elevation et shadow props)
  shadow: {
    xs: {
      shadowColor: "rgba(10, 54, 37, 0.06)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 1,
    },
    sm: {
      shadowColor: "rgba(10, 54, 37, 0.1)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 2,
    },
    md: {
      shadowColor: "rgba(10, 54, 37, 0.08)",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: "rgba(10, 54, 37, 0.07)",
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 1,
      shadowRadius: 16,
      elevation: 8,
    },
  },

  // Buttons
  button: {
    primary: {
      background: lightPalette.primary[500],
      hoverBackground: lightPalette.primary[600],
      text: lightPalette.accent[500],
    },
    outline: {
      background: lightPalette.background[50],
      hoverBackground: lightPalette.background.soft100,
      border: lightPalette.border[200],
      text: lightPalette.primary[500],
      hoverText: lightPalette.primary[600],
    },
    disabled: {
      background: lightPalette.background.soft100,
      border: lightPalette.background.soft200,
      text: lightPalette.accent[700],
    },
    error: {
      background: lightPalette.error[600],
      text: "#FFFFFF",
    },
    success: {
      background: lightPalette.success[500],
      text: "#FFFFFF",
    },
    ghost: {
      text: lightPalette.text.tertiary,
      hoverText: lightPalette.text.secondary,
      hoverBackground: lightPalette.background.soft100,
    },
  },

  // Badges
  badge: {
    neutral: {
      background: lightPalette.background.soft100,
      text: "#1A4D35",
      icon: lightPalette.text.secondary,
    },
    primary: {
      background: lightPalette.primary[50],
      text: lightPalette.primary[500],
      icon: lightPalette.primary[500],
    },
    error: {
      background: lightPalette.error[50],
      text: lightPalette.error[600],
      icon: lightPalette.error[500],
    },
    warning: {
      background: lightPalette.warning[50],
      text: "#B45309",
      icon: lightPalette.warning[500],
    },
    success: {
      background: lightPalette.success[50],
      text: lightPalette.success[600],
      icon: lightPalette.success[500],
    },
  },

  // Sidebar
  sidebar: {
    nav: {
      defaultBackground: lightPalette.background.soft100,
      hoverBackground: lightPalette.background.soft200,
      hoverText: lightPalette.primary[500],
      activeText: lightPalette.primary[500],
      activeBackground: lightPalette.border[200],
      defaultText: lightPalette.text.secondary,
      icon: lightPalette.text.tertiary,
    },
    badge: {
      background: lightPalette.primary[500],
      text: lightPalette.accent[500],
    },
    footer: {
      background: lightPalette.background.soft200,
      title: lightPalette.primary[500],
      subtitle: lightPalette.text.secondary,
      buttonText: lightPalette.accent[500],
    },
  },

  // Inputs
  input: {
    background: lightPalette.background[50],
    labelText: lightPalette.primary[500],
    disabledText: "#BCC088",
    placeholderText: lightPalette.text.tertiary,
    primaryFocusBorder: lightPalette.primary[300],
    errorFocusBorder: lightPalette.error[500],
    successFocusBorder: lightPalette.success[500],
    error: lightPalette.error[500],
    success: lightPalette.success[500],
  },

  // Tabs
  tab: {
    background: lightPalette.background.soft100,
    activeBackground: lightPalette.background[50],
    secondaryActiveBackground: lightPalette.background.soft200,
  },

  // Checkbox
  checkbox: {
    background: lightPalette.background[50],
    checkedBorder: lightPalette.primary[500],
    checkedBackground: lightPalette.primary[500],
    checkedIcon: lightPalette.accent[500],
  },

  // Scrollbar
  scrollbar: {
    background: lightPalette.border[200],
  },

  // Dropdowns
  dropdown: {
    background: lightPalette.background[50],
    hoverBackground: lightPalette.background.soft50,
    divider: lightPalette.background.soft200,
  },

  // Calendar
  calendar: {
    primary: {
      badge: lightPalette.primary[500],
      background: lightPalette.primary[50],
    },
    success: {
      badge: lightPalette.success[500],
      background: lightPalette.success[50],
    },
    text: lightPalette.primary[500],
    menuText: lightPalette.text.tertiary,
    dropdownBackground: lightPalette.background[50],
  },

  // Chat
  chat: {
    list: {
      primary: "#1A4D35",
      primaryAlt: lightPalette.background.soft100,
      secondary: lightPalette.primary[500],
      secondaryAlt: lightPalette.background.soft200,
    },
  },

  // Modal
  modal: {
    button: {
      success: lightPalette.success[500],
      info: lightPalette.info[600],
      warning: "#CA8A04",
      error: lightPalette.error[600],
    },
  },

  // Toggle
  toggle: {
    defaultBackground: lightPalette.border[200],
    disabledForeground: lightPalette.background[50],
    disabledBackground: lightPalette.background.soft100,
    activeBackground: lightPalette.primary[500],
  },
};