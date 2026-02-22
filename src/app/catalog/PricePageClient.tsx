'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

/* ───────────── Price data from dmitrov-bruschatka.ru ───────────── */
const vibrolitColors = ['Серый', 'Красный', 'Коричневый', 'Жёлтый', 'Зелёный', 'Чёрный', 'Синий'] as const;
const vibropressColors = ['Серый', 'Чёрный', 'Коричневый', 'Красный', 'Зелёный', 'Синий'] as const;

interface PriceRow {
    name: string;
    unit: string;
    prices: (number | null)[];
}

const vibrolitData: PriceRow[] = [
    { name: 'Кирпич дорожный 3 см (брусчатка)', unit: 'м²', prices: [330, 350, 400, 390, 400, 360, 480] },
    { name: 'Кирпич, фигурные 5 см', unit: 'м²', prices: [450, 470, 500, 480, 530, 450, 600] },
    { name: 'Фигурные 4,5 см', unit: 'м²', prices: [450, 500, 500, 530, 530, 405, 570] },
    { name: '25х25х2,5 см', unit: 'м²', prices: [260, 300, 350, 320, 360, 340, 390] },
    { name: '30х30х3 см', unit: 'м²', prices: [300, 320, 350, 340, 400, 400, 420] },
    { name: '35х35–50х50х5 см', unit: 'м²', prices: [420, 450, 500, 450, 470, 360, 520] },
    { name: 'Тактильная 40х40–50х50 см', unit: 'м²', prices: [500, 550, 550, 600, null, null, null] },
    { name: 'Водосток 16х50 см', unit: 'шт', prices: [50, 60, 70, 70, 70, 60, 80] },
    { name: 'Бордюр толстый 21х50х7 см', unit: 'шт', prices: [60, 70, 80, 70, 70, 60, 80] },
    { name: 'Бордюр тонкий 21х50х4 см', unit: 'шт', prices: [40, 50, 60, 55, 60, 50, 70] },
    { name: 'Крышки на столб 45х45, 49х49', unit: 'шт', prices: [120, 150, 150, 170, 180, 170, 200] },
    { name: 'Крышки на столб 39х39', unit: 'шт', prices: [90, 100, 100, 110, 150, 110, 150] },
    { name: 'Крышки на забор 27х40, 18х50', unit: 'шт', prices: [65, 75, 75, 85, 85, 80, 90] },
    { name: 'Крышки на забор 35х39', unit: 'шт', prices: [80, 100, 100, 120, 100, 90, 100] },
    { name: 'Фасадная облицовка', unit: 'м²', prices: [280, 320, 320, 360, 370, 330, 420] },
    { name: 'Фасадный «Сланец»', unit: 'м²', prices: [300, 350, 350, 400, 400, 350, 450] },
];

const vibropressData: PriceRow[] = [
    { name: '3 см', unit: 'м²', prices: [330, 340, 360, 370, 400, 420] },
    { name: '4 см', unit: 'м²', prices: [360, 375, 400, 380, 435, 455] },
    { name: '5 см', unit: 'м²', prices: [390, 405, 450, 430, 465, 495] },
    { name: '6 см', unit: 'м²', prices: [420, 445, 455, 460, 500, 520] },
    { name: '7 см', unit: 'м²', prices: [450, 480, 550, 500, 560, 590] },
    { name: '8 см', unit: 'м²', prices: [480, 500, 600, 530, 600, 650] },
    { name: '9 см', unit: 'м²', prices: [520, 540, 620, 570, 630, 680] },
    { name: '10 см', unit: 'м²', prices: [560, 580, 650, 660, 730, 760] },
    { name: 'Бордюр (1 шт)', unit: 'шт', prices: [55, 65, 65, 65, 75, 75] },
];


const accessoriesData: PriceRow[] = [
    { name: 'Стопа великана', unit: 'шт', prices: [80, 100, 100, 120, 120, 110, 130] },
    { name: 'Ваза маленькая', unit: 'шт', prices: [700, 1000, 1000, 1300, 1500, 1300, 1600] },
    { name: 'Ваза большая', unit: 'шт', prices: [1200, 1500, 1600, 1900, 1600, 1300, 1700] },
    { name: 'Крокодил', unit: 'шт', prices: [600, null, null, null, 700, null, null] },
];

