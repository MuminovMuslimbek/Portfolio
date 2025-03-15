"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function TailwindV4Changes() {
  return (
    <motion.article
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
        variants={fadeIn}
      >
        Tailwind CSS 4.0: Yangi era boshlanmoqda
      </motion.h1>

      <motion.p
        className="text-lg mb-6 text-gray-600 dark:text-gray-300"
        variants={fadeIn}
      >
        Tailwind CSS 4.0 versiyasi e'lon qilindi va u o'zi bilan bir qator muhim
        o'zgarishlarni olib keldi. Keling, 3.7 versiyasidan 4.0 ga o'tishda
        nimalar o'zgarganini ko'rib chiqamiz.
      </motion.p>

      <motion.section variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          1. Yangi ranglar tizimi
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Tailwind CSS 4.0 da rang palitrasini yanada moslashuvchan qilish uchun
          yangi rang tizimi joriy etildi. Endi har bir asosiy rang uchun 50 dan
          950 gacha bo'lgan gradatsiyalar mavjud.
        </p>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <motion.div
              key={shade}
              className={`h-12 rounded-md bg-blue-${shade} flex items-center justify-center text-white`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {shade}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          2. Yangi "text-balance" xususiyati
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          4.0 versiyasida "text-balance" va "text-wrap" klasslari qo'shildi. Bu
          matnni yanada chiroyli va o'qilishi oson qilish imkonini beradi.
        </p>
        <div className="flex space-x-4 mb-6">
          <motion.div
            className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-semibold mb-2">text-balance</h3>
            <p className="text-balance">
              Bu yangi xususiyat matnni muvozanatli taqsimlash orqali
              o'qilishini yaxshilaydi.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-semibold mb-2">text-wrap</h3>
            <p className="text-wrap">
              Bu xususiyat esa matnni qanday o'ralishini boshqarish imkonini
              beradi.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          3. Yangilangan Grid tizimi
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Tailwind CSS 4.0 da grid tizimi yangilandi va endi u yanada
          moslashuvchan. "grid-cols-16" va undan yuqori qiymatlar qo'shildi.
        </p>
        <motion.div
          className="grid grid-cols-16 gap-2 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="h-8 bg-indigo-500 rounded-md"></div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          4. Yangi animatsiya imkoniyatlari
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          4.0 versiyasida animatsiyalar uchun yangi klasslar qo'shildi, jumladan
          "animate-bounce-horizontal".
        </p>
        <motion.div
          className="flex justify-center items-center h-24 bg-purple-100 dark:bg-purple-900 rounded-lg mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="animate-bounce-horizontal bg-purple-500 h-12 w-12 rounded-full"></div>
        </motion.div>
      </motion.section>

      <motion.section variants={fadeIn}>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Xulosa
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Tailwind CSS 4.0 versiyasi ko'plab yangi imkoniyatlar va
          yaxshilanishlarni o'z ichiga oladi. Bu yangilanishlar orqali
          dizaynerlar va ishlab chiquvchilar yanada samarali va kreativ ishlash
          imkoniyatiga ega bo'ldilar.
        </p>
      </motion.section>

      <motion.div
        className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg"
        variants={fadeIn}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
          Eslatma
        </h3>
        <p className="text-blue-600 dark:text-blue-300">
          Tailwind CSS 4.0 hali rasmiy ravishda chiqarilmagan. Bu maqolada
          keltirilgan ma'lumotlar taxminiy va o'zgarishi mumkin. Rasmiy
          yangilanishlar uchun Tailwind CSS veb-saytini kuzatib boring.
        </p>
      </motion.div>
    </motion.article>
  );
}

export default TailwindV4Changes;
