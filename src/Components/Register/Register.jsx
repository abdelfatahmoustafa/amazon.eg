import React, { useEffect, useState } from "react";
import logoAmazonAuth from "../../images/logo-amazon-auth.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loadingAmazon from "../../images/loading-amazon.gif";
import { startTransition } from "react";
import { BASE_API } from "../../config";
export default function Register() {
  const navigate = useNavigate();

  const [registrationError, setRegistrationError] = useState("");
  const [isRegistrationLoading, setRegistrationLoading] = useState(false);

  async function handleUserRegistration(formValues) {
    setRegistrationLoading(true);
    const { data } = await axios
      .post(`${BASE_API}api/v1/auth/signup`, formValues)
      .catch((error) => {
        setRegistrationLoading(false);
        setRegistrationError(error?.response?.data?.message);
      });
    if (!registrationError) {
      setRegistrationLoading(false);
      startTransition(() => {
        navigate("/login");
      });
    }
  }

  const registrationValidationSchema = Yup.object({
    name: Yup.string()
      .required("Name is Required")
      .min(3, "Name Minimum Length must be 3 ")
      .max(20, "Name Maximum Length must be 20 "),
    email: Yup.string()
      .required("Email is Required")
      .email("Email Must be Valid"),
    password: Yup.string()
      .required("Password is Required")
      .matches(/^[A-Z][a-z0-9]{5,20}$/, "Password Must starts With Uppercase"),
    rePassword: Yup.string()
      .required("rePassword is Required")
      .oneOf([Yup.ref("password")], "Password and RePassword doesn't Match"),
    phone: Yup.string()
      .required("Phone is Required")
      .matches(/^01[0125][0-9]{8}$/, "Phone Must be Egyptian Number"),
  });

  const registrationForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: registrationValidationSchema,
    onSubmit: handleUserRegistration,
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
                <form onSubmit={registrationForm.handleSubmit}>
                  <div className="col-sm-12">
                    <div>
                      <h2>Create account</h2>
                      {registrationError ? (
                        <div className="alert alert-danger text-center">
                          {registrationError}
                        </div>
                      ) : null}
                      <label htmlFor="name" className="ms-2">
                        Your Name
                      </label>
                      <div className="form-floating">
                        <input
                          onBlur={registrationForm.handleBlur}
                          onChange={registrationForm.handleChange}
                          value={registrationForm.values.name}
                          type="text"
                          className="form-control form-border"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                        />
                        <label htmlFor="name">
                          <div className="text-secondary">
                            <h5 className="fs-6 mt-1 text-secondary">
                              First And Last Name
                            </h5>
                          </div>
                        </label>
                      </div>
                      {registrationForm.errors.name &&
                      registrationForm.touched.name ? (
                        <div className="alert alert-danger mt-1">
                          {registrationForm.errors.name}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-12 my-2">
                    <div>
                      <label htmlFor="email" className="ms-2">
                        Email
                      </label>
                      <div className="form-floating">
                        <input
                          onBlur={registrationForm.handleBlur}
                          onChange={registrationForm.handleChange}
                          value={registrationForm.values.email}
                          type="Email"
                          className="form-control form-border"
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
                      {registrationForm.errors.email &&
                      registrationForm.touched.email ? (
                        <div className="alert alert-danger mt-1">
                          {registrationForm.errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-sm-6">
                      <div>
                        <label htmlFor="password" className="ms-2">
                          Password
                        </label>
                        <div className="form-floating">
                          <input
                            onBlur={registrationForm.handleBlur}
                            onChange={registrationForm.handleChange}
                            value={registrationForm.values.password}
                            type="password"
                            className="form-control form-border"
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
                        {registrationForm.errors.password &&
                        registrationForm.touched.password ? (
                          <div className="alert alert-danger mt-1">
                            {registrationForm.errors.password}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <label htmlFor="rePassword" className="ms-2">
                          RePassword
                        </label>
                        <div className="form-floating">
                          <input
                            onBlur={registrationForm.handleBlur}
                            onChange={registrationForm.handleChange}
                            value={registrationForm.values.rePassword}
                            type="password"
                            className="form-control form-border"
                            name="rePassword"
                            id="rePassword"
                            placeholder="rePassword"
                          />
                          <label htmlFor="rePassword">
                            <div className="text-secondary">
                              <h5 className="fs-6 mt-1 text-secondary">
                                Repassword Please
                              </h5>
                            </div>
                          </label>
                        </div>
                        {registrationForm.errors.rePassword &&
                        registrationForm.touched.rePassword ? (
                          <div className="alert alert-danger mt-1">
                            {registrationForm.errors.rePassword}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-sm-12 my-2">
                      <div>
                        <label htmlFor="phone" className="ms-2">
                          Phone
                        </label>
                        <div className="form-floating">
                          <input
                            onBlur={registrationForm.handleBlur}
                            onChange={registrationForm.handleChange}
                            value={registrationForm.values.phone}
                            type="tel"
                            className="form-control form-border"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                          />
                          <label htmlFor="phone">
                            <div className="text-secondary">
                              <h5 className="fs-6 mt-1 text-secondary">
                                Enter Your Phone
                              </h5>
                            </div>
                          </label>
                        </div>
                        {registrationForm.errors.phone &&
                        registrationForm.touched.phone ? (
                          <div className="alert alert-danger mt-1">
                            {registrationForm.errors.phone}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  {!isRegistrationLoading ? (
                    <button
                      disabled={
                        !(registrationForm.isValid && registrationForm.dirty)
                      }
                      type="submit"
                      className="zonyellowbg zonoffblackcolor w-100 btn btn-warning my-3"
                    >
                      Sign Up
                    </button>
                  ) : (
                    <div className="w-25 mx-auto">
                      <input
                        type="image"
                        src={loadingAmazon}
                        className="w-100 rounded-3 text-center"
                      />
                    </div>
                  )}
                  <div className="w-100">
                    <p className="text-center">
                      By creating an account, you agree to Amazon's{" "}
                      <span className="text-primary">Conditions of Use</span>{" "}
                      and <span className="text-primary">Privacy Notice</span>.
                    </p>
                  </div>
                  <div className="w-100">
                    <p className="text-center">
                      Already have an account?{" "}
                      <Link to={"/login"}>
                        <span className="text-primary">
                          Sign in <i className="fa-solid fa-caret-right"></i>
                        </span>
                      </Link>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