/* ───────────── Color dot map ───────────── */
const colorMap: Record<string, string> = {
    'Серый': '#9CA3AF',
    'Красный': '#EF4444',
    'Коричневый': '#92400E',
    'Жёлтый': '#F59E0B',
    'Зелёный': '#22C55E',
    'Чёрный': '#1F2937',
    'Синий': '#3B82F6',
};

/* ───────────── Animated counter ───────────── */
function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 1500;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{prefix}{count.toLocaleString('ru-RU')}{suffix}</span>;
}

/* ───────────── Tabs type ───────────── */
type TabKey = 'vibrolitaya' | 'vibropressovannaya' | 'accessories';

const tabs: { key: TabKey; label: string }[] = [
    { key: 'vibrolitaya', label: 'Вибролитая плитка' },
    { key: 'vibropressovannaya', label: 'Вибропрессованная плитка' },
    { key: 'accessories', label: 'Аксессуары и декор' },
];

/* ───────────── Main component ───────────── */
export default function PricePageClient() {
    const [activeTab, setActiveTab] = useState<TabKey>('vibrolitaya');
    const [highlightColor, setHighlightColor] = useState<string | null>(null);
    const [area, setArea] = useState<string>('');
    const [calcType, setCalcType] = useState<'vibrolitaya' | 'vibropressovannaya'>('vibrolitaya');
    const [calcThickness, setCalcThickness] = useState(0);
    const [calcColorIdx, setCalcColorIdx] = useState(0);
    const [calcResult, setCalcResult] = useState<number | null>(null);

    const currentColors = activeTab === 'vibropressovannaya' ? vibropressColors : vibrolitColors;
    const currentData = activeTab === 'vibrolitaya' ? vibrolitData : activeTab === 'vibropressovannaya' ? vibropressData : accessoriesData;

    const handleCalc = () => {
        const a = parseFloat(area);
        if (isNaN(a) || a <= 0) return;
        const data = calcType === 'vibrolitaya' ? vibrolitData : vibropressData;
        const row = data[calcThickness];
        if (!row) return;
        const price = row.prices[calcColorIdx];
        if (!price) return;
        setCalcResult(Math.ceil(a * price));
    };

    const colorIdx = highlightColor
        ? (currentColors as readonly string[]).indexOf(highlightColor)
        : -1;

    return (
        <>
            {/* Hero */}
            <section className="pt-24 pb-16 bg-primary-olive relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/images/MainImages/plitka.jpg')] bg-cover bg-center" />
                </div>
                <div className="container-custom relative z-10">
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
                                <span className="text-white font-semibold" itemProp="name">Наша продукция</span>
                                <meta itemProp="position" content="2" />
                            </li>
                        </ol>
                    </nav>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white mb-4"
                    >
                        Наша продукция
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-lg max-w-2xl mb-8"
                    >
                        Актуальный прайс-лист от производителя. Цена зависит от 
                        толщины, цвета и технологии изготовления. Собственное 
                        производство — никаких посредников.
                    </motion.p>

                    {/* Stats counters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {[
                            { value: 260, suffix: ' ₽/м²', prefix: 'от ', label: 'Минимальная цена' },
                            { value: 50, suffix: '+', prefix: '', label: 'Видов продукции' },
                            { value: 7, suffix: '', prefix: '', label: 'Цветов в наличии' },
                            { value: 10, suffix: '+', prefix: '', label: 'Лет на рынке' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                                </div>
                                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Interactive Price Tables */}
            {/* <section className="section-padding bg-bg-main" id="prices">
                <div className="container-custom">
                    <h2 className="text-center text-primary-brown mb-4">Прайс-лист на продукцию</h2>
                    <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto">
                        Нажмите на цвет, чтобы подсветить соответствующую колонку. 
                        Переключайте вкладки для просмотра цен на разные виды продукции.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => { setActiveTab(tab.key); setHighlightColor(null); }}
                                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                                    activeTab === tab.key
                                        ? 'bg-primary-brown text-white shadow-lg scale-105'
                                        : 'bg-white text-text-primary hover:bg-primary-brown/10 border border-gray-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        <button
                            onClick={() => setHighlightColor(null)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                !highlightColor ? 'bg-primary-olive text-white' : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                            }`}
                        >
                            Все цвета
                        </button>
                        {currentColors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setHighlightColor(highlightColor === color ? null : color)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                    highlightColor === color
                                        ? 'bg-primary-olive text-white ring-2 ring-primary-olive/30'
                                        : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                                }`}
                            >
                                <span
                                    className="w-3 h-3 rounded-full border border-gray-300"
                                    style={{ backgroundColor: colorMap[color] || '#ccc' }}
                                />
                                {color}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="card overflow-hidden"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm" itemScope itemType="https://schema.org/OfferCatalog">
                                <thead>
                                    <tr className="bg-primary-olive/5">
                                        <th className="text-left py-3 px-4 font-bold text-primary-olive sticky left-0 bg-primary-olive/5 min-w-[180px]">
                                            Плитка / Цвет
                                        </th>
                                        {currentColors.map((color, i) => (
                                            <th
                                                key={color}
                                                className={`text-center py-3 px-3 font-bold transition-all duration-300 cursor-pointer hover:bg-primary-brown/10 ${
                                                    highlightColor === color ? 'bg-primary-brown/20 text-primary-brown' : 'text-primary-olive'
                                                }`}
                                                onClick={() => setHighlightColor(highlightColor === color ? null : color)}
                                            >
                                                <span className="flex flex-col items-center gap-1">
                                                    <span
                                                        className="w-4 h-4 rounded-full border border-gray-300 inline-block"
                                                        style={{ backgroundColor: colorMap[color] || '#ccc' }}
                                                    />
                                                    {color}
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentData.map((row, rowIdx) => (
                                        <motion.tr
                                            key={row.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: rowIdx * 0.03 }}
                                            className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="py-3 px-4 font-medium text-text-primary sticky left-0 bg-white">
                                                {row.name}
                                                <span className="text-text-secondary text-xs ml-1">/ {row.unit}</span>
                                            </td>
                                            {row.prices.map((price, i) => (
                                                <td
                                                    key={i}
                                                    className={`text-center py-3 px-3 transition-all duration-300 ${
                                                        colorIdx === i
                                                            ? 'bg-primary-brown/10 font-bold text-primary-brown scale-105'
                                                            : highlightColor && colorIdx !== i
                                                            ? 'opacity-40'
                                                            : ''
                                                    }`}
                                                >
                                                    {price !== null ? (
                                                        <span className="whitespace-nowrap">{price} ₽</span>
                                                    ) : (
                                                        <span className="text-gray-300">—</span>
                                                    )}
                                                </td>
                                            ))}
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    <p className="text-center text-text-secondary text-sm mt-4">
                        * Цены актуальны на текущую дату. При большом объёме возможна скидка. 
                        Уточняйте по телефону{' '}
                        <a href="tel:+79295100361" className="text-primary-brown font-semibold hover:underline">
                            8 (929) 510-03-61
                        </a>
                    </p>
                </div>
            </section> */}

            {/* Cost Calculator */}
            <section className="section-padding bg-white" id="calculator">
                <div className="container-custom max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-center text-primary-brown mb-2">Калькулятор стоимости</h2>
                        <p className="text-center text-text-secondary mb-8">
                            Рассчитайте примерную стоимость плитки для вашего участка
                        </p>

                        <div className="card p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Area */}
                                <div>
                                    <label className="block text-sm font-semibold text-text-primary mb-2">
                                        Площадь (м²)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        step="0.1"
                                        value={area}
                                        onChange={(e) => { setArea(e.target.value); setCalcResult(null); }}
                                        placeholder="Например: 50"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Type */}
                                <div>
                                    <label className="block text-sm font-semibold text-text-primary mb-2">
                                        Тип плитки
                                    </label>
                                    <select
                                        value={calcType}
                                        onChange={(e) => { setCalcType(e.target.value as typeof calcType); setCalcThickness(0); setCalcResult(null); }}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all"
                                    >
                                        <option value="vibrolitaya">Вибролитая</option>
                                        <option value="vibropressovannaya">Вибропрессованная</option>
                                    </select>
                                </div>

                                {/* Thickness / Product */}
                                <div>
                                    <label className="block text-sm font-semibold text-text-primary mb-2">
                                        Вид продукции
                                    </label>
                                    <select
                                        value={calcThickness}
                                        onChange={(e) => { setCalcThickness(Number(e.target.value)); setCalcResult(null); }}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all"
                                    >
                                        {(calcType === 'vibrolitaya' ? vibrolitData : vibropressData)
                                            .filter((r) => r.unit === 'м²')
                                            .map((row, i) => (
                                                <option key={row.name} value={i}>{row.name}</option>
                                            ))}
                                    </select>
                                </div>

                                {/* Color */}
                                <div>
                                    <label className="block text-sm font-semibold text-text-primary mb-2">
                                        Цвет
                                    </label>
                                    <select
                                        value={calcColorIdx}
                                        onChange={(e) => { setCalcColorIdx(Number(e.target.value)); setCalcResult(null); }}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-brown focus:border-transparent transition-all"
                                    >
                                        {(calcType === 'vibrolitaya' ? vibrolitColors : vibropressColors).map((color, i) => (
                                            <option key={color} value={i}>{color}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={handleCalc}
                                className="btn-primary w-full mt-6 py-4 text-lg"
                            >
                                Рассчитать стоимость
                            </button>

                            {calcResult !== null && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mt-6 p-6 bg-primary-olive/5 rounded-xl text-center"
                                >
                                    <p className="text-text-secondary mb-1">Примерная стоимость:</p>
                                    <p className="text-4xl font-bold text-primary-brown">
                                        {calcResult.toLocaleString('ru-RU')} ₽
                                    </p>
                                    <p className="text-text-secondary text-sm mt-2">
                                        За {area} м² · Без учёта доставки и укладки
                                    </p>
                                    <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                                        <a
                                            href="tel:+79295100361"
                                            className="btn-primary inline-flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            Позвонить
                                        </a>
                                        <Link
                                            href="/contacts"
                                            className="bg-white border-2 border-primary-brown text-primary-brown px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-brown hover:text-white transition-all inline-block text-center"
                                        >
                                            Оставить заявку
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Info block — SEO text */}
            <section className="section-padding bg-bg-main" id="price-info">
                <div className="container-custom max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                            <Image
                                src="/images/MainImages/plitka.jpg"
                                alt="Тротуарная плитка от производителя"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div>
                            <h2 className="text-primary-brown mb-4">От чего зависит цена?</h2>
                            <div className="space-y-3 text-text-secondary leading-relaxed">
                                <p>
                                    Цена тротуарной плитки зависит от <strong>толщины</strong>, <strong>цвета</strong> и 
                                    <strong> технологии изготовления</strong> (вибролитая или вибропрессованная).
                                </p>
                                <p>
                                    Если вы хотите сэкономить — выбирайте тонкие плитки серого цвета. 
                                    Для тротуаров толщина 2,5–3 см вполне достаточна. Даже заезд для 
                                    машин можно сделать тонкой плиткой, просто увеличив слой сухой смеси.
                                </p>
                                <p>
                                    Другой вариант — <strong>вибропрессованная плитка</strong>, 
                                    она по прочности не уступает вибролитой, а стоимость начинается от 330 ₽/м².
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-brown text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white mb-4">Нужна помощь с выбором?</h2>
                        <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
                            Позвоните нам или оставьте заявку — мы бесплатно рассчитаем 
                            количество материала и стоимость для вашего проекта.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+79295100361"
                                className="bg-white text-primary-brown px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                8 (929) 510-03-61
                            </a>
                            <Link
                                href="/contacts"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-brown transition-all inline-block"
                            >
                                Оставить заявку
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
