import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Политика использования файлов cookie — Дмитров Брусчатка",
    description:
        "Политика использования файлов cookie на сайте dmitrov-bruschatka.ru. Какие cookie мы используем и для чего.",
    robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
    return (
        <main className="pt-24 pb-16">
            <div className="container-custom">
                {/* Breadcrumbs */}
                <nav className="mb-6">
                    <ol className="flex items-center space-x-2 text-sm text-gray-500">
                        <li>
                            <Link href="/" className="hover:text-primary-olive transition-colors">
                                Главная
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-gray-900 font-medium">
                            Политика cookie
                        </li>
                    </ol>
                </nav>

                <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Политика использования файлов cookie
                    </h1>
                    <p className="text-sm text-gray-500 mb-8">
                        Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Что такое cookie?</h2>
                        <p>
                            Файлы cookie — это небольшие текстовые файлы, которые сохраняются
                            на вашем устройстве (компьютере, планшете или смартфоне) при посещении
                            сайта <strong>dmitrov-bruschatka.ru</strong> (далее — «Сайт»). Файлы
                            cookie позволяют Сайту «запоминать» ваши действия и предпочтения
                            в течение определённого времени.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            2. Какие cookie мы используем
                        </h2>

                        <h3 className="text-xl font-medium mb-3">
                            2.1. Строго необходимые cookie
                        </h3>
                        <p>
                            Эти файлы cookie необходимы для функционирования Сайта и не могут
                            быть отключены. Они устанавливаются в ответ на ваши действия,
                            связанные с запросом услуг (настройка конфиденциальности, заполнение
                            форм и т.д.).
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300 text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Название</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Цель</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Срок</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">cookie_consent</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            Сохраняет ваш выбор по использованию cookie
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">1 год</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-medium mb-3 mt-6">
                            2.2. Аналитические cookie
                        </h3>
                        <p>
                            Эти файлы cookie помогают нам понять, как посетители взаимодействуют
                            с Сайтом, собирая и предоставляя статистическую информацию. Все данные
                            анонимизированы.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300 text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Название</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Цель</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Срок</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">_ym_uid / _ym_d</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            Яндекс.Метрика — идентификатор пользователя и дата первого визита
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">1 год</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">_ym_isad</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            Яндекс.Метрика — определение наличия блокировщика рекламы
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">2 дня</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">_ym_visorc</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            Яндекс.Метрика — сбор данных о поведении пользователя
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">Сессия</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-medium mb-3 mt-6">
                            2.3. Функциональные cookie
                        </h3>
                        <p>
                            Эти файлы cookie позволяют Сайту запоминать сделанный вами выбор
                            и предоставлять улучшенные функции.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            3. Управление файлами cookie
                        </h2>
                        <p>
                            Вы можете управлять файлами cookie через настройки вашего браузера.
                            Большинство браузеров позволяют:
                        </p>
                        <ul>
                            <li>Просматривать установленные файлы cookie;</li>
                            <li>Удалять отдельные или все файлы cookie;</li>
                            <li>Блокировать файлы cookie от определённых или всех сайтов;</li>
                            <li>Устанавливать уведомления при установке cookie.</li>
                        </ul>
                        <p>
                            <strong>Обратите внимание:</strong> отключение файлов cookie может
                            повлиять на функциональность Сайта. Некоторые разделы и функции
                            могут работать некорректно.
                        </p>

                        <h3 className="text-xl font-medium mb-3 mt-4">
                            Инструкции для популярных браузеров:
                        </h3>
                        <ul>
                            <li>
                                <strong>Google Chrome:</strong> Настройки → Конфиденциальность
                                и безопасность → Файлы cookie
                            </li>
                            <li>
                                <strong>Mozilla Firefox:</strong> Настройки → Приватность
                                и защита → Cookie и данные сайтов
                            </li>
                            <li>
                                <strong>Safari:</strong> Настройки → Конфиденциальность →
                                Управление данными веб-сайтов
                            </li>
                            <li>
                                <strong>Яндекс Браузер:</strong> Настройки → Сайты →
                                Расширенные настройки сайтов → Cookie-файлы
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            4. Согласие на использование cookie
                        </h2>
                        <p>
                            При первом посещении Сайта вам будет показано уведомление о
                            использовании файлов cookie. Продолжая использовать Сайт, вы
                            соглашаетесь с использованием файлов cookie в соответствии с
                            настоящей Политикой.
                        </p>
                        <p>
                            Вы можете отозвать согласие в любой момент, удалив файлы cookie
                            через настройки браузера.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            5. Связь с нами
                        </h2>
                        <p>
                            Если у вас есть вопросы относительно использования файлов cookie
                            на нашем Сайте, свяжитесь с нами:
                        </p>
                        <ul>
                            <li>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:plitkadmitrov73@mail.ru">plitkadmitrov73@mail.ru</a>
                            </li>
                            <li>
                                <strong>Телефон:</strong> 8 (929) 510-03-61
                            </li>
                        </ul>
                        <p className="mt-4">
                            Также ознакомьтесь с нашей{" "}
                            <Link
                                href="/privacy-policy"
                                className="text-primary-olive hover:underline"
                            >
                                Политикой конфиденциальности
                            </Link>
                            .
                        </p>
                    </section>
                </article>
            </div>
        </main>
    );
}
