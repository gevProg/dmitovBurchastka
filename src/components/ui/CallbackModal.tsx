"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface CallbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    phone: string;
}

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            // Send via WhatsApp
            const message = `Заявка на обратный звонок:\nИмя: ${data.name}\nТелефон: ${data.phone}`;
            const whatsappUrl = `https://wa.me/79295100361?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

            setIsSuccess(true);
            reset();
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Закрыть"
                            >
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-8"
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
                                    <h3 className="text-xl font-bold text-text-primary mb-2">
                                        Заявка отправлена!
                                    </h3>
                                    <p className="text-text-secondary">
                                        Мы перезвоним вам в ближайшее время
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="text-center mb-6">
                                        <h2 className="text-2xl font-bold text-text-primary mb-2">
                                            Заказать звонок
                                        </h2>
                                        <p className="text-text-secondary">
                                            Оставьте ваш номер и мы перезвоним в
                                            течение 15 минут
                                        </p>
                                    </div>

                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-semibold text-text-primary mb-1"
                                            >
                                                Ваше имя
                                            </label>
                                            <input
                                                {...register("name", {
                                                    required:
                                                        "Введите ваше имя",
                                                })}
                                                type="text"
                                                id="name"
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
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-semibold text-text-primary mb-1"
                                            >
                                                Телефон
                                            </label>
                                            <input
                                                {...register("phone", {
                                                    required:
                                                        "Введите номер телефона",
                                                    pattern: {
                                                        value: /^[\d\s\+\-\(\)]+$/,
                                                        message:
                                                            "Введите корректный номер",
                                                    },
                                                })}
                                                type="tel"
                                                id="phone"
                                                placeholder="+7 (999) 999-99-99"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all"
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg
                                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        />
                                                    </svg>
                                                    Отправка...
                                                </span>
                                            ) : (
                                                "Перезвоните мне"
                                            )}
                                        </button>
                                    </form>

                                    <p className="text-xs text-text-secondary text-center mt-4">
                                        Нажимая кнопку, вы даёте{" "}
                                        <Link href="/consent" className="text-primary-olive underline hover:no-underline" onClick={onClose}>
                                            согласие на обработку персональных данных
                                        </Link>{" "}
                                        и принимаете{" "}
                                        <Link href="/privacy-policy" className="text-primary-olive underline hover:no-underline" onClick={onClose}>
                                            политику конфиденциальности
                                        </Link>
                                    </p>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
