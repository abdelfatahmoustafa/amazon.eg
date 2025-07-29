import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Slider from "react-slick";
import { getBrands } from '../../Redux/BrandsSlice';

export default function BrandsSlider() {
    const [brandSliderList, setBrandSliderList] = useState([])

    const dispatch = useDispatch()

    async function fetchBrandSliderData() {
        let data = await dispatch(getBrands())
        setBrandSliderList(data?.payload?.data);
    }

    useEffect(() => {
        fetchBrandSliderData()
    }, [])

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
    };

    return <>
        <section>
            <div className="container-fluid">
                <Slider {...sliderSettings}>
                    {brandSliderList?.map((brand, brandIndex) => {
                        return <div key={brandIndex} className='pt-2'>
                            <img src={brand.image} className='w-100 px-3 rounded-5' alt="brandlogo" />
                        </div>
                    })}
                </Slider>
            </div>
        </section >

    </>
}