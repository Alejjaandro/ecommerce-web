'use client'
import products from '@/data/products';
import { useState } from 'react';
import './styles/Slider.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export default function Slider() {
    const sliderImages = products.slice(0, 5).map(product => product.image);

    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        /* 
        This condition checks that {slide} doesn't pass the length of dataImg, because it won't show any image.

        We create a sort of loop where {slide} can increment in 1 until it reach {dataImg.length - 1} 
        (-1 because the array idx start in 0, not in 1), once it reach that value, {slide} is set to 0, starting
        the loop again.
        */
        setSlide(
            slide !== sliderImages.length - 1 ? slide + 1 : 0
        );
    }

    const prevSlide = () => {
        // Same as above but to decrease.
        setSlide(
            slide !== 0 ? slide - 1 : sliderImages.length - 1
        );
    }

    return (
        <div className="slider-container">
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />

            {sliderImages && sliderImages.map((img, index) => {
                return (
                    <img
                        className={slide === index ? "slide" : "slide slide-hidden"}
                        src={`/productImages/${img}`}
                        alt=""
                        key={index}
                    />
                );
            })}

            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />

            <span className='indicators'>
                {sliderImages.map((_, index) => {
                    return (
                        <button
                            key={index}
                            className={slide === index ? "indicator" : "indicator ind-inactive"}
                            onClick={null}
                        >
                        </button>
                    );
                })}

            </span>
        </div>
    );
}