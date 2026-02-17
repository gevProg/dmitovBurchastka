import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    products: [
        { name: "Вибропрессованная плитка", href: "/catalog/vibropressovannaya" },
        { name: "Вибролитая плитка", href: "/catalog/vibrolitaya" },
        { name: "Дорожные и садовые бордюры", href: "/catalog/bordyury" },
        { name: "Вся продукция", href: "/catalog" },
    ],
    services: [
        { name: "Укладка плитки", href: "/services#ukladka" },
        { name: "Дачное озеленение", href: "/services#ozelenenie" },
        { name: "Бетонные работы", href: "/services#beton" },
        { name: "Укладка асфальта", href: "/services#asfalt" },
        { name: "Художественная ковка", href: "/services#kovka" },
    ],
    company: [
        { name: "О компании", href: "/#about" },
        { name: "Портфолио", href: "/portfolio" },
        { name: "Отзывы", href: "/reviews" },
        { name: "Контакты", href: "/contacts" },
    ],
    legal: [
        { name: "Политика конфиденциальности", href: "/privacy-policy" },
        { name: "Пользовательское соглашение", href: "/terms" },
        { name: "Обработка персональных данных", href: "/consent" },
        { name: "Политика cookie", href: "/cookie-policy" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-primary-olive text-white">
            {/* Main Footer */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <Image
                                src="/images/logo.svg"
                                alt="Дмитров Брусчатка"
                                width={160}
                                height={40}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-white/80 text-sm mb-4">
                            Производство, продажа и укладка тротуарной плитки и
                            брусчатки в Дмитрове и Дмитровском районе. Работаем с 2010 года.
                        </p>
                        <div className="space-y-2">
                            <a
                                href="tel:+79295100361"
                                className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="font-semibold">
                                    8 (929) 510-03-61
                                </span>
                            </a>
                            <a
                                href="tel:+79252018286"
                                className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="font-semibold">
                                    8 (925) 201-82-86
                                </span>
                            </a>
                            <a
                                href="mailto:plitkadmitrov73@mail.ru"
                                className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>plitkadmitrov73@mail.ru</span>
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Наша продукция</h4>
                        <ul className="space-y-2">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Услуги</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Компания</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <p className="text-sm text-white/70 mb-2">Адрес:</p>
                            <p className="text-sm">
                                Московская обл., Дмитровский р-н, д. Гришино
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20">
                <div className="container-custom py-4">
                    <div className="flex flex-col space-y-3">
                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/60 hover:text-white transition-colors text-xs"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                            <p className="text-white/70 text-sm">
                                © {new Date().getFullYear()} dmitrov-bruschatka.ru —
                                Тротуарная плитка и брусчатка в Дмитрове
                            </p>
                            <p className="text-white/70 text-sm">
                                Работаем: Дмитров, Яхрома, Дубна, Талдом,
                                Сергиев-Посад, Лобня, Гришино, Подосинки
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
