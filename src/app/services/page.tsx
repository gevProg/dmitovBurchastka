import { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/utils/structuredData";

export const metadata: Metadata = {
    title: "Услуги – Укладка плитки, озеленение, бетонные работы в Дмитрове",
    description:
        "Полный спектр услуг по укладке тротуарной плитки, благоустройству участков, бетонным работам в Дмитрове и Дмитровском районе. Гарантия качества.",
    openGraph: {
        title: "Услуги по укладке плитки и благоустройству в Дмитрове",
        description:
            "Профессиональная укладка плитки, озеленение, бетонные работы.",
    },
    alternates: {
        canonical: "https://dmitrov-bruschatka.ru/services",
    },
};

const services = [
    {
        id: "ukladka",
        name: "Укладка тротуарной плитки",
        description:
            "Профессиональная укладка тротуарной плитки любой сложности. Подготовка основания, установка бордюров, укладка плитки, заполнение швов.",
        features: [
            "Выезд замерщика бесплатно",
            "Подготовка основания",
            "Укладка геотекстиля",
            "Установка бордюров",
            "Укладка плитки с рисунком",
            "Заполнение швов",
        ],
        price: "от 600 ₽/м²",
        image: "/images/portfolio/Ykaldka.jpg",
    },
    {
        id: "ozelenenie",
        name: "Дачное озеленение",
        description:
            "Комплексное благоустройство и озеленение участка. Газоны, посадка деревьев и кустарников, устройство цветников.",
        features: [
            "Планировка участка",
            "Устройство газона",
            "Посадка деревьев",
            "Устройство цветников",
            "Системы полива",
            "Ландшафтный дизайн",
        ],
        price: "по запросу",
        image: "/images/portfolio/ozelenie.jpg",
    },
    {
        id: "beton",
        name: "Бетонные работы",
        description:
            "Заливка фундаментов, площадок, отмосток. Качественный бетон, соблюдение технологии, выполнение в срок.",
        features: [
            "Заливка фундаментов",
            "Бетонные площадки",
            "Отмостки",
            "Армирование",
            "Подготовка основания",
            "Уход за бетоном",
        ],
        price: "от 3000 ₽/м³",
        image: "/images/portfolio/betonnieRaboty.jpg",

    },
    {
        id: "asfalt",
        name: "Укладка асфальта",
        description:
            "Асфальтирование дорог, площадок, парковок. Используем качественные материалы, соблюдаем технологию укладки.",
        features: [
            "Асфальтирование дорог",
            "Парковки",
            "Подъездные пути",
            "Ямочный ремонт",
            "Срезка старого асфальта",
            "Установка бордюров",
        ],
        price: "от 800 ₽/м²",
        image: "/images/portfolio/asfalt.jpg",
    },
    {
        id: "kovka",
        name: "Художественная ковка",
        description:
            "Изготовление кованых изделий любой сложности. Ворота, навесы, козырьки, решетки, мангалы, перила, ограждения.",
        features: [
            "Кованые ворота",
            "Навесы и козырьки",
            "Решетки на окна",
            "Кованые мангалы",
            "Перила и ограждения",
            "Кованая мебель",
        ],
        price: "по запросу",
        image: "/images/products/oblicovka-1.jpg",
    },
];

export default function ServicesPage() {
    const breadcrumbs = [
        { name: "Главная", url: "https://dmitrov-bruschatka.ru" },
        { name: "Услуги", url: "https://dmitrov-bruschatka.ru/services" },
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
                            <li className="text-white font-semibold">Услуги</li>
                        </ol>
                    </nav>

                    <h1 className="text-white mb-4">Наши услуги</h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Выполняем весь спектр услуг по благоустройству
                        территории. Нет необходимости согласовывать действия
                        нескольких подрядчиков – всю работу выполним мы!
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="section-padding bg-bg-main">
                <div className="container-custom">
                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`card p-0 overflow-hidden ${
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                } lg:flex`}
                            >
                                {/* Image */}
                                <div className="relative h-64 lg:h-auto lg:w-1/2">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${service.image})`,
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:hidden" />
                                </div>

                                {/* Content */}
                                <div className="p-6 lg:p-8 lg:w-1/2 flex flex-col justify-center">
                                    <h2 className="text-2xl font-bold text-primary-brown mb-4">
                                        {service.name}
                                    </h2>
                                    <p className="text-text-secondary mb-6">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {service.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center space-x-2"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-green-500 flex-shrink-0"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-sm text-text-primary">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="bg-primary-brown/10 px-4 py-2 rounded-lg">
                                            <span className="text-sm text-text-secondary">
                                                Стоимость:
                                            </span>
                                            <span className="text-lg font-bold text-primary-brown ml-2">
                                                {service.price}
                                            </span>
                                        </div>
                                        <Link
                                            href="/contacts"
                                            className="btn-primary"
                                        >
                                            Заказать услугу
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-brown text-white">
                <div className="container-custom text-center">
                    <h2 className="text-white mb-4">Нужна консультация?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Позвоните нам или оставьте заявку. Наш специалист
                        бесплатно выедет на объект, произведет замеры и
                        рассчитает стоимость работ.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="tel:+79295100361"
                            className="bg-white text-primary-brown px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100"
                        >
                            8 (929) 510-03-61
                        </a>
                        <Link
                            href="/contacts"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-primary-brown"
                        >
                            Оставить заявку
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
