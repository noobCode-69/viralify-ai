const Navbar = () => {
  return (
    <nav className="fixed z-40 left-1/2 text-sm transform -translate-x-1/2 w-fit rounded-full border border-[#f1f1f1] shadow-md items-center backdrop-blur bg-[#ffffff99] mt-6 shadow-input flex justify-center space-x-4 px-2 py-2 ">
      <div className="border-r flex flex-col items-start pr-2 border-[#f1f1f1] pl-2">
        <svg
          version="1.1"
          id="Warstwa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground={"new 0 0 1000 1000"}
          xmlSpace="preserve"
          width={50}
          height={50}
        >
          <path
            color="red"
            d="M764.7,383.3c-82,141.8-164.4,283.3-246.9,424.8c-21.9,37.5-22.3,37.6-43.5,2C393,673.6,312.2,536.9,230.2,400.9
c-11.7-19.4-13.3-33.7-0.9-53.9c36.4-59.3,70.2-120.2,108.3-186.2C424.4,309.2,506.8,450.3,592.5,597c16.8-26.5,30.6-49.5,45.7-71.7
c8.8-13-0.8-21-6-30.1c-26.7-46.4-53.9-92.7-83.4-143.3H777C782.6,364.9,770.3,373.6,764.7,383.3z"
          />
        </svg>
      </div>
      <li className="font-medium block py-2 pl-2 pr-3 text-dark-800 hover:text-dark-200 transition duration-300 ">
        <a href="/#features">Testimonials</a>
      </li>
      <li className="font-medium block py-2 pl-2 pr-3 text-dark-800 hover:text-dark-200 transition duration-300 ">
        <a href="/pricing">Pricing</a>
      </li>

      <div className="block">
        <ul className="flex flex-row items-center text-sm font-medium md:space-x-8 lg:space-x-3 xl:space-x-6 md:mt-0 sm:text-sm">
          <li className="block">
            <ul className="relative group dropdown">
              <a
                className="flex items-center dropdown-toggle hidden-arrow"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="flex items-center justify-center px-6 py-3 text-white text-xs font-semibold rounded-full bg-[#000] hover:bg-light-400 transition duration-300 whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M13 5h6v6M19 5L5 19"></path>
                  </svg>
                  OPEN APP
                </div>
              </a>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* section one */}
      <div className="min-[320px]:w-screen min-[320px]:min-w-full">
        <div className="relative flex flex-col justify-between top-0 mt-0 w-full h-full z-20 bg-white">
          <div className="mt-[152px] w-full text-center">
            <h1 className="px-2 sm:px-8 max-w-3xl mx-auto font-jakarta [text-wrap:balance] text-[36px] sm:text-[54px] sm:leading-[66px] leading-[46px] font-extrabold text-black">
              Reach 1M views in record time.
            </h1>
            <br />
            <h2 className="px-5 text-[15px] md:text-lg text-gray-800 md:opacity-60">
              Instantly generate viral TikTok Shop scripts with AI. Going viral,
              made easy
            </h2>
          </div>
          <button
            type="button"
            className="mt-8 mx-auto flex items-center animate-shimmer justify-center bg-[#FF00B8] text-white px-8 py-4 text-sm hover:scale-105 font-semibold rounded-full border-4 border-[#FFCCF1] bg-[length:200%_100%] bg-[linear-gradient(110deg,#FF00B8,45%,#FF56D0,55%,#FF00B8)] transition-colors hover:bg-light-400 "
          >
            Try Viralify AI now
          </button>
          <div className="mt-6 flex justify-center space-x-8">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium ml-2">
                  Loved by over 2000 creators
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section two */}
      <section className="mt-16">
        <div>
          <div className="overflow-hidden whitespace-nowrap max-w-full flex h-fit max-h-fit md:mt-16 mt-8">
            <div className=" animate-scroll hover:pause flex h-fit max-h-fit">
              <div className="inline-block mx-2"></div>
              <div className="inline-block mx-2">
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/tsUYq6lkXnM"
                  className="rounded-2xl"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={false}
                ></iframe>
              </div>
              <div className="inline-block mx-2">
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/MwJEff9H_Ko"
                  className="rounded-2xl"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={false}
                ></iframe>
              </div>
              <div className="inline-block mx-2">
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/b1kw0t8wXV4"
                  className="rounded-2xl"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={false}
                ></iframe>
              </div>
              <div className="inline-block mx-2">
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/XfVXPwHIKcY"
                  className="rounded-2xl"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={false}
                ></iframe>
              </div>
              <div className="inline-block mx-2">
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/FMee9QoKwi8"
                  className="rounded-2xl"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={false}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section three */}
      <div className="w-full flex md:px-16 px-4">
        <div
          style={{
            backgroundImage: "url(bg-2.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full relative md:mt-20 min-[320px]:mt-10 mx-auto left-0 right-0 text-center rounded-2xl z-20"
        >
          <div className="flex md:flex-row md:px-16 md:justify-between md:pt-10 min-[320px]:flex-col relative z-20">
            <h1 className="font-jakartaPlus text-wrap md:text-4xl md:font-[540] text-white text-left md:w-[40%] min-[320px]:font-jakartaPlus min-[320px]:mt-6 min-[320px]:text-[28px] min-[320px]:font-[580] min-[320px]:w-[90%] min-[320px]:p-0 min-[320px]:mx-auto">
              Create viral content in 3 simple steps
            </h1>
            <div className="flex flex-row md:w-[25%] justify-end">
              <div className="min-[320px]:hidden"></div>
            </div>
            <div className="md:w-[47%] md:font-normal min-[320px]:mt-6 min-[320px]:mx-auto min-[320px]:text-center min-[320px]:w-[90%]">
              <h1 className="md:text-left min-[320px]:text-left min-[320px]:p-0 min-[320px]:mx-auto text-white md:w-[90%] md:font-medium md:text-lg min-[320px]:text-base "></h1>
            </div>
          </div>
          <div className="w-full md:px-16 px-4 gap-4 relative flex md:flex-row md:gap-8 justify-start items-start min-[320px]:flex-col md:pt-10 min-[320px]:gap-y-[20px] md:mt-[50px] mt-8 h-fit z-20">
            <div className="min-[320px]:w-[100%] min-[320px]:mx-auto bg-[#FFEBF9] rounded-2xl">
              <div className="flex flex-col text-start pl-7">
                <i
                  className="fa-solid fa-upload pt-10 cursor-pointer text-primary-400 text-3xl"
                  aria-hidden="true"
                ></i>
                <div className="mt-4 font-jakartaPlus font-medium">
                  Lorem ispsum dolor set amet
                </div>
              </div>
              <div className="mt-[4px]">
                <p className="text-left pl-7 pr-6 pb-8 pt-4 text-sm lg:pt-4 lg:text-base opacity-60">
                  Lorem ispsum dolor set amet
                  <span className="opacity-0">Lorem ispsum dolor set amet</span>
                </p>
              </div>
            </div>
            <div className="min-[320px]:w-[100%] min-[320px]:mx-auto bg-[#FFEBF9] rounded-2xl">
              <div className="flex flex-col text-start pl-7">
                <i
                  className="fa-solid fa-wand-magic-sparkles pt-10 cursor-pointer text-primary-400 text-3xl"
                  aria-hidden="true"
                ></i>
                <div className="mt-4 font-jakartaPlus font-medium">
                  Lorem ispsum dolor set amet
                </div>
              </div>
              <div className="mt-[4px]">
                <p className="text-left pl-7 pr-6 pb-8 pt-4 text-sm lg:pt-4 lg:text-base opacity-60">
                  Lorem ispsum dolor set amet
                </p>
              </div>
            </div>
            <div className="min-[320px]:w-[100%] min-[320px]:mx-auto bg-[#FFEBF9] rounded-2xl">
              <div className="flex flex-col text-start pl-7">
                <i
                  className="fa-solid fa-file-export pt-10 cursor-pointer text-primary-400 text-3xl"
                  aria-hidden="true"
                ></i>
                <div className="mt-4 font-jakartaPlus font-medium">
                  Lorem ipsum doloar set amet
                </div>
              </div>
              <div className="mt-[4px]">
                <p className="text-left pl-7 pr-6 pb-8 pt-4 text-sm lg:pt-4 lg:text-base opacity-60">
                  Lorem ispusum doloar set amet
                </p>
              </div>
            </div>
          </div>
          <div className="md:pb-12 mt-10 min-[320px]:pb-5 flex flex-row gap-1 justify-center cursor-pointer"></div>
        </div>
      </div>

      {/* section four */}
      <div className="relative">
        <div className="mt-16">
          <h1 className="mx-auto top-0 right-0 text-center mt-4 text-3xl md:text-5xl tracking-tight md:font-extrabold md:font-jakarta font-bold font-jakartaPlus text-dark-500">
            What our users have to say
          </h1>
        </div>
        <div className="flex flex-col mx-auto lg:pt-28 relative ">
          <div className="flex justify-center lg:flex-row min-[320px]:flex min-[320px]:flex-col space-y-12 lg:space-y-0 ">
            <div className="md:pt-24 min-[320px]:pt-8">
              <div className=" bg-[#FFDD55] px-7 py-7 rounded-2xl w-[295px] mx-auto">
                <div>
                  <p className="font-medium text-left text-sm md:text-base pb-8 pt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                  </p>
                </div>
                <div>
                  <p className="text-dark-500 font-semibold">Lorem</p>
                </div>
              </div>
            </div>
            <div className="z-10">
              <div className="bg-[#FF5CD2] px-7 py-7 rounded-2xl rotate-[-13.53deg] w-[295px] mx-auto">
                <div className=""></div>
                <div>
                  <p className="font-medium text-left text-sm md:text-base text-white py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis auteLorem ipsum dolor sit amet,
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold">Lorem</p>
                </div>
              </div>
            </div>
            <div className="sm:pt-20">
              <div className="px-7 py-7 rounded-2xl bg-[#333333] rotate-[18.54deg] w-[265px] mx-auto">
                <div>
                  <p className="font-medium text-white text-sm md:text-base text-left py-4 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold">Lorem</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:flex-row min-[320px]:flex min-[320px]:flex-col space-y-16 lg:space-y-0">
            <div className="order-3 lg:order-1 mt-16 lg:mt-0 ">
              <div className="bg-[#4DDEC4] p-4 md:px-7 md:py-7 rounded-2xl rotate-[16.48deg] w-[265px] mx-auto :">
                <div className=""></div>
                <div>
                  <p className="font-medium text-left text-sm py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </div>
                <div>
                  <p className="text-dark-500 font-semibold">Lorem</p>
                </div>
              </div>
            </div>
            <div className="z-20 order-2 lg:order-2">
              <div className="bg-[#FFFFFF] px-7 py-7 rounded-2xl border-[1px] rotate-[-2.39deg] w-[265px] mx-auto">
                <div className=""></div>
                <div>
                  <p className="font-medium text-left text-sm md:text-base py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </div>
                <div>
                  <p className="text-dark-500 font-semibold">Lorem</p>
                </div>
              </div>
            </div>
            <div className="z-30 order-1 lg:order-3">
              <div className=" bg-[#8D4DDE] px-7 py-7 rounded-2xl rotate-[-11.82deg] w-[295px] mx-auto">
                <div className=""></div>
                <div>
                  <p className="font-medium text-left text-sm md:text-base text-white py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-white font-semibold">Lorem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section five */}
      <div className="px-2 sm:px-0">
        <div
          style={{
            backgroundImage: "url(bg-1.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[99%] md:w-[90%] mx-auto rounded-[28px] mt-16 relative overflow-hidden"
        >
          <div className="">
            <div className="w-[80%] mx-auto pt-[80px] md:pt-[80px]">
              <h1 className="font-bold relative z-20 md:font-bold font-jakartaPlus mx-auto text-white text-[32px] md:text-[47px] md:leading-[50px] lg:text-[57px] leading-[40px] lg:leading-[40px] text-center">
                Ready to get viral using Viralify?
              </h1>
            </div>
            <p className="text-white relative z-20 text-[14px] md:text-[20px] text-center mt-4">
              Join 1000s of other creators and use Viralify today!
            </p>
            <div className="w-[50%] pb-20 mx-auto text-center mt-5 md:mt-12 md:pb-20">
              <button
                type="button"
                className="hover:scale-105 text-[15px] font-semibold py-4 px-6 md:text-[16px] md:font-semibold text-[#FF00B8] bg-white md:px-8 relative z-20 md:py-3 rounded-md mx-auto text-center"
              >
                Try Viralify Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section six */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start"></div>
            <div className="text-center md:text-right"></div>
          </div>
          <nav className="mt-8">
            <ul className="flex flex-wrap justify-center md:justify-start gap-6">
              <li>
                <a
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  href="/terms"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
