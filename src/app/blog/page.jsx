"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import blogPosts from "../../constants/blogPosts.json";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = (index) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? 100 : -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const hoverVariants = {
  hover: {
    scale: 1.02,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const BlogIndex = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Blog Posts
      </motion.h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            variants={cardVariants(index)}
            whileHover="hover"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <motion.div className="p-6" variants={hoverVariants}>
                <motion.h2
                  className="text-xl hover:text-blue-600 dark:hover:text-blue-400 font-semibold mb-2 text-gray-800 dark:text-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {post.title}
                </motion.h2>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  {post.excerpt}
                </motion.p>
                <motion.div
                  className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogIndex;
