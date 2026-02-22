import { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import Benefits from "@/components/home/Benefits";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTASection from "@/components/home/CTASection";
import SEOContent from "@/components/home/SEOContent";

export const metadata: Metadata = {
    title: "Тротуарная плитка в Дмитрове – Купить брусчатку с доставкой и укладкой | Дмитров Брусчатка",
    description:
        "Тротуарная плитка и брусчатка в Дмитрове от производителя. Большой выбор вибролитой и вибропрессованной плитки, бордюры, водостоки. Укладка тротуарной плитки под ключ в Дмитрове, Яхроме, Гришино, Подосинках. Низкие цены от 280₽/м². ☎ 8 (929) 510-03-61",
    keywords: [
        "тротуарная плитка Дмитров",
        "брусчатка в Дмитрове",
        "купить тротуарную плитку в Дмитрове",
        "укладка тротуарной плитки в Дмитрове",
        "укладка брусчатки цена Дмитров",
        "тротуарная плитка в Яхроме",
        "укладка плитки в Дмитровском районе",
    ],
    openGraph: {
        title: "Тротуарная плитка в Дмитрове – Купить с доставкой",
        description:
            "Продажа и укладка тротуарной плитки и брусчатки в Дмитрове. Гарантия качества, доставка по Дмитровскому району.",
    },
    alternates: {
        canonical: "https://dmitrov-bruschatka.ru",
    },
};

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <HeroSlider />

            {/* Services Section */}
            <ServicesPreview />

            {/* Products Section */}
            <FeaturedProducts />
            {/* Benefits Section */}
            <Benefits />


            {/* CTA Section */}
            <CTASection />

            {/* SEO Content */}
            <SEOContent />
        </>
    );
}
