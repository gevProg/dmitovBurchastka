import { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/utils/structuredData";
import PricePageClient from "./PricePageClient";

export const metadata: Metadata = {
    title: "Наша продукция – Тротуарная плитка и брусчатка в Дмитрове",
    description:
        "Каталог тротуарной плитки и брусчатки от производителя в Дмитрове. Вибролитая, вибропрессованная плитка, бордюры дорожные и садовые. Калькулятор стоимости. Доставка по Дмитровскому району.",
    keywords: [
        "тротуарная плитка в Дмитрове",
        "брусчатка в Дмитрове",
        "вибролитая плитка цена в Дмитрове",
        "вибропрессованная плитка цена в Дмитрове",
        "купить плитку в Дмитрове",
        "купить тротуарную плитку рядом",
        "бордюры дорожные в Дмитрове",
        "укладка плитки в Дмитрове Дмитровском районе",
    ],
    openGraph: {
        title: "Наша продукция – Тротуарная плитка в Дмитрове",
        description:
            "Каталог тротуарной плитки, бордюров и брусчатки. Калькулятор стоимости. От 280₽/м².",
    },
    alternates: {
        canonical: "https://moskva-plitka.com/catalog",
    },
};

export default function CatalogPage() {
    const breadcrumbs = [
        { name: "Главная", url: "https://moskva-plitka.com" },
        { name: "Наша продукция", url: "https://moskva-plitka.com/catalog" },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
                }}
            />
            <PricePageClient />
        </>
    );
}
