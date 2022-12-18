import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from "react-lottie";
import SplitType from "split-type";
import loader from "../public/loader.json";
import logoLight from "../public/logo-light.png";

const Index = () => {
  const animContainerRef = useRef(null);
  const boxRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  const onLoadingFinish = useCallback(() => {
    const lines = new SplitType("#lines", { types: "lines" });
    const titleRef = new SplitType("#talk", { types: "words, chars, chars" });

    gsap
      .timeline()
      .to(
        boxRef.current,
        {
          duration: 1,
          delay: 2,
          opacity: 0,
          ease: "BezierEasing(0.19,1,0.22,1)",
        },
        "p"
      )
      .to(
        animContainerRef.current,
        {
          duration: 1.2,
          transform: "scale(10, 1)",
          height: 0,
        },
        "-=.5"
      )
      .to(animContainerRef.current, {
        display: "none",
      })
      .from(
        lines.lines,
        {
          opacity: 0,
          y: 50,
          duration: 0.7,
          stagger: { amount: 0.5 },
          ease: "BezierEasing(0.19,1,0.22,1)",
        },
        "-=1.5"
      )
      .from(
        titleRef.chars,
        {
          opacity: 0,
          y: 50,
          duration: 0.7,
          stagger: { amount: 0.5 },
          ease: "BezierEasing(0.19,1,0.22,1)",
        },
        "-=.5"
      );
  }, []);

  useEffect(() => {
    onLoadingFinish();
  }, [onLoadingFinish]);

  useEffect(() => {
    videoRef.current && videoRef.current.play();
  }, []);

  return (
    <div>
      <header className="h-20 px-20">
        <div className={"font-medium text-2xl absolute fixed left-4 top-4"}>
          <Link href="/">
            <Image width={40} height={40} src={logoLight} alt="logo" />
          </Link>
        </div>
      </header>
      <main className="px-4 sm:px-14">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row">
            <div
              id="lines"
              ref={linesRef}
              className="flex flex-col  w-full sm:w-11/12  lg:w-5/12"
            >
              <div className="font-bold text-5xl mt-5">
                Lorem ipsum <br />
                dolor sit amet
              </div>
              <div className="font-bold w-full lg:w-9/12 mt-10 lg:mt-32">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                corporis dolorem eos error ex explicabo facilis, fugiat ipsum,
                neque, nobis obcaecati odio porro quasi quisquam rem ullam unde
                voluptas voluptates?
              </div>
              <ul className="font-bold flex w-9/12 mt-8 mb-12 lg:mb-0 ">
                <li className="h-8 mr-10 flex justify-center items-center border-b-2 cursor-pointer">
                  Youtube
                </li>
                <li className="h-8 flex justify-center items-center border-b-2 cursor-pointer">
                  Whatsapp
                </li>
              </ul>
            </div>

            <div className="flex justify-center items-center w-full lg:w-8/12 overflow-hidden relative h-52 sm:h-72 md:h-96 lg:h-128">
              <video
                ref={videoRef}
                className="absolute -top-28 pt-14 md:pt-0"
                src="https://cdn.dribbble.com/users/566524/screenshots/18110002/media/aaa392fea894dd7a83c235a662284b33.mp4"
                muted
                autoPlay
                loop
              />
            </div>
          </div>

          <div className="font-extrabold flex items-center h-60 pt-5 text-8xl md:text-9xl lg:text-10xl xl:text-11xl">
            <span id="talk" ref={titleRef}>
              TECH TALKS
            </span>
          </div>
        </div>

        <div
          ref={animContainerRef}
          className="absolute bottom-0 left-0 bg-black w-screen h-screen flex flex-col items-center justify-center z-50 overflow-hidden"
        >
          <div
            className="flex flex-col justify-center items-center"
            ref={boxRef}
          >
            <div className="relative top-20">
              <Link href="/">
                <Image width={40} height={40} src={logoLight} alt="logo" />
              </Link>
            </div>

            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: loader,
              }}
              height={250}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
