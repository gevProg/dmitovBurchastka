"use client";

import { motion } from "framer-motion";

export default function CallButton() {
    return (
        <motion.a
            href="tel:+79295100361"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-6 right-6 z-40 group"
            aria-label="Позвонить"
        >
            <div className="relative">
                {/* Pulsing Ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-primary-brown"
                />

                {/* Button */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-14 h-14 md:w-16 md:h-16 bg-primary-brown rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                >
                    <svg
                        className="w-6 h-6 md:w-7 md:h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                    </svg>
                </motion.div>
            </div>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                Позвонить нам
            </span>
        </motion.a>
    );
}
