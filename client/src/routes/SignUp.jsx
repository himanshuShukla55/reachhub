import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .min(2, "Enter atleast 2 characters!")
          .max(15, "Enter atmost 15 characters!")
          .required("name required!"),

        email: Yup.string().email("Invalid email!").required("email required!"),
        password: Yup.string()
          .min(8, "Enter atleast 8 characters!")
          .required("password required!"),
      }),
      onSubmit: async (values, { resetForm }) => {
        try {
          setLoading(true);
          await axios.post("/api/users/signup", values);
          setLoading(false);
          toast.success("Sign Up Successfull!");
          resetForm();
          navigate("/login");
        } catch (error) {
          setLoading(false);
          const message = error.response.data.message;
          if (message.includes("duplicate key"))
            toast.error("Email already Registered!");
          else console.log(message);
        }
      },
    });
  return (
    <>
      <div className="absolute top-0 flex h-[100vh] w-[100vw] bg-mobile-cover lg:bg-desktop-cover bg-cover bg-center items-center justify-center ">
        <div className="relative bg-white rounded-lg py-10">
          <form
            onSubmit={handleSubmit}
            className="relative right-[-40px] flex flex-col justify-center items-center gap-10 bg-black text-white p-5 border border-white rounded-lg"
          >
            <h1 className="text-3xl font-semibold">Sign Up</h1>
            <div className="flex flex-col gap-5">
              <Input
                id="name"
                type="text"
                label="Name"
                value={values.name}
                touched={touched.name}
                error={errors.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <Input
                id="email"
                type="text"
                label="Email"
                value={values.email}
                touched={touched.email}
                error={errors.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <Input
                id="password"
                type="password"
                label="Password"
                value={values.password}
                touched={touched.password}
                error={errors.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <button
              type="submit"
              className="bg-white p-3 text-black w-full rounded-lg cursor-pointer font-semibold"
            >
              {loading ? (
                <ClipLoader
                  color={"black"}
                  loading={loading}
                  cssOverride={{ margin: "auto" }}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
