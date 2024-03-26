"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-2 pb-10">
      <div className="text-justify p-6 md:w-1/2">
        <motion.h1
          className="text-2xl font-bold text-center mt-2 mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          👋 Hello there! I'm Navneet, a passionate developer with a diverse skill set spanning both front-end web development and system-level programming.
          <br />
          <br />
          💻 In the realm of web development, I thrive on crafting immersive user experiences using cutting-edge technologies. My expertise lies in React.js, Next.js, Vite.js, and Node.js, enabling me to build dynamic and responsive web applications efficiently. I have a keen eye for design and enjoy leveraging tools like Tailwind CSS to create sleek and visually appealing interfaces.
          <br />
          <br />
        🌟 Beyond the web, I delve into the world of C and C++, where I explore the intricacies of data structures and algorithms. Armed with this knowledge, I tackle complex problems head-on, optimizing performance and efficiency in my code.
        <br />
        <br />
        🔍 Continuous learning is at the core of my journey as a developer. I'm always eager to explore new technologies, refine my skills, and collaborate on exciting projects that push the boundaries of what's possible in the digital landscape.
        <br />
        <br />
        💬 Let's connect and embark on a journey of innovation together!
        </motion.p>
      </div>
    </div>
  );
}
