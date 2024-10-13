import login from "../assets/images/login.svg";
import navlogo from "../assets/images/navlogo.svg";
import signinIcon from "../assets/icons/signinIcon.svg";

export default function Login() {
  return (
    <>
      <div className="flex h-screen flex-1 overflow-hidden">
        {/* Top Left Logo - AProjectO */}
        <div className="absolute top-0 left-0 p-4 flex items-center">
          <img
            alt="logo"
            src={navlogo}
            className="w-[40px] h-[40px]"
          />
          <p className="text-[#0B3051] ml-2">AProjectO</p>
        </div>

        {/* Right Side Image */}
        <div className="hidden w-[50%] flex-1 lg:flex items-center">
          <img
            alt="loginImage"
            src={login}
            className="h-full w-full object-cover ml-32 mt-32"
          />
        </div>
        {/* Left Section - Form */}
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-[50%]">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            {/* Top Left Logo - Asite Product System */}
            <div className="absolute top-5 left-[60%] p-4 flex items-center">
              <img
                alt="signin icon"
                src={signinIcon}
                className="w-[20px] h-[20px]"
              />
              <p className="ml-2">Asite Product System</p>
            </div>

            {/* Welcome Section */}
            <h2 className="mt-20 text-2xl font-bold leading-9 tracking-tight text-gray-900 flex items-start">
              Welcome back, Yash
            </h2>
            <p className="text-sm leading-9 tracking-tight text-gray-300 flex items-start">
              Welcome back! Please enter your details
            </p>

            {/* Form Section */}
            <div className="mt-10">
              <form className="space-y-6">
                <div>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      autoComplete="email"
                      className="block w-full border-b-2 border-gray-300 focus:border-indigo-600 py-1.5 shadow-sm placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6 border-t-0 border-l-0 border-r-0"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                      autoComplete="current-password"
                      className="block w-full border-b-2 border-gray-300 focus:border-indigo-600 py-1.5 shadow-sm placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6 border-t-0 border-l-0 border-r-0"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="Terms-Conditions"
                      name="Terms-Conditions"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                    />
                    <label htmlFor="Terms-Conditions" className="ml-3 block text-sm leading-6 text-gray-700">
                      Terms & Conditions
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <a href="#" className="font-semibold text-gray-900 hover:text-indigo-500 underline">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Don&apos;t have an account?{' '}
                <a href="#" className="font-semibold text-gray-900 hover:text-indigo-500">
                  Sign up for free
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
