import React from 'react';
import { Code, Database, Brain, Cloud, BarChart, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Machine Learning",
      skills: [
        { name: "Deep Learning", level: 95 },
        { name: "Computer Vision", level: 90 },
        { name: "Natural Language Processing", level: 85 },
        { name: "Reinforcement Learning", level: 80 }
      ]
    },
    {
      icon: Code,
      title: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow/PyTorch", level: 90 },
        { name: "Keras", level: 85 },
        { name: "OpenCV", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: [
        { name: "SQL/NoSQL", level: 90 },
        { name: "Apache Spark", level: 85 },
        { name: "Kafka", level: 80 },
        { name: "ETL Pipelines", level: 85 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & MLOps",
      skills: [
        { name: "AWS/GCP", level: 85 },
        { name: "Docker/Kubernetes", level: 80 },
        { name: "MLflow", level: 85 },
        { name: "CI/CD", level: 80 }
      ]
    }
  ];

  const tools = [
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV",
    "Hugging Face", "MLflow", "Weights & Biases", "Jupyter", "Git", "Docker"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building and deploying intelligent systems at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-indigo-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="bg-white px-6 py-3 rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;