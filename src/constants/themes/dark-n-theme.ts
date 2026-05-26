import { vars } from "nativewind";

export const NativeDarkTheme = vars({
  // =========================================================
  // STEP 1: SOURCE COLORS (Palette mère inversée)
  // =========================================================
  "--wattle": "#0A3625",
  "--bottle-green": "#CCDA47",

  // =========================================================
  // STEP 2: DERIVED PALETTE (Variantes inversées)
  // =========================================================

  // Primary devient Wattle inverse
  "--primary-50": "#F6F9D4",
  "--primary-100": "#EDF3A8",
  "--primary-200": "#E3EC7D",
  "--primary-300": "#DDE86A",
  "--primary-400": "#D4E052",
  "--primary-500": "#CCDA47",
  "--primary-600": "#B8C63A",
  "--primary-700": "#9BAA2D",
  "--primary-800": "#7D8A22",
  "--primary-900": "#606A18",
  "--primary-950": "#3D4A0E",

  // Accent devient Bottle Green inverse
  "--accent-50": "#E8F2EB",
  "--accent-100": "#C5DEC9",
  "--accent-200": "#9EC9A6",
  "--accent-300": "#72B380",
  "--accent-400": "#3D9457",
  "--accent-500": "#0A3625",
  "--accent-600": "#072A1C",
  "--accent-700": "#051F14",
  "--accent-800": "#03150D",
  "--accent-900": "#020E08",

  // Background - Version sombre
  "--background-50": "#0A0A0A",
  "--background-100": "#111111",
  "--background-soft-50": "#1A1A1A",
  "--background-soft-100": "#222222",
  "--background-soft-200": "#2A2A2A",
  "--background-soft-300": "#333333",
  "--background-soft-400": "#3D3D3D",
  "--background-soft-500": "#4A4A4A",

  // Text colors - inversés
  "--title-50": "#CCDA47",
  "--text-color": "#7D9A8A",
  "--text-secondary": "#9AB3A4",
  "--text-tertiary": "#B8CCBF",

  // Border colors - adaptés
  "--border-base-50": "#333333",
  "--border-base-100": "#3D3D3D",
  "--border-base-200": "#4A4A4A",
  "--border-base-300": "#5A5A5A",

  // Foreground - inversé
  "--foreground-50": "#CCDA47",
  "--foreground-100": "#CCDA47",
  "--foreground-soft-50": "#CCDA47",
  "--foreground-soft-100": "#CCDA47",
  "--foreground-soft-200": "#9AB3A4",
  "--foreground-soft-300": "#9AB3A4",
  "--foreground-soft-400": "#B8CCBF",
  "--foreground-soft-500": "#B8CCBF",

  // Status colors (gardées)
  "--success-50": "#F0FDF4",
  "--success-100": "#DCFCE7",
  "--success-500": "#16A34A",
  "--success-600": "#15803D",

  "--error-50": "#FEF2F2",
  "--error-100": "#FECACA",
  "--error-400": "#F87171",
  "--error-500": "#EF4444",
  "--error-600": "#DC2626",

  "--warning-50": "#FFFBEB",
  "--warning-100": "#FEF08A",
  "--warning-400": "#FBBF24",
  "--warning-500": "#F59E0B",
  "--warning-600": "#D97706",

  "--info-50": "#F0F9FF",
  "--info-100": "#BAE6FD",
  "--info-400": "#38BDF8",
  "--info-500": "#0EA5E9",
  "--info-600": "#0284C7",

  // White
  "--white-100": "#FFFFFF",
  "--white-90": "#FFFFFFCC",
  "--white-80": "#FFFFFFCC",
  "--white-70": "#FFFFFFB3",
  "--white-60": "#FFFFFF99",

  // Shadows - adaptés pour dark mode
  "--shadow-xs": "0px 1px 2px 0px rgba(0, 0, 0, 0.3)",
  "--shadow-sm": "0px 1px 3px 0px rgba(0, 0, 0, 0.4)",
  "--shadow-md":
    "0px 4px 8px -2px rgba(0, 0, 0, 0.4), 0px 2px 4px -2px rgba(0, 0, 0, 0.3)",
  "--shadow-lg":
    "0px 12px 16px -4px rgba(0, 0, 0, 0.4), 0px 4px 6px -2px rgba(0, 0, 0, 0.3)",
  "--shadow-xl": "0px 1px 2px 0px rgba(0, 0, 0, 0.3)",
  "--shadow-2xl": "0px 1px 2px 0px rgba(0, 0, 0, 0.3)",
  "--shadow-3xl": "0px 1px 2px 0px rgba(0, 0, 0, 0.3)",
  "--drop-shadow-theme-3xl": "0 32px 64px rgba(0, 0, 0, 0.4)",
  "--popover-shadow": "0px 5px 5px -2px rgba(0, 0, 0, 0.3)",
  "--shadow-hero": "0px -14px 100px 0px rgba(0, 0, 0, 0.3)",

  // =========================================================
  // STEP 3: SEMANTIC TOKENS
  // =========================================================

  // App
  "--background": "#1A1A1A",
  "--foreground": "#CCDA47",

  // Card
  "--card": "#0A0A0A",
  "--card-foreground": "#CCDA47",

  // Primary UI
  "--primary": "#CCDA47",
  "--primary-foreground": "#0A3625",

  // Secondary UI
  "--secondary": "#222222",
  "--secondary-foreground": "#CCDA47",

  // Muted
  "--muted": "#2A2A2A",
  "--muted-foreground": "#9AB3A4",

  // Borders
  "--border": "#4A4A4A",

  // Status
  "--success": "#16A34A",
  "--warning": "#F59E0B",
  "--danger": "#EF4444",

  // Buttons - Primary
  "--button-primary-background": "#CCDA47",
  "--button-primary-hover-background": "#B8C63A",
  "--button-primary-text": "#0A3625",
  "--button-primary-focus-ring": "rgba(0, 0, 0, 0.3)",

  // Buttons - Outline
  "--button-outline-background": "#0A0A0A",
  "--button-outline-hover-background": "#222222",
  "--button-outline-border": "#4A4A4A",
  "--button-outline-focus-ring": "rgba(0, 0, 0, 0.3)",
  "--button-outline-text": "#CCDA47",
  "--button-outline-hover-text": "#B8C63A",
  "--button-outline-disabled-background": "#1A1A1A",
  "--button-outline-disabled-text": "#7D8A22",

  // Buttons - Disabled
  "--button-disabled-background": "#222222",
  "--button-disabled-border": "#2A2A2A",
  "--button-disabled-text": "#7D8A22",

  // Buttons - Error
  "--button-error-background": "#DC2626",
  "--button-error-hover-background": "#DC2626",
  "--button-error-border": "#EF4444",
  "--button-error-text": "#FFFFFF",
  "--button-error-focus-ring": "rgba(0, 0, 0, 0.3)",

  // Buttons - Error Outline
  "--button-error-outline-background": "#FEF2F2",
  "--button-error-outline-hover-background": "#FECACA",
  "--button-error-outline-border": "#EF4444",
  "--button-error-outline-focus-border": "#DC2626",
  "--button-error-outline-focus-ring": "rgba(0, 0, 0, 0.3)",
  "--button-error-outline-text": "#DC2626",
  "--button-error-outline-hover-text": "#DC2626",

  // Buttons - Success
  "--button-success-background": "#16A34A",
  "--button-success-hover-background": "#15803D",
  "--button-success-border": "#22C55E",
  "--button-success-text": "#FFFFFF",
  "--button-success-focus-ring": "rgba(0, 0, 0, 0.3)",

  // Buttons - Success Outline
  "--button-success-outline-background": "#F0FDF4",
  "--button-success-outline-hover-background": "#BBF7D0",
  "--button-success-outline-border": "#22C55E",
  "--button-success-outline-focus-border": "#16A34A",
  "--button-success-outline-text": "#15803D",
  "--button-success-outline-hover-text": "#15803D",
  "--button-success-outline-focus-ring": "rgba(0, 0, 0, 0.3)",

  // Buttons - Ghost
  "--button-ghost-text": "#B8CCBF",
  "--button-ghost-hover-text": "#9AB3A4",
  "--button-ghost-hover-background": "#222222",

  // Button Group
  "--button-group-primary-background": "#0A0A0A",
  "--button-group-primary-hover-background": "#CCDA47",
  "--button-group-primary-text": "#CCDA47",
  "--button-group-primary-hover-text": "#0A3625",
  "--button-group-secondary-background": "#1A1A1A",
  "--button-group-secondary-text": "#7D9A8A",

  // Badges
  "--badge-neutral-background": "#222222",
  "--badge-neutral-text": "#7D9A8A",
  "--badge-neutral-icon-color": "#9AB3A4",

  "--badge-primary-background": "#3D9457",
  "--badge-primary-text": "#CCDA47",
  "--badge-primary-icon-color": "#CCDA47",

  "--badge-error-background": "#FEF2F2",
  "--badge-error-text": "#DC2626",
  "--badge-error-icon-color": "#EF4444",

  "--badge-warning-background": "#FFFBEB",
  "--badge-warning-text": "#B45309",
  "--badge-warning-icon-color": "#F59E0B",

  "--badge-success-background": "#F0FDF4",
  "--badge-success-text": "#15803D",
  "--badge-success-icon-color": "#22C55E",

  "--badge-cyan-background": "#ECFEFF",
  "--badge-cyan-text": "#0E7490",
  "--badge-cyan-icon-color": "#06B6D4",

  "--badge-sky-background": "#F0F9FF",
  "--badge-sky-text": "#0369A1",
  "--badge-sky-icon-color": "#0EA5E9",

  "--badge-blue-background": "#EFF6FF",
  "--badge-blue-text": "#1D4ED8",
  "--badge-blue-icon-color": "#3B82F6",

  "--badge-violet-background": "#F5F3FF",
  "--badge-violet-text": "#6D28D9",
  "--badge-violet-icon-color": "#8B5CF6",

  "--badge-purple-background": "#FAF5FF",
  "--badge-purple-text": "#7E22CE",
  "--badge-purple-icon-color": "#A855F7",

  "--badge-pink-background": "#FDF2F8",
  "--badge-pink-text": "#BE185D",
  "--badge-pink-icon-color": "#EC4899",

  "--badge-rose-background": "#FFF1F2",
  "--badge-rose-text": "#BE123C",
  "--badge-rose-icon-color": "#F43F5E",

  "--badge-orange-background": "#FFF7ED",
  "--badge-orange-text": "#C2410C",
  "--badge-orange-icon-color": "#F97316",

  // Chart
  "--chart-tick": "#9AB3A4",
  "--chart-legend": "#9AB3A4",
  "--chart-grid": "#2A2A2A",

  // Sidebar
  "--sidebar-nav-default-background": "#222222",
  "--sidebar-nav-hover-background": "#2A2A2A",
  "--sidebar-nav-secondary-hover-background": "#4A4A4A",
  "--sidebar-nav-hover-text": "#CCDA47",
  "--sidebar-nav-active-text": "#CCDA47",
  "--sidebar-nav-active-background": "#4A4A4A",
  "--sidebar-nav-focused-background": "#4A4A4A",
  "--sidebar-nav-default-text": "#9AB3A4",
  "--sidebar-nav-icon": "#B8CCBF",

  "--sidebar-badge-background": "#CCDA47",
  "--sidebar-badge-text": "#0A3625",

  "--sidebar-footer-background": "#2A2A2A",
  "--sidebar-footer-title": "#CCDA47",
  "--sidebar-footer-subtitle": "#9AB3A4",
  "--sidebar-footer-button-text": "#0A3625",

  // Cards
  "--card-background-50": "#0A0A0A",
  "--card-background-100": "#0A0A0A",
  "--card-background-200": "#1A1A1A",
  "--card-background-300": "#222222",

  // Alerts
  "--alert-success-background": "#0A1A0A",
  "--alert-success-icon-background": "#16A34A",
  "--alert-success-border": "#1A3A1A",
  "--alert-success-close-icon": "#16A34A",
  "--alert-success-title": "#4ADE80",
  "--alert-success-description": "#22C55E",
  "--alert-success-button-background": "#16A34A",
  "--alert-success-button-hover-background": "#15803D",
  "--alert-success-button-text": "#15803D",

  "--alert-danger-background": "#1A0A0A",
  "--alert-danger-icon-background": "#DC2626",
  "--alert-danger-border": "#3A1A1A",
  "--alert-danger-close-icon": "#DC2626",
  "--alert-danger-title": "#F87171",
  "--alert-danger-description": "#EF4444",
  "--alert-danger-button-background": "#DC2626",
  "--alert-danger-button-hover-background": "#DC2626",
  "--alert-danger-button-text": "#DC2626",

  "--alert-info-background": "#0A1A2A",
  "--alert-info-icon-background": "#0EA5E9",
  "--alert-info-border": "#1A2A3A",
  "--alert-info-close-icon": "#0284C7",
  "--alert-info-title": "#38BDF8",
  "--alert-info-description": "#0EA5E9",
  "--alert-info-button-background": "#0284C7",
  "--alert-info-button-hover-background": "#0369A1",
  "--alert-info-button-text": "#0369A1",

  "--alert-warning-background": "#2A1A0A",
  "--alert-warning-icon-background": "#EAB308",
  "--alert-warning-border": "#3A2A1A",
  "--alert-warning-close-icon": "#CA8A04",
  "--alert-warning-title": "#FBBF24",
  "--alert-warning-description": "#F59E0B",
  "--alert-warning-button-background": "#CA8A04",
  "--alert-warning-button-hover-background": "#A16207",
  "--alert-warning-button-text": "#CA8A04",

  "--alert-default-background": "#1A1A1A",
  "--alert-default-icon-background": "#9AB3A4",
  "--alert-default-border": "#4A4A4A",
  "--alert-default-close-icon": "#CCDA47",
  "--alert-default-title": "#CCDA47",
  "--alert-default-description": "#9AB3A4",
  "--alert-default-button-background": "#CCDA47",
  "--alert-default-button-hover-background": "#B8C63A",
  "--alert-default-button-text": "#0A3625",

  // Inputs
  "--input-background": "#0A0A0A",
  "--input-label-text": "#CCDA47",
  "--input-disabled-text": "#4A4A4A",
  "--input-placeholder-text": "#B8CCBF",
  "--input-primary-focus-border": "#72B380",
  "--input-error-focus-border": "#EF4444",
  "--input-success-focus-border": "#22C55E",
  "--input-error": "#EF4444",
  "--input-success": "#22C55E",

  // Tabs
  "--tab-background": "#222222",
  "--tab-active-background": "#0A0A0A",
  "--tab-secondary-active-background": "#2A2A2A",

  // Checkbox
  "--checkbox-background": "#0A0A0A",
  "--checkbox-checked-border": "#CCDA47",
  "--checkbox-checked-background": "#CCDA47",
  "--checkbox-checked-icon-color": "#0A3625",

  // Scrollbar
  "--scrollbar-background": "#4A4A4A",

  // Datepicker
  "--datepicker-background": "#0A0A0A",
  "--datepicker-selected-background": "#1A1A1A",

  // Dropdowns
  "--dropdown-background": "#0A0A0A",
  "--dropdown-hover-background": "#1A1A1A",
  "--dropdown-secondary-background": "#0A0A0A",
  "--dropdown-divider": "#2A2A2A",

  // Calendar
  "--calendar-primary-badge": "#CCDA47",
  "--calendar-primary-background": "#3D9457",
  "--calendar-success-badge": "#22C55E",
  "--calendar-success-background": "#1A3A1A",
  "--calendar-warning-badge": "#F97316",
  "--calendar-warning-background": "#3A2A1A",
  "--calendar-danger-badge": "#EF4444",
  "--calendar-danger-background": "#3A1A1A",
  "--calendar-info-badge": "#0EA5E9",
  "--calendar-info-background": "#1A2A3A",
  "--calendar-text": "#CCDA47",
  "--calendar-menu-text": "#B8CCBF",
  "--calendar-dropdown-background": "#0A0A0A",

  // Pricing
  "--pricing-active-switcher-background": "#0A0A0A",
  "--pricing-active-card-background": "#CCDA47",
  "--pricing-button-background": "#CCDA47",
  "--pricing-icon-color": "#0A3625",
  "--pricing-icon-background": "#3D9457",

  // FAQ
  "--faq-primary-active-background": "#1A1A1A",
  "--faq-secondary-active-background": "#2A2A2A",
  "--faq-secondary-active-border": "#4A4A4A",
  "--faq-secondary-active-title": "#CCDA47",
  "--faq-secondary-active-text": "#9AB3A4",

  // Chat
  "--chat-list-background-primary": "#7D9A8A",
  "--chat-list-background-primary-alt": "#222222",
  "--chat-list-background-secondary": "#CCDA47",
  "--chat-list-background-secondary-alt": "#2A2A2A",

  // Tooltip
  "--tooltip-text": "#CCDA47",

  // Popovers
  "--popover-title-background": "#222222",
  "--popover-border": "#4A4A4A",

  // Skeleton
  "--skeleton-gradient-50": "#2A2A2A",
  "--skeleton-gradient-100": "#1A1A1A",
  "--skeleton-gradient-200": "#2A2A2A",

  // 404
  "--404-background": "#1A1A1A66",
  "--404-foreground": "#4A4A4A",

  // Blog
  "--blog-shape": "#4A4A4A",

  // Modal
  "--modal-button-success-background": "#16A34A",
  "--modal-button-info-background": "#0284C7",
  "--modal-button-warning-background": "#CA8A04",
  "--modal-button-error-background": "#DC2626",

  // Section Title
  "--section-title-badge": "#CCDA47",
  "--section-title-badge-background": "#CCDA470D",

  // Mobile Nav
  "--mobile-nav-icon": "#CCDA47",
  "--mobile-nav-background": "#1A1A1A",
  "--mobile-nav-hover-background": "#2A2A2A",

  // Footer
  "--footer-card-background": "#222222",
  "--footer-background": "#1A1A1A",

  // Bento
  "--bento-card-background": "#222222",
  "--bento-gradient-shade-1": "#1A1A1A00",
  "--bento-gradient-shade-2": "#1A1A1A80",
  "--bento-gradient-shade-3": "#1A1A1A",

  // CTA
  "--cta-icon-background": "#0A0A0A",
  "--cta-background": "#1A1A1A",

  // Hero
  "--hero-background": "#222222",
  "--hero-card-background": "#0A0A0A",
  "--hero-card-2-background": "#222222",
  "--hero-gradient-shade-1": "#1A1A1A99",
  "--hero-gradient-shade-2": "#1A1A1A",

  // Toggle
  "--toggle-default-background": "#4A4A4A",
  "--toggle-disabled-foreground": "#0A0A0A",
  "--toggle-disabled-background": "#222222",
  "--toggle-active-background": "#CCDA47",

  // Map
  "--map-fill": "#3D9457",

  // AI Sidebar
  "--ai-sidebar-primary-gradient-shade-1": "#1A1A1A",
  "--ai-sidebar-primary-gradient-shade-2": "#1A1A1A00",
  "--ai-sidebar-secondary-gradient-shade-1": "#222222",
  "--ai-sidebar-secondary-gradient-shade-2": "#22222200",
  "--ai-sidebar-hover-primary-shade-1": "#2A2A2A",
  "--ai-sidebar-hover-primary-shade-2": "#2A2A2A00",
  "--ai-sidebar-hover-secondary-shade-1": "#4A4A4A",
  "--ai-sidebar-hover-secondary-shade-2": "#4A4A4A00",
  "--ai-sidebar-hover-primary-background": "#2A2A2A",
  "--ai-sidebar-hover-secondary-background": "#4A4A4A",
  "--ai-title-gradient-shade-1": "#CCDA47",
  "--ai-title-gradient-shade-2": "#B8CCBF",
  "--ai-hero-blend-1": "#222222",
  "--ai-hero-blend-2": "#22222200",

  // Animations
  "--animate-pulse-custom": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
});
