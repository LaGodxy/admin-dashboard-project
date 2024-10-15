import login from "../assets/images/login.svg";
import navlogo from "../assets/images/navlogo.svg";
import signinIcon from "../assets/icons/signinIcon.svg";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Login() {

  // Initial values for form fields
  const initialValues = {
    email: "",
    password: "",
    terms: false
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .min(5, "Email must be at least 5 characters")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    terms: Yup.boolean().oneOf([true], "You must accept the Terms & Conditions"),
  });

  // Submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate login
    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      <div className="flex h-screen flex-1 overflow-hidden">
        {/* Top Left Logo - AProjectO */}
        <div className="absolute top-0 left-0 p-4 flex items-center">
          <img alt="logo" src={navlogo} className="w-[40px] h-[40px]" />
          <p className="text-[#0B3051] ml-2">AProjectO</p>
        </div>

        {/* Right Side Image */}
        <div className="hidden w-[50%] flex-1 lg:flex items-center">
          <img alt="loginImage" src={login} className="h-full w-full object-cover ml-32 mt-32" />
        </div>

        {/* Left Section - Form */}
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-[50%]">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="absolute top-5 left-[60%] p-4 flex items-center">
              <img alt="signin icon" src={signinIcon} className="w-[20px] h-[20px]" />
              <p className="ml-2 font-manrope">Asite Product System</p>
            </div>

            <h2 className="mt-20 text-2xl font-bold leading-9 tracking-tight text-gray-900 flex items-start font-manrope">
              Welcome back, Yash
            </h2>
            <p className="text-sm leading-9 tracking-tight text-gray-300 flex items-start font-spaceGrotesk">
              Welcome back! Please enter your details
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6 mt-10">
                  {/* Email Field */}
                  <div>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="block w-full border-b-2 border-gray-300 focus:border-indigo-600 py-1.5 shadow-sm placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6 border-t-0 border-l-0 border-r-0 font-spaceGrotesk"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                  </div>

                  {/* Password Field */}
                  <div>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="block w-full border-b-2 border-gray-300 focus:border-indigo-600 py-1.5 shadow-sm placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6 border-t-0 border-l-0 border-r-0 font-spaceGrotesk"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Field
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                      />
                      <label htmlFor="terms" className="ml-3 block text-sm text-gray-700 font-spaceGrotesk">
                        Terms & Conditions
                      </label>
                    </div>
                    <ErrorMessage name="terms" component="div" className="text-red-600 text-sm mt-1" />
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-gray-900 hover:text-indigo-500 underline font-spaceGrotesk">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none"
                    >
                      Sign in
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <p className="mt-2 text-sm text-gray-500 font-spaceGrotesk">
              Don&apos;t have an account?{' '}
              <a href="#" className="font-semibold text-gray-900 hover:text-indigo-500 font-spaceGrotesk">
                Sign up for free
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
