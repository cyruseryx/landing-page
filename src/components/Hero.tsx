import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonUrl?: string;
  onButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title = "Welcome to Our Business",
  subtitle = "We provide the best services in town",
  backgroundImage = "/images/hero-bg.jpg",
  buttonText = "Learn More",
  buttonUrl = "/about",
  onButtonClick
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    }
  };

  return (
    <div
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        minHeight: '500px'
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {subtitle}
        </p>
        <div className="mt-10">
          <a
            href={buttonUrl}
            onClick={handleClick}
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
