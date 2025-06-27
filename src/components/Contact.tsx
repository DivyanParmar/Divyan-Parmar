import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastId, setToastId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const id = toast.loading('Sending your message...');
    setToastId(id);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      if (response.status === 200) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setToastMessage('Message sent successfully!');
      } else {
        setToastMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setToastMessage('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (toastMessage && toastId) {
      toast.success(toastMessage, { id: toastId });
      setToastMessage('');
    }
  }, [toastMessage, toastId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ...Header and Layout (Same as your previous file)... */}

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
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
              disabled={isSubmitting}
              className={`group w-full ${
                isSubmitting ? 'bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
              } text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform ${
                isSubmitting ? '' : 'hover:scale-105'
              } flex items-center justify-center`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
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
    </section>
  );
};

export default Contact;
