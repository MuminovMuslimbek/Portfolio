"use client";
import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import blogPosts from "../../../constants/blogPosts.json";
import { useParams } from "next/navigation";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const BlogPost = () => {
  const router = useParams();
  const { slug } = router;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Loading...</div>;
  }

  const renderContent = (content) => {
    const parts = content.split("```");
    return parts.map((part, index) => {
      if (index % 2 === 0) {
        return part.split("\n\n").map((paragraph, pIndex) => (
          <p key={pIndex} className="mb-4">
            {paragraph}
          </p>
        ));
      } else {
        const [language, ...code] = part.split("\n");
        return (
          <SyntaxHighlighter
            key={index}
            language={language || "javascript"}
            style={vscDarkPlus}
            className="mb-4 rounded-md"
          >
            {code.join("\n")}
          </SyntaxHighlighter>
        );
      }
    });
  };

  return (
    <motion.article
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <motion.h1
        className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100"
        variants={fadeIn}
      >
        {post.title}
      </motion.h1>
      <motion.div
        className="flex justify-between items-center mb-8 text-sm text-gray-500 dark:text-gray-400"
        variants={fadeIn}
      >
        <span>{post.author}</span>
        <span>{post.date}</span>
      </motion.div>
      <motion.div
        className="prose prose-lg dark:prose-invert mx-auto"
        variants={fadeIn}
      >
        {renderContent(post.content)}
      </motion.div>
    </motion.article>
  );
};

export default BlogPost;
