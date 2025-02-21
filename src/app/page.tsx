"use client";
import { motion } from "framer-motion";
import { JSX, useState } from "react";
import Node from "./components/Node";
import Next from "./components/Next";
import Express from "./components/Express";
import Postgres from "./components/Postgres";
import Python from "./components/Python";
import React from "./components/React";
import Sequelize from "./components/Sequelize";
import Tailwind from "./components/Tailwind";
import Image from "next/image";

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillComponents: Record<string, JSX.Element> = {
    "Express.js": <Express />,
    "Node.js": <Node />,
    "React.js": <React />,
    "Next.js": <Next />,
    "TailwindCSS": <Tailwind />,
    "PostgreSQL": <Postgres />,
    "Sequelize": <Sequelize />,
    "Python": <Python />,
  }

  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6"
    >

      <motion.div
        className="fixed top-80 left-96 bg-blue-500 opacity-10 z-auto m-0 p-0 rounded-xl"
        initial={{ width: 1000, height: 500, opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, x: [50, -50], y: [50, -50], rotate: [45, -45] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-72 left-96 bg-blue-500 opacity-10 z-auto m-0 p-0 rounded-xl"
        initial={{ width: 1000, height: 500, opacity: 0, x: -400, y: -400, scale: 0.8 }}
        animate={{ opacity: 0.1, x: [-50, 50], y: [-50, 50], rotate: [-45, 45] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <div className="flex flex-col md:flex-row items-center md:space-x-16 z-10 select-none">
        <div className="flex flex-col items-center md:text-left font-serif text-6xl font-bold leading-tight transition-all transform hover:scale-110">
          <motion.h1
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Parker
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Townsend
          </motion.h1>
        </div>
        <div className="transition-all transform hover:scale-110">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image src="/pfp.jpg" alt="" width={250} height={0}
              className="rounded-xl shadow-xl mt-6 md:mt-0"
            />
          </motion.div>
        </div>
      </div>

      <motion.hr className="w-2/3 border-gray-700 mt-12 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />

      <div className="max-w-2xl text-center space-y-4 z-10">
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Hey there! My name is Parker Townsend. I am a passionate software developer from Lubbock, Texas.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          I specialize in building scalable and user-friendly web applications, like the one you are looking at right now! With a background in both frontend and backend technologies, I&apos;m always working on improving my skills and learning new ones to create better solutions.
        </motion.p>
      </div>

      <motion.div
        className="mt-10 bg-gray-800 p-8 rounded-xl shadow-xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          {[
            { name: "Express.js", src: "express.svg" },
            { name: "Node.js", src: "nodedotjs.svg" },
            { name: "React.js", src: "react.svg" },
            { name: "Next.js", src: "nextdotjs.svg" },
            { name: "TailwindCSS", src: "tailwindcss.svg" },
            { name: "PostgreSQL", src: "postgresql.svg" },
            { name: "Sequelize", src: "sequelize.svg" },
            { name: "Python", src: "python.svg" },
          ].map((skill) => (
            <li
              key={skill.name}
              className="flex items-center gap-3 bg-gray-700 px-5 py-3 rounded-lg transition-all transform hover:scale-110 hover:bg-gray-600 shadow-lg cursor-default"
              onClick={() => setSelectedSkill(skill.name)}
            >
              <Image src={skill.src} alt={skill.name} width={30} height={0} />
              {skill.name}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="mt-6 w-full max-w-2xl">
        {selectedSkill && skillComponents[selectedSkill]}
      </div>
    </main>
  );
}
