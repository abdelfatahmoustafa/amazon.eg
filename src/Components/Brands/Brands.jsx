import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBrands } from "../../Redux/BrandsSlice";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
export default function Brands() {
  const [brandList, setBrandList] = useState([]);
  const [isBrandsLoading, setBrandsLoading] = useState(false);

  const dispatch = useDispatch();

  async function fetchBrands() {
    setBrandsLoading(true);
    const data = await dispatch(getBrands());
    setBrandList(data?.payload?.data);
    setBrandsLoading(false);
  }

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <>
      {isBrandsLoading ? (
        <Loading />
      ) : (
        <section>
          <div className="container-fluid">
            <div className="row">
              {brandList.map((brand, brandIndex) => {
                return (
                  <div
                    key={brandIndex}
                    className="col-md-4 col-lg-3 col-xl-2 my-3 prodiv"
                  >
                    <Link
                      className="text-decoration-none"
                      to={`/brandDetails/${brand._id}`}
                    >
                      <div className="zononblackkbg shadow rounded-3 contdiv w-100 overflow-hidden">
                        <img
                          src={brand.image}
                          className="w-100"
                          alt="products"
                        />
                        <h6 className="  text-center">{brand.name}</h6>
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
