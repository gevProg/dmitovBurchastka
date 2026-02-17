import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { products, categories } from "@/lib/data/products";
import { productSchema, breadcrumbSchema } from "@/lib/utils/structuredData";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const product = products.find((p) => p.slug === resolvedParams.slug);

    if (!product) {
        return { title: "Продукт не найден" };
    }

    const minPrice = Math.min(...product.prices.map((p) => p.price));
    const category = categories.find((c) => c.slug === product.categorySlug);

    return {
        title: `${product.name} - купить в Дмитрове | Цена от ${minPrice} ₽/м²`,
        description: `${product.description} Цена от ${minPrice} ₽/м². ${product.size}. Доставка по Дмитровскому району. ☎ 8 (929) 510-03-61`,
        keywords: `${product.name}, ${product.name} цена, ${product.name} купить, ${category?.name}, тротуарная плитка Дмитров`,
        openGraph: {
            title: `${product.name} - ${minPrice} ₽/м²`,
            description: product.description,
            images: [product.image],
        },
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const resolvedParams = await params;
    const product = products.find((p) => p.slug === resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const minPrice = Math.min(...product.prices.map((p) => p.price));
    const category = categories.find((c) => c.slug === product.categorySlug);
    const relatedProducts = products
        .filter(
            (p) =>
                p.categorySlug === product.categorySlug && p.id !== product.id,
        )
        .slice(0, 4);

    const breadcrumbs = [
        { name: "Главная", url: "/" },
        ...(category
            ? [{ name: category.name, url: `/catalog/${category.slug}` }]
            : []),
        { name: product.name, url: `/catalog/product/${product.slug}` },
    ];

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        productSchema({
                            name: product.name,
                            description: product.description,
                            price: minPrice,
                            image: product.image,
                            sku: product.id,
                            slug: product.slug,
                        }),
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
                }}
            />

            {/* Hero */}
            <section className="pt-24 pb-8 bg-bg-main">
                <div className="container-custom">
                    {/* Breadcrumbs */}
                    <nav className="mb-6">
                        <ol className="flex flex-wrap items-center gap-2 text-sm">
                            {breadcrumbs.map((crumb, index) => (
                                <li
                                    key={crumb.url}
                                    className="flex items-center"
                                >
                                    {index > 0 && (
                                        <span className="mx-2 text-gray-400">
                                            /
                                        </span>
                                    )}
                                    {index === breadcrumbs.length - 1 ? (
                                        <span className="text-primary-brown font-semibold">
                                            {crumb.name}
                                        </span>
                                    ) : (
                                        <Link
                                            href={crumb.url}
                                            className="text-text-secondary hover:text-primary-brown transition-colors"
                                        >
                                            {crumb.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Product Details */}
            <section className="pb-16 bg-bg-main">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Image */}
                        <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            {product.inStock && (
                                <span className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    В наличии
                                </span>
                            )}
                        </div>

                        {/* Info */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
                                {product.name}
                            </h1>

                            {category && (
                                <Link
                                    href={`/catalog/${category.slug}`}
                                    className="inline-block text-primary-olive hover:underline mb-6"
                                >
                                    {category.name}
                                </Link>
                            )}

                            <p className="text-text-secondary text-lg mb-8">
                                {product.description}
                            </p>

                            {/* Price */}
                            <div className="bg-white rounded-xl p-6 mb-8">
                                <div className="flex items-end gap-2 mb-2">
                                    <span className="text-4xl font-bold text-primary-brown">
                                        от {minPrice.toLocaleString("ru-RU")}
                                    </span>
                                    <span className="text-xl text-text-secondary">
                                        ₽/м²
                                    </span>
                                </div>
                                <p className="text-sm text-green-600 font-semibold">
                                    ✓ В наличии на складе
                                </p>
                            </div>

                            {/* Specs */}
                            <div className="bg-white rounded-xl p-6 mb-8">
                                <h2 className="text-xl font-bold text-text-primary mb-4">
                                    Характеристики
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="text-text-secondary">
                                            Размер
                                        </span>
                                        <span className="font-semibold text-text-primary">
                                            {product.size}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="text-text-secondary">
                                            Толщина
                                        </span>
                                        <span className="font-semibold text-text-primary">
                                            {product.thickness}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-text-secondary">
                                            Кол-во в м²
                                        </span>
                                        <span className="font-semibold text-text-primary">
                                            {product.quantity}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Price Table */}
                            <div className="bg-white rounded-xl p-6 mb-8">
                                <h2 className="text-xl font-bold text-text-primary mb-4">
                                    Цены по цветам
                                </h2>
                                <div className="space-y-2">
                                    {product.prices.map((priceItem) => (
                                        <div
                                            key={priceItem.color}
                                            className="flex justify-between py-2 border-b border-gray-100 last:border-0"
                                        >
                                            <span className="text-text-secondary">
                                                {priceItem.color}
                                            </span>
                                            <span className="font-bold text-primary-brown">
                                                {priceItem.price.toLocaleString(
                                                    "ru-RU",
                                                )}{" "}
                                                ₽/м²
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+79295100361"
                                    className="btn-primary flex-1 text-center py-4 text-lg"
                                >
                                    📞 Позвонить
                                </a>
                                <Link
                                    href="/contacts"
                                    className="btn-secondary flex-1 text-center py-4 text-lg"
                                >
                                    Оставить заявку
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Description */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold text-primary-brown mb-6">
                        Описание {product.name}
                    </h2>
                    <div className="prose prose-lg max-w-none text-text-secondary">
                        <p>
                            <strong>{product.name}</strong> — это
                            высококачественная тротуарная плитка, произведённая
                            методом{" "}
                            {product.type === "vibrolitaya"
                                ? "вибролитья"
                                : "вибропрессования"}
                            . Данная технология обеспечивает отличную прочность,
                            морозостойкость и долговечность покрытия.
                        </p>
                        <p>
                            Плитка {product.name} идеально подходит для мощения
                            дворовых территорий, садовых дорожек, парковок, зон
                            отдыха и других площадок. Благодаря разнообразию
                            цветовых решений (
                            {product.prices.map((p) => p.color).join(", ")}), вы
                            сможете подобрать оптимальный вариант под любой
                            дизайн участка.
                        </p>
                        <h3>Преимущества плитки {product.name}:</h3>
                        <ul>
                            <li>Высокая прочность на сжатие и изгиб</li>
                            <li>Морозостойкость более 200 циклов</li>
                            <li>Низкое водопоглощение (не более 5%)</li>
                            <li>Устойчивость к истиранию</li>
                            <li>Экологически чистый материал</li>
                            <li>Простота укладки и ремонта</li>
                            <li>Долгий срок службы (более 25 лет)</li>
                        </ul>
                        <p>
                            Мы осуществляем доставку плитки {product.name} по
                            всему Дмитровскому району и Московской области.
                            Также предоставляем услуги профессиональной укладки
                            с гарантией.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="section-padding bg-bg-main">
                    <div className="container-custom">
                        <h2 className="section-title text-center">
                            Похожие товары
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct) => {
                                const relMinPrice = Math.min(
                                    ...relatedProduct.prices.map(
                                        (p) => p.price,
                                    ),
                                );
                                return (
                                    <Link
                                        key={relatedProduct.id}
                                        href={`/catalog/product/${relatedProduct.slug}`}
                                        className="card group hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>
                                        <h3 className="font-bold text-text-primary group-hover:text-primary-brown transition-colors">
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-primary-brown font-bold mt-2">
                                            от{" "}
                                            {relMinPrice.toLocaleString(
                                                "ru-RU",
                                            )}{" "}
                                            ₽/м²
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section-padding bg-primary-olive text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Нужна помощь с выбором плитки?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Наши специалисты помогут подобрать оптимальный вариант
                        под ваш бюджет и задачи. Консультация бесплатная!
                    </p>
                    <a
                        href="tel:+79295100361"
                        className="inline-block bg-white text-primary-olive px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                        📞 8 (929) 510-03-61
                    </a>
                </div>
            </section>
        </>
    );
}
