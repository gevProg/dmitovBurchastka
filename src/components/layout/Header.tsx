"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import CallbackModal from "@/components/ui/CallbackModal";

const productSubmenu = [
    { name: "Вибропрессованная плитка", href: "/catalog/vibropressovannaya" },
    { name: "Вибролитая плитка", href: "/catalog/vibrolitaya" },
    { name: "Дорожные и садовые бордюры", href: "/catalog/bordyury" },
];

const navigation = [
    { name: "Главная", href: "/" },
    { name: "Наша продукция", href: "/catalog", submenu: productSubmenu },
    { name: "Услуги", href: "/services" },
    { name: "Портфолио", href: "/portfolio" },
    { name: "Отзывы", href: "/reviews" },
    { name: "Контакты", href: "/contacts" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCallbackOpen, setIsCallbackOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (name: string) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white shadow-lg py-2"
                        : "bg-primary-olive/95 backdrop-blur-sm py-3"
                }`}
            >
                <nav className="container-custom">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3">
                            <Image
                                src="/images/logo.svg"
                                alt="Дмитров Брусчатка"
                                width={160}
                                height={40}
                                className={`h-10 w-auto ${!isScrolled ? "brightness-0 invert" : ""}`}
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.submenu ? handleMouseEnter(item.name) : undefined}
                                    onMouseLeave={item.submenu ? handleMouseLeave : undefined}
                                >
                                    {item.submenu ? (
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                            className={`font-semibold transition-colors text-sm flex items-center gap-1 ${
                                                isScrolled
                                                    ? "text-text-primary hover:text-primary-brown"
                                                    : "text-white hover:text-white/80"
                                            }`}
                                        >
                                            {item.name}
                                            <svg
                                                className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`font-semibold transition-colors text-sm flex items-center gap-1 ${
                                                isScrolled
                                                    ? "text-text-primary hover:text-primary-brown"
                                                    : "text-white hover:text-white/80"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}

                                    {/* Dropdown */}
                                    {item.submenu && (
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 8 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                                                    onMouseEnter={() => handleMouseEnter(item.name)}
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    {item.submenu.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className="block px-4 py-3 text-sm text-text-primary hover:bg-primary-brown/10 hover:text-primary-brown transition-colors font-medium border-b border-gray-50"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                    <div className="border-t border-gray-200 mt-1 pt-1">
                                                        <Link
                                                            href="/catalog#calculator"
                                                            className="flex items-center gap-2 px-4 py-3 text-sm text-primary-brown hover:bg-primary-brown/10 transition-colors font-medium"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                            </svg>
                                                            Калькулятор стоимости
                                                        </Link>
                                                        <Link
                                                            href="/catalog#price-info"
                                                            className="flex items-center gap-2 px-4 py-3 text-sm text-primary-brown hover:bg-primary-brown/10 transition-colors font-medium"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            От чего зависит цена?
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Contact Info & CTA */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <div className="text-right">
                                <a
                                    href="tel:+79295100361"
                                    className={`font-bold text-lg block ${
                                        isScrolled
                                            ? "text-primary-brown"
                                            : "text-white"
                                    }`}
                                >
                                    8 (929) 510-03-61
                                </a>
                                <p
                                    className={`text-xs ${
                                        isScrolled
                                            ? "text-text-secondary"
                                            : "text-white/80"
                                    }`}
                                >
                                    Пн-Вс: 08:00 - 20:00
                                </p>
                            </div>
                            <button
                                onClick={() => setIsCallbackOpen(true)}
                                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                                    isScrolled
                                        ? "bg-primary-brown text-white hover:bg-primary-brown-dark"
                                        : "bg-white text-primary-brown hover:bg-gray-100"
                                }`}
                            >
                                Заказать звонок
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2"
                            aria-label="Открыть меню"
                        >
                            <svg
                                className={`w-6 h-6 ${isScrolled ? "text-primary-brown" : "text-white"}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navigation={navigation}
                onCallbackClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCallbackOpen(true);
                }}
            />

            {/* Callback Modal */}
            <CallbackModal
                isOpen={isCallbackOpen}
                onClose={() => setIsCallbackOpen(false)}
            />
        </>
    );
}
