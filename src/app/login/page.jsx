"use client";
import Image from "next/image";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import { useRouter } from "next/navigation";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlelogin = async (event) => {
    event.preventDefault();
    dispatch(login(email, password, router));
  };
  return (
    <>
      <div className="flex min-h-screen bg-white  justify-center">
        <div className="w-[100%] md:w-[60%] flex justify-center items-center mx-[23px] lg:px-[145px] relative   ">
          <div
            // onSubmit={handleLogin}
            className="w-full border-2 rounded-lg shadow-xl px-6 py-8 "
          >
            <form onSubmit={handlelogin}>
              <h1 className="text-[24px] font-bold text-[#1E3A5F] font-Montserrat mb-8">
                Masuk
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col text-neutral-600">
                  <label className="font-Poppins text-[15px] mb-[4px] ">Email</label>
                  <input
                    type="email"
                    className="border w-full py-3 px-4 rounded-2xl"
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col text-neutral-600">
                  <div className="flex justify-between items-center">
                    <label className="font-Poppins text-[15px] mb-[4px] ">Password</label>
                  </div>
                  <div className="relative ">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="border w-full py-3 px-4 rounded-2xl pr-[3.5rem] "
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 "
                    >
                      {showPassword ? (
                        <FiEyeOff className="border-none" />
                      ) : (
                        <FiEye className="border-none" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full font-Poppins bg-[#FFBE05] text-white py-[10px] rounded-xl mt-5 hover:bg-YELLOW05 font-bold shadow-md"
              >
                <span>Masuk</span>
              </button>
            </form>
            <div className="flex justify-center items-center gap-2 mt-6">
              <h1 className="font-Poppins text-[14px] font-normal text-black">
                Belum punya akun?
              </h1>
              <Link
                href="/register"
                className="font-Poppins text-[#1E3A5F] text-[14px] font-bold transition duration-300 ease-in-out hover:underline hover:border-[#1E3A5F]"
              >
                Daftar di sini
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
