import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Emma Thompson',
      age: 45,
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Tai Chi has completely transformed my approach to stress management. The instructors are incredibly patient and knowledgeable. I feel more balanced and centered than ever before.',
      course: 'Beginner Foundations'
    },
    {
      name: 'Robert Chen',
      age: 62,
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'As a retiree, I was looking for gentle exercise that would help with my balance and flexibility. This program exceeded my expectations. My doctor is amazed at my improvement!',
      course: 'Intermediate Flow'
    },
    {
      name: 'Maria Rodriguez',
      age: 38,
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b606?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The online format made it possible for me to practice Tai Chi despite my busy schedule. The quality of instruction is outstanding, and I love the supportive community.',
      course: 'Advanced Mastery'
    },
    {
      name: 'James Wilson',
      age: 52,
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'I started Tai Chi to help with chronic back pain. Not only has my pain decreased significantly, but I\'ve also found a new passion that brings me daily joy and peace.',
      course: 'Beginner Foundations'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Students
            <span className="block text-emerald-600">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Tai Chi has transformed the lives of our students across the globe. 
            Their stories inspire us to continue sharing this beautiful practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <SafeIcon icon={FiQuote} className="w-8 h-8 text-emerald-400" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age} years old</p>
                    <p className="text-xs text-emerald-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Enrolled in:</div>
                  <div className="text-sm font-medium text-emerald-600">{testimonial.course}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-emerald-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-emerald-100">Completion Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;