"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "animate.css";
import Cursor from "@/components/Cursor";

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Farbesh",
      description:
        "Farg‘onadan Beshariqqa yoki Beshariqdan Farg‘onaga oson yetib olish mumkin bo'lgan yagona platforma.",
      url: "https://farbesh-tau.vercel.app/",
      delay: 0.2,
    },
    
    {
      title: "Invoice App",
      description: "App for control invoices",
      url: "https://final-exam-wheat.vercel.app/",
      delay: 0.4,
    },
    {
      title: "Farbesh_Admin",
      description:
        "Farbesh loyihasining admin panel qismi uchun ochilgan repo.",
      url: "https://farbesh-admin.vercel.app",
      delay: 0.4,
    },
    {
      title: "Fastmultik",
      description: "O'zbek tilidagi barcha multfilmlarni eng tez topish mumkin bo'lgan yagona platforma.",
      url: "https://fastmultik.netlify.app",
      delay: 0.2,
    },
    {
      title: "Rock Paper Scissor",
      description: "Rock Paper Scissor game for pratice Js DOM",
      url: "https://rock-paper-scissors-beta-rust.vercel.app/",
      delay: 0.2,
    },
    {
      title: "BarakaShop Telegram Web App Bot",
      description:
        "BarakaShop – bu onlayn do‘kon bo‘lib, istalgan narsani topish mumkin bo‘lgan yagona platforma!",
      url: "https://secret-project-kohl.vercel.app/",
      delay: 0.4,
    },
  ];

  return (
    <section className="min-h-screen  from-slate-50 to-slate-100 py-10">
      <Cursor />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 animate__animated animate__fadeInDown">
          Loyihalarim
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: project.delay }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                project.widht ? "col-span-2" : ""
              }`}
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
              <div className="relative h-[600px] w-full border-t">
                <iframe
                  src={project.url}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  title={project.title}
                />
              </div>
              <div className="p-4 bg-gray-50 flex items-center gap-5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Loyihani ko'rish →
                </a>
                {project.oldUrl && (
                  <a
                    href={project.oldUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    Eski holatini ko'rish →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
