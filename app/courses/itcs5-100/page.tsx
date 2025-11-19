"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import {
  Cpu,
  CheckCircle,
  HardDrive,
  Shield,
  Network,
  Monitor
} from "lucide-react";

const topics = [
  {
    title: "Computing Hardware",
    description: "Desktop and mobile computer architecture, processor, chipset, memory, storage, and graphics components.",
  },
  {
    title: "Health & Safety",
    description: "Safety protocols and procedures when working with computer hardware and IT equipment.",
  },
  {
    title: "Documentation",
    description: "Technical documentation practices for hardware and system configurations.",
  },
  {
    title: "Problem Solving",
    description: "Systematic approaches to diagnosing and resolving hardware and software issues.",
  },
  {
    title: "Diagnostic Tools",
    description: "Using various tools and utilities to troubleshoot computer systems and hardware.",
  },
  {
    title: "Operating Systems",
    description: "Understanding OS architecture, processes, memory management, and system services.",
  },
  {
    title: "Security Concepts",
    description: "System security, vulnerabilities, authentication, and protection mechanisms.",
  },
  {
    title: "Networking",
    description: "Network architecture, protocols, and network troubleshooting fundamentals.",
  },
];

const learningOutcomes = [
  "Understand computer hardware architecture and components",
  "Identify and troubleshoot common hardware issues",
  "Comprehend operating system fundamentals and architecture",
  "Apply diagnostic tools and techniques effectively",
  "Understand security concepts and system protection",
  "Demonstrate knowledge of networking fundamentals",
];

export default function ITCS5100Page() {
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
          className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
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
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-6 shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
              <Cpu className="w-10 h-10 text-white relative z-10" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-2">
                ITCS5.100
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Computer Systems Architecture - <span className="font-semibold text-purple-600 dark:text-purple-400">Semester Two 2025</span>
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Course Overview</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Computer Systems Architecture provides a comprehensive understanding of computer hardware,
                  system architecture, operating systems, and low-level computing concepts. This course
                  explores the fundamental components that make up modern computer systems and how they
                  interact with each other.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Students learn about <span className="font-semibold text-purple-600 dark:text-purple-400">desktop and mobile architectures</span>, diagnostic procedures, operating
                  system internals, security principles, and networking fundamentals. The course emphasizes
                  hands-on experience with hardware and system-level troubleshooting.
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
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Topics Covered</h2>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="border-l-4 border-purple-500 pl-6 py-4 rounded-r-xl hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-colors duration-300 group"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Key Skills</h3>
              <div className="space-y-4">
                {[
                  { icon: Cpu, text: "Hardware Architecture", color: "text-purple-500" },
                  { icon: Monitor, text: "Operating Systems", color: "text-blue-500" },
                  { icon: HardDrive, text: "System Diagnostics", color: "text-green-500" },
                  { icon: Shield, text: "System Security", color: "text-red-500" },
                  { icon: Network, text: "Networking", color: "text-cyan-500" },
                ].map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-colors"
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

