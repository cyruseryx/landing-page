import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Features from '../components/Features';

interface HomeProps {
  heroProps?: any;
  featuresProps?: any;
  headerProps?: any;
  footerProps?: any;
}

const Home: React.FC<HomeProps> = ({
  heroProps = {},
  featuresProps = {},
  headerProps = {},
  footerProps = {}
}) => {
  return (
    <MainLayout headerProps={headerProps} footerProps={footerProps}>
      <Hero {...heroProps} />
      <Features {...featuresProps} />
    </MainLayout>
  );
};

export default Home;
