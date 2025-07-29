import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./../../Redux/ProductsSlice";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { addToCart } from "./../../Redux/AddToCartSlice";
import { toast } from "react-hot-toast";
import CardItem from "../CardItem/CardItem";

export default function Products() {
  const [isProductsLoading, setProductsLoading] = useState(false);
  const [isAddToCartLoading, setAddToCartLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const dispatch = useDispatch();

  async function fetchProducts() {
    setProductsLoading(true);
    const data = await dispatch(getProducts());
    setProductList(data?.payload?.data);
    setProductsLoading(false);
  }

  async function handleAddProductToCart(productId) {
    setAddToCartLoading(true);
    const data = await dispatch(addToCart(productId));
    setAddToCartLoading(false);
    if (data?.payload?.status === "success") {
      toast.success(data?.payload?.message, { duration: 2000 });
    } else {
      toast.error("Ops Something Went Wrong Please Sign in and try Again");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isProductsLoading ? (
        <Loading />
      ) : (
        <section>
          <div className="container">
            <div className="row">
              {productList?.map((product, productIndex) => {
                return (
                  <CardItem
                    key={productIndex}
                    product={product}
                    productIndex={productIndex}
                    isAddToCartLoading={isAddToCartLoading}
                    handleAddProductToCart={handleAddProductToCart}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
