import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'We prioritize the security and reliability of your digital solutions.'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising on quality.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals with years of industry experience.'
  },
  {
    icon: Trophy,
    title: 'Quality First',
    description: 'Committed to delivering exceptional quality in every project.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver outstanding results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <feature.icon className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}