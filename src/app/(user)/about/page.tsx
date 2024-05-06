"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { useAppSelector } from "@/redux/hook";
import { BackgroundGradientAnimation } from "@/components/ui/gradient-animate";

export default function About() {
  const acess = useAppSelector((state) => state.accessToken.token);
  console.log("about :", acess);

  return (
    <main>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            DIVIER
          </p>
        </div>
      </BackgroundGradientAnimation>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            <figure className="relative w-full h-60">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </figure>
            <figure className="relative w-full h-60">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </figure>
          </div>
          <figure className="relative w-full h-72 sm:h-96 lg:h-full">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
              alt="Image Description"
            />
          </figure>
        </div>

        <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="bg-white w-full px-4 pt-16 pb-16" id="faq">
              <h2 className="text-4xl font-bold text-center">DIVIER</h2>
              <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
                Fueled by a deep understanding of customer needs and a
                commitment to constant innovation, our dedicated team of experts
                crafts custom software solutions that empower businesses of all
                sizes to achieve their full potential. Take the first step
                towards success and schedule a free consultation today!
				Fueled by a deep understanding of customer needs and a
                commitment to constant innovation, our dedicated team of experts
                crafts custom software solutions that empower businesses of all
                sizes to achieve their full potential. Take the first step
                towards success and schedule a free consultation today!
              </p>
              <div className="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <a target="_blank" href="">
                  <img
                    alt=""
                    className="h-20  mx-auto"
                    src="https://www.svgrepo.com/show/442910/brand-apple.svg"
                  />
                </a>
                <a target="_blank" href="">
                  <img
                    alt=""
                    className="h-20  mx-auto"
                    src="https://www.svgrepo.com/show/443329/brand-pixar.svg"
                  />
                </a>
                <a target="_blank" href="">
                  <img
                    alt=""
                    className="h-20  mx-auto"
                    src="https://www.svgrepo.com/show/443079/brand-geforce.svg"
                  />
                </a>
                <a target="_blank" href="">
                  <img
                    alt=""
                    className="h-20  mx-auto"
                    src="https://www.svgrepo.com/show/443042/brand-ethereum.svg"
                  />
                </a>
                <a target="_blank" href="">
                  <img
                    alt=""
                    className="h-20  mx-auto"
                    src="https://www.svgrepo.com/show/443206/brand-line.svg"
                  />
                </a>
                <a target="_blank" href="">
                  <img
                    alt=""
                    className="h-20  mx-auto"
                    src="https://www.svgrepo.com/show/519278/slack.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
