import { lazy } from "react";

export const MainSliderPage = lazy(() =>
  import("../Components/MainSlider/MainSlider.jsx")
);
export const CategorySliderPage = lazy(() =>
  import("../Components/CategorySlider/CategorySlider.jsx")
);
export const ProductsPage = lazy(() =>
  import("../Components/Products/Products.jsx")
);
export const BrandsSliderPage = lazy(() =>
  import("../Components/BrandsSlider/BrandsSlider.jsx")
);
export const ProductDetailsPage = lazy(() =>
  import("../Components/ProductDetails/ProductDetails.jsx")
);
export const HomePage = lazy(() => import("../Components/Home/Home.jsx"));
export const CartPage = lazy(() => import("../Components/Cart/Cart.jsx"));
export const WishListPage = lazy(() =>
  import("../Components/WishList/WishList.jsx")
);
export const AllOrdersPage = lazy(() =>
  import("../Components/AllOrders/AllOrders.jsx")
);
export const CheckOutCashPage = lazy(() =>
  import("../Components/CheckOutCash/CheckOutCash.jsx")
);
export const CheckOutVisaPage = lazy(() =>
  import("../Components/CheckOutVisa/CheckOutVisa.jsx")
);
export const CategoriesPage = lazy(() =>
  import("../Components/Categories/Categories.jsx")
);
export const CategoryDetailsPage = lazy(() =>
  import("../Components/CategoryDetails/CategoryDetails.jsx")
);
export const BrandsPage = lazy(() => import("../Components/Brands/Brands.jsx"));
export const BrandsDetailsPage = lazy(() =>
  import("../Components/BrandsDetails/BrandsDetails.jsx")
);
export const RegisterPage = lazy(() =>
  import("../Components/Register/Register.jsx")
);
export const LoginPage = lazy(() => import("../Components/Login/Login.jsx"));
export const ForgotPasswordPage = lazy(() =>
  import("../Components/ForgotPassword/ForgotPassword.jsx")
);
export const ResetPasswordPage = lazy(() =>
  import("../Components/ResetPassword/ResetPassword.jsx")
);
export const AboutPage = lazy(() => import("../Components/About/About.jsx"));
export const LayoutPage = lazy(() => import("../Components/Layout/Layout.jsx"));
export const NavbarPage = lazy(() => import("../Components/Navbar/Navbar.jsx"));
export const FooterPage = lazy(() => import("../Components/Footer/Footer.jsx"));
