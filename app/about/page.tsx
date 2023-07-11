import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Welcome to our website! We are a software development company
            founded by Priyanshu Verma, the CEO and sole developer of our
            Saas-based URL Shortener service. As a one-person team, our focus is
            on delivering high-quality solutions to our users. <br /> <br />
            Our URL Shortener service is designed to provide a fast and reliable
            way to shorten long URLs into concise and shareable links. We
            understand the importance of efficiency and simplicity in the
            digital world, which is why we offer this service for free forever.
            Our commitment is to make URL shortening accessible to everyone
            without any cost.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            t all began with a passion for innovation and a vision to simplify
            the way we share and access information online. Our story starts
            with Priyanshu Verma, a driven and determined developer, who
            embarked on a journey to create a powerful URL Shortener software.
            <br />
            <br />
            As the sole member of our team, Priyanshu embraced the challenge of
            building a Saas-based solution that would offer users a free,
            reliable, and forever accessible URL shortening service. With a deep
            understanding of the value of simplicity and efficiency, he set out
            to develop a tool that would make a meaningful impact in the digital
            landscape.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            {/* <div className="grid  grid-cols-3 lg:gap-4 shadow-lg rounded-md"> */}
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="/img/profile-img.png"
                alt="Priyanshu featured Img"
              />
              <img
                className="md:hidden block"
                src="/img/profile-img.png"
                alt="Priyanshu featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Priyanshu
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                <a href="mailto:connect@antrikshdev.tech?body=I want to Join Your Saas">
                  Join Us &#8594;
                </a>
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                <a href="mailto:connect@antrikshdev.tech?body=I want to Join Your Saas">
                  connect@antrikshdev.tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
