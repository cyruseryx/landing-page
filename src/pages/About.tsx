import React from 'react';
import MainLayout from '../layouts/MainLayout';

interface AboutProps {
  title?: string;
  content?: string;
  image?: string;
}

const About: React.FC<AboutProps> = ({
  title = "About Our Company",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image = "/images/about.jpg"
}) => {
  return (
    <MainLayout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          </div>
          
          <div className="mt-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <p className="mt-4 text-lg text-gray-500">
                  {content}
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  className="rounded-lg shadow-lg"
                  src={image}
                  alt="About us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
