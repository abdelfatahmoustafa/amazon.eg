import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";

import {
  AboutPage,
  AllOrdersPage,
  BrandsDetailsPage,
  BrandsPage,
  CartPage,
  CategoriesPage,
  CategoryDetailsPage,
  CheckOutCashPage,
  CheckOutVisaPage,
  ForgotPasswordPage,
  HomePage,
  LayoutPage,
  LoginPage,
  ProductDetailsPage,
  ProductsPage,
  RegisterPage,
  ResetPasswordPage,
  WishListPage,
} from "../lazyLoad/lazy";

export default function getRouters(userData, saveUserData, clearUserData) {
  return createBrowserRouter([
    {
      path: "",
      element: <LayoutPage clearUserData={clearUserData} userData={userData} />,
      children: [
        { index: true, element: <HomePage /> },

        {
          element: <ProtectedRoute />,
          children: [
            { path: "Products", element: <ProductsPage /> },
            { path: "ProductDetails/:id", element: <ProductDetailsPage /> },
            { path: "cart", element: <CartPage /> },
            { path: "CheckOutCash/:id", element: <CheckOutCashPage /> },
            { path: "CheckOutVisa/:id", element: <CheckOutVisaPage /> },
            {
              path: "AllOrders",
              element: <AllOrdersPage userData={userData} />,
            },
            { path: "wishlist", element: <WishListPage /> },
            { path: "categories", element: <CategoriesPage /> },
            { path: "categoryDetails/:id", element: <CategoryDetailsPage /> },
            { path: "brands", element: <BrandsPage /> },
            { path: "brandDetails/:id", element: <BrandsDetailsPage /> },
          ],
        },

        { path: "register", element: <RegisterPage /> },
        { path: "login", element: <LoginPage saveUserData={saveUserData} /> },
        { path: "logout", element: <HomePage /> },
        { path: "forgotPassword", element: <ForgotPasswordPage /> },
        { path: "resetPassword", element: <ResetPasswordPage /> },
        { path: "About", element: <AboutPage /> },
        { path: "*", element: <HomePage /> },
      ],
    },
  ]);
}
