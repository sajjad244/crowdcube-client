import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full min-h-screen">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero bg-gradient-to-r from-teal-400 to-blue-500 w-full">
          <div className="hero-content flex-col lg:flex-row-reverse p-8">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-md rounded-lg shadow-2xl object-cover"
              alt="Creative Ideas"
            />
            <div className="text-center lg:text-left text-white space-y-4">
              <h1 className="text-4xl font-semibold">
                Support Innovative Ideas
              </h1>
              <p className="py-4 text-lg">
                Contribute to creative ideas and make a difference in the world.
                Crowdfunding allows you to bring ideas to life, whether it's for
                a new product, art, or a social cause.
              </p>
              <button className="btn btn-primary text-lg py-3 px-6">
                Learn More
              </button>
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
          <div className="hero-content flex-col lg:flex-row-reverse p-8">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="max-w-md rounded-lg shadow-2xl object-cover"
              alt="Support Local Startups"
            />
            <div className="text-center lg:text-left text-white space-y-4">
              <h1 className="text-4xl font-semibold">Support Local Startups</h1>
              <p className="py-4 text-lg">
                Help local entrepreneurs bring their business ideas to life. By
                supporting startups, you contribute to innovation and economic
                growth.
              </p>
              <button className="btn btn-primary text-lg py-3 px-6">
                Support Now
              </button>
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
          <div className="hero-content flex-col lg:flex-row-reverse p-8">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="max-w-md rounded-lg shadow-2xl object-cover"
              alt="Fund Future Innovations"
            />
            <div className="text-center lg:text-left text-white space-y-4">
              <h1 className="text-4xl font-semibold">
                Fund Future Innovations
              </h1>
              <p className="py-4 text-lg">
                Be part of groundbreaking innovations. Your contributions help
                shape the future of technology, science, and creativity.
              </p>
              <button className="btn btn-primary text-lg py-3 px-6">
                Join Now
              </button>
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
