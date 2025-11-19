"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import {
  Code,
  Cpu,
  Settings,
  FileCode,
  ArrowRight,
  GraduationCap,
  Mail,
  Linkedin,
  Github
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
  },
  {
    id: "itcs5-100",
    code: "ITCS5.100",
    title: "Computer Systems Architecture",
    description: "Understanding computer hardware, architecture, operating systems, and system-level programming.",
    icon: Cpu,
    href: "/courses/itcs5-100",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "itct5-120",
    code: "ITCT5.120",
    title: "IT Concepts and Tools",
    description: "Exploring IT fundamentals, professional conduct, legal and ethical principles in technology.",
    icon: Settings,
    href: "/courses/itct5-120",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "itpf5-110",
    code: "ITPF5.110",
    title: "Programming Fundamentals",
    description: "Master programming basics with Python, object-oriented programming, and software development practices.",
    icon: FileCode,
    href: "/courses/itpf5-110",
    color: "from-orange-500 to-red-500",
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

export default function Home() {
  return (
    <div className="min-h-screen gradient-mesh relative overflow-hidden">
      {/* Animated background elements */}
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
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="inline-block mb-6 relative"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"
            />
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight"
          >
            Manoj Kumar Panthi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Student ID: <span className="text-blue-600 dark:text-blue-400">2025003593</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-10"
          >
            Bachelor of Computer Science
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center space-x-4"
          >
            {[
              { icon: Mail, href: "mailto:2025003593@student.eit.ac.nz", label: "Email", gradient: "from-red-500 to-pink-500" },
              { icon: Linkedin, href: "#", label: "LinkedIn", gradient: "from-blue-500 to-cyan-500" },
              { icon: Github, href: "#", label: "GitHub", gradient: "from-gray-700 to-gray-900" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring", bounce: 0.5 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-4 rounded-2xl bg-gradient-to-br ${social.gradient} text-white shadow-xl hover:shadow-2xl transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass dark:glass-dark rounded-3xl shadow-2xl p-10 border border-white/20 dark:border-gray-700/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
              >
                Welcome to my professional portfolio! This portfolio showcases my journey through the
                <span className="font-semibold text-blue-600 dark:text-blue-400"> Bachelor of Computer Science</span> program at
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Eastern Institute of Technology (EIT)</span>.
                Here you&apos;ll find detailed information about the courses I&apos;ve completed, the skills I&apos;ve
                acquired, and the projects I&apos;ve worked on throughout my studies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Each course page contains comprehensive information about the course content, learning
                objectives, and my personal reflections on the experience. Explore my journey in
                web development, computer systems, IT concepts, and programming fundamentals.
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          >
            My Courses
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                      <div className="relative z-10">
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
                          <span>Explore Course</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
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

