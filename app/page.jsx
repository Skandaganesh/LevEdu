"use client"

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/SideBar";
import Content from "@/components/content";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "@/redux/api/userApi";

const Page = () => {
  const auth = useSelector(state => state.user.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [auth]);
  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* <Navbar /> */}
      <div className="flex flex-grow">
        {/* <Sidebar /> */}
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
