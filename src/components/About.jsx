import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiSun, FiTrendingUp } = FiIcons;

const About = () => {
  const principles = [
    {
      icon: FiHeart,
      title: 'Mind-Body Connection',
      description: 'Harmonize your mental and physical well-being through mindful movement and breathing techniques.'
    },
    {
      icon: FiSun,
      title: 'Inner Peace',
      description: 'Cultivate tranquility and reduce stress through the meditative aspects of Tai Chi practice.'
    },
    {
      icon: FiTrendingUp,
      title: 'Gradual Progress',
      description: 'Build strength, flexibility, and balance progressively with our structured learning approach.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Ancient Art of
              <span className="block text-emerald-600">Tai Chi</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tai Chi is a centuries-old Chinese martial art that combines gentle flowing movements, 
              deep breathing, and meditation. Our courses are designed to help you master this 
              beautiful practice, regardless of your age or fitness level.
            </p>

            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={principle.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Tai Chi practice in serene setting"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-emerald-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">2000+</div>
                <div className="text-gray-600 text-sm">Years of Tradition</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;