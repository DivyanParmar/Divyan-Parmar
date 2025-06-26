import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: "Expertise",
      description: "Deep learning, Computer Vision, NLP, and MLOps with proven track record"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Led cross-functional teams in delivering AI solutions at enterprise scale"
    },
    {
      icon: Target,
      title: "Results",
      description: "Improved model accuracy by 40% and reduced inference time by 60%"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Published research and pioneered novel approaches to complex AI challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a passionate Data Scientist & AI / ML Engineer with over 5 years of experience transforming 
                complex data challenges into intelligent, scalable solutions. My expertise spans 
                the entire machine learning lifecycle, from research and experimentation to 
                production deployment and monitoring.
              </p>
              <p>
                I specialize in deep learning architectures, computer vision, natural language 
                processing, and MLOps practices. I've successfully deployed models that process 
                millions of transactions daily and have contributed to open-source AI projects 
                used by thousands of developers worldwide.
              </p>
              <p>
                When I'm not building AI systems, you'll find me contributing to research papers, 
                mentoring aspiring data scientists, or exploring the latest developments in 
                generative AI and reinforcement learning.
              </p>
            </div>
          </div>

          <div>
          <img 
  src="/images/divyan-parmar.jpg" 
  alt="Divyan Parmar - AI Engineer"
  className="rounded-2xl shadow-2xl object-cover w-full max-w-md md:max-w-lg lg:max-w-xl h-auto mx-auto"
/>

          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;