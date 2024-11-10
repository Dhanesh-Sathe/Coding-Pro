import React from 'react';

const Navbar: React.FC = () => {
  return (
    // <div></div>
    <nav className="bg-white shadow-lg ">
      <div className='px-[450px] bg-blue-300 py-4 font-semibold'>Learn Coding at the nearby <span className='text-blue-900'> Coding Pro </span> Institue. <a href="#" className='text-blue-900 underline'>Enquire Now</a></div>
      <div className="container mx-auto flex justify-evenly items-center py-6 px-12">
        <h1 className="text-3xl font-bold text-blue-600">PRO CODING PRO</h1>
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#features" className="text-gray-700 hover:text-blue-600 px-4">About Us</a></li>
          <li><a href="#programs" className="text-gray-700 hover:text-blue-600 px-4">Virtual Labs</a></li>
          <li><a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-4">Programs</a></li>
          <li><a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-4">For Colleges</a></li>
        </ul>
        <div>
            <button className="bg-white border-blue-600 border-2 text-blue-800 px-6 py-2 rounded-lg mr-6 text-xl">Log in</button>
            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg mx-6 border-blue-600 border-2 text-xl">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
