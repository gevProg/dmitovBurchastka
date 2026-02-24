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
        src: "/images/portfolioSlider/1.jpg",
        alt: "Выполненная работа по укладке тротуарной плитки — 1",
        title: "",
    },
    {
        src: "/images/portfolioSlider/2.webp",
        alt: "Выполненная работа по укладке тротуарной плитки — 2",
        title: "",
    },
    {
        src: "/images/portfolioSlider/3.JPEG",
        alt: "Выполненная работа по укладке тротуарной плитки — 3",
        title: "",
    },
    {
        src: "/images/portfolioSlider/4.JPEG",
        alt: "Выполненная работа по укладке тротуарной плитки — 4",
        title: "",
    },
    {
        src: "/images/portfolioSlider/5.JPEG",
        alt: "Выполненная работа по укладке тротуарной плитки — 5",
        title: "",
    },
    {
        src: "/images/portfolioSlider/6.JPEG",
        alt: "Выполненная работа по укладке тротуарной плитки — 6",
        title: "",
    },
    {
        src: "/images/portfolioSlider/7.jpg",
        alt: "Выполненная работа по укладке тротуарной плитки — 7",
        title: "",
    },
    {
        src: "/images/portfolioSlider/8.jpg",
        alt: "Выполненная работа по укладке тротуарной плитки — 8",
        title: "",
    },
    {
        src: "/images/portfolioSlider/9.jpg",
        alt: "Выполненная работа по укладке тротуарной плитки — 9",
        title: "",
    },
    {
        src: "/images/portfolioSlider/10.jpg",
        alt: "Выполненная работа по укладке тротуарной плитки — 10",
        title: "",
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
