import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesSlider } from "./../../Redux/CategorySliderSlice";
import Slider from "react-slick";

export default function CategorySlider() {
  const [categorySliderList, setCategorySliderList] = useState([]);

  const dispatch = useDispatch();

  async function fetchCategorySliderData() {
    let data = await dispatch(getCategoriesSlider());
    setCategorySliderList(data?.payload?.data);
  }

  useEffect(() => {
    fetchCategorySliderData();
  }, []);

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

  return (
    <>
      <section className="shadow">
        <div className="container-fluid">
          <Slider {...sliderSettings}>
            {categorySliderList?.map((category, categoryIndex) => {
              return (
                <div key={categoryIndex} className="bg-light pt-2">
                  <img
                    src={category.image}
                    className="w-100 px-3 rounded-5"
                    height={200}
                    alt=""
                  />
                  <h1 className="text-center ">{category.name}</h1>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}
