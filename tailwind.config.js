/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "#1f2933",
                foreground: "#f7f9f9",
                primary: {
                    DEFAULT: "#293642",
                    foreground: "#293642",
                },
                secondary: {
                    DEFAULT: "#344251",
                    foreground: "#344251",
                },
                tartiary: {
                    DEFAULT: "#5c7084",
                    foreground: "#5c7084",
                },
                deep: {
                    DEFAULT: "#1f2933",
                    foreground: "#1f2933",
                },
                button: {
                    DEFAULT: "#75baff",
                    foreground: "#75baff",
                },
                tags: {
                    DEFAULT: "rgba(0,0,0,0.08)",
                    foreground: "rgba(0,0,0,0.08)",
                },
                paragraph: {
                    DEFAULT: "#f7f9f9",
                    foreground: "#f7f9f9",
                },
                avocado: {
                    DEFAULT: "#e6f5ca",
                    foreground: "#e6f5ca",
                },
                pool: {
                    DEFAULT: "#d7f8ff",
                    foreground: "#d7f8ff",
                },
                aqua: {
                    DEFAULT: "#d2f8f0",
                    foreground: "#d2f8f0",
                },
                irish: {
                    DEFAULT: "#e1e6ff",
                    foreground: "#e1e6ff",
                },
                sand: {
                    DEFAULT: "#ffeab9",
                    foreground: "#ffeab9",
                },
                cream: {
                    DEFAULT: "#fdeacc",
                    foreground: "#fdeacc",
                },
                peach: {
                    DEFAULT: "#fddfd8",
                    foreground: "#fddfd8",
                },
                rose: {
                    DEFAULT: "#fce6f0",
                    foreground: "#fce6f0",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
