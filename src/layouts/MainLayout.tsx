import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
  headerProps?: any;
  footerProps?: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  headerProps = {}, 
  footerProps = {} 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header {...headerProps} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  );
};

export default MainLayout;
