"use client";
import { verify } from "@/app/redux/actions/authAction";
import React from "react";
import { useDispatch } from "react-redux";

const Verify = ({ params }) => {
  const token = params.slug;
  const dispatch = useDispatch();
  const handleVerify = () => {
    dispatch(verify(token));
  };
  return (
    <div className="flex min-h-screen bg-white  justify-center">
      <div className="w-[100%] md:w-[60%] flex justify-center items-center mx-[23px] lg:px-[145px] relative   ">
        <div className="border-2 border-black w-[40%] h-[20%] flex justify-center items-center flex-col gap-10">
          <div>Verify Email</div>
          <button className="bg-[#FFBE05] px-2 py-1 rounded-md" onClick={handleVerify}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
