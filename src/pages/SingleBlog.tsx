import { useParams } from "react-router";
import { blogs } from "@/Data/blogs";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { JSX } from "react";

interface TechStack {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Blog {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  date: string;
  techStack: TechStack[];
  link: string;
}

export default function SingleBlog(): JSX.Element {
  const { id } = useParams<{ id: string }>();


  const blog = blogs.find((b: Blog) => b.id === id);


  if (!blog) {
    return (
      <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-4">
            404
          </h1>
          <p className="text-xl text-gray-400">Blog post not found.</p>
        </div>
      </div>
    );
  }

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen px-4 sm:px-6 py-16 font-sans">
      <motion.div
        className="container mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="bg-gray-900 border-gray-800 text-gray-100 rounded-3xl overflow-hidden shadow-xl">
          <CardHeader className="p-6 pb-0">
            <motion.div variants={itemVariants}>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-2 text-gray-50 leading-tight">
                {blog.title}
              </CardTitle>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 text-gray-400 text-sm flex-wrap"
              variants={itemVariants}
            >
              <span className="flex items-center">
                Published: {new Date(blog.date).toLocaleDateString()}
              </span>
              <div className="h-4 w-px bg-gray-600 mx-2"></div>
              <div className="flex items-center gap-2">
                {blog.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-gray-300 bg-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-700"
                  >
                    <tech.icon className="text-base text-blue-400 mr-1" />
                    <span className="text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </CardHeader>
          <CardContent className="p-6">
            <motion.p
              className="text-gray-300 leading-relaxed text-lg"
              variants={itemVariants}
            >
              {blog.description}
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}