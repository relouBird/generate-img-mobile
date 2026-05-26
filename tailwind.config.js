/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,tsx,ts,jsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // =========================================================
        // PRIMARY COLORS
        // =========================================================
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },

        // =========================================================
        // ACCENT COLORS
        // =========================================================
        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
        },

        // =========================================================
        // BACKGROUND COLORS
        // =========================================================
        background: {
          DEFAULT: "var(--background)",
          50: "var(--background-50)",
          100: "var(--background-100)",
          soft: {
            50: "var(--background-soft-50)",
            100: "var(--background-soft-100)",
            200: "var(--background-soft-200)",
            300: "var(--background-soft-300)",
            400: "var(--background-soft-400)",
            500: "var(--background-soft-500)",
          },
        },

        // =========================================================
        // FOREGROUND COLORS
        // =========================================================
        foreground: {
          DEFAULT: "var(--foreground)",
          50: "var(--foreground-50)",
          100: "var(--foreground-100)",
          soft: {
            50: "var(--foreground-soft-50)",
            100: "var(--foreground-soft-100)",
            200: "var(--foreground-soft-200)",
            300: "var(--foreground-soft-300)",
            400: "var(--foreground-soft-400)",
            500: "var(--foreground-soft-500)",
          },
        },

        // =========================================================
        // TEXT COLORS
        // =========================================================
        text: {
          title: "var(--title-50)",
          DEFAULT: "var(--text-color)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },

        // =========================================================
        // BORDER COLORS
        // =========================================================
        border: {
          DEFAULT: "var(--border)",
          base: {
            50: "var(--border-base-50)",
            100: "var(--border-base-100)",
            200: "var(--border-base-200)",
            300: "var(--border-base-300)",
          },
        },

        // =========================================================
        // CARD COLORS
        // =========================================================
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
          background: {
            50: "var(--card-background-50)",
            100: "var(--card-background-100)",
            200: "var(--card-background-200)",
            300: "var(--card-background-300)",
          },
        },

        // =========================================================
        // MUTED COLORS
        // =========================================================
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        // =========================================================
        // BUTTON COLORS
        // =========================================================
        button: {
          primary: {
            background: "var(--button-primary-background)",
            text: "var(--button-primary-text)",
            hover: {
              background: "var(--button-primary-hover-background)",
            },
            focus: {
              ring: "var(--button-primary-focus-ring)",
            },
          },
          outline: {
            background: "var(--button-outline-background)",
            border: "var(--button-outline-border)",
            text: "var(--button-outline-text)",
            hover: {
              background: "var(--button-outline-hover-background)",
              text: "var(--button-outline-hover-text)",
            },
            disabled: {
              background: "var(--button-outline-disabled-background)",
              text: "var(--button-outline-disabled-text)",
            },
            focus: {
              ring: "var(--button-outline-focus-ring)",
            },
          },
          ghost: {
            text: "var(--button-ghost-text)",
            hover: {
              text: "var(--button-ghost-hover-text)",
              background: "var(--button-ghost-hover-background)",
            },
          },
          disabled: {
            background: "var(--button-disabled-background)",
            border: "var(--button-disabled-border)",
            text: "var(--button-disabled-text)",
          },
          error: {
            background: "var(--button-error-background)",
            border: "var(--button-error-border)",
            text: "var(--button-error-text)",
            hover: {
              background: "var(--button-error-hover-background)",
            },
            focus: {
              ring: "var(--button-error-focus-ring)",
            },
            outline: {
              background: "var(--button-error-outline-background)",
              border: "var(--button-error-outline-border)",
              text: "var(--button-error-outline-text)",
              hover: {
                background: "var(--button-error-outline-hover-background)",
                text: "var(--button-error-outline-hover-text)",
              },
              focus: {
                border: "var(--button-error-outline-focus-border)",
                ring: "var(--button-error-outline-focus-ring)",
              },
            },
          },
          success: {
            background: "var(--button-success-background)",
            border: "var(--button-success-border)",
            text: "var(--button-success-text)",
            hover: {
              background: "var(--button-success-hover-background)",
            },
            focus: {
              ring: "var(--button-success-focus-ring)",
            },
            outline: {
              background: "var(--button-success-outline-background)",
              border: "var(--button-success-outline-border)",
              text: "var(--button-success-outline-text)",
              hover: {
                background: "var(--button-success-outline-hover-background)",
                text: "var(--button-success-outline-hover-text)",
              },
              focus: {
                border: "var(--button-success-outline-focus-border)",
                ring: "var(--button-success-outline-focus-ring)",
              },
            },
          },
        },

        // =========================================================
        // BUTTON GROUP COLORS
        // =========================================================
        "button-group": {
          primary: {
            background: "var(--button-group-primary-background)",
            text: "var(--button-group-primary-text)",
            hover: {
              background: "var(--button-group-primary-hover-background)",
              text: "var(--button-group-primary-hover-text)",
            },
          },
          secondary: {
            background: "var(--button-group-secondary-background)",
            text: "var(--button-group-secondary-text)",
          },
        },

        // =========================================================
        // BADGE COLORS
        // =========================================================
        badge: {
          neutral: {
            background: "var(--badge-neutral-background)",
            text: "var(--badge-neutral-text)",
            icon: "var(--badge-neutral-icon-color)",
          },
          primary: {
            background: "var(--badge-primary-background)",
            text: "var(--badge-primary-text)",
            icon: "var(--badge-primary-icon-color)",
          },
          error: {
            background: "var(--badge-error-background)",
            text: "var(--badge-error-text)",
            icon: "var(--badge-error-icon-color)",
          },
          warning: {
            background: "var(--badge-warning-background)",
            text: "var(--badge-warning-text)",
            icon: "var(--badge-warning-icon-color)",
          },
          success: {
            background: "var(--badge-success-background)",
            text: "var(--badge-success-text)",
            icon: "var(--badge-success-icon-color)",
          },
          cyan: {
            background: "var(--badge-cyan-background)",
            text: "var(--badge-cyan-text)",
            icon: "var(--badge-cyan-icon-color)",
          },
          sky: {
            background: "var(--badge-sky-background)",
            text: "var(--badge-sky-text)",
            icon: "var(--badge-sky-icon-color)",
          },
          blue: {
            background: "var(--badge-blue-background)",
            text: "var(--badge-blue-text)",
            icon: "var(--badge-blue-icon-color)",
          },
          violet: {
            background: "var(--badge-violet-background)",
            text: "var(--badge-violet-text)",
            icon: "var(--badge-violet-icon-color)",
          },
          purple: {
            background: "var(--badge-purple-background)",
            text: "var(--badge-purple-text)",
            icon: "var(--badge-purple-icon-color)",
          },
          pink: {
            background: "var(--badge-pink-background)",
            text: "var(--badge-pink-text)",
            icon: "var(--badge-pink-icon-color)",
          },
          rose: {
            background: "var(--badge-rose-background)",
            text: "var(--badge-rose-text)",
            icon: "var(--badge-rose-icon-color)",
          },
          orange: {
            background: "var(--badge-orange-background)",
            text: "var(--badge-orange-text)",
            icon: "var(--badge-orange-icon-color)",
          },
        },

        // =========================================================
        // SIDEBAR COLORS
        // =========================================================
        sidebar: {
          nav: {
            default: "var(--sidebar-nav-default-background)",
            hover: "var(--sidebar-nav-hover-background)",
            active: "var(--sidebar-nav-active-background)",
            secondary: {
              hover: "var(--sidebar-nav-secondary-hover-background)",
            },
            text: "var(--sidebar-nav-default-text)",
            hoverText: "var(--sidebar-nav-hover-text)",
            activeText: "var(--sidebar-nav-active-text)",
            icon: "var(--sidebar-nav-icon)",
          },
          badge: {
            background: "var(--sidebar-badge-background)",
            text: "var(--sidebar-badge-text)",
          },
          footer: {
            background: "var(--sidebar-footer-background)",
            title: "var(--sidebar-footer-title)",
            subtitle: "var(--sidebar-footer-subtitle)",
            button: {
              text: "var(--sidebar-footer-button-text)",
            },
          },
        },

        // =========================================================
        // CHART COLORS
        // =========================================================
        chart: {
          tick: "var(--chart-tick)",
          legend: "var(--chart-legend)",
          grid: "var(--chart-grid)",
        },

        // =========================================================
        // INPUT COLORS
        // =========================================================
        input: {
          background: "var(--input-background)",
          label: "var(--input-label-text)",
          disabled: "var(--input-disabled-text)",
          placeholder: "var(--input-placeholder-text)",
          focus: {
            primary: "var(--input-primary-focus-border)",
            error: "var(--input-error-focus-border)",
            success: "var(--input-success-focus-border)",
          },
          error: "var(--input-error)",
          success: "var(--input-success)",
        },

        // =========================================================
        // TAB COLORS
        // =========================================================
        tab: {
          background: "var(--tab-background)",
          active: "var(--tab-active-background)",
          secondary: {
            active: "var(--tab-secondary-active-background)",
          },
        },

        // =========================================================
        // CHECKBOX COLORS
        // =========================================================
        checkbox: {
          background: "var(--checkbox-background)",
          checked: {
            border: "var(--checkbox-checked-border)",
            background: "var(--checkbox-checked-background)",
            icon: "var(--checkbox-checked-icon-color)",
          },
        },

        // =========================================================
        // SCROLLBAR COLORS
        // =========================================================
        scrollbar: {
          background: "var(--scrollbar-background)",
        },

        // =========================================================
        // DATEPICKER COLORS
        // =========================================================
        datepicker: {
          background: "var(--datepicker-background)",
          selected: "var(--datepicker-selected-background)",
        },

        // =========================================================
        // DROPDOWN COLORS
        // =========================================================
        dropdown: {
          background: "var(--dropdown-background)",
          hover: "var(--dropdown-hover-background)",
          secondary: "var(--dropdown-secondary-background)",
          divider: "var(--dropdown-divider)",
        },

        // =========================================================
        // CALENDAR COLORS
        // =========================================================
        calendar: {
          primary: {
            badge: "var(--calendar-primary-badge)",
            background: "var(--calendar-primary-background)",
          },
          success: {
            badge: "var(--calendar-success-badge)",
            background: "var(--calendar-success-background)",
          },
          warning: {
            badge: "var(--calendar-warning-badge)",
            background: "var(--calendar-warning-background)",
          },
          danger: {
            badge: "var(--calendar-danger-badge)",
            background: "var(--calendar-danger-background)",
          },
          info: {
            badge: "var(--calendar-info-badge)",
            background: "var(--calendar-info-background)",
          },
          text: "var(--calendar-text)",
          menu: {
            text: "var(--calendar-menu-text)",
          },
          dropdown: {
            background: "var(--calendar-dropdown-background)",
          },
        },

        // =========================================================
        // PRICING COLORS
        // =========================================================
        pricing: {
          active: {
            switcher: "var(--pricing-active-switcher-background)",
            card: "var(--pricing-active-card-background)",
          },
          button: "var(--pricing-button-background)",
          icon: {
            color: "var(--pricing-icon-color)",
            background: "var(--pricing-icon-background)",
          },
        },

        // =========================================================
        // FAQ COLORS
        // =========================================================
        faq: {
          primary: {
            active: "var(--faq-primary-active-background)",
          },
          secondary: {
            active: {
              background: "var(--faq-secondary-active-background)",
              border: "var(--faq-secondary-active-border)",
              title: "var(--faq-secondary-active-title)",
              text: "var(--faq-secondary-active-text)",
            },
          },
        },

        // =========================================================
        // CHAT LIST COLORS
        // =========================================================
        chat: {
          list: {
            primary: {
              background: "var(--chat-list-background-primary)",
              alt: "var(--chat-list-background-primary-alt)",
            },
            secondary: {
              background: "var(--chat-list-background-secondary)",
              alt: "var(--chat-list-background-secondary-alt)",
            },
          },
        },

        // =========================================================
        // TOOLTIP COLORS
        // =========================================================
        tooltip: {
          text: "var(--tooltip-text)",
        },

        // =========================================================
        // POPOVER COLORS
        // =========================================================
        popover: {
          title: "var(--popover-title-background)",
          border: "var(--popover-border)",
        },

        // =========================================================
        // SKELETON COLORS
        // =========================================================
        skeleton: {
          gradient: {
            50: "var(--skeleton-gradient-50)",
            100: "var(--skeleton-gradient-100)",
            200: "var(--skeleton-gradient-200)",
          },
        },

        // =========================================================
        // 404 COLORS
        // =========================================================
        404: {
          background: "var(--404-background)",
          foreground: "var(--404-foreground)",
        },

        // =========================================================
        // BLOG COLORS
        // =========================================================
        blog: {
          shape: "var(--blog-shape)",
        },

        // =========================================================
        // MODAL COLORS
        // =========================================================
        modal: {
          button: {
            success: "var(--modal-button-success-background)",
            info: "var(--modal-button-info-background)",
            warning: "var(--modal-button-warning-background)",
            error: "var(--modal-button-error-background)",
          },
        },

        // =========================================================
        // SECTION TITLE COLORS
        // =========================================================
        section: {
          title: {
            badge: "var(--section-title-badge)",
            background: "var(--section-title-badge-background)",
          },
        },

        // =========================================================
        // MOBILE NAV COLORS
        // =========================================================
        mobile: {
          nav: {
            icon: "var(--mobile-nav-icon)",
            background: "var(--mobile-nav-background)",
            hover: "var(--mobile-nav-hover-background)",
          },
        },

        // =========================================================
        // FOOTER COLORS
        // =========================================================
        footer: {
          card: "var(--footer-card-background)",
          background: "var(--footer-background)",
        },

        // =========================================================
        // BENTO COLORS
        // =========================================================
        bento: {
          card: "var(--bento-card-background)",
          gradient: {
            shade: {
              1: "var(--bento-gradient-shade-1)",
              2: "var(--bento-gradient-shade-2)",
              3: "var(--bento-gradient-shade-3)",
            },
          },
        },

        // =========================================================
        // CTA COLORS
        // =========================================================
        cta: {
          icon: "var(--cta-icon-background)",
          background: "var(--cta-background)",
        },

        // =========================================================
        // HERO COLORS
        // =========================================================
        hero: {
          background: "var(--hero-background)",
          card: {
            background: "var(--hero-card-background)",
            2: "var(--hero-card-2-background)",
          },
          gradient: {
            shade: {
              1: "var(--hero-gradient-shade-1)",
              2: "var(--hero-gradient-shade-2)",
            },
          },
        },

        // =========================================================
        // TOGGLE COLORS
        // =========================================================
        toggle: {
          default: "var(--toggle-default-background)",
          disabled: {
            foreground: "var(--toggle-disabled-foreground)",
            background: "var(--toggle-disabled-background)",
          },
          active: "var(--toggle-active-background)",
        },

        // =========================================================
        // MAP COLORS
        // =========================================================
        map: {
          fill: "var(--map-fill)",
        },

        // =========================================================
        // AI SIDEBAR COLORS
        // =========================================================
        ai: {
          sidebar: {
            primary: {
              gradient: {
                shade: {
                  1: "var(--ai-sidebar-primary-gradient-shade-1)",
                  2: "var(--ai-sidebar-primary-gradient-shade-2)",
                },
              },
            },
            secondary: {
              gradient: {
                shade: {
                  1: "var(--ai-sidebar-secondary-gradient-shade-1)",
                  2: "var(--ai-sidebar-secondary-gradient-shade-2)",
                },
              },
            },
            hover: {
              primary: {
                gradient: {
                  shade: {
                    1: "var(--ai-sidebar-hover-primary-shade-1)",
                    2: "var(--ai-sidebar-hover-primary-shade-2)",
                  },
                },
                background: "var(--ai-sidebar-hover-primary-background)",
              },
              secondary: {
                gradient: {
                  shade: {
                    1: "var(--ai-sidebar-hover-secondary-shade-1)",
                    2: "var(--ai-sidebar-hover-secondary-shade-2)",
                  },
                },
                background: "var(--ai-sidebar-hover-secondary-background)",
              },
            },
          },
          title: {
            gradient: {
              shade: {
                1: "var(--ai-title-gradient-shade-1)",
                2: "var(--ai-title-gradient-shade-2)",
              },
            },
          },
          hero: {
            blend: {
              1: "var(--ai-hero-blend-1)",
              2: "var(--ai-hero-blend-2)",
            },
          },
        },

        // =========================================================
        // STATUS COLORS
        // =========================================================
        success: {
          DEFAULT: "var(--success)",
          50: "var(--success-50)",
          100: "var(--success-100)",
          500: "var(--success-500)",
          600: "var(--success-600)",
        },
        error: {
          DEFAULT: "var(--danger)",
          50: "var(--error-50)",
          100: "var(--error-100)",
          400: "var(--error-400)",
          500: "var(--error-500)",
          600: "var(--error-600)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          50: "var(--warning-50)",
          100: "var(--warning-100)",
          400: "var(--warning-400)",
          500: "var(--warning-500)",
          600: "var(--warning-600)",
        },
        info: {
          50: "var(--info-50)",
          100: "var(--info-100)",
          400: "var(--info-400)",
          500: "var(--info-500)",
          600: "var(--info-600)",
        },

        // =========================================================
        // WHITE VARIANTS
        // =========================================================
        white: {
          100: "var(--white-100)",
          90: "var(--white-90)",
          80: "var(--white-80)",
          70: "var(--white-70)",
          60: "var(--white-60)",
        },
      },

      // =========================================================
      // FONT FAMILY
      // =========================================================
      fontFamily: {
        surfer: ["OriginalSurfer"],
        sans: ["DMSans"],
      },

      // =========================================================
      // BOX SHADOWS
      // =========================================================
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        "3xl": "var(--shadow-3xl)",
        hero: "var(--shadow-hero)",
        popover: "var(--popover-shadow)",
        "drop-theme-3xl": "var(--drop-shadow-theme-3xl)",
      },
    },
  },
  plugins: [],
};
