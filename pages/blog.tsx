
import React, { useCallback, useEffect, useRef } from "react";
import Nav from "../components/Nav"

const Index = () => {

  return (
    <div>
      <Nav></Nav>

      <div className="bg-gray-50">
           

      <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-32">
            <div className="absolute inset-0">
                <img className="object-cover w-full h-full" src="/background.png" alt="" />
            </div>

            <div className="absolute inset-0 bg-gray-900/50"></div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Inside tech talks HQ brains. Talking about tech, startups and more...</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-white sm:mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.</p>

                  
                </div>
            </div>
        </section>

        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl xl:text-3xl">All articles</h2>
                    </div>

                    <div className="grid grid-cols-1 mt-0 text-center md:mt-10 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-4 md:gap-x-6 lg:gap-x-16 md:text-left">
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
           
      </div>

    </div>
  );
};

export default Index;
