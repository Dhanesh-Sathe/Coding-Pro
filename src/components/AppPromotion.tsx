import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBook, 
  faDisplay, 
  faCloud, 
  faFileLines, 
  faGraduationCap,
//   faMagazine 
} from '@fortawesome/free-solid-svg-icons';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

const AppPromotion: React.FC = () => {
  const features: Feature[] = [
    { 
      icon: <FontAwesomeIcon icon={faBook} className="w-5 h-5" />, 
      text: "Recorded Lectures" 
    },
    { 
      icon: <FontAwesomeIcon icon={faDisplay} className="w-5 h-5" />, 
      text: "Online Quizzes" 
    },
    { 
      icon: <FontAwesomeIcon icon={faCloud} className="w-5 h-5" />, 
      text: "Cloud Compilation" 
    },
    { 
      icon: <FontAwesomeIcon icon={faFileLines} className="w-5 h-5" />, 
      text: "Evaluation Reports" 
    },
    { 
      icon: <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />, 
      text: "Project Size" 
    },
    // { 
    //   icon: <FontAwesomeIcon icon={faMagazine} className="w-5 h-5" />, 
    //   text: "Coding Magazine" 
    // },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* App Promotion Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-100 bg-opacity-50 -z-10" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,200,200,0.1) 5px, rgba(0,200,200,0.1) 10px)"
          }} />
          
          {/* Phone Image */}
          <div className="relative w-64 mx-auto">
            <div className="bg-gradient-to-b from-cyan-400 to-blue-500 rounded-3xl shadow-xl p-2 h-[500px] w-[250px] text-2xl">
              <img 
                src="./images/2.png"
                alt="Coding Pro App" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                <div className="text-white font-bold text-xl">Coding Pro</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Wanna See More?<br />
            Join Us!
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <div className="w-3 h-8 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  {feature.icon}
                </div>
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* App Store Buttons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
              <span>Google Play</span>
            </a>
            <a href="#" className="bg-gray-900 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
              <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sign Up Form Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section with Image */}
          <div className="relative overflow-hidden rounded-lg h-[400px] w-[150px]">
            <img 
              src="./images/2.png"
              alt="Developer" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Section with Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-500">
              Find Out More<br />
              Reasons To Stay
            </h2>

            <form className="space-y-4">
              <div>
                <input 
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input 
                  type="tel"
                  placeholder="Mobile no."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input 
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox"
                  id="terms"
                  className="mt-1"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  Creating an account means you're okay with our Terms of Service and Privacy Policy
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Enquire Now
              </button>

              <div className="text-center text-sm text-gray-600">
                Already Have An Account? {' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;