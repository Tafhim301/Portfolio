import { projects } from "@/Data/Projects";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {  GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function ProjectsPage() {
  const cardVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, -5, 5, -5, 0], 
      transition: {
        duration: 8, 
        ease: "easeInOut" as const,
        repeat: Infinity, 
      },
    },
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen px-6 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-50">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="transition-transform duration-300"
              variants={cardVariants}
              initial="initial"
              animate="animate"
            >
              <Card className="bg-gray-800 rounded-3xl pt-0 p-8 flex flex-col shadow-xl border-none h-full">
                <CardHeader className="p-0 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl mb-6 h-56 w-full shadow-inner"
                  />
                  <CardTitle className="text-2xl font-bold text-gray-50">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mt-2">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <div className="flex items-center gap-4 mb-6 flex-wrap">
                    {project.techStack.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center text-gray-300 bg-gray-700 px-3 py-1 rounded-full"
                      >
                        <tech.icon className="text-xl text-blue-400 mr-2" />
                        <span className="text-sm text-gray-300 font-medium">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition font-semibold"
                    >
                    <div className="flex justify-center items-center p-2 gap-1"><GithubIcon></GithubIcon> GitHub</div>
                    </a>
                  )}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-semibold"
                  >
                   <div className="flex justify-center items-center px-4 py-2 gap-1"> Live Demo</div>
                  </a>

                <Button className="py-5"><Link to={`/projects/${project.id}`}>View Details</Link></Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}