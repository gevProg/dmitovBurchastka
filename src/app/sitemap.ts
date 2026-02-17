import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://dmitrov-bruschatka.ru";

    const currentDate = new Date().toISOString();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/catalog`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/reviews`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contacts`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/consent`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cookie-policy`,
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    // Category pages
    const categories = [
        "vibrolitaya",
        "vibropressovannaya",
        "bordyury",
        "vodostoki",
        "kolpaki",
        "oblicovochnaya",
    ];

    const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
        url: `${baseUrl}/catalog/${category}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // Product pages
    const products = [
        // Вибролитая
        "krug-25x25",
        "cvetok-25x25",
        "tuchka",
        "bruschatka-vibrolitaya",
        "volna",
        "klever-uzorniy",
        "bruschatka-vibropress-3cm",
        "bruschatka-vibropress-4cm",
        "bruschatka-vibropress-5cm",
        "bruschatka-vibropress-6cm",
        "bruschatka-vibropress-7cm",
        "bruschatka-vibropress-8cm",
        "bruschatka-vibropress-9cm",
        "bruschatka-vibropress-10cm",
        "volna-vibropress",
        "katushka-vibropress",
        // Вибропрессованная
        "krug-25x25-vp",
        "cvetok-25x25-vp",
        "rvanaya-setka",
        "tuchka-vp",
        "fantaziya",
        "parket",
        "kaliforniya",
        "okno",
        "pautinka",
        "cvetok-35x35",
        "freska",
        "8-kirpichey-vp",
        "derevo",
        "12-kirpichey-vp",
        "klever-uzorniy-vp",
        "klever-gladkiy",
        "klever-krakovskiy",
        "anglijskij-bulyzhnik",
        "bruk",
        "bruschatka-vp",
        "volna-vp",
        "katushka",
        "soty",
        "rybki",
        "sledy-velikana",
        "eko",
        "eko-reshetka",
        // Бордюры и прочее
        "sadovyj-bordyur-malenkij",
        "sadovyj-bordyur",
        "dorozhnyj-bordyur",
        "bordyur-vibropress",
        "vodostok-16x50",
        "kolpak-45x45",
    ];

    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/catalog/product/${product}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...categoryPages, ...productPages];
}
