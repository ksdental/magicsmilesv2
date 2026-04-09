import React from 'react';
import 'swiper/css';
import { A11y, Keyboard } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

type SliderProps = {
    className?: string;
    children: React.ReactNode;
    sliderSettings: SwiperOptions;
};

export const Slider = ({ children, sliderSettings, className }: SliderProps) => {
    const modules = [Keyboard, A11y];
    return (
        <Swiper
            centerInsufficientSlides
            watchSlidesProgress
            keyboard
            {...sliderSettings}
            modules={sliderSettings.modules?.concat(modules)}
            className={className}
            role="region"
        >
            {children}
        </Swiper>
    );
};
