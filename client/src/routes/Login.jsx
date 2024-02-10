import Input from "../components/Input";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/reducers/users/actionCreators";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, auth } = useSelector((store) => store.userState);
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid Email!").required("email required!"),
        password: Yup.string().required("password required!"),
      }),
      onSubmit: (values, { resetForm }) => {
        dispatch(loginUser(values, resetForm));
      },
    });
  return auth ? (
    <Navigate to="/" />
  ) : (
    <div className="absolute top-0 flex h-[100vh] w-[100vw] bg-black items-center justify-center ">
      <div className="relative bg-white rounded-lg items-center py-10">
        <form
          onSubmit={handleSubmit}
          className="relative right-[-40px] flex flex-col justify-center items-center gap-10 bg-black text-white p-5 border border-white rounded-lg"
        >
          <h1 className="text-3xl font-semibold">Login</h1>
          <div className="flex flex-col gap-7">
            <Input
              id="email"
              type="text"
              label="Email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
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
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
