import { blogs } from "@/Data/blogs";
import { motion } from "framer-motion";
import { Link } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogsPage() {
  const cardVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen px-4 sm:px-6 py-16 font-sans">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-gray-50 tracking-tight">
          My <span className="text-blue-500">Blogs</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial="initial"
              animate="animate"
              variants={cardVariants}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full bg-gray-900 border-gray-800 text-gray-100 rounded-3xl overflow-hidden
                               transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                <CardHeader className="p-6 pb-0">
                  <CardTitle className="text-2xl font-semibold text-gray-50">
                    {blog.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 flex-grow">
                  <CardDescription className="text-gray-400 text-base mb-4">
                    {blog.shortDescription}
                  </CardDescription>

                  <div className="flex items-center gap-3 flex-wrap">
                    {blog.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-300 bg-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-700"
                      >
                        <tech.icon className="text-xl text-blue-400 mr-2" />
                        <span className="text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 mt-auto">
                  <Link
                    to={blog.link}
                    className="block text-center w-full px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors font-semibold shadow-lg hover:shadow-blue-500/40"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}