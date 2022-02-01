import Image from "next/image";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Aside from "../Aside/Aside";
import Avater from "../Avater/Avater";
import Header from "../Header/Header";
export default function Main() {
  return (
    <main className="bg-primary">
      <Header />
      <div className="flex">
        <Aside />
        <section className="text-gray-600 body-font  bg-transparent pl-72 mt-10">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-3">
              <div className="cursor-pointer h-full px-5 lg:w-1/3 md:w-1/2 w-full">
                <a className="block relative h-48 rounded overflow-hidden mb-1">
                  <Image
                    alt="ecommerce"
                    height="720px"
                    width="1280px"
                    className="object-cover object-center w-full h-full block rounded-3xl"
                    src="/src/img/thum1.jpg"
                  />
                </a>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex">
                    <div>
                      <Avater />
                    </div>
                    <div className="">
                      <div>
                        <p className="text-gray-100 title-font text-lg font-medium truncate overflow-hidden">
                          Trass gaiming with retrex
                        </p>
                        <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                          Retrex Gaming
                        </h3>
                      </div>
                      <div className="text-xs tracking-widest flex items-center">
                        <span>12M views</span>
                        <BsDot className="text-orange text-3xl" />
                        <span> 28 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="mr-2 cursor-pointer">
                    <BiDotsVerticalRounded className="text-2xl" />
                  </div>
                </div>
              </div>

              <div className="cursor-pointer h-full px-5 lg:w-1/3 md:w-1/2 w-full">
                <a className="block relative h-48 rounded overflow-hidden mb-1">
                  <Image
                    alt="ecommerce"
                    height="720px"
                    width="1280px"
                    className="object-cover object-center w-full h-full block rounded-3xl"
                    src="/src/img/thum2.jpg"
                  />
                </a>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex">
                    <div>
                      <Avater />
                    </div>
                    <div className="">
                      <div>
                        <p className="text-gray-100 title-font text-lg font-medium truncate overflow-hidden">
                          Trass gaiming with retrex
                        </p>
                        <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                          Retrex Gaming
                        </h3>
                      </div>
                      <div className="text-xs tracking-widest flex items-center">
                        <span>12M views</span>
                        <BsDot className="text-orange text-3xl" />
                        <span> 28 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="mr-2 cursor-pointer">
                    <BiDotsVerticalRounded className="text-2xl" />
                  </div>
                </div>
              </div>

              <div className="cursor-pointer h-full px-5 lg:w-1/3 md:w-1/2 w-full">
                <a className="block relative h-48 rounded overflow-hidden mb-1">
                  <Image
                    alt="ecommerce"
                    height="720px"
                    width="1280px"
                    className="object-cover object-center w-full h-full block rounded-3xl"
                    src="/src/img/thum3.jpg"
                  />
                </a>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex">
                    <div>
                      <Avater />
                    </div>
                    <div className="">
                      <div>
                        <p className="text-gray-100 title-font text-lg font-medium truncate overflow-hidden">
                          Trass gaiming with retrex
                        </p>
                        <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                          Retrex Gaming
                        </h3>
                      </div>
                      <div className="text-xs tracking-widest flex items-center">
                        <span>12M views</span>
                        <BsDot className="text-orange text-3xl" />
                        <span> 28 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="mr-2 cursor-pointer">
                    <BiDotsVerticalRounded className="text-2xl" />
                  </div>
                </div>
              </div>

              <div className="cursor-pointer h-full px-5 lg:w-1/3 md:w-1/2 w-full">
                <a className="block relative h-48 rounded overflow-hidden mb-1">
                  <Image
                    alt="ecommerce"
                    height="720px"
                    width="1280px"
                    className="object-cover object-center w-full h-full block rounded-3xl"
                    src="/src/img/thum4.jpg"
                  />
                </a>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex">
                    <div>
                      <Avater />
                    </div>
                    <div className="">
                      <div>
                        <p className="text-gray-100 title-font text-lg font-medium truncate overflow-hidden">
                          Trass gaiming with retrex
                        </p>
                        <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                          Retrex Gaming
                        </h3>
                      </div>
                      <div className="text-xs tracking-widest flex items-center">
                        <span>12M views</span>
                        <BsDot className="text-orange text-3xl" />
                        <span> 28 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="mr-2 cursor-pointer">
                    <BiDotsVerticalRounded className="text-2xl" />
                  </div>
                </div>
              </div>

              <div className="cursor-pointer h-full px-5 lg:w-1/3 md:w-1/2 w-full">
                <a className="block relative h-48 rounded overflow-hidden mb-1">
                  <Image
                    alt="ecommerce"
                    height="720px"
                    width="1280px"
                    className="object-cover object-center w-full h-full block rounded-3xl"
                    src="/src/img/thum5.jpg"
                  />
                </a>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex">
                    <div>
                      <Avater />
                    </div>
                    <div className="">
                      <div>
                        <p className="text-gray-100 title-font text-lg font-medium truncate overflow-hidden">
                          Trass gaiming with retrex
                        </p>
                        <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                          Retrex Gaming
                        </h3>
                      </div>
                      <div className="text-xs tracking-widest flex items-center">
                        <span>12M views</span>
                        <BsDot className="text-orange text-3xl" />
                        <span> 28 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="mr-2 cursor-pointer">
                    <BiDotsVerticalRounded className="text-2xl" />
                  </div>
                </div>
              </div>

              <div className="cursor-pointer h-full px-5 lg:w-1/3 md:w-1/2 w-full">
                <a className="block relative h-48 rounded overflow-hidden mb-1">
                  <Image
                    alt="ecommerce"
                    height="720px"
                    width="1280px"
                    className="object-cover object-center w-full h-full block rounded-3xl"
                    src="/src/img/thum6.jpg"
                  />
                </a>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex">
                    <div>
                      <Avater />
                    </div>
                    <div className="">
                      <div>
                        <p className="text-gray-100 title-font text-lg font-medium truncate overflow-hidden">
                          Trass gaiming with retrex
                        </p>
                        <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                          Retrex Gaming
                        </h3>
                      </div>
                      <div className="text-xs tracking-widest flex items-center">
                        <span>12M views</span>
                        <BsDot className="text-orange text-3xl" />
                        <span> 28 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="mr-2 cursor-pointer">
                    <BiDotsVerticalRounded className="text-2xl" />
                  </div>
                </div>
              </div>
              {/* <Finised></Finised> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
