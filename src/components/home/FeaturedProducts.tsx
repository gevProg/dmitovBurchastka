"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Вибропрессованная плитка",
        description:
            "Повышенная прочность и выносливость к агрессивным веществам. Идеальна для парковок и дорог.",
        priceFrom: 700,
        image: "/images/portfolio/brus_guyn.png",
        href: "/catalog/vibropressovannaya",
    },
    {
        id: 2,
        name: "Вибролитая плитка",
        description:
            "Разнообразные формы и яркие насыщенные цвета. Идеальна для садовых дорожек.",
        priceFrom: 400,
        image: "/images/portfolio/kaliforniya.jpg",
        href: "/catalog/vibrolitaya",
    },
    {
        id: 3,
        name: "Дорожные и садовые бордюры",
        description:
            "Придают тротуару законченный вид, задавая границы пешеходной зоны.",
        priceFrom: 70,
        image: "/images/portfolio/дорожныйбордюр.jpg",
        href: "/catalog/bordyury",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="section-padding bg-bg-main">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-primary-brown mb-4">Наша продукция</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                        Предлагаем широкий ассортимент тротуарной плитки,
                        бордюров и сопутствующих материалов
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={product.href} className="group block">
                                <div className="card p-0 overflow-hidden h-full">
                                    <div className="relative h-48 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{
                                                backgroundImage: `url(${product.image})`,
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-primary-brown text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                от {product.priceFrom} ₽
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-brown transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-text-secondary text-sm">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
