"use client";

import { motion } from "framer-motion";
import { Product, getMinPrice } from "@/lib/data/products";

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const minPrice = getMinPrice(product);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
        >
            <div className="group block h-full">
                <div className="card p-0 overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${product.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Badge */}
                        <div className="absolute top-3 left-3">
                            <span className="bg-primary-olive text-white px-2 py-1 rounded text-xs font-semibold">
                                {product.category}
                            </span>
                        </div>

                        {/* Price */}
                        <div className="absolute bottom-3 left-3">
                            <span className="bg-primary-brown text-white px-3 py-1 rounded-full text-sm font-bold">
                                от {minPrice} ₽
                            </span>
                        </div>

                        {/* Stock Badge */}
                        {product.inStock && (
                            <div className="absolute bottom-3 right-3">
                                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                    В наличии
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-text-primary mb-2">
                            {product.name}
                        </h3>
                        <p className="text-text-secondary text-sm mb-3 flex-1">
                            {product.description}
                        </p>

                        {/* Specs */}
                        <div className="space-y-1 text-xs text-text-secondary border-t pt-3">
                            <div className="flex justify-between">
                                <span>Размер:</span>
                                <span className="font-semibold text-text-primary">
                                    {product.size}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Толщина:</span>
                                <span className="font-semibold text-text-primary">
                                    {product.thickness}
                                </span>
                            </div>
                        </div>

                        {/* Colors */}
                        <div className="mt-3 flex flex-wrap gap-1">
                            {product.prices.slice(0, 5).map((p) => (
                                <span
                                    key={p.color}
                                    className="px-2 py-0.5 bg-gray-100 rounded text-xs text-text-secondary"
                                >
                                    {p.color}
                                </span>
                            ))}
                            {product.prices.length > 5 && (
                                <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-text-secondary">
                                    +{product.prices.length - 5}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
