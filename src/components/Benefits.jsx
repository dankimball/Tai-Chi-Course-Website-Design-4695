import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiShield, FiZap, FiSmile, FiTarget, FiBrain } = FiIcons;

const Benefits = () => {
  const benefits = [
    {
      icon: FiActivity,
      title: 'Improved Balance',
      description: 'Enhance stability and coordination through gentle, controlled movements',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: FiShield,
      title: 'Stress Relief',
      description: 'Reduce anxiety and promote relaxation through mindful practice',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: FiZap,
      title: 'Increased Energy',
      description: 'Boost vitality and stamina with regular Tai Chi practice',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FiSmile,
      title: 'Better Sleep',
      description: 'Improve sleep quality through relaxation and stress reduction',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: FiTarget,
      title: 'Enhanced Focus',
      description: 'Sharpen concentration and mental clarity through meditation',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: FiBrain,
      title: 'Cognitive Health',
      description: 'Support brain health and memory through mindful movement',
      color: 'from-pink-400 to-rose-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Transform Your
            <span className="block text-emerald-600">Well-being</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the incredible benefits that Tai Chi brings to your physical, 
            mental, and emotional health through our comprehensive training programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                <SafeIcon icon={benefit.icon} className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience These Benefits?</h3>
            <p className="text-emerald-100 mb-6">Join thousands who have transformed their lives through Tai Chi</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;