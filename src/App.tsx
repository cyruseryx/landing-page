import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import manifestData from '../manifest.json'

function App() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('home');

  // Get component props from manifest
  const getComponentProps = (componentId) => {
    const component = manifestData.editableComponents.find(comp => comp.id === componentId);
    if (!component) return {};

    // Convert the props array to an object
    const propsObject = {};
    component.props.forEach(prop => {
      propsObject[prop.name] = prop.default;
    });

    return propsObject;
  };

  // Get props for each component
  const headerProps = getComponentProps('header');
  const heroProps = getComponentProps('hero');
  const featuresProps = getComponentProps('features');
  const footerProps = getComponentProps('footer');
  const aboutProps = getComponentProps('about');

  // Handle navigation
  const handleNavigation = (path) => {
    if (path === '/') {
      setCurrentPage('home');
    } else if (path === '/about') {
      setCurrentPage('about');
    }
    // Add more routes as needed
  };

  // Override navigation handlers in header props
  const headerPropsWithNavigation = {
    ...headerProps,
    navigation: headerProps.navigation?.map(item => ({
      ...item,
      onClick: () => handleNavigation(item.url)
    }))
  };

  // Override button click in hero props
  const heroPropsWithNavigation = {
    ...heroProps,
    onButtonClick: () => handleNavigation(heroProps.buttonUrl)
  };

  // Render the appropriate page based on currentPage state
  if (currentPage === 'about') {
    return <About {...aboutProps} />;
  }

  // Default to home page
  return (
    <Home
      heroProps={heroPropsWithNavigation}
      featuresProps={featuresProps}
      headerProps={headerPropsWithNavigation}
      footerProps={footerProps}
    />
  );
}

export default App
