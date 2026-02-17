"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        id: 1,
        name: "Укладка плитки",
        description:
            "Профессиональная укладка тротуарной плитки под ключ с подготовкой основания.",
        icon: (
            <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
            </svg>
        ),
        href: "/services#ukladka",
    },
    {
        id: 2,
        name: "Дачное озеленение",
        description:
            "Комплексное благоустройство участка с газоном, посадками и декором.",
        icon: (
            <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
            </svg>
        ),
        href: "/services#ozelenenie",
    },
    {
        id: 3,
        name: "Бетонные работы",
        description:
            "Заливка фундаментов, площадок, отмосток и других бетонных конструкций.",
        icon: (
            <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
            </svg>
        ),
        href: "/services#beton",
    },
    {
        id: 4,
        name: "Укладка асфальта",
        description:
            "Асфальтирование дорог, площадок и подъездных путей любой сложности.",
        icon: (
            <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
            </svg>
        ),
        href: "/services#asfalt",
    },
    {
        id: 5,
        name: "Художественная ковка",
        description:
            "Ворота, навесы, козырьки, решетки, мангалы, перила и другие кованые изделия.",
        icon: (
            <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
            </svg>
        ),
        href: "/services#kovka",
    },
];

export default function ServicesPreview() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-primary-brown mb-4">Наши услуги</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                        Выполняем весь спектр услуг, связанных с тротуарной
                        плиткой и благоустройством участков
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={service.href}
                                className="group block h-full"
                            >
                                <div className="card text-center h-full hover:border-primary-olive border-2 border-transparent">
                                    <div className="text-primary-olive group-hover:text-primary-brown transition-colors mb-4 flex justify-center">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-text-primary mb-2">
                                        {service.name}
                                    </h3>
                                    <p className="text-text-secondary text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <Link
                        href="/services"
                        className="btn-secondary inline-flex items-center space-x-2"
                    >
                        <span>Все услуги</span>
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
