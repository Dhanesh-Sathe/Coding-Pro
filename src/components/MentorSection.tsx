import React from 'react';

interface Mentor {
  name: string;
  role: string;
  company: string;
  image: string;
  backgroundColor: string;
}

interface NewsItem {
  title: string;
  image: string;
  date: string;
  link: string;
}

const MentorSection: React.FC = () => {
  const mentors: Mentor[] = [
    {
      name: "Vikas Shukla",
      role: "Software Engineering",
      company: "IIT-BHU",
      image: "/mentors/vikas.jpg",
      backgroundColor: "bg-teal-400",
    },
    {
      name: "Sumit Bhatt",
      role: "Software Engineering",
      company: "IIT-BHU",
      image: "/mentors/sumit.jpg",
      backgroundColor: "bg-blue-500",
    },
    {
      name: "Neelu Verma",
      role: "Software Engineering",
      company: "IIT-BHU",
      image: "/mentors/neelu.jpg",
      backgroundColor: "bg-teal-400",
    },
  ];

  const newsItems: NewsItem[] = [
    {
      title: "Cracking JEE CEO Sumit Bhatt facilitated at Times 40 Under 40",
      image: "/news/times.jpg",
      date: "15 March 2024",
      link: "#",
    },
    {
      title: "Meet Vikas Shukla - The flag bearer of technology and innovation",
      image: "/news/vikas.jpg",
      date: "10 March 2024",
      link: "#",
    },
    {
      title: "Meet Vikas Shukla - The flag bearer of technology and innovation",
      image: "/news/vikas2.jpg",
      date: "5 March 2024",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-gray-600 mb-2">We Know Just Education Is Not Enough Anymore</p>
        <h2 className="text-3xl font-bold">
          So We've Got The <span className="text-teal-500">Best Mentors</span> For You.
        </h2>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg ${mentor.backgroundColor}`}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              <p className="text-white/90">{mentor.role}</p>
              <p className="text-white/80">{mentor.company}</p>
              <p className="mt-4 text-sm text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                scelerisque finibus sapien ac sagittis.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* News Section */}
      <div className="mt-20">
        <h2 className="text-center text-3xl font-bold mb-12">
          We've Also Been In <span className="text-teal-500">News!</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{item.date}</span>
                  <a
                    href={item.link}
                    className="text-teal-500 hover:text-teal-600 text-sm font-medium"
                  >
                    Read article →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorSection;