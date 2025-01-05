import React from "react";
import {Fade, Rotate, Slide} from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="carousel w-full min-h-[500px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero bg-gradient-to-r from-teal-400 to-blue-500 w-full">
          <div className="flex gap-10 md:gap-32 items-center flex-col lg:flex-row-reverse p-8 ">
            <Rotate duration={2500}>
              <img
                src="https://i.ibb.co/p2fwJGc/Idea-Generation-1.webp"
                className="max-w-md rounded-lg shadow-2xl object-cover"
                alt="Creative Ideas"
              />
            </Rotate>
            <div className="text-center lg:text-left text-white space-y-4">
              <Slide direction="left" duration={1000}>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
                  Support Innovative Ideas
                </h1>
              </Slide>
              <Fade duration={1500}>
                <p className="py-4 text-gray-700">
                  Contribute to creative ideas and make a <br /> difference in
                  the world. Crowdfunding allows you to bring ideas to life,{" "}
                  <br />
                  whether it's for a new product, art, or a social cause.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <div className="hero bg-gradient-to-r from-yellow-400 to-orange-500 w-full">
          <div className="flex gap-10 md:gap-32 items-center flex-col lg:flex-row-reverse p-8">
            <Slide direction="right" duration={1000}>
              <img
                src="https://i.ibb.co.com/PCsTp0s/getty-491381689-970664970450081-54146.jpg"
                className="max-w-md rounded-lg shadow-2xl object-cover"
                alt="Support Local Startups"
              />
            </Slide>
            <div className="text-center lg:text-left text-white space-y-4">
              <Fade duration={2500}>
                {" "}
                <h1 className="text-4xl font-bold  text-gray-700">
                  Support Local Startups
                </h1>{" "}
              </Fade>

              <p className="py-4 text-lg  text-gray-600">
                Help local entrepreneurs bring their business ideas to life.{" "}
                <br /> By supporting startups, you contribute to innovation and
                economic growth.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <div className="hero bg-gradient-to-r from-purple-600 to-pink-500 w-full">
          <div className="flex gap-10 md:gap-32 items-center flex-col lg:flex-row-reverse p-8">
            <Slide direction="left" duration={1000}>
              <img
                src="https://i.ibb.co.com/tB04bBq/maxresdefault.jpg"
                className="max-w-md rounded-lg shadow-2xl object-cover"
                alt="Fund Future Innovations"
              />{" "}
            </Slide>

            <div className="text-center lg:text-left text-white space-y-4">
              <Fade duration={1500}>
                {" "}
                <h1 className="text-4xl font-bold  text-gray-700">
                  Fund Future Innovations
                </h1>{" "}
              </Fade>

              <p className="py-4 text-lg  text-gray-800">
                Be part of groundbreaking innovations. Your contributions help{" "}
                <br />
                shape the future of technology, science, and creativity.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
