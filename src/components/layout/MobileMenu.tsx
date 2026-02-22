"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SubmenuItem {
    name: string;
    href: string;
}

interface NavItem {
    name: string;
    href: string;
    submenu?: SubmenuItem[];
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navigation: NavItem[];
    onCallbackClick: () => void;
}

export default function MobileMenu({
    isOpen,
    onClose,
    navigation,
    onCallbackClick,
}: MobileMenuProps) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setExpandedItem(null);
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                        }}
                        className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl"
                    >
                        <div className="p-6 h-full flex flex-col">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-text-primary hover:text-primary-brown transition-colors"
                                aria-label="Закрыть меню"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {/* Logo */}
                            <div className="mb-8 mt-4">
                                <Link href="/" onClick={onClose} className="flex items-center space-x-3">
                                    <Image
                                        src="/images/logo.svg"
                                        alt="Дмитров Брусчатка"
                                        width={140}
                                        height={35}
                                        className="h-9 w-auto"
                                    />
                                </Link>
                            </div>

                            {/* Navigation Links */}
                            <nav className="space-y-1 flex-1 overflow-y-auto">
                                {navigation.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.submenu ? (
                                            <div>
                                                <button
                                                    onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                                                    className="w-full flex items-center justify-between text-lg font-semibold text-text-primary hover:text-primary-brown hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg"
                                                >
                                                    <span>{item.name}</span>
                                                    <svg
                                                        className={`w-4 h-4 transition-transform ${expandedItem === item.name ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                <AnimatePresence>
                                                    {expandedItem === item.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-4 pb-2 space-y-1">
                                                                {item.submenu.map((sub) => (
                                                                    <Link
                                                                        key={sub.name}
                                                                        href={sub.href}
                                                                        onClick={onClose}
                                                                        className="block text-sm font-medium text-text-secondary hover:text-primary-brown hover:bg-gray-50 transition-colors py-2 px-4 rounded-lg"
                                                                    >
                                                                        {sub.name}
                                                                    </Link>
                                                                ))}
                                                                <div className="border-t border-gray-200 mt-2 pt-2">
                                                                    <Link
                                                                        href="/catalog#calculator"
                                                                        onClick={onClose}
                                                                        className="flex items-center gap-2 text-sm font-medium text-primary-brown hover:bg-gray-50 transition-colors py-2 px-4 rounded-lg"
                                                                    >
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                                        </svg>
                                                                        Калькулятор стоимости
                                                                    </Link>
                                                                    <Link
                                                                        href="/catalog#price-info"
                                                                        onClick={onClose}
                                                                        className="flex items-center gap-2 text-sm font-medium text-primary-brown hover:bg-gray-50 transition-colors py-2 px-4 rounded-lg"
                                                                    >
                                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>
                                                                        От чего зависит цена?
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="block text-lg font-semibold text-text-primary hover:text-primary-brown hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Contact Info */}
                            <div className="pt-6 border-t border-gray-200 space-y-4">
                                <a
                                    href="tel:+79295100361"
                                    className="flex items-center space-x-3 text-xl font-bold text-primary-brown hover:text-primary-brown-dark transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>8 (929) 510-03-61</span>
                                </a>
                                <p className="text-text-secondary text-sm">
                                    Пн-Вс: 08:00 - 20:00
                                </p>
                                <button
                                    onClick={onCallbackClick}
                                    className="btn-primary w-full"
                                >
                                    Заказать звонок
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
