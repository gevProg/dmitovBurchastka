import { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/utils/structuredData";

export const metadata: Metadata = {
    title: "Услуги – Укладка плитки, озеленение, бетонные работы в Дмитрове",
    description:
        "Полный спектр услуг по укладке тротуарной плитки, благоустройству участков, бетонным работам в Дмитрове и Дмитровском районе. Гарантия качества.",
        keywords: [
            "укладка тротуарной плитки в Дмитрове",
            "укладка плитки Дмитров",
            "мощение тротуарной плиткой Дмитров",
            "укладка брусчатки Дмитров",
            "укладка плитки на даче Дмитровский район",
            "стоимость укладки плитки в Дмитрове",
            "цена укладки тротуарной плитки Дмитров",
            "недорогая укладка плитки Дмитров",
            "укладка плитки под ключ Дмитров",
            "заказать укладку плитки в Дмитрове",
            "дренаж в Дмитрове",
            "устройство дренажа Дмитров",
            "монтаж дренажа Дмитровский район",
            "дренаж участка в Дмитрове",
            "дренажные системы Дмитров",
            "дренаж вокруг дома Дмитров",
            "отвод грунтовых вод Дмитров",
            "ливневая канализация Дмитров",
            "цена дренажа в Дмитрове",
            "недорогой дренаж участка Дмитров",
            "дренаж дачного участка Московская область",
            "бетонные работы в Дмитрове",
            "заливка фундамента Дмитров",
            "бетонная площадка под ключ Дмитров",
            "отмостка дома Дмитров",
            "армирование бетона Дмитров",
            "монолитные работы Дмитровский район",
            "цена бетонных работ в Дмитрове",
            "заливка бетона дача Дмитров",
            "художественная ковка в Дмитрове",
            "кованые изделия Дмитров",
            "кованые ворота Дмитров",
            "навесы кованые Дмитров",
            "перила ковка Дмитровский район",
            "кованые решетки Дмитров",
            "ковка на заказ Дмитров",
            "кованый мангал Дмитров",
            "цена на художественную ковку в Дмитрове",
            "дачное озеленение Дмитров",
            "благоустройство участка Дмитров",
            "ландшафтные работы Дмитровский район",
            "посадка газона Дмитров",
            "устройство цветников Дмитров",
            "система автополива Дмитров",
            "посадка деревьев и кустарников Дмитров",
            "планировка участка Дмитров",
            "благоустройство дачи Московская область",
            "озеленение загородного дома Дмитров",
            "недорогое озеленение участка Дмитров",
            "услуги благоустройства Московская область",
            "ремонт дорог Дмитров",
            "благоустройство территории в Дмитрове",
            "комплексное благоустройство Дмитровский район",
            "вызов замерщика бесплатно Дмитров",
            "гарантия качества Дмитров",
            "частный мастер Дмитров",
            "бригада по благоустройству Дмитров",
            "укладка плитки Дмитров недорого цена",
            "дренаж участка цена Дмитров",
            "ковка Дмитров каталог",
            "озеленение участка под ключ Дмитров",
            "укладка плитки в Яхроме",
            "дренаж в Яхроме",
            "бетонные работы в Яхроме",
            "укладка асфальта в Яхроме",
            "художественная ковка в Яхроме",
            "озеленение Яхрома",
            "благоустройство участка Яхрома",
            "услуги в Яхроме Дмитровский район",
            "укладка плитки в Икше",
            "дренаж в Икше",
            "бетонные работы в Икше",
            "укладка асфальта в Икше",
            "художественная ковка в Икше",
            "озеленение Икша",
            "благоустройство участка Икша",
            "услуги в Икше",
            "укладка плитки в Подосинках",
            "дренаж в Подосинках",
            "бетонные работы в Подосинках",
            "асфальтирование Подосинки",
            "ковка в Подосинках",
            "озеленение Подосинки",
            "благоустройство участка Подосинки",
            "услуги в Подосинках Дмитровский район",
            "укладка плитки в Костино",
            "дренаж в Костино",
            "бетонные работы в Костино",
            "укладка асфальта в Костино",
            "художественная ковка в Костино",
            "озеленение Костино",
            "благоустройство участка Костино",
            "услуги в Костино Дмитровский район",
            "Дмитров Яхрома Икша Подосинки Костино благоустройство",
            "укладка плитки Дмитров Яхрома Икша",
            "дренаж Дмитровского района Яхрома Икша Подосинки Костино"
          ],
        openGraph: {
        title: "Услуги по укладке плитки и благоустройству в Дмитрове",
        description:
            "Профессиональная укладка плитки, озеленение, бетонные работы.",
    },
    alternates: {
        canonical: "https://moskva-plitka.com/services",
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
        price: "по запросу",
        image: "/images/portfolio/Ykaldka.jpg",
    },

    {
        id: "drenazh",
        name: "Устройство дренажа",
        description:
            "Проектирование и монтаж дренажных систем любого типа. Защита участка от грунтовых и талых вод, осушение территории, отвод ливневых стоков.",
        features: [
            "Глубинный дренаж участка",
            "Ливневая канализация",
            "Дренаж вокруг фундамента",
            "Установка дренажных колодцев",
            "Отвод грунтовых вод",
            "Монтаж смотровых и перепадных колодцев",
            "Укладка дренажных труб (перфорированных)",
            "Фильтрационные поля и канавы"
        ],
        price: "по запросу",
        image: "/images/portfolio/drenazh.png"
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
        price: "по запросу",
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
        price: "по запросу",
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
        image: "/images/portfolio/kovka3.jpg",
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

 
];

export default function ServicesPage() {
    const breadcrumbs = [
        { name: "Главная", url: "https://moskva-plitka.com" },
        { name: "Услуги", url: "https://moskva-plitka.com/services" },
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
