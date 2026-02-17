import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CallButton from "@/components/layout/CallButton";
import CookieConsent from "@/components/ui/CookieConsent";
import { organizationSchema, localBusinessSchema, faqSchema } from "@/lib/utils/structuredData";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ["600", "700", "800"],
    variable: "--font-montserrat",
    display: "swap",
});

const openSans = Open_Sans({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "600"],
    variable: "--font-open-sans",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://dmitrov-bruschatka.ru"),
    title: {
        default:
            "Тротуарная плитка в Дмитрове – Продажа и укладка брусчатки | Дмитров Брусчатка",
        template: "%s | Дмитров Брусчатка",
    },
    description:
        "Тротуарная плитка и брусчатка в Дмитрове от производителя. ✓ Укладка тротуарной плитки под ключ ✓ Доставка по Дмитровскому району ✓ Низкие цены от 280 руб/м². Работаем в Дмитрове, Яхроме, Гришино, Лавровках, Подосинках. ☎ 8 (929) 510-03-61",
    keywords: [
        "тротуарная плитка Дмитров",
        "брусчатка в Дмитрове",
        "укладка тротуарной плитки в Дмитрове",
        "укладка брусчатки цена Дмитров",
        "купить тротуарную плитку в Дмитрове",
        "укладка плитки в Дмитровском районе",
        "укладка тротуарной плитки в Яхроме",
        "благоустройство территории Дмитров",
        "отмостка фундамента плиткой Дмитров",
        "укладка тротуарной плитки на даче Дмитровский район",
        "площадка под парковку плитка Дмитров",
        "бордюры дорожные установка Дмитров",
        "бордюр тротуарный купить Дмитров",
        "поребрик Дмитров",
        "водоотводные лотки Дмитров",
        "геотекстиль для укладки плитки Дмитров",
        "песок и щебень с доставкой Дмитров",
        "укладка тротуарной плитки под ключ Дмитров",
        "укладка плитки на бетонное основание цена",
        "ремонт тротуарной плитки в Дмитрове",
        "демонтаж старой плитки Дмитров",
        "мощение садовых дорожек Дмитров",
        "вибропрессованная плитка",
        "вибролитая плитка",
        "как правильно уложить тротуарную плитку своими руками",
        "какая тротуарная плитка лучше для улицы",
        "что дешевле брусчатка или тротуарная плитка",
        "укладка плитки на песок или на цемент",
        "тротуарная плитка в Гришино",
        "тротуарная плитка в Новое Гришино",
        "тротуарная плитка в Лавровках",
        "тротуарная плитка в Подосинках",
        "тротуарная плитка в Яхроме",
        "укладка тротуарной плитки в Гришино",
        "укладка тротуарной плитки в Новое Гришино",
        "укладка тротуарной плитки в Лавровках",
        "укладка тротуарной плитки в Подосинках",
        "укладка тротуарной плитки в Яхроме",
    ],
    authors: [{ name: "Дмитров Брусчатка" }],
    creator: "Дмитров Брусчатка",
    publisher: "Дмитров Брусчатка",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "ru_RU",
        url: "https://dmitrov-bruschatka.ru",
        siteName: "Дмитров Брусчатка",
        title: "Тротуарная плитка в Дмитрове – Продажа и укладка брусчатки",
        description:
            "Продажа и укладка тротуарной плитки и брусчатки в Дмитрове. Гарантия качества, доставка, низкие цены. Работаем в Дмитрове, Яхроме, Дмитровском районе.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Дмитров Брусчатка - Тротуарная плитка в Дмитрове",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
    },
    alternates: {
        canonical: "https://dmitrov-bruschatka.ru",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="ru"
            className={`${montserrat.variable} ${openSans.variable}`}
        >
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="canonical" href="https://dmitrov-bruschatka.ru" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            </head>
            <body className="font-openSans bg-bg-main text-text-primary antialiased">
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <CallButton />
                <CookieConsent />
            </body>
        </html>
    );
}
