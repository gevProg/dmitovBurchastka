"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
    {
        id: 1,
        title: "Качественная тротуарная плитка",
        subtitle: "Собственное производство в Дмитровском районе",
        features: ["Гарантия качества", "Низкие цены", "Большой выбор"],
        bgColor: "from-black/60 via-black/40 to-transparent",
        image: "/images/portfolio/plitka.jpg",
    },
    {
        id: 2,
        title: "Укладка плитки под ключ",
        subtitle: "Профессиональная бригада с опытом более 10 лет",
        features: ["Выезд замерщика", "Расчет материала", "Выполнение в срок"],
        bgColor: "from-black/60 via-black/40 to-transparent",
        image: "/images/portfolio/Ykaldka.jpg",
    },
    {
        id: 3,
        title: "Доставка по Дмитровскому району",
        subtitle: "Дмитров, Яхрома, Дубна, Талдом и другие города",
        features: ["Собственный транспорт", "Быстрая доставка", "Разгрузка"],
        bgColor: "from-black/60 via-black/40 to-transparent",
        image: "/images/MainImages/plitka2.jpg",
    },
];

export default function HeroSlider() {
    return (
        <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden pt-16">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        {/* Background */}
                        <div className="absolute inset-0">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            />
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`}
                            />
                        </div>

                        {/* Content */}
                        <div className="relative h-full container-custom flex items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="max-w-2xl text-white"
                            >
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg md:text-xl mb-4 text-white/90"
                                >
                                    {slide.subtitle}
                                </motion.p>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                                >
                                    {slide.title}
                                </motion.h1>

                                {/* Features */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-wrap gap-3 mb-10"
                                >
                                    {slide.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                                        >
                                            <svg
                                                className="w-5 h-5 text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="font-semibold text-sm md:text-base">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* CTAs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <Link
                                        href="/catalog"
                                        className="bg-primary-brown hover:bg-primary-brown-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                                    >
                                        Наша продукция
                                    </Link>
                                    <Link
                                        href="/contacts"
                                        className="bg-white text-primary-brown px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100"
                                    >
                                        Бесплатный расчет
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-3 bg-white rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
