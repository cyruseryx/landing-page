import React from 'react';

interface NavigationItem {
  label: string;
  url: string;
  onClick?: () => void;
}

interface HeaderProps {
  logo?: string;
  navigation?: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({
  logo = '/images/logo.svg',
  navigation = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Contact', url: '/contact' }
  ]
}) => {
  const handleNavClick = (item: NavigationItem, e: React.MouseEvent) => {
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block h-8 w-auto"
                src={logo}
                alt="Logo"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.url}
                onClick={(e) => handleNavClick(item, e)}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
