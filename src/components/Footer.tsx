import React from 'react';

interface FooterLink {
  label: string;
  url: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface FooterProps {
  logo?: string;
  companyName?: string;
  description?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyright?: string;
}

const Footer: React.FC<FooterProps> = ({
  logo = "/images/logo.svg",
  companyName = "Your Company",
  description = "Making the world a better place through innovative solutions.",
  columns = [
    {
      title: "Company",
      links: [
        { label: "About", url: "/about" },
        { label: "Careers", url: "/careers" },
        { label: "Contact", url: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", url: "/blog" },
        { label: "Newsletter", url: "/newsletter" },
        { label: "Events", url: "/events" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", url: "/privacy" },
        { label: "Terms", url: "/terms" },
        { label: "Cookie Policy", url: "/cookie-policy" }
      ]
    }
  ],
  socialLinks = [
    { platform: "Facebook", url: "https://facebook.com", icon: "/images/facebook.svg" },
    { platform: "Twitter", url: "https://twitter.com", icon: "/images/twitter.svg" },
    { platform: "Instagram", url: "https://instagram.com", icon: "/images/instagram.svg" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "/images/linkedin.svg" }
  ],
  copyright = `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`
}) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src={logo}
              alt={companyName}
            />
            <p className="text-gray-300 text-base">
              {description}
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.platform} href={item.url} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.platform}</span>
                  <img src={item.icon} alt={item.platform} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {columns.slice(0, 2).map((column) => (
                <div key={column.title} className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.url} className="text-base text-gray-300 hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {columns.slice(2).map((column) => (
                <div key={column.title} className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.url} className="text-base text-gray-300 hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
