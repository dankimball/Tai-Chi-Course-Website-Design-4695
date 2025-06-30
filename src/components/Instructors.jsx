import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiGlobe, FiHeart } = FiIcons;

const Instructors = () => {
  const instructors = [
    {
      name: 'Master Li Wei',
      title: 'Founder & Senior Instructor',
      experience: '25+ years',
      specialties: ['Yang Style', 'Chen Style', 'Meditation'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Trained in China under traditional masters, Li Wei brings authentic Tai Chi wisdom to the modern world.',
      certifications: ['International Tai Chi Master', 'Qigong Instructor', 'Meditation Guide']
    },
    {
      name: 'Sarah Chen',
      title: 'Advanced Instructor',
      experience: '15+ years',
      specialties: ['Beginner Programs', 'Therapeutic Tai Chi', 'Senior Classes'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b606?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Specializes in making Tai Chi accessible to all ages and fitness levels with her gentle approach.',
      certifications: ['Certified Tai Chi Instructor', 'Physical Therapy Background', 'Senior Fitness Specialist']
    },
    {
      name: 'David Park',
      title: 'Contemporary Instructor',
      experience: '12+ years',
      specialties: ['Modern Applications', 'Stress Management', 'Corporate Programs'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Bridges traditional Tai Chi with modern wellness practices for busy professionals.',
      certifications: ['Tai Chi Instructor', 'Wellness Coach', 'Corporate Trainer']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Your
            <span className="block text-emerald-600">Expert Instructors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from certified masters and experienced instructors who are passionate 
            about sharing the transformative power of Tai Chi with students worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Instructor Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Instructor Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{instructor.name}</h3>
                  <p className="text-emerald-600 font-medium">{instructor.title}</p>
                  <p className="text-gray-500 text-sm">{instructor.experience} experience</p>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{instructor.bio}</p>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <SafeIcon icon={FiAward} className="w-4 h-4 mr-1" />
                    Certifications:
                  </h4>
                  <ul className="space-y-1">
                    {instructor.certifications.map((cert, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructor Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiAward} className="w-12 h-12 text-emerald-600 mb-3" />
              <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiGlobe} className="w-12 h-12 text-emerald-600 mb-3" />
              <div className="text-3xl font-bold text-gray-800 mb-1">1000+</div>
              <div className="text-gray-600">Students Taught</div>
            </div>
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiHeart} className="w-12 h-12 text-emerald-600 mb-3" />
              <div className="text-3xl font-bold text-gray-800 mb-1">98%</div>
              <div className="text-gray-600">Student Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;