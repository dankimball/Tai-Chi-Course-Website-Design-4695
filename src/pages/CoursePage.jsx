import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiClock, FiUsers, FiStar, FiPlay, FiDownload, FiCheck } = FiIcons;

const CoursePage = () => {
  const { id } = useParams();
  
  const courseData = {
    1: {
      title: 'Beginner Foundations',
      level: 'Beginner',
      duration: '8 weeks',
      students: 156,
      rating: 4.9,
      price: '$89',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Perfect introduction to Tai Chi fundamentals, basic forms, and breathing techniques. This comprehensive course will guide you through the essential movements and philosophy of Tai Chi.',
      instructor: 'Master Li Wei',
      features: [
        'Basic 24-form Yang style',
        'Breathing exercises',
        'Balance training',
        'Meditation basics',
        'Philosophy introduction',
        'Lifetime access to materials'
      ],
      curriculum: [
        { week: 1, title: 'Introduction to Tai Chi', lessons: 4 },
        { week: 2, title: 'Basic Stances and Postures', lessons: 5 },
        { week: 3, title: 'Breathing Techniques', lessons: 4 },
        { week: 4, title: 'First Form Movements', lessons: 6 },
        { week: 5, title: 'Flow and Transitions', lessons: 5 },
        { week: 6, title: 'Balance and Coordination', lessons: 4 },
        { week: 7, title: 'Complete Form Practice', lessons: 3 },
        { week: 8, title: 'Integration and Assessment', lessons: 3 }
      ]
    },
    2: {
      title: 'Intermediate Flow',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 98,
      rating: 4.8,
      price: '$129',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Advance your practice with complex forms, partner exercises, and deeper philosophy. Build upon your foundation with more sophisticated techniques.',
      instructor: 'Sarah Chen',
      features: [
        '48-form Yang style',
        'Partner push hands',
        'Energy cultivation',
        'Philosophy study',
        'Advanced breathing',
        'Personal feedback sessions'
      ],
      curriculum: [
        { week: 1, title: 'Review and Assessment', lessons: 3 },
        { week: 2, title: 'Advanced Stances', lessons: 4 },
        { week: 3, title: '48-Form Introduction', lessons: 5 },
        { week: 4, title: 'Partner Exercises', lessons: 4 },
        { week: 5, title: 'Energy Work (Qi)', lessons: 4 },
        { week: 6, title: 'Push Hands Basics', lessons: 5 },
        { week: 7, title: 'Form Refinement', lessons: 4 },
        { week: 8, title: 'Philosophy Deep Dive', lessons: 3 },
        { week: 9, title: 'Applications', lessons: 4 },
        { week: 10, title: 'Mastery Assessment', lessons: 2 }
      ]
    },
    3: {
      title: 'Advanced Mastery',
      level: 'Advanced',
      duration: '12 weeks',
      students: 67,
      rating: 5.0,
      price: '$189',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Master advanced techniques, weapon forms, and become a confident practitioner. Prepare for teaching certification.',
      instructor: 'David Park',
      features: [
        'Sword & fan forms',
        'Teaching methods',
        'Advanced applications',
        'Certification prep',
        'Business guidance',
        'Ongoing mentorship'
      ],
      curriculum: [
        { week: 1, title: 'Advanced Assessment', lessons: 2 },
        { week: 2, title: 'Weapon Forms - Sword', lessons: 5 },
        { week: 3, title: 'Weapon Forms - Fan', lessons: 4 },
        { week: 4, title: 'Advanced Push Hands', lessons: 4 },
        { week: 5, title: 'Teaching Methodology', lessons: 4 },
        { week: 6, title: 'Class Management', lessons: 3 },
        { week: 7, title: 'Advanced Applications', lessons: 5 },
        { week: 8, title: 'Injury Prevention', lessons: 3 },
        { week: 9, title: 'Business Basics', lessons: 3 },
        { week: 10, title: 'Practice Teaching', lessons: 4 },
        { week: 11, title: 'Certification Prep', lessons: 3 },
        { week: 12, title: 'Final Assessment', lessons: 2 }
      ]
    }
  };

  const course = courseData[id];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <Link to="/" className="text-emerald-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6"
            >
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
              <span>Back to Courses</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Course Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <SafeIcon icon={FiStar} className="w-4 h-4 fill-current" />
                    <span className="text-gray-600 text-sm">{course.rating}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  {course.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center space-x-6 mb-8 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiClock} className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiUsers} className="w-5 h-5" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
                  >
                    <span>Enroll Now - {course.price}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <SafeIcon icon={FiPlay} className="w-5 h-5" />
                    <span>Preview Course</span>
                  </motion.button>
                </div>
              </div>

              {/* Course Image */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((week, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800">Week {week.week}: {week.title}</h3>
                          <p className="text-sm text-gray-600">{week.lessons} lessons</p>
                        </div>
                        <SafeIcon icon={FiPlay} className="w-5 h-5 text-emerald-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">Course Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instructor:</span>
                    <span className="font-medium text-gray-800">{course.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-gray-800">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium text-gray-800">{course.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-800">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">Course Resources</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiDownload} className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-700">Downloadable guides</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiPlay} className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-700">Video lessons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiUsers} className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-700">Community access</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursePage;