import React from 'react';

interface Program {
  image: string;
  title: string;
  audience: string;
  modules: string;
  instructors: string;
  description: string;
}

interface JourneyStep {
  id: number;
  title: string;
  description: string;
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Seamless Onboarding",
    description: "Quick and easy registration process to get you started on your learning path"
  },
  {
    id: 2,
    title: "Personalized Learning Plan",
    description: "Customized curriculum based on your goals and current skill level"
  },
  {
    id: 3,
    title: "Interactive Content",
    description: "Engage with dynamic learning materials and real-world examples"
  },
  {
    id: 4,
    title: "Progress Tracking",
    description: "Monitor your advancement with detailed analytics and insights"
  },
  {
    id: 5,
    title: "Expert Support",
    description: "Access to mentors and instructors throughout your journey"
  },
  {
    id: 6,
    title: "Certification",
    description: "Earn recognized certificates upon completing your courses"
  }
];

const programs: Program[] = [
  {
    image: "/path-to-image/campus-training.jpg", // Replace with actual image path
    title: "Campus Training",
    audience: "For students",
    modules: "24+ Modules",
    instructors: "10 instructors",
    description: "The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs."
  },
  {
    image: "/path-to-image/professional-training.jpg", // Replace with actual image path
    title: "Professional Training",
    audience: "For Professionals",
    modules: "24+ Modules",
    instructors: "10 instructors",
    description: "The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs."
  }
];


const Programs: React.FC = () => {
  return (
<section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-semibold mt-12 mb-20 mx-36">
          Check Out Our <span className="text-teal-500">Holistic Programs</span> Designed
          To Help You Reach Your <span className="text-teal-500">Goals</span>
        </h2>
      </div>
      <div className="container mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-2xl border-2 overflow-hidden flex flex-col lg:flex-row items-center mx-60 my-5"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full lg:w-1/3 h-48 lg:h-auto object-cover"
            />
            <div className="p-10 lg:w-2/3 text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
              <p className="text-xl font-semibold text-gray-600 mb-1 text-justify">
                {program.audience} | {program.modules} | {program.instructors}
              </p>
              <p className="text-gray-700 mb-4 text-justify text-xl">{program.description}</p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-2xl text-lg hover:bg-blue-600 transition ml-[310px] drop-shadow-xl">
                Explore <i className='fa fa-chevron-right font-thin'></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-white overflow-hidden">
      {/* Header Title with Triangles */}
      <div className="container mx-auto px-4 pt-8 text-center mb-16">
        <div className="flex items-center justify-center gap-6">
          <svg className="w-8 h-8 text-teal-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M0 12L12 0L24 12L12 24L0 12Z"
              transform="rotate(-45 12 12)"
            />
          </svg>
          <h1 className="text-4xl font-semibold">
            Our Efforts To{' '}
            <span className="text-teal-400">Innovate</span> Have Been{' '}
            <span className="text-teal-400">Recognized</span> And Appreciated
          </h1>
          <svg className="w-8 h-8 text-teal-400" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M0 12L12 0L24 12L12 24L0 12Z"
              transform="rotate(-45 12 12)"
            />
          </svg>
        </div>
      </div>

      {/* Recognition Images Section */}
      <div className="relative w-full">
        {/* Teal Background Strip */}
        <div className="absolute w-full h-48 bg-teal-400">
          <div className="absolute left-4 top-1/2 w-4 h-4 bg-white rounded-full transform -translate-y-1/2"></div>
          <div className="absolute right-4 top-1/2 w-4 h-4 bg-white rounded-full transform -translate-y-1/2"></div>
        </div>

        {/* Images Container */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            {/* First Recognition Image */}
            <div className="relative mb-8">
              <div className="bg-white rounded-xl p-3 shadow-lg transform -rotate-6 inline-block">
                <img
                  src="/api/placeholder/600/300"
                  alt="Recognition 1"
                  className="rounded-lg w-full max-w-xl"
                />
              </div>
              <div className="absolute -right-4 top-4 bg-blue-500 text-white p-4 rounded-lg transform rotate-12">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit
                </p>
              </div>
            </div>

            {/* Second Recognition Image */}
            <div className="text-center transform translate-y-8">
              <div className="bg-white rounded-xl p-3 shadow-lg transform rotate-6 inline-block mb-4">
                <img
                  src="/api/placeholder/600/300"
                  alt="Recognition 2"
                  className="rounded-lg w-full max-w-xl"
                />
              </div>
              <div className="text-gray-700 mt-6">
                <p className="font-medium">Honored by Shri Dharmendra Pradhan ji</p>
                <p>Union Minister for Education</p>
                <p>GOVT. of India - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Title */}
      <div className="container mx-auto px-4 text-center mt-24 mb-16">
        <h2 className="text-3xl font-medium leading-relaxed">
          Because We Offer What You Need
          <br />
          At <span className="text-teal-400">Every Step</span> Of Your
          <br />
          <div className="flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2L2 22h20L12 2z" />
            </svg>
            <span className="text-teal-400">Transformative Learning Journey</span>
          </div>
        </h2>
      </div>
    </div>
    <div className="flex justify-center mb-16">
            <div className="rounded-full bg-blue-500 w-48 h-48 overflow-hidden">
              <img
                src="/api/placeholder/200/200"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Journey Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200"></div>

              {/* Steps */}
              {journeySteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-1/2 px-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold text-teal-600 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-teal-500 rounded-full border-4 border-white shadow absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-t from-cyan-100 to-white h-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src="/api/placeholder/150/100"
                  alt={`Person ${i}`}
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
