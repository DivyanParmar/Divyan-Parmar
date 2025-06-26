import React from 'react';
import { MapPin, Calendar, Award, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
  title: "iOS Developer",
  company: "xR Studio",
  location: "Surat, Gujarat",
  period: "Jun 2023 - Sep 2023",
  description: "Worked on building and maintaining iOS applications with a focus on performance, clean UI, and integration of third-party services.",
  achievements: [
    "Developed and deployed 3+ iOS apps to the App Store with 10K+ combined downloads",
    "Improved app launch speed by 40% using optimization techniques",
    "Integrated REST APIs and handled asynchronous data with URLSession and Combine",
    "Collaborated with the UI/UX team to implement pixel-perfect user interfaces"
  ],
  technologies: ["Swift", "Xcode", "UIKit", "Firebase", "REST API"]
},
    {
  title: "Unity Game Developer",
  company: "OEngines Games LLP",
  location: "Surat, Gujarat",
  period: "Feb 2023 - May 2023",
  description: "Designed and developed 2D and 3D mobile games using Unity, focusing on performance, monetization, and engaging gameplay mechanics.",
  achievements: [
    "Created 5+ mobile games with over 50K total downloads on Google Play",
    "Integrated rewarded ads and in-app purchases increasing revenue by 30%",
    "Optimized game assets and logic reducing APK size by 25%",
    "Collaborated with artists and designers to implement game features"
  ],
  technologies: ["Unity", "C#", "Android SDK", "AdMob", "Photon Networking"]
},
    {
  title: "iOS Developer",
  company: "Unikwork",
  location: "Surat, Gujarat",
  period: "Jun 2022 - Aug 2022",
  description: "Assisted in the development and testing of iOS apps, gaining hands-on experience with native iOS development and version control tools.",
  achievements: [
    "Contributed to building 2 iOS apps using Swift and SwiftUI",
    "Implemented reusable components and MVVM architecture",
    "Wrote unit tests improving code reliability by 20%",
    "Learned agile development practices and participated in sprint planning"
  ],
  technologies: ["Swift", "SwiftUI", "Git", "Xcode", "Firebase"]
}
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Gujarat Technological University",
      location: "Ahmedabad, Gujarat",
      period: "2019 - 2023",
      focus: "Artificial Intelligence & Machine Learning",
      achievements: ["CGPA: 8.12 / 10.0", "Research in Deep Reinforcement Learning", "Teaching Assistant for ML Course"]
    },
    // {
    //   degree: "High School",
    //   school: "I.P. Savani Science School",
    //   location: "Surat, Gujarat",
    //   period: "2013 - 2017",
    //   focus: "Applied Mathematics & Statistics",
    //   achievements: ["Summa Cum Laude", "Phi Beta Kappa Honor Society", "Outstanding Senior Award"]
    // }
  ];

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Cloud Professional ML Engineer",
    "Deep Learning Specialization (Coursera)",
    "TensorFlow Developer Certificate"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A track record of delivering impactful AI solutions and leading high-performing teams
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 ml-20">
                <div className="absolute -left-14 top-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h4 className="text-2xl font-bold text-gray-900">{exp.title}</h4>
                      <div className="flex items-center text-indigo-600 font-semibold">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      KEY ACHIEVEMENTS
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <div className="text-indigo-600 font-semibold mb-1">{edu.school}</div>
                  <div className="text-gray-600 mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {edu.location} • {edu.period}
                  </div>
                  <div className="text-gray-700 mb-3 font-medium">{edu.focus}</div>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;