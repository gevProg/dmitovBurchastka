import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    categories,
    getProductsByCategory,
    getCategoryBySlug,
} from "@/lib/data/products";
import ProductCard from "@/components/catalog/ProductCard";
import { breadcrumbSchema } from "@/lib/utils/structuredData";

interface Props {
    params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const category = getCategoryBySlug(resolvedParams.category);

    if (!category) {
        return { title: "Категория не найдена" };
    }

    return {
        title: `${category.name} – Купить в Дмитрове от производителя`,
        description: `${category.description} Низкие цены от производителя. Доставка по Дмитровскому району и Московской области.`,
        openGraph: {
            title: `${category.name} – Купить в Дмитрове`,
            description: category.description,
        },
        alternates: {
            canonical: `https://dmitrov-bruschatka.ru/catalog/${resolvedParams.category}`,
        },
    };
}

export default async function CategoryPage({ params }: Props) {
    const resolvedParams = await params;
    const category = getCategoryBySlug(resolvedParams.category);

    if (!category) {
        notFound();
    }

    const products = getProductsByCategory(resolvedParams.category);

    const breadcrumbs = [
        { name: "Главная", url: "https://dmitrov-bruschatka.ru" },
        {
            name: category.name,
            url: `https://dmitrov-bruschatka.ru/catalog/${category.slug}`,
        },
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
                                {category.name}
                            </li>
                        </ol>
                    </nav>

                    <h1 className="text-white mb-4">{category.name}</h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        {category.description}
                    </p>
                </div>
            </section>

            {/* Products */}
            <section className="section-padding bg-bg-main">
                <div className="container-custom">
                    {products.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {products.map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-text-secondary text-lg mb-4">
                                В данной категории пока нет товаров
                            </p>
                            <Link href="/catalog" className="btn-primary">
                                Вернуться в каталог
                            </Link>
                        </div>
                    )}
                </div>
            </section>

        </>
    );
}
