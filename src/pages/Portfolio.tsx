import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Web', 'Mobile', 'UI/UX'];

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A full-featured e-commerce platform with advanced features.',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mobile app for tracking workouts and nutrition.',
    technologies: ['React Native', 'Firebase']
  },
  {
    title: 'Banking Dashboard',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern banking dashboard with intuitive interface.',
    technologies: ['Figma', 'Adobe XD']
  },
  {
    title: 'Social Media Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Social platform for connecting professionals.',
    technologies: ['Vue.js', 'Laravel', 'MySQL']
  },
  {
    title: 'Food Delivery App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Food delivery app with real-time tracking.',
    technologies: ['Flutter', 'Firebase']
  },
  {
    title: 'Travel Website',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Travel booking website with modern design.',
    technologies: ['Sketch', 'InVision']
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and success stories that showcase our expertise and creativity.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12 space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}