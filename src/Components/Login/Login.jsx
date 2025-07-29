import { BASE_API } from "../../config.js";
import React, { useState } from "react";
import logoAmazonAuth from "../../images/logo-amazon-auth.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loadingAmazon from "../../images/loading-amazon.gif";
import { startTransition } from "react";
export default function Login({ saveUserData }) {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [isLoginLoading, setLoginLoading] = useState(false);

  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .required("Email is Required")
      .email("Email Must be Valid"),
    password: Yup.string().required("Password is Required"),
  });
  async function handleUserLogin(formValues) {
    try {
      setLoginLoading(true);

      const { data } = await axios.post(
        `${BASE_API}api/v1/auth/signin`,
        formValues
      );

      if (data?.message === "success") {
        localStorage.setItem("userToken", data?.token);
        saveUserData();

        startTransition(() => {
          navigate("/");
        });
      }
    } catch (error) {
      setLoginError(error?.response?.data?.message);
    } finally {
      setLoginLoading(false);
    }
  }

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: handleUserLogin,
  });

  return (
    <>
      <section className="bg-light">
        <div className="d-flex justify-content-center align-items-center">
          <div className="w-50 bg-white rounded-3 my-5 shadow">
            <div className="w-25 my-3 mx-auto">
              <img
                src={logoAmazonAuth}
                className="w-100 text-center"
                alt="amazon logo2"
              />
            </div>
            <div className="container">
              <div className="row">
                <form onSubmit={loginForm.handleSubmit}>
                  <div className="col-sm-12 my-2">
                    <div>
                      <h2>Sign in</h2>
                      <label htmlFor="email" className="ms-2">
                        Email
                      </label>
                      <div className="form-floating">
                        <input
                          onBlur={loginForm.handleBlur}
                          onChange={loginForm.handleChange}
                          type="Email"
                          className="form-control form-border"
                          value={loginForm.values.email}
                          name="email"
                          id="email"
                          placeholder="email"
                        />
                        <label htmlFor="email">
                          <div className="text-secondary">
                            <h5 className="fs-6 mt-1 text-secondary">
                              Enter Your Email
                            </h5>
                          </div>
                        </label>
                      </div>
                      {loginForm.errors.email && loginForm.touched.email ? (
                        <div className="alert alert-danger mt-1">
                          {loginForm.errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div>
                      <label htmlFor="password" className="ms-2">
                        Password
                      </label>
                      <div className="form-floating">
                        <input
                          onBlur={loginForm.handleBlur}
                          onChange={loginForm.handleChange}
                          type="password"
                          className="form-control form-border"
                          value={loginForm.values.password}
                          name="password"
                          id="password"
                          placeholder="password"
                        />
                        <label htmlFor="password">
                          <div className="text-secondary">
                            <h5 className="fs-6 mt-1 text-secondary">
                              Enter Your Password
                            </h5>
                          </div>
                        </label>
                      </div>
                      {loginForm.errors.password &&
                      loginForm.touched.password ? (
                        <div className="alert alert-danger mt-1">
                          {loginForm.errors.password}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {loginError ? (
                    <div className="alert alert-danger text-center my-3">
                      {loginError}
                    </div>
                  ) : null}
                  {isLoginLoading ? (
                    <div className="w-25 mx-auto">
                      <input
                        type="image"
                        src={loadingAmazon}
                        className="w-100 rounded-3 text-center"
                      />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={!(loginForm.isValid && loginForm.dirty)}
                      className="zonyellowbg zonoffblackcolor w-100 btn btn-warning my-3"
                    >
                      Sign in
                    </button>
                  )}
                  <div className="w-100">
                    <p className="text-center">
                      By continuing, you agree to Amazon's{" "}
                      <span className="text-primary">Conditions of Use</span>{" "}
                      and <span className="text-primary">Privacy Notice</span>.
                    </p>
                  </div>
                </form>
                <div className="col-sm-12 d-flex justify-content-center mb-3">
                  <Link
                    to={"/forgotPassword"}
                    className="text-decoration-none text-primary"
                  >
                    Forgot Your Password?
                  </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center col-sm-12 gap-3">
                  <div className="line bg-secondary"></div>
                  <div className="text-secondary fa-2x">
                    <h6>New to Amazon?</h6>
                  </div>
                  <div className="line bg-secondary"></div>
                </div>
                <div className="col-sm-12">
                  <Link to={"/register"} className="text-decoration-none">
                    <button className="w-100 mb-4 mx-auto btn btn-secondary">
                      Create Your Amazon Account
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
