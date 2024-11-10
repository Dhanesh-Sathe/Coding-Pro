import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/path-to-icon/alumni-icon.png", // Replace with your actual path
    title: "Created by IIT-IIM Alumni",
    description: "We’ve learnt from the best and strive to bring you the best."
  },
  {
    icon: "/path-to-icon/ai-icon.png", // Replace with your actual path
    title: "A.I. Integration",
    description: "We have harnessed the power of A.I. to enhance and assess your knowledge."
  },
  {
    icon: "/path-to-icon/coding-icon.png", // Replace with your actual path
    title: "In-app Coding",
    description: "The app features in-app coding, eliminating the need for laptops."
  },
  {
    icon: "/path-to-icon/ebooks-icon.png", // Replace with your actual path
    title: "Extensive E-books",
    description: "Deepen your understanding and mastery of the skills."
  },
  {
    icon: "/path-to-icon/lectures-icon.png", // Replace with your actual path
    title: "Recorded Lectures",
    description: "Access lectures anywhere and anytime at your own pace."
  },
  {
    icon: "/path-to-icon/flashcards-icon.png", // Replace with your actual path
    title: "Flash cards",
    description: "Make learning convenient and fun using flash cards."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-blue-500 py-12 px-24">
      <div className="container mx-auto text-white mb-8">
        <h2 className="text-5xl text-left p-4 font-semibold">What Sets Us Apart?</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col text-left text-gray-800"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl text-left font-semibold text-blue-600 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
