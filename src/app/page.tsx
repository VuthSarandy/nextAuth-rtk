/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/lib/testimonals";
import CardComponent from "@/components/CardComponent";
import { useGetProductsQuery } from "@/redux/service/products";
import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const route = useRouter();

  const words = "Fitness kits that help you keep fit.";
  const { data } = useGetProductsQuery({
    page: currentPage,
    pageSize: 8,
  });
  const totalPages = data?.total;

  // if (isLoading) return <LoadingComponent />;

  return (
    <main>
      {/* Carousel start */}
      <section className="relative pt-12 bg-gray-50 sm:pt-16 lg:py-36 lg:px-10 xl:py-48">
        <div className="absolute inset-0 hidden lg:block">
          <Image
            className="object-cover object-right w-full h-full sm:object-center lg:object-right-top lg:w-full lg:h-full"
            src="https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_1280.jpg"
            alt="background"
            width={10000}
            height={10000}
          />
        </div>

        <div className="text-center relative px-4 mx-auto sm:px-6 lg:px-8 ">
		
    <div className="relative py-12 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="relative">
                <div className="flex items-center justify-center h-[50vh] px-2 sm:px-0">
                    <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
                        <h1
                            className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 sm:text-gray-500 lg:dark:text-white">
                            Welcome to to DIVIER
                        </h1>
                        <p className="text-center text-sm sm:text-base md:text-xl sm:text-gray-800 lg:text-gray-600 dark:text-gray-300">
							Best
                            drop
                            shipping
                            website</p>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            <a href="" target="_blank"
                                className="relative flex h-9 w-full items-center justify-center px-8 before:absolute 
                                  before:inset-0 before:rounded-full before:bg-teal-400 before:transition before:duration-300 
                                  hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span className="relative text-sm font-semibold text-white">
                                    Order now
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


          <div className="mt-8 lg:hidden">
            <Image
              className="w-full mx-auto"
              src="https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_1280.jpg"
              alt="backgroud"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
      {/* Carousel end */}

      {/* banner start */}
      <section>
        <div className="bg-white h-full py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  VR
                </span>
              </a>
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Tech
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Dev
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Retro
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* banner end */}

      {/* card section */}
      <section className="mt-10">
        <h2 className="text-center text-3xl font-semibold leading-9 text-gray-800 uppercase">
          All Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-screen px-[30px] md:[50px] lg:px-[30px] xl:px-[100px] gap-5 xl:gap-12 mt-14">
          {data?.results.map((product: any) => (
            <CardComponent
              onClick={() => route.push(`/detail/${product.id}`)}
              key={product.id}
              title={product.name}
              description={product.desc}
              image={
                product.image === ""
                  ? "https://agrimart.in/uploads/vendor_banner_image/default.jpg"
                  : product.image
              }
              price={product.price}
              id={product.id}
              category={product.category}
            />
          ))}
        </div>
      </section>

      {/* pagination */}
      <section className="w-full grid place-content-center h-auto inline-block mt-10">
        <div className="w-[500px]">
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </main>
  );
}
