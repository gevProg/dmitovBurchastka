import { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/utils/structuredData";
import PricePageClient from "./PricePageClient";

export const metadata: Metadata = {
    title: "Наша продукция – Тротуарная плитка и брусчатка в Дмитрове",
    description:
        "Каталог тротуарной плитки и брусчатки от производителя в Дмитрове. Вибролитая, вибропрессованная плитка, бордюры дорожные и садовые. Калькулятор стоимости. Доставка по Дмитровскому району.",
    keywords: [
        "тротуарная плитка Дмитров",
        "брусчатка Дмитров",
        "вибролитая плитка цена",
        "вибропрессованная плитка цена",
        "купить плитку Дмитров",
        "бордюры дорожные Дмитров",
        "укладка плитки Дмитровский район",
    ],
    openGraph: {
        title: "Наша продукция – Тротуарная плитка в Дмитрове",
        description:
            "Каталог тротуарной плитки, бордюров и брусчатки. Калькулятор стоимости. От 280₽/м².",
    },
    alternates: {
        canonical: "https://dmitrov-bruschatka.ru/catalog",
    },
};

export default function CatalogPage() {
    const breadcrumbs = [
        { name: "Главная", url: "https://dmitrov-bruschatka.ru" },
        { name: "Наша продукция", url: "https://dmitrov-bruschatka.ru/catalog" },
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
