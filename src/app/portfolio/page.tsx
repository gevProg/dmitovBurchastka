import { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/utils/structuredData";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
    title: "Портфолио – Наши работы по укладке плитки в Дмитрове",
    description:
        "Портфолио выполненных работ по укладке тротуарной плитки в Дмитрове и Дмитровском районе. Примеры проектов, фотографии до и после. Укладка плитки 12 кирпичей, 8 кирпичей, Калифорния.",
    keywords: [
        "портфолио укладка плитки",
        "примеры работ тротуарная плитка",
        "фото укладки плитки",
        "выполненные проекты плитка",
        "12 кирпичей укладка",
        "8 кирпичей фото",
        "плитка калифорния",
    ],
    openGraph: {
        title: "Портфолио работ – Укладка плитки в Дмитрове",
        description: "Смотрите примеры наших выполненных проектов по укладке тротуарной плитки в Дмитрове. Более 500 реализованных объектов.",
        images: ["/images/portfolio/12-kirpichey.jpg"],
        type: "website",
    },
};

const projects = [
    {
        id: 1,
        title: "Укладка брусчатки на даче",
        description:
            "Укладка тротуарной брусчатки, установка бордюров, устройство дренажа.",
        location: "Дмитровский район",
        area: "120 м²",
        duration: "5 дней",
        image: "/images/portfolio/plitka.jpg",
        category: "Частный дом",
    },
    {
        id: 2,
        title: "Укладка плитки под ключ",
        description:
            "Профессиональная укладка тротуарной плитки с подготовкой основания.",
        location: "г. Дубна",
        area: "350 м²",
        duration: "10 дней",
        image: "/images/portfolio/Ykaldka.jpg",
        category: "Коммерческий объект",
    },
    {
        id: 3,
        title: "Установка садовых бордюров",
        description:
            "Установка бордюров для садовых дорожек и клумб.",
        location: "г. Талдом",
        area: "85 м²",
        duration: "4 дня",
        image: "/images/portfolio/бордюр садовый.jpg",
        category: "Частный дом",
    },
    {
        id: 4,
        title: "Асфальтирование площадки",
        description:
            "Укладка асфальта на придомовой территории с водоотведением.",
        location: "Сергиев-Посад",
        area: "200 м²",
        duration: "7 дней",
        image: "/images/portfolio/asfalt.jpg",
        category: "Частный дом",
    },
    {
        id: 5,
        title: "Дачное озеленение",
        description:
            "Комплексное озеленение и благоустройство дачного участка.",
        location: "г. Лобня",
        area: "150 м²",
        duration: "5 дней",
        image: "/images/portfolio/ozelenie.jpg",
        category: "Частный дом",
    },
    {
        id: 6,
        title: "Бетонные работы",
        description: "Заливка фундамента и устройство бетонной отмостки.",
        location: "Дмитровский район",
        area: "95 м²",
        duration: "6 дней",
        image: "/images/portfolio/betonnieRaboty.jpg",
        category: "Частный дом",
    },
];

export default function PortfolioPage() {
    const breadcrumbs = [
        { name: "Главная", url: "https://dmitrov-bruschatka.ru" },
        { name: "Портфолио", url: "https://dmitrov-bruschatka.ru/portfolio" },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
                }}
            />

            {/* Hero */}
            <section className="pt-24 pb-12 bg-primary-olive">
                <div className="container-custom">
                    {/* Breadcrumbs */}
                    <nav className="mb-6">
                        <ol className="flex items-center space-x-2 text-sm text-white/70">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Главная
                                </Link>
                            </li>
                            <li>/</li>
                            <li className="text-white font-semibold">
                                Портфолио
                            </li>
                        </ol>
                    </nav>

                    <h1 className="text-white mb-4">Наши работы</h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        За более чем 10 лет работы мы реализовали сотни
                        проектов. Вот некоторые примеры наших выполненных работ.
                    </p>
                </div>
            </section>

            {/* Image Gallery Slider */}
            <PortfolioGallery />

            {/* Stats */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-primary-brown mb-2">
                                500+
                            </div>
                            <div className="text-text-secondary">
                                Проектов выполнено
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-brown mb-2">
                                10+
                            </div>
                            <div className="text-text-secondary">Лет опыта</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-brown mb-2">
                                50000+
                            </div>
                            <div className="text-text-secondary">
                                м² уложено
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-brown mb-2">
                                100%
                            </div>
                            <div className="text-text-secondary">
                                Довольных клиентов
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-olive text-white">
                <div className="container-custom text-center">
                    <h2 className="text-white mb-4">
                        Хотите такой же результат?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Свяжитесь с нами для бесплатной консультации и расчета
                        стоимости вашего проекта.
                    </p>
                    <Link
                        href="/contacts"
                        className="bg-white text-primary-olive px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100 inline-block"
                    >
                        Обсудить проект
                    </Link>
                </div>
            </section>
        </>
    );
}
