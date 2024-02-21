import { useState } from "react";
import { login } from "../../services/auth.service";

function SignIn() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(<></>);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    setErrorMessage(<></>);
    setLoading(true);

    login(input.email, input.password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setErrorMessage(
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 text-sm mt-4"
            role="alert"
          >
            <p className="font-bold">Houston, we have a problem...</p>
            <p>{resMessage}</p>
          </div>
        );
      }
    );
  };


  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="relative flex flex-col text-gray-200 backdrop-blur backdrop-brightness-75 p-10 rounded-xl shadow-2xl shadow-white/10">
          <h4 className="block aeronaut text-2xl antialiased font-semibold leading-snug tracking-normal text-white text-center">
            SIGN IN
          </h4>
          <p className="block mt-1 aeronaut text-base antialiased font-normal leading-relaxed text-gray-200 text-center">
            Welcome back! Please enter your details to sign in.
          </p>
          <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
            <div className="flex flex-col gap-6 mb-1">
              <h6 className="block -mb-3 aeronaut text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                Email
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="name@mail.com"
                  type="email"
                  id="email"
                  name="email"
                  aria-describedby="email"
                  aria-invalid="false"
                  autoComplete="email"
                  onChange={handleInput}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 aeronaut text-sm font-normal text-blue-gray-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-100 focus:border-t-transparent focus:!border-t-gray-100 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label
                  htmlFor="email"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                ></label>
              </div>
              <h6 className="block -mb-3 aeronaut text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                Password
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  placeholder="●●●●●●●●"
                  id="password"
                  name="password"
                  aria-describedby="user-password"
                  aria-invalid="false"
                  autoComplete="password"
                  onChange={handleInput}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 aeronaut text-sm font-normal text-blue-gray-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-100 focus:border-t-transparent focus:!border-t-gray-100 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label
                  htmlFor="password"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                ></label>
              </div>
            </div>
            <button
              className="mt-6 block w-full select-none rounded-lg bg-gray-100 py-3 px-6 text-center align-middle aeronaut text-xs font-bold uppercase text-black shadow-md shadow-gray-100/10 transition-all hover:shadow-lg hover:shadow-gray-100/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleSubmitEvent}
            >
              sign in
            </button>
            <p className="block mt-4 aeronaut text-base antialiased font-normal leading-relaxed text-center text-gray-200">
              Don't have an account?&nbsp;
              <Link to={"/signup"}>
                <a href="/signup" className="font-medium text-gray-200">
                  Sign Up
                </a>
              </Link>
            </p>
            {errorMessage}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
