"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import {
  Code,
  Cpu,
  Settings,
  FileCode,
  ArrowRight
} from "lucide-react";

const courses = [
  {
    id: "itwd5-130",
    code: "ITWD5.130",
    title: "Website Development",
    description: "Learn modern web development technologies including HTML, CSS, JavaScript, and responsive design principles.",
    icon: Code,
    href: "/courses/itwd5-130",
    color: "from-blue-500 to-cyan-500",
    semester: "Semester Two 2025",
  },
  {
    id: "itcs5-100",
    code: "ITCS5.100",
    title: "Computer Systems Architecture",
    description: "Understanding computer hardware, architecture, operating systems, and system-level programming.",
    icon: Cpu,
    href: "/courses/itcs5-100",
    color: "from-purple-500 to-pink-500",
    semester: "Semester Two 2025",
  },
  {
    id: "itct5-120",
    code: "ITCT5.120",
    title: "IT Concepts and Tools",
    description: "Exploring IT fundamentals, professional conduct, legal and ethical principles in technology.",
    icon: Settings,
    href: "/courses/itct5-120",
    color: "from-green-500 to-emerald-500",
    semester: "Semester Two 2025",
  },
  {
    id: "itpf5-110",
    code: "ITPF5.110",
    title: "Programming Fundamentals",
    description: "Master programming basics with Python, object-oriented programming, and software development practices.",
    icon: FileCode,
    href: "/courses/itpf5-110",
    color: "from-orange-500 to-red-500",
    semester: "Semester Two 2025",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CoursesPage() {
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
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            My Courses
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Explore my <span className="font-semibold text-blue-600 dark:text-blue-400">Bachelor of Computer Science</span> courses and learning journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group"
              >
                <Link href={course.href}>
                  <motion.div
                    whileHover={{ boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    className="glass dark:glass-dark rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/20 dark:border-gray-700/50 h-full flex flex-col relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                    <div className="relative z-10">
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {course.semester}
                        </span>
                      </div>

                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-lg relative group-hover:shadow-2xl transition-all duration-300`}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                        <Icon className="w-10 h-10 text-white relative z-10" />
                      </motion.div>

                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        {course.code}
                      </h3>
                      <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        {course.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                        {course.description}
                      </p>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-blue-600 dark:text-blue-400 font-semibold"
                      >
                        <span>View Course Details</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </main>

      <footer className="glass dark:glass-dark border-t border-white/20 dark:border-gray-700/50 mt-20">
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

