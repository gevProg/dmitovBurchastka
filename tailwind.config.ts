import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    brown: "#8B4513",
                    "brown-dark": "#6B3410",
                    olive: "#556B2F",
                    "olive-dark": "#3D4F21",
                },
                bg: {
                    main: "#F5F5F5",
                    card: "#FFFFFF",
                },
                text: {
                    primary: "#333333",
                    secondary: "#666666",
                },
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                openSans: ["Open Sans", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.6s ease-out",
                "slide-down": "slideDown 0.6s ease-out",
                "scale-in": "scaleIn 0.4s ease-out",
                "pulse-ring": "pulseRing 2s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.9)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                pulseRing: {
                    "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
                    "50%": { transform: "scale(1.3)", opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
