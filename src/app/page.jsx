"use client";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "./redux/actions/authAction";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profiles, setProfiles] = useState("");

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setProfiles(user?.photoProfile);
  });

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <div>
        <img src={profiles} alt="" width={300} height={300} />
      </div>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}
