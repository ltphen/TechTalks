
import React, { useCallback, useEffect, useRef } from "react";
import Nav from "./../components/Nav"

const Index = () => {

  return (
    <div>
      <Nav></Nav>

      <div className="bg-gray-50">
           

            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        <div>
                            <div className="text-center lg:text-left">
                              <img className="w-22" src="/rails.svg" alt="" />

                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl">Inspiring the tech founders of tomorrow</h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Next talk Sunday, 19 February 2023 with the Founder of KapyGPT as Guest</p>

                                <form action="#" method="POST" className="mt-8 sm:mt-10">
                                    <div className="relative p-2 sm:border bg-gray-200 sm:border-gray-200 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                        <input
                                            type="email"
                                            name=""
                                            id=""
                                            placeholder="Enter email address"
                                            className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                        />
                                        <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                            <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-green-500 transition-all duration-200 bg-blue-900 rounded-lg focus:outline-none focus:bg-gray-600 hover:bg-gray-600">Get the link</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                               
                                <div className="hidden sm:block">
                                  <img className="w-full" src="/users.png" alt="" />

                                </div>

                                <div className="flex items-center">
                                    <p className="ml-0 text-sm text-gray-900">50+ active members sharing their tech knowledge</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img className="w-full" src="/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white sm:py-16 lg:py-20">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <div className="max-w-md mx-auto text-center">
                    <img src="/fly.svg" className="w-16 mb-10 mx-auto"/>
                    <h2 className="text-4xl text-blue-900 font-bold">
                      The arm of our community
                    </h2>
                    <p className="mt-6 text-base  text-gray-700">
                    We help tech enthusiast and future innovator to be inspired, to share and exchange knowledge
                    </p>
                  </div>

                  <div
                    className="grid max-w-md grid-cols-1 gap-12 mx-auto mt-8 text-center sm:mt-16 md:mx-0 md:max-w-none lg:mt-16 md:text-left lg:mt-20 md:grid-cols-3 xl:gap-x-20">
                    <div>
                      <img src="/about1.svg" className=" mx-auto"/>
                      <h3 className="text-center text-blue-900 mt-6 text-lg font-bold text-gray-900">
                      Founders Talks
                      </h3>
                      <p className="mt-4 text-sm text-center  text-gray-700 font-second">
                      The invited founders that share their knowledge with us
                      </p>
                    </div>

                    <div>
                    <img src="/about2.svg" className=" mx-auto"/>
                      <h3 className="text-center text-blue-900 mt-6 text-lg font-bold text-gray-900">
                      Tech exchanges
                      </h3>
                      <p className="mt-4 text-sm text-center  text-gray-700 font-second">
                      General topic about tech, startups, products, co-founder matching, ...
                      </p>
                    </div>

                    <div>
                    <img src="/about3.svg" className=" mx-auto"/>
                      <h3 className="text-center text-blue-900 mt-6 text-lg font-bold text-gray-900">
                      Debugging sessions
                      </h3>
                      <p className="mt-4 text-sm text-center  text-gray-700 font-second">
                      Helping developers overcome their problems by debugging their codes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-12 bg-blue-900 sm:py-16 lg:py-20 mt-8">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
                      <div className="text-center md:text-left lg:pr-16">
                          <h6 className="text-green-500 mb-6">Become A Member</h6>
                          <h2 className="text-3xl font-bold text-white leading-[3rem] sm:text-4xl xl:text-5xl">Our Tech developers thought on our blog</h2>
                          <p className="mt-4 text-normal leading-loose text-white sm:mt-8 font-second">With a focus on providing in-depth, informative, and actionable content, our blog is the perfect resource for anyone who wants to stay on top of the latest tech trends and developments. Whether you're a tech enthusiast, entrepreneur, or professional, you'll find valuable insights and information that will help you understand the direction that technology is headed, and how you can use it to your advantage.</p>
                      </div>

                      <div>
                          <img className="w-4/6 max-w-md mx-auto " src="/blog-home.png" alt="" />
                      </div>
                  </div>
              </div>
            </section>

            <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="mt-4 text-lg text-gray-700 md:max-w-md md:mx-auto sm:mt-6  text-green-500">Our latest sessions </p>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Latest conferences</h2>
                    </div>

                    <div className="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-4 md:gap-x-6 lg:gap-x-16 md:text-left">
                        <div>
                            <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0" src="/video.png" alt="" />
                            <h3 className="text-2xl font-bold text-gray-900 mt-8 text-center">Debugging sessions Golang and PHP</h3>
                            <p className="mt-4 text-base leading-7 text-gray-900 text-red-600 text-center">Watch session</p>

                        </div>
                        <div>
                            <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0" src="/video.png" alt="" />
                            <h3 className="text-2xl font-bold text-gray-900 mt-8 text-center">Debugging sessions Golang and PHP</h3>
                            <p className="mt-4 text-base leading-7 text-gray-900 text-red-600 text-center">Watch session</p>

                        </div>
                        <div>
                            <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0" src="/video.png" alt="" />
                            <h3 className="text-2xl font-bold text-gray-900 mt-8 text-center">Debugging sessions Golang and PHP</h3>
                            <p className="mt-4 text-base leading-7 text-gray-900 text-red-600 text-center">Watch session</p>

                        </div>
                        <div>
                            <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0" src="/video.png" alt="" />
                            <h3 className="text-2xl font-bold text-gray-900 mt-8 text-center">Debugging sessions Golang and PHP</h3>
                            <p className="mt-4 text-base leading-7 text-gray-900 text-red-600 text-center">Watch session</p>

                        </div>

                      
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-100 sm:py-16 lg:py-20">
              <div className="w-5/6 mx-auto">
                  <div className="max-w-xl mx-auto text-center">
                  <h6 className="text-green-500 mb-6 text-center">The community of tech builders</h6>

                    <h2 className="text-4xl text-blue-900 font-bold">
                    Excited enough? You can join us online or join our next session
                    </h2>
                    <p className="mt-6 text-base  text-gray-700">
                    Click on join to be part of the community and access every sessions
                    </p>
                    <button type="submit" className="inline-flex mt-8 px-6 py-3 text-lg font-bold text-green-500 transition-all duration-200 bg-blue-900 rounded-lg focus:outline-none focus:bg-gray-600 hover:bg-gray-600">Get the link</button>
                  </div>
              </div>
            </section>

        </div>

    </div>
  );
};

export default Index;
