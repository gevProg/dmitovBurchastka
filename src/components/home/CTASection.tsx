"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage:
                        "url(/images/products/cta-bg.jpg)",
                }}
            />
            <div className="absolute inset-0 bg-primary-brown/90" />

            {/* Content */}
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-white max-w-3xl mx-auto"
                >
                    <h2 className="text-white mb-6">
                        Закажите бесплатный расчет
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Наш специалист бесплатно выедет на объект, произведет
                        замеры и рассчитает стоимость материалов и работ. Без
                        обязательств с вашей стороны!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contacts"
                            className="bg-white text-primary-brown px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
                        >
                            Заказать расчет
                        </Link>
                        <a
                            href="tel:+79295100361"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-primary-brown"
                        >
                            8 (929) 510-03-61
                        </a>
                    </div>

                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">10+</div>
                            <div className="text-white/80 text-sm">
                                Лет на рынке
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">500+</div>
                            <div className="text-white/80 text-sm">
                                Проектов
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">100+</div>
                            <div className="text-white/80 text-sm">
                                Видов плитки
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">24ч</div>
                            <div className="text-white/80 text-sm">
                                Доставка
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
