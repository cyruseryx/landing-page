import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  features?: Feature[];
}

const Features: React.FC<FeaturesProps> = ({
  sectionTitle = "Our Features",
  sectionSubtitle = "Check out our amazing features that set us apart",
  features = [
    {
      title: "Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "/images/feature-1.svg"
    },
    {
      title: "Feature 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "/images/feature-2.svg"
    },
    {
      title: "Feature 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "/images/feature-3.svg"
    }
  ]
}) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {sectionSubtitle}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-md shadow-lg">
                        <img src={feature.icon} alt={feature.title} className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
