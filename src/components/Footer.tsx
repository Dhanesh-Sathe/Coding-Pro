import React from 'react';
// import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Contact Section */}
          <div className="col-span-1">
            <h2 className="text-3xl font-bold mb-4">Let's keep in touch!</h2>
            <p className="text-blue-100 mb-6">
              Request a CodingPro Institute enquiry!
            </p>
            
            {/* Contact Form */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Institute name"
                  className="bg-blue-900/30 text-white placeholder-blue-200 py-2 px-4 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-teal-400 hover:bg-teal-500 p-2 rounded-r-md transition-colors">
                  <i className='fa fa-arrow-right'></i>
                </button>
              </div>
            </div>

            {/* Account Links */}
            <div className="space-y-2 mb-6">
              <button className="text-blue-100 hover:text-white transition-colors">
                Create Account
              </button>
              <br />
              <button className="text-blue-100 hover:text-white transition-colors">
                Sign in
              </button>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-100">
                <i className="fa fa-phone w-5 h-5" />
                <span>+91 97973 59144</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <i className="fa fa-envelope w-5 h-5" />
                <span>codingjr.in@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-blue-100">
                <i className="fa fa-map-pin w-5 h-5 mt-1" />
                <span>AIC-BHU, Varanasi, 421004</span>
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Courses</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Campus Training Program
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Professional Training Program
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  B. Tech
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  B. Des.
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-pink-600 p-2 rounded-md hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <i className='fa fa-instagram'></i>
              </a>
              <a 
                href="#" 
                className="bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <i className='fa fa-facebook'></i>
              </a>
              <a 
                href="#" 
                className="bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <i className='fa fa-linkedin'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
