import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 flex dirction-row px-24">
      <div className='h-[400px] w-[950px]'>
        <img src="./images/1.png" alt="Screen" className='h-full w-full'/>
      </div>
      <div className="container mx-auto text-center px-6">
        <h2 className="text-7xl text-left font-bold text-gray-800 mb-4">Where The World Learns To Code</h2>
        <div className="flex dirction-row mt-10">
          <div className='border-2 border-blue-500 p-5 w-[250px] rounded-lg mx-2'>
            <i className="fa fa-university text-4xl text-blue-500" />
            <h2 className='text-xl text-blue-800 font-semibold'>Campus Training</h2>          
            <p className='text-[11px] text-left mt-1'>Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum dolor </p>
            <button className="bg-blue-500 text-white px-5 mt-5 shadow-lg p-2 rounded-lg hover:shadow-xl">Explore <i className='fa fa-chevron-right font-thin'></i></button>
          </div>
          <div className='border-2 border-blue-500 p-5 w-[250px] rounded-lg mx-2'>
            <i className="fa fa-university text-4xl text-blue-500" />
            <h2 className='text-xl text-blue-800 font-semibold'>Campus Training</h2>          
            <p className='text-[11px] text-left mt-1'>Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum dolor </p>
            <button className="bg-blue-500 text-white px-5 mt-5 shadow-lg p-2 rounded-lg hover:shadow-xl">Explore <i className='fa fa-chevron-right font-thin'></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
