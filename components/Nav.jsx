import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from "react-lottie";
import SplitType from "split-type";
import loader from "../public/loader.json";
import logoDark from "../public/logo-dark.png";

export const Nav = () => {

  return (
    <div>
        <header class="mx-auto max-w-7xl relative z-10 py-4 md:py-6">
                <div class="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between">
                        <div class="flex-shrink-0">
                            <a href="#" title="" class="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                <img src={"/logo.png"}  className="h-8"/>
                            </a>
                        </div>
                    <div class="flex md:hidden">
                        <button type="button" class="text-gray-900">
                            <span class="" aria-hidden="true">
                                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg></span><span class="hidden" aria-hidden="true"><svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </span>
                        </button>
                    </div>
                    <div class="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
                        <a href="#" title="" class="text-base text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Blog </a>
                        <a href="#" title="" class="text-base text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Videos </a>
                        <a href="#" title="" class="text-base text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </a>
                    </div>
                    <div class="hidden md:flex">
                        <a href="#" title="" class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-green-500 transition-all duration-200 bg-blue-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-extrabold" role="button">Join The Community</a>
                    </div>
                </div>
                <nav class="hidden">
                    <div class="px-1 py-8">
                        <div class="grid gap-y-7">
                            <a href="#" title="" class="flex items-center p-3 -m-3 text-base text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Blog </a>
                            <a href="#" title="" class="flex items-center p-3 -m-3 text-base text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Videos </a>
                            <a href="#" title="" class="flex items-center p-3 -m-3 text-base text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </a>
                            <a href="#" title="" class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-green-500 transition-all duration-200 bg-blue-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-extrabold" role="button">Join The Community</a>
                        </div>
                    </div>
                </nav>
            </div>
    </header>
     
    </div>
  );
};

export default Nav;
