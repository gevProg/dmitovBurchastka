"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const reviews = [
    {
        id: 1,
        name: "Александр К.",
        location: "Дмитров",
        rating: 5,
        date: "15 января 2026",
        text: "Заказывали укладку тротуарной плитки на даче. Бригада приехала вовремя, работали быстро и аккуратно. Результатом очень довольны! Цены адекватные, качество отличное.",
        project: "Укладка плитки, 80 м²",
    },
    {
        id: 2,
        name: "Елена М.",
        location: "Талдом",
        rating: 5,
        date: "28 декабря 2025",
        text: "Большое спасибо за работу! Делали садовые дорожки и зону барбекю. Всё сделано качественно, плитка легла ровно. Отдельное спасибо за помощь с выбором цвета и рисунка.",
        project: "Садовые дорожки, 45 м²",
    },
    {
        id: 3,
        name: "Игорь П.",
        location: "Дубна",
        rating: 5,
        date: "10 декабря 2025",
        text: "Работаем с этой компанией уже третий год. Заказывали плитку для парковки у офиса. Качество плитки отличное, укладка профессиональная. Рекомендую!",
        project: "Парковка, 200 м²",
    },
    {
        id: 4,
        name: "Марина С.",
        location: "Лобня",
        rating: 4,
        date: "5 ноября 2025",
        text: "Заказали отмостку вокруг дома. Сделали быстро, за 3 дня. Единственное - немного задержали начало работ, но потом всё пошло как надо. В целом довольны.",
        project: "Отмостка, 60 м²",
    },
    {
        id: 5,
        name: "Виктор Н.",
        location: "Сергиев-Посад",
        rating: 5,
        date: "20 октября 2025",
        text: "Отличная компания! Делали въездную группу с укладкой усиленной плитки. Машина заезжает без проблем, плитка не проседает. Гарантию дали, это важно.",
        project: "Въездная группа, 150 м²",
    },
    {
        id: 6,
        name: "Ольга В.",
        location: "Дмитровский район",
        rating: 5,
        date: "1 октября 2025",
        text: "Покупала плитку и бордюры для самостоятельной укладки. Консультанты помогли рассчитать нужное количество с запасом. Доставили на следующий день. Плитка красивая, качественная.",
        project: "Покупка плитки",
    },
];

interface ReviewFormData {
    name: string;
    location: string;
    rating: number;
    text: string;
}

export default function ReviewsClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedRating, setSelectedRating] = useState(5);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ReviewFormData>();

    const onSubmit = async (data: ReviewFormData) => {
        setIsSubmitting(true);
        try {
            // Send review via WhatsApp
            const message = `Новый отзыв:\nИмя: ${data.name}\nГород: ${data.location}\nОценка: ${'⭐'.repeat(selectedRating)}\nОтзыв: ${data.text}`;
            const whatsappUrl = `https://wa.me/79295100361?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

            setIsSuccess(true);
            reset();
            setSelectedRating(5);
            setTimeout(() => setIsSuccess(false), 3000);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
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
                            <li className="text-white font-semibold">Отзывы</li>
                        </ol>
                    </nav>

                    <h1 className="text-white mb-4">Отзывы наших клиентов</h1>
                    <p className="text-white/80 text-lg max-w-2xl">
                        Мнения наших клиентов о качестве работ и сервиса. Мы
                        ценим каждый отзыв!
                    </p>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="section-padding bg-bg-main">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold text-text-primary">
                                            {review.name}
                                        </h3>
                                        <p className="text-sm text-text-secondary">
                                            {review.location}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${
                                                    i < review.rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-text-secondary mb-4">
                                    {review.text}
                                </p>

                                <div className="flex justify-between items-center text-sm border-t pt-4">
                                    <span className="text-primary-brown font-semibold">
                                        {review.project}
                                    </span>
                                    <span className="text-text-secondary">
                                        {review.date}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leave Review Form */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-2xl">
                    <h2 className="text-center text-primary-brown mb-8">
                        Оставить отзыв
                    </h2>

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-green-800 mb-2">
                                Спасибо за отзыв!
                            </h3>
                            <p className="text-green-600">
                                Ваш отзыв будет опубликован после модерации.
                            </p>
                        </motion.div>
                    ) : (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card space-y-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-text-primary mb-1">
                                        Ваше имя *
                                    </label>
                                    <input
                                        {...register("name", {
                                            required: "Введите ваше имя",
                                        })}
                                        type="text"
                                        placeholder="Иван"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-text-primary mb-1">
                                        Город *
                                    </label>
                                    <input
                                        {...register("location", {
                                            required: "Укажите город",
                                        })}
                                        type="text"
                                        placeholder="Москва"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all"
                                    />
                                    {errors.location && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.location.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-text-primary mb-2">
                                    Оценка *
                                </label>
                                <div className="flex space-x-2">
                                    {[1, 2, 3, 4, 5].map((rating) => (
                                        <button
                                            key={rating}
                                            type="button"
                                            onClick={() =>
                                                setSelectedRating(rating)
                                            }
                                            className="focus:outline-none"
                                        >
                                            <svg
                                                className={`w-8 h-8 transition-colors ${
                                                    rating <= selectedRating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-text-primary mb-1">
                                    Ваш отзыв *
                                </label>
                                <textarea
                                    {...register("text", {
                                        required: "Напишите отзыв",
                                        minLength: {
                                            value: 20,
                                            message: "Минимум 20 символов",
                                        },
                                    })}
                                    rows={5}
                                    placeholder="Расскажите о вашем опыте работы с нами..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all resize-none"
                                />
                                {errors.text && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.text.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full py-4 text-lg disabled:opacity-50"
                            >
                                {isSubmitting
                                    ? "Отправка..."
                                    : "Отправить отзыв"}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}
