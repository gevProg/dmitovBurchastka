export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Дмитров Брусчатка",
    url: "https://dmitrov-bruschatka.ru",
    logo: "https://dmitrov-bruschatka.ru/images/logo.svg",
    description:
        "Производство, продажа и укладка тротуарной плитки и брусчатки в Дмитрове и Дмитровском районе. Укладка тротуарной плитки в Яхроме, Гришино, Лавровках, Подосинках.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Московская обл., Дмитровский р-н, д. Гришино",
        addressRegion: "Московская область",
        postalCode: "141800",
        addressCountry: "RU",
    },
    telephone: "+7 (929) 510-03-61",
    email: "plitkadmitrov73@mail.ru",
    openingHours: "Mo-Su 08:00-20:00",
    areaServed: [
        "Дмитров",
        "Яхрома",
        "Дубна",
        "Талдом",
        "Сергиев-Посад",
        "Лобня",
        "Дмитровский район",
        "Московская область",
        "Гришино",
        "Новое Гришино",
        "Лавровки",
        "Подосинки",
    ],
    sameAs: [],
};

export const productSchema = (product: {
    name: string;
    image: string;
    description: string;
    sku: string;
    price: number;
    slug: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    sku: product.sku,
    offers: {
        "@type": "Offer",
        url: `https://dmitrov-bruschatka.ru/catalog/${product.slug}`,
        priceCurrency: "RUB",
        price: product.price,
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split("T")[0],
        availability: "https://schema.org/InStock",
        seller: {
            "@type": "Organization",
            name: "Дмитров Брусчатка",
        },
    },
});

export const breadcrumbSchema = (
    items: Array<{ name: string; url: string }>,
) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
    })),
});

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dmitrov-bruschatka.ru",
    name: "Дмитров Брусчатка",
    image: "https://dmitrov-bruschatka.ru/images/logo.svg",
    telephone: "+7 (929) 510-03-61",
    email: "plitkadmitrov73@mail.ru",
    address: {
        "@type": "PostalAddress",
        streetAddress: "д. Гришино",
        addressLocality: "Дмитровский район",
        addressRegion: "Московская область",
        postalCode: "141800",
        addressCountry: "RU",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 56.3436,
        longitude: 37.5204,
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
    },
    priceRange: "₽₽",
};

export const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Укладка тротуарной плитки",
    provider: {
        "@type": "Organization",
        name: "Дмитров Брусчатка",
        url: "https://dmitrov-bruschatka.ru",
    },
    areaServed: [
        {
            "@type": "City",
            name: "Дмитров",
        },
        {
            "@type": "City",
            name: "Яхрома",
        },
        {
            "@type": "AdministrativeArea",
            name: "Дмитровский район",
        },
    ],
    description:
        "Профессиональная укладка тротуарной плитки и брусчатки под ключ в Дмитрове, Яхроме, Дмитровском районе. Мощение садовых дорожек, укладка на бетонное основание, ремонт и демонтаж плитки.",
};

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Как правильно уложить тротуарную плитку своими руками?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Для укладки тротуарной плитки необходимо: 1) Подготовить основание — снять грунт, уложить геотекстиль, засыпать щебень и песок. 2) Установить бордюры. 3) Уложить плитку с использованием резинового молотка и уровня. 4) Засыпать швы песком. Рекомендуем обращаться к профессионалам для гарантии долговечности.",
            },
        },
        {
            "@type": "Question",
            name: "Какая тротуарная плитка лучше для улицы?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Для улицы лучше использовать вибропрессованную плитку толщиной от 6 см — она прочнее и устойчивее к нагрузкам. Для пешеходных дорожек подойдет вибролитая плитка толщиной 3-5 см. Важно также учитывать морозостойкость (не менее F200).",
            },
        },
        {
            "@type": "Question",
            name: "Что дешевле — брусчатка или тротуарная плитка?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Тротуарная плитка обычно дешевле брусчатки. Вибролитая плитка начинается от 280 руб/м², тогда как брусчатка — от 400 руб/м². Выбор зависит от назначения: для пешеходных зон подойдет плитка, для парковок и дорог — брусчатка.",
            },
        },
        {
            "@type": "Question",
            name: "Укладка плитки на песок или на цемент — что лучше?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Укладка на песко-цементную смесь обеспечивает более надежную фиксацию и долговечность. Укладка на песок проще и дешевле, но подходит для зон с небольшой нагрузкой. Для парковок и подъездных путей рекомендуется укладка на бетонное основание.",
            },
        },
    ],
};
