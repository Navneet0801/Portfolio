"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="flex gap-10">
        <div>
              <Button
                  size="sm"
                  variant="outline"
                  className="max-w-fit md:ms-36 px-6 my-5"
                  >
                    Work
                </Button>
              <div className="flex flex-col gap-10">
                <div className="max-w-[32rem] flex justify-center items-center mx-auto">
                  <motion.ol
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative border-s  border-gray-200 dark:border-gray-700"
                  >
                    {Data1.map((data) => (
                      <li className="mb-10 ms-6" key={data.name}>
                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-4 md:-start-6  ring-2">
                          <img src={data.logo} className="rounded-full" alt={data.name} />
                        </span>
                        <h3 className="flex flex-col md:flex-row mb-2 ml-3 text-lg font-semibold">
                          {data.name}
                          <Button
                            size="sm"
                            variant="outline"
                            className="max-w-fit md:ms-3"
                          >
                            {data.timeSpan}
                          </Button>
                        </h3>
                        <time className="block mb-2 ml-3 text-base font-normal leading-none text-blue-400-200 ">
                          {data.role}
                          <ul className="list-disc font-sans text-sm mt-3 ml-5 ">
                            <li className="my-2">{data?.about1}</li>
                            <li className="my-2">{data?.about2}</li>
                          </ul>
                        </time>
                      </li>
                  ))}
                </motion.ol>
              </div>
            </div>
        </div>
        <div>
              <Button
                  size="sm"
                  variant="outline"
                  className="max-w-fit md:ms-32 my-5"
                  >
                    Academics
                </Button>
              <div className="flex flex-col gap-10">
                <div className="max-w-[32rem] flex justify-center items-center mx-auto">
                  <motion.ol
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative border-s  border-gray-200 dark:border-gray-700"
                  >
                    {Data2.map((data) => (
                      <li className="mb-10 ms-6" key={data.name}>
                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-4 md:-start-6  ring-2">
                          <img src={data.logo} className="rounded-full" alt={data.name} />
                        </span>
                        <h3 className="flex flex-col md:flex-row mb-2 ml-3 text-lg font-semibold">
                          {data.name}
                          <Button
                            size="sm"
                            variant="outline"
                            className="max-w-fit md:ms-3"
                          >
                            {data.timeSpan}
                          </Button>
                        </h3>
                        <time className="block mb-2 ml-3 text-base font-normal leading-none text-blue-400-200 ">
                          {data.role}
                          <ul className="list-disc font-sans text-sm mt-3 ml-5 ">
                            <li className="my-2">{data?.about1}</li>
                            <li className="my-2">{data?.about2}</li>
                          </ul>
                        </time>
                      </li>
                  ))}
                </motion.ol>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Experience;

const Data1 = [
  {
    name: "Ria Power Saver",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCNPWXMttPr62alzxZXj7NzXn4XeI5n6EJeZYQdiyBPyorfzl_6L8uXCCX5E-f65rtSE",
    timeSpan: "Nov 2023 - Jan 2024",
    role: "Front-End Developer Intern",
    about1: "Participate in conception, design, development, implementation and deployment of web-based user interface systems.",
    about2: "Handled both frontend and backend development for the modules, ensuring seamless integration and functionality.",
  }
];

const Data2 = [
  {
    name: "Alumni Association",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yoNZTQ3iQnJcWang5eGgJt3ndakhBkYnQMRIqUX8h6lIyJfCU4dwMdOg-qP1qYZ8he8&usqp=CAU",
    timeSpan: "Feb 2023 - current",
    role: "Public Relations Head",
    about1: "Leading pr team overseeing Public Relations, design projects, content creation, and social media management.",
    about2: "Handled event organized by the society, ensuring seamless integration and functionality.",
  },
  {
    name: "Alumni Association",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yoNZTQ3iQnJcWang5eGgJt3ndakhBkYnQMRIqUX8h6lIyJfCU4dwMdOg-qP1qYZ8he8&usqp=CAU",
    timeSpan: "Dec 2022 - Jan 2023",
    role: "Design Team Volunteer",
    about1: "Volunteered in Mates smriti 2023 an annual alumni meet organized by MAITAA",
    about2: "Handled event organized by the society, ensuring seamless integration and functionality.",
  },
];
