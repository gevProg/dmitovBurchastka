"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
            <div className="container-custom">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-1">
                        <p className="text-sm text-gray-700">
                            Мы используем файлы cookie для обеспечения корректной работы сайта
                            и улучшения качества обслуживания. Продолжая использовать сайт, вы
                            соглашаетесь с{" "}
                            <Link
                                href="/cookie-policy"
                                className="text-primary-olive underline hover:no-underline"
                            >
                                Политикой cookie
                            </Link>{" "}
                            и{" "}
                            <Link
                                href="/privacy-policy"
                                className="text-primary-olive underline hover:no-underline"
                            >
                                Политикой конфиденциальности
                            </Link>
                            .
                        </p>
                    </div>
                    <button
                        onClick={acceptCookies}
                        className="flex-shrink-0 bg-primary-olive text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-olive/90 transition-colors whitespace-nowrap"
                    >
                        Принять
                    </button>
                </div>
            </div>
        </div>
    );
}
