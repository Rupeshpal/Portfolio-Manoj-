"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import {
  FileCode,
  CheckCircle,
  Code2,
  Layers,
  TestTube,
  Puzzle
} from "lucide-react";

const topics = [
  {
    week: "Introduction",
    title: "Python as Procedural Programming",
    description: "Introduction to Python, programming paradigms, and procedural programming concepts.",
  },
  {
    week: "Week 2",
    title: "Variables & Operators",
    description: "Understanding variables, data types, and operators in Python.",
  },
  {
    week: "Week 3",
    title: "Looping, Functions, Comments",
    description: "Control structures, functions, and code documentation practices.",
  },
  {
    week: "Week 4",
    title: "Arrays & Friends with More Loops",
    description: "Working with lists, arrays, and advanced looping techniques.",
  },
  {
    week: "Week 5",
    title: "Parameters, Arguments, Returns",
    description: "Function parameters, arguments, and return values.",
  },
  {
    week: "Week 6",
    title: "Local versus Global, Test Data",
    description: "Variable scope, local and global variables, and testing strategies.",
  },
  {
    week: "Week 7",
    title: "Exceptions, Program Structure and Command Line",
    description: "Error handling, exception management, and program organization.",
  },
  {
    week: "Week 8",
    title: "Libraries and GUIs",
    description: "Using Python libraries and creating graphical user interfaces.",
  },
  {
    week: "Week 9-12",
    title: "Object-Oriented Programming",
    description: "Classes, objects, inheritance, polymorphism, and OOP principles.",
  },
];

const learningOutcomes = [
  "Write procedural programs using Python",
  "Understand and apply fundamental programming concepts",
  "Implement object-oriented programming principles",
  "Use libraries and create graphical interfaces",
  "Handle exceptions and errors effectively",
  "Apply testing strategies and best practices",
];

export default function ITPF5110Page() {
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
          className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/20 rounded-full blur-3xl"
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
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-6 shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
              <FileCode className="w-10 h-10 text-white relative z-10" />
            </motion.div>
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-2">
                ITPF5.110
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Programming Fundamentals - <span className="font-semibold text-orange-600 dark:text-orange-400">Semester Two 2025</span>
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">Course Overview</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Programming Fundamentals introduces students to the core concepts of computer programming
                  using <span className="font-semibold text-orange-600 dark:text-orange-400">Python</span>. This course covers both procedural and object-oriented programming paradigms,
                  providing a solid foundation for software development.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Students learn to write clean, well-structured code, handle errors, use libraries, and
                  create graphical user interfaces. The course emphasizes problem-solving, best practices,
                  and the transition from procedural to object-oriented programming.
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
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">Topics Covered</h2>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="border-l-4 border-orange-500 pl-6 py-4 rounded-r-xl hover:bg-orange-50/50 dark:hover:bg-orange-900/20 transition-colors duration-300 group"
                  >
                    <div className="flex items-center mb-2">
                      <span className="font-bold text-orange-600 dark:text-orange-400 mr-4 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full text-sm">
                        {topic.week}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 ml-14">
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">Key Skills</h3>
              <div className="space-y-4">
                {[
                  { icon: Code2, text: "Python Programming", color: "text-orange-500" },
                  { icon: Layers, text: "OOP Principles", color: "text-blue-500" },
                  { icon: Puzzle, text: "Problem Solving", color: "text-green-500" },
                  { icon: TestTube, text: "Testing & Debugging", color: "text-purple-500" },
                ].map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-orange-50/50 dark:hover:bg-orange-900/20 transition-colors"
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

