"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface GalleryImage {
    src: string;
    alt: string;
    title: string;
    description?: string;
}

const portfolioImages: GalleryImage[] = [
    {
        src: "/images/portfolio/plitka.jpg",
        alt: "Укладка тротуарной плитки в Дмитрове — готовый результат",
        title: "Укладка тротуарной плитки",
        description: "Благоустройство придомовой территории",
    },
    {
        src: "/images/portfolio/Ykaldka.jpg",
        alt: "Процесс укладки брусчатки — наша бригада за работой",
        title: "Укладка брусчатки",
        description: "Профессиональная работа бригады",
    },
    {
        src: "/images/portfolio/бордюр садовый.jpg",
        alt: "Установка садового бордюра в Дмитровском районе",
        title: "Установка садового бордюра",
        description: "Оформление садовых дорожек",
    },
    {
        src: "/images/portfolio/asfalt.jpg",
        alt: "Укладка асфальта — выполненные работы в Дмитрове",
        title: "Укладка асфальта",
        description: "Асфальтирование дорожек и площадок",
    },
    {
        src: "/images/portfolio/ozelenie.jpg",
        alt: "Дачное озеленение и благоустройство территории",
        title: "Дачное озеленение",
        description: "Комплексное благоустройство участка",
    },
    {
        src: "/images/portfolio/дорожный бордюр.jpg",
        alt: "Установка дорожного бордюра — наши работы",
        title: "Дорожный бордюр",
        description: "Профессиональная установка бордюров",
    },
    {
        src: "/images/portfolio/betonnieRaboty.jpg",
        alt: "Бетонные работы — фундамент и отмостка в Дмитрове",
        title: "Бетонные работы",
        description: "Заливка фундаментов и отмосток",
    },
    {
        src: "/images/portfolio/б.jpg",
        alt: "Укладка плитки — готовый проект в Дмитровском районе",
        title: "Готовый проект",
        description: "Благоустройство территории под ключ",
    },
    {
        src: "/images/portfolio/44416727.jpg",
        alt: "Благоустройство участка — выполненная работа",
        title: "Благоустройство участка",
        description: "Комплексный проект",
    },
];

export default function PortfolioGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">

                {/* Main Slider */}
                <div className="mb-4">
                    <Swiper
                        modules={[Navigation, Pagination, Zoom, Thumbs]}
                        spaceBetween={10}
                        navigation
                        pagination={{
                            type: "fraction",
                            formatFractionCurrent: (number) => number,
                            formatFractionTotal: (number) => number,
                        }}
                        zoom={{
                            maxRatio: 3,
                            minRatio: 1,
                        }}
                        thumbs={{
                            swiper:
                                thumbsSwiper && !thumbsSwiper.destroyed
                                    ? thumbsSwiper
                                    : null,
                        }}
                        onZoomChange={(swiper, scale) => {
                            setIsZoomed(scale > 1);
                        }}
                        className="rounded-xl shadow-lg overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-gray-100"
                    >
                        {portfolioImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-zoom-container">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={1200}
                                            height={800}
                                            className="object-contain w-full h-full"
                                            quality={90}
                                            priority={index === 0}
                                            loading={index === 0 ? "eager" : "lazy"}
                                        />
                                    </div>
                                </div>
                                {!isZoomed && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-10">
                                        <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                                            {image.title}
                                        </h3>
                                        {image.description && (
                                            <p className="text-white/90 text-sm md:text-base">
                                                {image.description}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}

                     
                    </Swiper>
                </div>

                {/* Thumbnails Slider */}
                <Swiper
                    modules={[FreeMode, Thumbs]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                        1280: {
                            slidesPerView: 8,
                        },
                    }}
                    className="portfolio-thumbs"
                >
                    {portfolioImages.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity rounded-lg overflow-hidden"
                        >
                            <div className="relative aspect-video">
                                <Image
                                    src={image.src}
                                    alt={`Миниатюра: ${image.title}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 12.5vw"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            {/* Custom CSS for active thumbnail */}
            <style jsx global>{`
                .portfolio-thumbs .swiper-slide-thumb-active {
                    opacity: 1 !important;
                    box-shadow: 0 0 0 3px #8b7355;
                    border-radius: 0.5rem;
                }
            `}</style>
        </section>
    );
}
