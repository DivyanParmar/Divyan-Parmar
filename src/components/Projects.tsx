import React from 'react';
import { ExternalLink, Github, Eye, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "DivyanGPT - ChatGPT Clone",
      description: "DivyanGPT is a custom ChatGPT clone enabling real-time AI conversations with dynamic prompt handling. It features a sleek UI and scalable architecture for building intelligent virtual assistants.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["LLM", "React.js", "Node.js", "Gemini API", "Socket.io", "Tailwind CSS"],
      metrics: ["1000+ Messages Processed", "Real-time Chat", "Custom Theming"],
      github: "https://github.com/DivyanParmar/DivyanGPT",
      demo: "https://divyangpt.vercel.app",
      featured: true
    },
    {
      title: "NLP-Powered Customer Analytics Platform",
      description: "Built an end-to-end sentiment analysis and topic modeling system processing 100K+ customer reviews daily. Integrated with business intelligence dashboards for actionable insights.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["NLP", "Transformers", "AWS", "Elasticsearch"],
      metrics: ["100K+ Reviews/Day", "92% Sentiment Accuracy", "Real-time Processing"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Image Classification with CNN",
      description: "Developed a convolutional neural network for multi-class image classification using TensorFlow and Keras. Achieved high accuracy on benchmark datasets through data augmentation and transfer learning.",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Computer Vision", "CNN", "TensorFlow", "Keras", "Transfer Learning"],
      metrics: ["92% Test Accuracy", "Fast Inference <50ms", "Supports 10+ Classes"],
      github: "https://github.com/DivyanParmar/Image-Classification-with-CNN",
      demo: "#",
      featured: false
    },
    {
      title: "Generative AI Content Creation Tool",
      description: "Developed a multi-modal AI system combining text, image, and audio generation capabilities. Built intuitive interface for content creators with customizable parameters.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Generative AI", "React", "FastAPI", "Stable Diffusion"],
      metrics: ["Multi-modal Output", "Real-time Generation", "User-friendly UI"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Customer Churn Prediction",
      description: "Built a predictive model to identify customers likely to churn using logistic regression and XGBoost. Enhanced business retention strategy by targeting high-risk segments based on model insights.",
      image: "https://images.pexels.com/photos/7691669/pexels-photo-7691669.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Classification", "XGBoost", "Logistic Regression", "EDA", "Feature Engineering"],
      metrics: ["87% ROC-AUC", "20% Churn Reduction", "Data from 100K+ Customers"],
      github: "https://github.com/DivyanParmar/Customer-Churn-Prediction",
      demo: "#",
      featured: false
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Performed sentiment classification on Twitter data using NLP techniques and fine-tuned BERT. Analyzed public opinion on trending topics, achieving high accuracy across sentiment classes.",
      image: "https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["NLP", "BERT", "Transformers", "Text Classification", "Sentiment Analysis"],
      metrics: ["90% F1-Score", "Real-time Tweet Processing", "Multi-Class Sentiment Detection"],
      github: "https://github.com/DivyanParmar/Twitter-Sentiment-Analysis",
      demo: "#",
      featured: false
    },

    {
  title: "SmartDoc AI – Document Intelligence System",
  description: "Built an AI-powered document intelligence platform that extracts insights, answers user queries, and summarizes PDFs using LLMs and LangChain. Integrated Google Gemini API for contextual understanding and deployed on Streamlit Cloud, reducing document review time by 60%.",
  image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["LLMs", "LangChain", "Google Gemini API", "RAG", "PDF Processing", "Streamlit"],
  metrics: ["60% Reduction in Review Time", "Context-Aware Q&A", "Multi-Document Summarization"],
  github: "https://github.com/DivyanParmar/SmartDoc-AI",
  demo: "#",
  featured: false
    },

    {
  title: "VisionTrack – Player Detection & Re-Identification",
  description: "Developed a real-time sports analytics system for detecting and re-identifying players from video streams. Used YOLOv11 for detection and ReID embeddings to track players across frames, achieving 88% mAP with optimized GPU inference at 30 FPS.",
  image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["Computer Vision", "YOLOv11", "Re-Identification", "Deep Learning", "Sports Analytics", "OpenCV"],
  metrics: ["88% mAP Accuracy", "30 FPS Real-Time Processing", "Robust Multi-Player Tracking"],
  github: "https://github.com/DivyanParmar/VisionTrack",
  demo: "#",
  featured: false
    },

    {
  title: "ChurnSense – Customer Retention Prediction",
  description: "Built a machine learning system to predict customer churn using XGBoost and Logistic Regression. Achieved 89% ROC-AUC and delivered actionable insights through an interactive Streamlit dashboard for real-time churn monitoring.",
  image: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=800",
  tags: ["Machine Learning", "XGBoost", "Logistic Regression", "Customer Analytics", "Streamlit"],
  metrics: ["89% ROC-AUC", "High-Risk Customer Identification", "Real-Time Dashboard"],
  github: "https://github.com/DivyanParmar/ChurnSense",
  demo: "#",
  featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of AI/ML solutions that drive real business impact and push technological boundaries
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="rounded-2xl shadow-2xl object-cover w-full h-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 rounded-full">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">KEY METRICS</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="group bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center"
                  >
                    <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center"
                  >
                    <Eye className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a href={project.github} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={project.demo} className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;