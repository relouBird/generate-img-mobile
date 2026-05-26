import { vars } from "nativewind";

export const NativeLightTheme = vars({
  // =========================================================
  // STEP 1: SOURCE COLORS (Palette mère)
  // =========================================================
  "--wattle": "#CCDA47",
  "--bottle-green": "#0A3625",

  // =========================================================
  // STEP 2: DERIVED PALETTE
  // =========================================================

  // Primary - Bottle Green & variants
  "--primary-50": "#E8F2EB",
  "--primary-100": "#C5DEC9",
  "--primary-200": "#9EC9A6",
  "--primary-300": "#72B380",
  "--primary-400": "#3D9457",
  "--primary-500": "#0A3625",
  "--primary-600": "#072A1C",
  "--primary-700": "#051F14",
  "--primary-800": "#03150D",
  "--primary-900": "#020E08",
  "--primary-950": "#010704",

  // Accent - Wattle & variants
  "--accent-50": "#F6F9D4",
  "--accent-100": "#EDF3A8",
  "--accent-200": "#E3EC7D",
  "--accent-300": "#DDE86A",
  "--accent-400": "#D4E052",
  "--accent-500": "#CCDA47",
  "--accent-600": "#B8C63A",
  "--accent-700": "#9BAA2D",
  "--accent-800": "#7D8A22",
  "--accent-900": "#606A18",

  // Background
  "--background-50": "#FFFFFF",
  "--background-100": "#FFFFFF",
  "--background-soft-50": "#F6F8E8",
  "--background-soft-100": "#F0F2DC",
  "--background-soft-200": "#E8EAD0",
  "--background-soft-300": "#DDE0B8",
  "--background-soft-400": "#CDD0A0",
  "--background-soft-500": "#BCC088",

  // Text colors
  "--title-50": "#0A3625",
  "--text-color": "#1A4D35",
  "--text-secondary": "#3D6B4F",
  "--text-tertiary": "#6B9A7A",

  // Border colors
  "--border-base-50": "#F0F2DC",
  "--border-base-100": "#E8EAD0",
  "--border-base-200": "#DDE0B8",
  "--border-base-300": "#BCC088",

  // Foreground
  "--foreground-50": "#0A3625",
  "--foreground-100": "#0A3625",
  "--foreground-soft-50": "#0A3625",
  "--foreground-soft-100": "#0A3625",
  "--foreground-soft-200": "#1A4D35",
  "--foreground-soft-300": "#1A4D35",
  "--foreground-soft-400": "#3D6B4F",
  "--foreground-soft-500": "#3D6B4F",

  // Status colors
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

  // Shadows
  "--shadow-xs": "0px 1px 2px 0px rgba(10, 54, 37, 0.06)",
  "--shadow-sm": "0px 1px 3px 0px rgba(10, 54, 37, 0.1)",
  "--shadow-md":
    "0px 4px 8px -2px rgba(10, 54, 37, 0.08), 0px 2px 4px -2px rgba(10, 54, 37, 0.05)",
  "--shadow-lg":
    "0px 12px 16px -4px rgba(10, 54, 37, 0.07), 0px 4px 6px -2px rgba(10, 54, 37, 0.03)",
  "--shadow-xl": "0px 1px 2px 0px rgba(10, 54, 37, 0.06)",
  "--shadow-2xl": "0px 1px 2px 0px rgba(10, 54, 37, 0.06)",
  "--shadow-3xl": "0px 1px 2px 0px rgba(10, 54, 37, 0.06)",
  "--drop-shadow-theme-3xl": "0 32px 64px rgba(10, 54, 37, 0.12)",
  "--popover-shadow": "0px 5px 5px -2px rgba(10, 54, 37, 0.04)",
  "--shadow-hero": "0px -14px 100px 0px rgba(10, 54, 37, 0.05)",

  // =========================================================
  // STEP 3: SEMANTIC TOKENS
  // =========================================================

  // App
  "--background": "#F6F8E8",
  "--foreground": "#0A3625",

  // Card
  "--card": "#FFFFFF",
  "--card-foreground": "#0A3625",

  // Primary UI
  "--primary": "#0A3625",
  "--primary-foreground": "#CCDA47",

  // Secondary UI
  "--secondary": "#F0F2DC",
  "--secondary-foreground": "#0A3625",

  // Muted
  "--muted": "#E8EAD0",
  "--muted-foreground": "#3D6B4F",

  // Borders
  "--border": "#DDE0B8",

  // Status
  "--success": "#16A34A",
  "--warning": "#F59E0B",
  "--danger": "#EF4444",

  // Buttons - Primary
  "--button-primary-background": "#0A3625",
  "--button-primary-hover-background": "#072A1C",
  "--button-primary-text": "#CCDA47",
  "--button-primary-focus-ring": "rgba(10, 54, 37, 0.25)",

  // Buttons - Outline
  "--button-outline-background": "#FFFFFF",
  "--button-outline-hover-background": "#F0F2DC",
  "--button-outline-border": "#DDE0B8",
  "--button-outline-focus-ring": "rgba(10, 54, 37, 0.12)",
  "--button-outline-text": "#0A3625",
  "--button-outline-hover-text": "#072A1C",
  "--button-outline-disabled-background": "#F6F8E8",
  "--button-outline-disabled-text": "#9BAA2D",

  // Buttons - Disabled
  "--button-disabled-background": "#F0F2DC",
  "--button-disabled-border": "#E8EAD0",
  "--button-disabled-text": "#9BAA2D",

  // Buttons - Error
  "--button-error-background": "#DC2626",
  "--button-error-hover-background": "#DC2626",
  "--button-error-border": "#EF4444",
  "--button-error-text": "#FFFFFF",
  "--button-error-focus-ring": "rgba(220, 38, 38, 0.2)",

  // Buttons - Error Outline
  "--button-error-outline-background": "#FEF2F2",
  "--button-error-outline-hover-background": "#FECACA",
  "--button-error-outline-border": "#EF4444",
  "--button-error-outline-focus-border": "#DC2626",
  "--button-error-outline-focus-ring": "rgba(220, 38, 38, 0.2)",
  "--button-error-outline-text": "#DC2626",
  "--button-error-outline-hover-text": "#DC2626",

  // Buttons - Success
  "--button-success-background": "#16A34A",
  "--button-success-hover-background": "#15803D",
  "--button-success-border": "#22C55E",
  "--button-success-text": "#FFFFFF",
  "--button-success-focus-ring": "rgba(22, 163, 74, 0.2)",

  // Buttons - Success Outline
  "--button-success-outline-background": "#F0FDF4",
  "--button-success-outline-hover-background": "#BBF7D0",
  "--button-success-outline-border": "#22C55E",
  "--button-success-outline-focus-border": "#16A34A",
  "--button-success-outline-text": "#15803D",
  "--button-success-outline-hover-text": "#15803D",
  "--button-success-outline-focus-ring": "rgba(22, 163, 74, 0.2)",

  // Buttons - Ghost
  "--button-ghost-text": "#6B9A7A",
  "--button-ghost-hover-text": "#3D6B4F",
  "--button-ghost-hover-background": "#F0F2DC",

  // Button Group
  "--button-group-primary-background": "#FFFFFF",
  "--button-group-primary-hover-background": "#0A3625",
  "--button-group-primary-text": "#0A3625",
  "--button-group-primary-hover-text": "#CCDA47",
  "--button-group-secondary-background": "#F6F8E8",
  "--button-group-secondary-text": "#1A4D35",

  // Badges
  "--badge-neutral-background": "#F0F2DC",
  "--badge-neutral-text": "#1A4D35",
  "--badge-neutral-icon-color": "#3D6B4F",

  "--badge-primary-background": "#E8F2EB",
  "--badge-primary-text": "#0A3625",
  "--badge-primary-icon-color": "#0A3625",

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
  "--chart-tick": "#3D6B4F",
  "--chart-legend": "#3D6B4F",
  "--chart-grid": "#E8EAD0",

  // Sidebar
  "--sidebar-nav-default-background": "#F0F2DC",
  "--sidebar-nav-hover-background": "#E8EAD0",
  "--sidebar-nav-secondary-hover-background": "#DDE0B8",
  "--sidebar-nav-hover-text": "#0A3625",
  "--sidebar-nav-active-text": "#0A3625",
  "--sidebar-nav-active-background": "#DDE0B8",
  "--sidebar-nav-focused-background": "#DDE0B8",
  "--sidebar-nav-default-text": "#3D6B4F",
  "--sidebar-nav-icon": "#6B9A7A",

  "--sidebar-badge-background": "#0A3625",
  "--sidebar-badge-text": "#CCDA47",

  "--sidebar-footer-background": "#E8EAD0",
  "--sidebar-footer-title": "#0A3625",
  "--sidebar-footer-subtitle": "#3D6B4F",
  "--sidebar-footer-button-text": "#CCDA47",

  // Cards
  "--card-background-50": "#FFFFFF",
  "--card-background-100": "#FFFFFF",
  "--card-background-200": "#F6F8E8",
  "--card-background-300": "#F0F2DC",

  // Alerts
  "--alert-success-background": "#F0FDF4",
  "--alert-success-icon-background": "#16A34A",
  "--alert-success-border": "#BBF7D0",
  "--alert-success-close-icon": "#16A34A",
  "--alert-success-title": "#166534",
  "--alert-success-description": "#15803D",
  "--alert-success-button-background": "#16A34A",
  "--alert-success-button-hover-background": "#15803D",
  "--alert-success-button-text": "#15803D",

  "--alert-danger-background": "#FEF2F2",
  "--alert-danger-icon-background": "#DC2626",
  "--alert-danger-border": "#FECACA",
  "--alert-danger-close-icon": "#DC2626",
  "--alert-danger-title": "#991B1B",
  "--alert-danger-description": "#DC2626",
  "--alert-danger-button-background": "#DC2626",
  "--alert-danger-button-hover-background": "#DC2626",
  "--alert-danger-button-text": "#DC2626",

  "--alert-info-background": "#F0F9FF",
  "--alert-info-icon-background": "#0EA5E9",
  "--alert-info-border": "#BAE6FD",
  "--alert-info-close-icon": "#0284C7",
  "--alert-info-title": "#075985",
  "--alert-info-description": "#0369A1",
  "--alert-info-button-background": "#0284C7",
  "--alert-info-button-hover-background": "#0369A1",
  "--alert-info-button-text": "#0369A1",

  "--alert-warning-background": "#FEFCE8",
  "--alert-warning-icon-background": "#EAB308",
  "--alert-warning-border": "#FEF08A",
  "--alert-warning-close-icon": "#CA8A04",
  "--alert-warning-title": "#854D0E",
  "--alert-warning-description": "#A16207",
  "--alert-warning-button-background": "#CA8A04",
  "--alert-warning-button-hover-background": "#A16207",
  "--alert-warning-button-text": "#CA8A04",

  "--alert-default-background": "#F6F8E8",
  "--alert-default-icon-background": "#3D6B4F",
  "--alert-default-border": "#DDE0B8",
  "--alert-default-close-icon": "#0A3625",
  "--alert-default-title": "#0A3625",
  "--alert-default-description": "#1A4D35",
  "--alert-default-button-background": "#0A3625",
  "--alert-default-button-hover-background": "#072A1C",
  "--alert-default-button-text": "#CCDA47",

  // Inputs
  "--input-background": "#FFFFFF",
  "--input-label-text": "#0A3625",
  "--input-disabled-text": "#BCC088",
  "--input-placeholder-text": "#6B9A7A",
  "--input-primary-focus-border": "#72B380",
  "--input-error-focus-border": "#EF4444",
  "--input-success-focus-border": "#22C55E",
  "--input-error": "#EF4444",
  "--input-success": "#22C55E",

  // Tabs
  "--tab-background": "#F0F2DC",
  "--tab-active-background": "#FFFFFF",
  "--tab-secondary-active-background": "#E8EAD0",

  // Checkbox
  "--checkbox-background": "#FFFFFF",
  "--checkbox-checked-border": "#0A3625",
  "--checkbox-checked-background": "#0A3625",
  "--checkbox-checked-icon-color": "#CCDA47",

  // Scrollbar
  "--scrollbar-background": "#DDE0B8",

  // Datepicker
  "--datepicker-background": "#FFFFFF",
  "--datepicker-selected-background": "#F6F8E8",

  // Dropdowns
  "--dropdown-background": "#FFFFFF",
  "--dropdown-hover-background": "#F6F8E8",
  "--dropdown-secondary-background": "#FFFFFF",
  "--dropdown-divider": "#E8EAD0",

  // Calendar
  "--calendar-primary-badge": "#0A3625",
  "--calendar-primary-background": "#E8F2EB",
  "--calendar-success-badge": "#22C55E",
  "--calendar-success-background": "#F0FDF4",
  "--calendar-warning-badge": "#F97316",
  "--calendar-warning-background": "#FFF7ED",
  "--calendar-danger-badge": "#EF4444",
  "--calendar-danger-background": "#FEF2F2",
  "--calendar-info-badge": "#0EA5E9",
  "--calendar-info-background": "#F0F9FF",
  "--calendar-text": "#0A3625",
  "--calendar-menu-text": "#6B9A7A",
  "--calendar-dropdown-background": "#FFFFFF",

  // Pricing
  "--pricing-active-switcher-background": "#FFFFFF",
  "--pricing-active-card-background": "#0A3625",
  "--pricing-button-background": "#0A3625",
  "--pricing-icon-color": "#CCDA47",
  "--pricing-icon-background": "#E8F2EB",

  // FAQ
  "--faq-primary-active-background": "#F6F8E8",
  "--faq-secondary-active-background": "#E8EAD0",
  "--faq-secondary-active-border": "#DDE0B8",
  "--faq-secondary-active-title": "#0A3625",
  "--faq-secondary-active-text": "#1A4D35",

  // Chat
  "--chat-list-background-primary": "#1A4D35",
  "--chat-list-background-primary-alt": "#F0F2DC",
  "--chat-list-background-secondary": "#0A3625",
  "--chat-list-background-secondary-alt": "#E8EAD0",

  // Tooltip
  "--tooltip-text": "#0A3625",

  // Popovers
  "--popover-title-background": "#F0F2DC",
  "--popover-border": "#DDE0B8",

  // Skeleton
  "--skeleton-gradient-50": "#E8EAD0",
  "--skeleton-gradient-100": "#F6F8E8",
  "--skeleton-gradient-200": "#E8EAD0",

  // 404
  "--404-background": "#F6F8E866",
  "--404-foreground": "#DDE0B8",

  // Blog
  "--blog-shape": "#DDE0B8",

  // Modal
  "--modal-button-success-background": "#16A34A",
  "--modal-button-info-background": "#0284C7",
  "--modal-button-warning-background": "#CA8A04",
  "--modal-button-error-background": "#DC2626",

  // Section Title
  "--section-title-badge": "#0A3625",
  "--section-title-badge-background": "#0A36250D",

  // Mobile Nav
  "--mobile-nav-icon": "#0A3625",
  "--mobile-nav-background": "#F6F8E8",
  "--mobile-nav-hover-background": "#E8EAD0",

  // Footer
  "--footer-card-background": "#F0F2DC",
  "--footer-background": "#F6F8E8",

  // Bento
  "--bento-card-background": "#F0F2DC",
  "--bento-gradient-shade-1": "#F6F8E800",
  "--bento-gradient-shade-2": "#F6F8E880",
  "--bento-gradient-shade-3": "#F6F8E8",

  // CTA
  "--cta-icon-background": "#FFFFFF",
  "--cta-background": "#F6F8E8",

  // Hero
  "--hero-background": "#F0F2DC",
  "--hero-card-background": "#FFFFFF",
  "--hero-card-2-background": "#F0F2DC",
  "--hero-gradient-shade-1": "#F6F8E899",
  "--hero-gradient-shade-2": "#F6F8E8",

  // Toggle
  "--toggle-default-background": "#DDE0B8",
  "--toggle-disabled-foreground": "#FFFFFF",
  "--toggle-disabled-background": "#F0F2DC",
  "--toggle-active-background": "#0A3625",

  // Map
  "--map-fill": "#C5DEC9",

  // AI Sidebar
  "--ai-sidebar-primary-gradient-shade-1": "#F6F8E8",
  "--ai-sidebar-primary-gradient-shade-2": "#F6F8E800",
  "--ai-sidebar-secondary-gradient-shade-1": "#F0F2DC",
  "--ai-sidebar-secondary-gradient-shade-2": "#F0F2DC00",
  "--ai-sidebar-hover-primary-shade-1": "#E8EAD0",
  "--ai-sidebar-hover-primary-shade-2": "#E8EAD000",
  "--ai-sidebar-hover-secondary-shade-1": "#DDE0B8",
  "--ai-sidebar-hover-secondary-shade-2": "#DDE0B800",
  "--ai-sidebar-hover-primary-background": "#E8EAD0",
  "--ai-sidebar-hover-secondary-background": "#DDE0B8",
  "--ai-title-gradient-shade-1": "#0A3625",
  "--ai-title-gradient-shade-2": "#6B9A7A",
  "--ai-hero-blend-1": "#F0F2DC",
  "--ai-hero-blend-2": "#F0F2DC00",

  // Animations
  "--animate-pulse-custom": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
});
