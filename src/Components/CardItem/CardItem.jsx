import React from "react";
import loadingAddToCart from "../../images/loading-add-to-cart.gif";
import { Link } from "react-router-dom";

function CardItem({
  product,
  productIndex,
  isAddToCartLoading,
  handleAddProductToCart,
}) {
  return (
    <div key={productIndex} className="col-md-4 col-lg-3 col-xl-2 my-3 prodiv">
    <div>
      <div className="shadow rounded-3 contdiv w-100 overflow-hidden">
        <Link
          className="text-decoration-none text-danger"
          to={`/ProductDetails/${product._id}`}
        >
          <div className="d-flex justify-content-between">
            <div>
              <img src={product.brand.image} className="w-25" alt="" />
            </div>
            {product.priceAfterDiscount ? (
              <div className="bg-danger text-white p-2">Sale</div>
            ) : (
              ""
            )}
          </div>
          <div>
            <h6 className=" text-center">{product.subcategory[0].name}</h6>
            <img src={product.imageCover} className="w-100" alt="products" />
            <h6 className="zonyellowcolor text-center">
              {product.title.split(" ").slice(0, 2).join(" ")}
            </h6>
            <p className=" text-center">
              {product.description.split("").slice(0, 30).join("")}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="ps-3">
              {product.priceAfterDiscount ? (
                <div>
                  <span className="text-success text-decoration-line-through">
                    {product.price}
                  </span>{" "}
                  <span className="text-success">
                    {product.priceAfterDiscount} EGP
                  </span>
                </div>
              ) : (
                <span className="text-success">{product.price} EGP</span>
              )}
            </div>
            <p className="pe-3">
              <i className="fa-solid fa-star zonyellowcolor"></i>{" "}
              <span className="zonoffblackcolor">
                {product.ratingsAverage}
              </span>
            </p>
          </div>
        </Link>
        {isAddToCartLoading ? (
          <div className="loadwidth addbtn mx-auto">
            <input
              type="image"
              src={loadingAddToCart}
              className="w-100 rounded-3 text-center"
            />
          </div>
        ) : (
          <div>
          <div className="w-75 mb-1 mx-auto">
            <button
              onClick={() => {
                handleAddProductToCart(product._id);
              }}
              className="btn addbtn zonyellowbg btn-warning zonoffblackcolor w-100"
            >
              + Add
            </button>
          </div>
          <div className="w-75 mb-1 mx-auto">
            <button
              onClick={() => {
                handleAddProductToCart(product._id);
              }}
              className="btn addbtn zonyellowbg btn-warning zonoffblackcolor w-100"
            >
              + Add
            </button>
          </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default CardItem;
