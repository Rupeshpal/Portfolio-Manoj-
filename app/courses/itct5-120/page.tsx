"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import {
  Settings,
  CheckCircle,
  Building2,
  Scale,
  Users,
  Wifi
} from "lucide-react";

const topics = [
  {
    title: "IT in Organisations",
    description: "Understanding the role of IT in modern organizations and business contexts.",
  },
  {
    title: "Professional Conduct and Social Responsibility",
    description: "Professional ethics, codes of conduct, and social responsibility in IT professions.",
  },
  {
    title: "Legal and Ethical Principles",
    description: "Legal frameworks, intellectual property, privacy laws, and ethical considerations in IT.",
  },
  {
    title: "Data Communication",
    description: "Data transmission, communication protocols, and network fundamentals.",
  },
  {
    title: "Communication",
    description: "Effective communication skills, technical writing, and professional communication in IT.",
  },
];

const learningOutcomes = [
  "Understand the role of IT in organizational contexts",
  "Demonstrate professional conduct and ethical behavior",
  "Comprehend legal and ethical principles in technology",
  "Understand data communication fundamentals",
  "Apply effective communication skills in IT contexts",
  "Recognize social responsibilities of IT professionals",
];

export default function ITCT5120Page() {
  return (
    <div className="min-h-screen gradient-mesh relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
        />
      </div>

      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-6 shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
              <Settings className="w-10 h-10 text-white relative z-10" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2">
                ITCT5.120
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                IT Concepts and Tools - <span className="font-semibold text-green-600 dark:text-green-400">Semester Two 2025</span>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass dark:glass-dark rounded-3xl shadow-2xl p-10 border border-white/20 dark:border-gray-700/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">Course Overview</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  IT Concepts and Tools provides a foundational understanding of information technology
                  principles, professional practices, and essential tools used in the IT industry. This
                  course explores the broader context of IT, including its role in organizations, ethical
                  considerations, and professional responsibilities.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Students learn about <span className="font-semibold text-green-600 dark:text-green-400">professional conduct</span>, legal and ethical frameworks, communication
                  fundamentals, and how IT functions within organizational structures. The course emphasizes
                  the importance of professionalism and social responsibility in technology careers.
                </p>
              </div>
            </motion.section>

            {/* Topics Covered */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass dark:glass-dark rounded-3xl shadow-2xl p-10 border border-white/20 dark:border-gray-700/50"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">Topics Covered</h2>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="border-l-4 border-green-500 pl-6 py-4 rounded-r-xl hover:bg-green-50/50 dark:hover:bg-green-900/20 transition-colors duration-300 group"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {topic.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass dark:glass-dark rounded-3xl shadow-2xl p-6 border border-white/20 dark:border-gray-700/50 mb-6"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">Key Skills</h3>
              <div className="space-y-4">
                {[
                  { icon: Building2, text: "Organizational IT", color: "text-blue-500" },
                  { icon: Users, text: "Professional Conduct", color: "text-green-500" },
                  { icon: Scale, text: "Legal & Ethics", color: "text-purple-500" },
                  { icon: Wifi, text: "Data Communication", color: "text-cyan-500" },
                ].map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50/50 dark:hover:bg-green-900/20 transition-colors"
                    >
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Learning Outcomes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass dark:glass-dark rounded-3xl shadow-2xl p-6 border border-white/20 dark:border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">Learning Outcomes</h3>
              <ul className="space-y-3">
                {learningOutcomes.map((outcome, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-green-50/50 dark:hover:bg-green-900/20 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {outcome}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </main>

      <footer className="glass dark:glass-dark border-t border-white/20 dark:border-gray-700/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-600 dark:text-gray-400"
          >
            © 2025 <span className="font-semibold text-blue-600 dark:text-blue-400">Manoj Kumar Panthi</span> | Student ID: <span className="font-semibold">2025003593</span> | <span className="font-semibold text-purple-600 dark:text-purple-400">Eastern Institute of Technology</span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

