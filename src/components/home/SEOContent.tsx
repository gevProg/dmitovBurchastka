"use client";

import { motion } from "framer-motion";

export default function SEOContent() {
    return (
        <section className="section-padding bg-bg-main">
            <div className="container-custom max-w-4xl">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="prose prose-lg max-w-none"
                >
                    <h2 className="text-primary-brown text-center mb-8">
                        Тротуарная плитка и брусчатка в Дмитрове и Дмитровском районе
                    </h2>

                    <p className="text-text-primary leading-relaxed">
                        Компания <strong>Дмитров Брусчатка</strong> – это надежный
                        производитель и поставщик качественной{" "}
                        <strong>тротуарной плитки и брусчатки</strong> в Дмитрове,
                        Яхроме и Дмитровском районе. Мы работаем на рынке более 10 лет и за это
                        время реализовали сотни проектов по благоустройству
                        частных домов, дач и приусадебных участков в Гришино, Новом Гришино,
                        Лавровках, Подосинках и других населённых пунктах.
                    </p>

                    <h3 className="text-primary-olive">
                        Почему выбирают нашу тротуарную плитку?
                    </h3>

                    <p className="text-text-primary leading-relaxed">
                        Мы производим плитку только из качественного сырья на
                        современном оборудовании. Благодаря собственному
                        производству можем предложить{" "}
                        <strong>низкие цены</strong> от{" "}
                        <strong>280 рублей за квадратный метр</strong>. Укладка тротуарной
                        плитки под ключ в Дмитрове и Дмитровском районе — наша специализация.
                    </p>

                    <h3 className="text-primary-olive">
                        Виды тротуарной плитки
                    </h3>

                    <p className="text-text-primary leading-relaxed">
                        В нашем прайс-листе представлены два основных типа плитки,
                        каждый из которых имеет свои преимущества:
                    </p>

                    <ul className="text-text-primary space-y-2">
                        <li>
                            <strong>Вибролитая плитка</strong> – изготавливается
                            методом вибрационного литья, позволяет создавать
                            плитку разнообразных форм и ярких насыщенных цветов.
                            Идеально подходит для садовых дорожек, зон отдыха и
                            придомовых территорий.
                        </li>
                        <li>
                            <strong>Вибропрессованная плитка</strong> –
                            производится под высоким давлением с вибрацией.
                            Обладает повышенной прочностью и устойчивостью к
                            агрессивным веществам (например, соли).
                            Рекомендуется для парковок, площадей и мест с
                            высокой нагрузкой.
                        </li>
                    </ul>

                    

                    <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                        <h4 className="text-primary-brown mb-4">
                            Закажите бесплатный расчет!
                        </h4>
                        <p className="text-text-secondary mb-4">
                            Позвоните нам или оставьте заявку на сайте. Наш
                            специалист бесплатно выедет на объект, произведет
                            замеры и рассчитает стоимость материалов и работ.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="tel:+79295100361" className="btn-primary">
                                8 (929) 510-03-61
                            </a>
                            <a href="tel:+79252018286" className="btn-outline">
                                8 (925) 201-82-86
                            </a>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
}
