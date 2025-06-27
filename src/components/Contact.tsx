// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   // Simulate form submission
//   //   setIsSubmitted(true);
//   //   setTimeout(() => setIsSubmitted(false), 3000);
//   //   setFormData({ name: '', email: '', subject: '', message: '' });
//   // };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //   e.preventDefault();

// //   try {
// //     const result = await emailjs.send(
// //       'service_n32bjyn',     // Replace with your actual Service ID
// //       'template_t3i9qeq',    // Replace with your actual Template ID
// //       formData,
// //       '3Gy9s0pdjl8a9FgiE'      // Replace with your actual Public Key
// //     );

// //     console.log(result.text);
// //     setIsSubmitted(true);
// //     setFormData({ name: '', email: '', subject: '', message: '' });
// //     setTimeout(() => setIsSubmitted(false), 3000);
// //   } catch (error) {
// //     console.error(error);
// //     alert('Failed to send message. Please try again later.');
// //   }
// // };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   console.log('e', e)

//  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//   // Validate environment variables
//   if (!serviceID || !templateID || !publicKey) {
//     console.error("EmailJS environment variables are missing.");
//     alert("Something went wrong. Please try again later.");
//     return;
//   }

//   try {
//     const result = await emailjs.send(
//       serviceID,
//       templateID,
//       formData,
//       publicKey
//     );

//     console.log(result.text);
//     setIsSubmitted(true);
//     setFormData({ name: '', email: '', subject: '', message: '' });
//     setTimeout(() => setIsSubmitted(false), 3000);
//   } catch (error) {
//     console.error(error);
//     alert('Failed to send message. Please try again later.');
//   }
// };




//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Let's Build Something Amazing
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Ready to discuss your next AI project or explore collaboration opportunities? 
//             I'd love to hear from you.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
//             <div className="space-y-6 mb-12">
//               <div className="flex items-center">
//                 <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
//                   <Mail className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <div className="text-gray-300">Email</div>
//                   <div className="text-lg">divyanparmar3@gmail.com</div>
//                 </div>
//               </div>
              
//               <div className="flex items-center">
//                 <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
//                   <Phone className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <div className="text-gray-300">Phone</div>
//                   <div className="text-lg">+91 9978842390</div>
//                 </div>
//               </div>
              
//               <div className="flex items-center">
//                 <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
//                   <MapPin className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <div className="text-gray-300">Location</div>
//                   <div className="text-lg">Bengaluru, India</div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="text-lg font-semibold mb-6">Connect With Me</h4>
//               <div className="flex space-x-4">
//                 <a 
//                   href="https://github.com/DivyanParmar" 
//                   className="group bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300" target='_blank'
//                 >
//                   <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
//                 </a>
//                 <a 
//                   href="https://www.linkedin.com/in/divyanparmar/" 
//                   className="group bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300" target='_blank'
//                 >
//                   <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
//                 </a>
//                 <a 
//                   href="https://x.com/DivyanParmar3" 
//                   className="group bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300" target='_blank'
//                 >
//                   <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
//                 </a>
//               </div>
//             </div>

//             <div className="mt-12 p-6 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl border border-indigo-500/20">
//               <h4 className="text-lg font-semibold mb-3">Available for:</h4>
//               <ul className="space-y-2 text-gray-300">
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
//                   Full-time opportunities
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
//                   Consulting projects
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
//                   Technical mentoring
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
//                   Speaking engagements
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <div className="bg-gray-800 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
//               {isSubmitted && (
//                 <div className="mb-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
//                   <span className="text-green-300">Thank you! Your message has been sent successfully.</span>
//                 </div>
//               )}
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
//                     placeholder="Project discussion, collaboration, etc."
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
//                     placeholder="Tell me about your project or how we can work together..."
//                   />
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="group w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//                 >
//                   Send Message
//                   <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSubmitted(false);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      toast.error("Configuration error. Please check environment variables.");
      setIsLoading(false);
      setIsError(true);
      return;
    }

    try {
      const result = await emailjs.send(serviceID, templateID, formData, publicKey);
      console.log(result.text);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent successfully!');
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again later.');
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next AI project or explore collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Section: Contact Info (you can keep unchanged) */}
          <div>{/* ...your contact info code here... */}</div>

          {/* Right Section: Form */}
          <div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              {/* ✅ Success animation */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg flex items-center animate-fade-in-down">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 animate-ping-once" />
                  <span className="text-green-300">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {/* ❌ Error animation */}
              {isError && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg flex items-center animate-fade-in-down">
                  <XCircle className="h-5 w-5 text-red-500 mr-3 animate-ping-once" />
                  <span className="text-red-300">Oops! Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
