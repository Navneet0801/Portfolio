"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="flex flex-col my-20 ">
      <div className="max-w-[32rem] flex justify-center items-center mx-auto">
        <motion.ol
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative border-s  border-gray-200 dark:border-gray-700"
        >
          {Data.map((data) => (
            <li key={data.name} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-5 md:-start-6  ring-2">
                <img src={data.logo} className="rounded-full" alt={data.name} />
              </span>
              <h3 className="flex flex-col md:flex-row mb-4 ml-3 text-base font-semibold">
                {data.name}
                <Button
                  size="sm"
                  variant="outline"
                  className=" max-w-fit md:ms-3"
                >
                  {data.timeSpan}
                </Button>
              </h3>
              <time className="block ml-3 mb-2 text-base font-normal leading-none text-blue-400-200 ">
                {data.course}
              </time>
            </li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
};

export default Education;

const Data = [
  {
    name: "Maharaja Agrasen Institute of Technology",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkyaJS_qCwh1AsMemgwdVYAXCyFKSsBK-9CjMZneN_P-q7fBZvQDDJQGUbD-Gd8ndiNE&usqp=CAU",
    timeSpan: "2020 - current",
    course: "Bachelor of Technology -- Aggregate CGPA: 8.9",
  },
  {
    name: "Rajkiya Pratibha Vikas Vidyalaya",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/RPVV_SB_Logo.jpg?20150314103130",
    timeSpan: "2018 - 2019",
    course: "Science Stream With Computer Science -- Percentage: 92%",
  },
  {
    name: "Govt. Co. Ed. Sr. Sec. School",
    logo: "https://www.schooldekho.org/storage/logo//103ztw5xb2zkk0ggcg8oss4so4sog4c.jpg",
    timeSpan: "2016 - 2017",
    course: " Aggregate CGPA: 9.2",
  },
];
