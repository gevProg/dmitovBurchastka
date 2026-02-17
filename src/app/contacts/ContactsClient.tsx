'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export default function ContactsClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Send via WhatsApp
      const message = `Сообщение с сайта:\nИмя: ${data.name}\nТелефон: ${data.phone}\nСообщение: ${data.message}`;
      const whatsappUrl = `https://wa.me/79295100361?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error:', error);
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
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-white/70" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-white transition-colors" itemProp="item">
                  <span itemProp="name">Главная</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-white font-semibold" itemProp="name">Контакты</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <h1 className="text-white mb-4">Контакты</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Свяжитесь с нами любым удобным способом. Мы работаем по Москве и всей Московской области.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-bg-main">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Дмитров Брусчатка" />
              <h2 className="text-2xl font-bold text-primary-brown mb-6">Наши контакты</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <div className="w-12 h-12 bg-primary-olive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-olive"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Адрес</h3>
                    <p className="text-text-secondary">
                      <span itemProp="addressRegion">Московская обл.</span>,{' '}
                      <span itemProp="addressLocality">Дмитровский р-н</span>,{' '}
                      <span itemProp="streetAddress">д. Гришино</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-olive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-olive"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Телефоны</h3>
                    <a
                      href="tel:+79295100361"
                      className="block text-primary-brown hover:text-primary-brown-dark font-semibold"
                      itemProp="telephone"
                    >
                      8 (929) 510-03-61
                    </a>
                    <a
                      href="tel:+79252018286"
                      className="block text-primary-brown hover:text-primary-brown-dark font-semibold"
                    >
                      8 (925) 201-82-86
                    </a>
                    <a
                      href="tel:+79104236762"
                      className="block text-text-secondary hover:text-primary-brown"
                    >
                      8 (910) 423-67-62
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-olive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-olive"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Email</h3>
                    <a
                      href="mailto:plitkadmitrov73@mail.ru"
                      className="text-primary-brown hover:text-primary-brown-dark"
                      itemProp="email"
                    >
                      plitkadmitrov73@mail.ru
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-olive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-olive"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Режим работы</h3>
                    <p className="text-text-secondary" itemProp="openingHours" content="Mo-Su 08:00-20:00">
                      Ежедневно: 08:00 - 20:00
                    </p>
                    <p className="text-text-secondary text-sm">Без выходных</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8 p-6 bg-white rounded-xl">
                <h3 className="font-bold text-text-primary mb-4">Города обслуживания</h3>
                <div className="flex flex-wrap gap-2" itemProp="areaServed">
                  {[
                    'Москва',
                    'Дмитров',
                    'Дубна',
                    'Талдом',
                    'Сергиев-Посад',
                    'Лобня',
                    'Долгопрудный',
                    'Химки',
                    'Мытищи',
                    'Пушкино',
                  ].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-primary-olive/10 text-primary-olive rounded-full text-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary-brown mb-6">Оставить заявку</h2>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                  role="alert"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Заявка отправлена!</h3>
                  <p className="text-green-600">Мы свяжемся с вами в ближайшее время.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="card space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-1">
                      Ваше имя <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('name', { required: 'Введите ваше имя' })}
                      id="name"
                      type="text"
                      placeholder="Как к вам обращаться?"
                      autoComplete="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-1">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('phone', {
                        required: 'Введите номер телефона',
                        pattern: {
                          value: /^[\d\s\+\-\(\)]+$/,
                          message: 'Введите корректный номер',
                        },
                      })}
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      autoComplete="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-1">
                      Сообщение <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Напишите сообщение',
                        minLength: { value: 10, message: 'Минимум 10 символов' },
                      })}
                      id="message"
                      rows={5}
                      placeholder="Опишите что вы хотите заказать..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all resize-none"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-lg disabled:opacity-50"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </button>

                  <p className="text-xs text-text-secondary text-center">
                    Нажимая кнопку, вы даёте{' '}
                    <Link href="/consent" className="text-primary-olive underline hover:no-underline">
                      согласие на обработку персональных данных
                    </Link>{' '}
                    и принимаете{' '}
                    <Link href="/privacy-policy" className="text-primary-olive underline hover:no-underline">
                      политику конфиденциальности
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[450px] bg-gray-200 relative" aria-label="Карта расположения">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A0&amp;source=constructor&amp;ll=37.5289%2C56.2978&amp;z=14&amp;pt=37.5289%2C56.2978%2Cpm2rdm"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Дмитров Брусчатка на карте — д. Гришино, Дмитровский район"
        />
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
          <p className="text-text-primary font-semibold text-sm">
            Московская обл., Дмитровский р-н, д. Гришино
          </p>
          <a
            href="https://yandex.ru/maps/-/CDuaYHWz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-brown hover:underline text-sm mt-1 inline-block"
            aria-label="Открыть расположение на Яндекс Картах (открывается в новой вкладке)"
          >
            Открыть в Яндекс.Картах →
          </a>
        </div>
      </section>
    </>
  );
}
