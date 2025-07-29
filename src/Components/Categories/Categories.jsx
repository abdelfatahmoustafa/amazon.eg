import React, { useEffect, useState } from "react";
import { getCategoriesSlider } from "../../Redux/CategorySliderSlice";
import { useDispatch } from "react-redux";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categoryList, setCategoryList] = useState([]);
  const [isCategoriesLoading, setCategoriesLoading] = useState(false);

  const dispatch = useDispatch();

  async function fetchCategories() {
    setCategoriesLoading(true);
    const data = await dispatch(getCategoriesSlider());
    setCategoryList(data?.payload?.data);
    setCategoriesLoading(false);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {isCategoriesLoading ? (
        <Loading />
      ) : (
        <section>
          <div className="container-fluid">
            <div className="row">
              {categoryList.map((category, categoryIndex) => {
                return (
                  <div
                    key={categoryIndex}
                    className="col-md-4 col-lg-3 col-xl-2 my-3 prodiv"
                  >
                    <Link
                      className="text-decoration-none"
                      to={`/categorydetails/${category._id}`}
                    >
                      <div className="zononblackkbg shadow-lg rounded-3 contdiv w-100 overflow-hidden">
                        <img
                          src={category.image}
                          className="w-100"
                          height={180}
                          alt="products"
                        />
                        <h6 className="  text-center">
                          {category.name.split("").slice(0, 30).join("")}
                        </h6>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
